import { BindingDefinition } from "./bindings/BindingDefinition";
import { HttpRequest } from "./HttpRequest";
import { Logger } from "./Logger";

/**
 * Interface
 * for
 * your
 * Azure
 * Function
 * code.
 * This
 * function
 * must be
 * exported
 * (via
 * module.exports
 * or
 * exports)
 * and
 * will
 * execute
 * when
 * triggered.
 * It is
 * recommended
 * that
 * you
 * declare
 * this
 * function
 * as
 * async,
 * which
 * implicitly
 * returns
 * a
 * Promise.
 * @param
 * context
 * Context
 * object
 * passed
 * to your
 * function
 * from
 * the
 * Azure
 * Functions
 * runtime.
 * @param {HttpRequest<TBody>} args Optional array of input and trigger binding data. These binding data are passed to the
 * function
 * in the
 * same
 * order
 * that
 * they
 * are
 * defined
 * in
 * function.json.
 * Valid
 * input
 * types
 * are
 * string,
 * HttpRequest,
 * and
 * Buffer.
 * @returns
 * Output
 * bindings
 * (optional).
 * If you
 * are
 * returning
 * a
 * result
 * from a
 * Promise
 * (or an
 * async
 * function),
 * this
 * result
 * will be
 * passed
 * to
 * JSON.stringify
 * unless
 * it is a
 * string,
 * Buffer,
 * ArrayBufferView,
 * or
 * number.
 */
export declare type AzureFunction<TBody = any> = (
  context: Context<TBody>,
  ...args: any[]
) => Promise<TBody | void> | void;
export declare type AzureFunctionDone<TResult = any> = (
  error?: Error | string | null,
  result?: TResult
) => void;

/**
 * The
 * context
 * object
 * can be
 * ussed
 * for
 * writing
 * logs,
 * reading
 * data
 * from
 * bindings,
 * setting
 * outputs
 * and
 * using
 * the
 * context.done
 * callback
 * when
 * your
 * exported
 * function
 * is
 * synchronous.
 * A
 * context
 * object
 * is
 * passed
 * to your
 * function
 * from
 * the
 * Azure
 * Functions
 * runtime
 * on
 * function
 * invocation.
 */
export interface Context<
  TBody = any,
  TResponse = any,
  TBinding = any,
  TBindingData = any
> {
  /**
   * A
   * unique
   * GUID
   * per
   * function
   * invocation.
   */
  invocationId: string;
  /**
   * Function
   * execution
   * metadata.
   */
  executionContext: ExecutionContext;
  /**
   * Input
   * and
   * trigger
   * binding
   * data,
   * as
   * defined
   * in
   * function.json.
   * Properties
   * on
   * this
   * object
   * are
   * dynamically
   * generated
   * and
   * named
   * based
   * off
   * of
   * the
   * "name"
   * property
   * in
   * function.json.
   */
  bindings: { [key: string]: TBinding };
  /**
   * Trigger
   * metadata
   * and
   * function
   * invocation
   * data.
   */
  bindingData: { [key: string]: TBindingData };
  /**
   * Bindings
   * your
   * function
   * uses,
   * as
   * defined
   * in
   * function.json.
   */
  bindingDefinitions: BindingDefinition[];
  /**
   * Allows
   * you
   * to
   * write
   * streaming
   * function
   * logs.
   * Calling
   * directly
   * allows
   * you
   * to
   * write
   * streaming
   * function
   * logs
   * at
   * the
   * default
   * trace
   * level.
   */
  log?: Logger;
  /**
   * A
   * callback
   * function
   * that
   * signals
   * to
   * the
   * runtime
   * that
   * your
   * code
   * has
   * completed.
   * If
   * your
   * function
   * is
   * synchronous,
   * you
   * must
   * call
   * context.done
   * at
   * the
   * end
   * of
   * execution.
   * If
   * your
   * function
   * is
   * asynchronous,
   * you
   * should
   * not
   * use
   * this
   * callback.
   *
   * @param
   * err A
   * user-defined
   * error
   * to
   * pass
   * back
   * to
   * the
   * runtime.
   * If
   * present,
   * your
   * function
   * execution
   * will
   * fail.
   * @param
   * result
   * An
   * object
   * containing
   * output
   * binding
   * data.
   * `result`
   * will
   * be
   * passed
   * to
   * JSON.stringify
   * unless
   * it is
   * a
   * string,
   * Buffer,
   * ArrayBufferView,
   * or
   * number.
   */
  done: AzureFunctionDone<TBody>;
  /**
   * HTTP
   * request
   * object.
   * Provided
   * to
   * your
   * function
   * when
   * using
   * HTTP
   * Bindings.
   */
  req?: HttpRequest<TBody>;
  /**
   * HTTP
   * response
   * object.
   * Provided
   * to
   * your
   * function
   * when
   * using
   * HTTP
   * Bindings.
   */
  res?: { [key: string]: TResponse };
}

export interface ExecutionContext {
  /**
   * A
   * unique
   * GUID
   * per
   * function
   * invocation.
   */
  invocationId: string;
  /**
   * The
   * name
   * of
   * the
   * function
   * that
   * is
   * being
   * invoked.
   * The
   * name
   * of
   * your
   * function
   * is
   * always
   * the
   * same
   * as
   * the
   * name
   * of
   * the
   * corresponding
   * function.json's
   * parent
   * directory.
   */
  functionName: string;
  /**
   * The
   * directory
   * your
   * function
   * is in
   * (this
   * is
   * the
   * parent
   * directory
   * of
   * this
   * function's
   * function.json).
   */
  functionDirectory: string;
}
