import { isConstructor, isFunction, isNil } from "./Utils";
import { map, filter } from "lodash";
import { isUndefined } from "util";

export class MetadataScanner {
  scanFromPrototype<R>(prototype: any, callback: (name: string) => R): R[] {
    const mapResult = map(
      [...this.getAllFilteredMethodNames(prototype)],
      callback
    );
    const filterResult = filter(mapResult, metadata => !isNil(metadata));
    return filterResult;
  }

  *getAllFilteredMethodNames(prototype: any): IterableIterator<string> {
    do {
      yield* filter(Object.getOwnPropertyNames(prototype), prop => {
        const descriptor = Object.getOwnPropertyDescriptor(prototype, prop);
        if (!isUndefined(descriptor) && (descriptor.set || descriptor.get)) {
          return false;
        }
        return !isConstructor(prop) && isFunction(prototype[prop]);
      });
    } while (
      // tslint:disable-next-line:no-conditional-assignment
      (prototype = Reflect.getPrototypeOf(prototype)) &&
      prototype !== Object.prototype
    );
  }
}
