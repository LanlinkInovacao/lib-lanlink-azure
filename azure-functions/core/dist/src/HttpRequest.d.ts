/**
 * Contains
 * the
 * values
 * of the
 * essential
 * HTTP
 * methods.
 */
export declare enum HttpMethod {
    /**
     * Represents
     * an
     * HTTP
     * GET
     * protocol
     * method.
     */
    Get = "GET",
    /**
     * Represents
     * an
     * HTTP
     * POST
     * protocol
     * method
     * that
     * is
     * used
     * to
     * post
     * a new
     * entity
     * as an
     * addition
     * to a
     * URI.
     */
    Post = "POST",
    /**
     * Represents
     * an
     * HTTP
     * DELETE
     * protocol
     * method.
     */
    Delete = "DELETE",
    /**
     * Represents
     * an
     * HTTP
     * HEAD
     * protocol
     * method.
     */
    Head = "HEAD",
    /**
     * Represents
     * an
     * HTTP
     * PATCH
     * protocol
     * method
     * that
     * is
     * used
     * to
     * replace
     * partially
     * an
     * entity
     * identified
     * by a
     * URI.
     */
    Patch = "PATCH",
    /**
     * Represents
     * an
     * HTTP
     * PUT
     * protocol
     * method
     * that
     * is
     * used
     * to
     * replace
     * an
     * entity
     * identified
     * by a
     * URI.
     */
    Put = "PUT",
    /**
     * Represents
     * an
     * HTTP
     * OPTIONS
     * protocol
     * method.
     */
    Options = "OPTIONS",
    /**
     * Represents
     * an
     * HTTP
     * TRACE
     * protocol
     * method.
     */
    Trace = "TRACE"
}
/**
 * Contains
 * the
 * values
 * of the
 * essential
 * HTTP
 * methods.
 * This
 * type
 * should
 * only be
 * used
 * internally.
 */
export declare type HttpMethodInternal = "GET" | "POST" | "DELETE" | "HEAD" | "PATCH" | "PUT" | "OPTIONS" | "TRACE" | "CONNECT";
/**
 * HTTP request object. Provided to your function when using HTTP Bindings.
 */
export interface HttpRequest<TBody> {
    /**
     * HTTP
     * request
     * method
     * used
     * to
     * invoke
     * this
     * function.
     */
    method: HttpMethod | HttpMethodInternal | null;
    /**
     * Request
     * URL.
     */
    url: string;
    /**
     * HTTP
     * request
     * headers.
     */
    headers: {
        [key: string]: string;
    };
    /**
     * Query
     * string
     * parameter
     * keys
     * and
     * values
     * from
     * the
     * URL.
     */
    query: {
        [key: string]: string;
    };
    /**
     * Route
     * parameter
     * keys
     * and
     * values.
     */
    params: {
        [key: string]: string | number | Date | object;
    };
    /**
     * The
     * HTTP
     * request
     * body.
     */
    body?: TBody;
    /**
     * The
     * HTTP
     * request
     * body
     * as a
     * UTF-8
     * string.
     */
    rawBody?: TBody;
}
