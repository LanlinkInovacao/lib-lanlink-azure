import 'reflect-metadata';

import {METADATAKEY_TRIGGER, METADATAKEY_TRIGGER_NAME} from './Constants';

export function setTriggerMetadata(target: {}, triggerName: string): void {
  Reflect.defineMetadata(METADATAKEY_TRIGGER, true, target);
  Reflect.defineMetadata(METADATAKEY_TRIGGER_NAME, triggerName, target);
}

export function reflectCallbackMetadata<T = any>(
  instance: {},
  methodName: string,
  metadataKey: string,
): T {
  return Reflect.getMetadata(metadataKey, instance.constructor, methodName);
}


