"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains
 * the
 * values
 * of
 * status
 * codes
 * defined
 * for
 * HTTP.
 */
var HttpStatusCode;
(function (HttpStatusCode) {
    /**
     * Indicates
     * that
     * the
     * client
     * can
     * continue
     * with
     * its
     * request.
     */
    HttpStatusCode[HttpStatusCode["Continue"] = 100] = "Continue";
    /**
     * Indicates
     * that
     * the
     * protocol
     * version
     * or
     * protocol
     * is
     * being
     * changed.
     */
    HttpStatusCode[HttpStatusCode["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    /**
     * Indicates
     * that
     * the
     * request
     * succeeded
     * and
     * that
     * the
     * requested
     * information
     * is in
     * the
     * response.
     */
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    /**
     * Indicates
     * that
     * the
     * request
     * resulted
     * in a
     * new
     * resource
     * created
     * before
     * the
     * response
     * was
     * sent.
     */
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    /**
     * Indicates
     * that
     * the
     * request
     * has
     * been
     * accepted
     * for
     * further
     * processing.
     */
    HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
    /**
     * Indicates
     * that
     * the
     * returned
     * meta
     * information
     * is
     * from
     * a
     * cached
     * copy
     * instead
     * of
     * the
     * origin
     * server
     * and
     * therefore
     * may
     * be
     * incorrect.
     */
    HttpStatusCode[HttpStatusCode["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    /**
     * Indicates
     * that
     * the
     * request
     * has
     * been
     * successfully
     * processed
     * and
     * that
     * the
     * response
     * is
     * intentionally
     * blank.
     */
    HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
    /**
     * Indicates
     * that
     * the
     * client
     * should
     * reset
     * (not
     * reload)
     * the
     * current
     * resource.
     */
    HttpStatusCode[HttpStatusCode["ResetContent"] = 205] = "ResetContent";
    /**
     * Indicates
     * that
     * the
     * response
     * is a
     * partial
     * response
     * as
     * requested
     * by a
     * GET
     * request
     * that
     * includes
     * a
     * byte
     * range.
     */
    HttpStatusCode[HttpStatusCode["PartialContent"] = 206] = "PartialContent";
    /**
     * Indicates
     * that
     * the
     * requested
     * information
     * has
     * multiple
     * representations.
     *
     * The
     * default
     * action
     * is to
     * treat
     * this
     * status
     * as a
     * redirect
     * and
     * follow
     * the
     * contents
     * of
     * the
     * Location
     * header
     * associated
     * with
     * this
     * response.
     */
    HttpStatusCode[HttpStatusCode["MultipleChoices"] = 300] = "MultipleChoices";
    /**
     * Indicates
     * that
     * the
     * requested
     * information
     * has
     * multiple
     * representations.
     *
     * The
     * default
     * action
     * is to
     * treat
     * this
     * status
     * as a
     * redirect
     * and
     * follow
     * the
     * contents
     * of
     * the
     * Location
     * header
     * associated
     * with
     * this
     * response.
     */
    HttpStatusCode[HttpStatusCode["Ambiguous"] = 300] = "Ambiguous";
    /**
     * Indicates
     * that
     * the
     * requested
     * information
     * has
     * been
     * moved
     * to
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header.
     *
     * The
     * default
     * action
     * when
     * this
     * status
     * is
     * received
     * is to
     * follow
     * the
     * Location
     * header
     * associated
     * with
     * the
     * response.
     */
    HttpStatusCode[HttpStatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    /**
     * Indicates
     * that
     * the
     * requested
     * information
     * has
     * been
     * moved
     * to
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header.
     *
     * The
     * default
     * action
     * when
     * this
     * status
     * is
     * received
     * is to
     * follow
     * the
     * Location
     * header
     * associated
     * with
     * the
     * response.
     * When
     * the
     * original
     * request
     * method
     * was
     * POST,
     * the
     * redirected
     * request
     * will
     * use
     * the
     * GET
     * method.
     */
    HttpStatusCode[HttpStatusCode["Moved"] = 301] = "Moved";
    /**
     * Indicates
     * that
     * the
     * requested
     * information
     * is
     * located
     * at
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header.
     *
     * The
     * default
     * action
     * when
     * this
     * status
     * is
     * received
     * is to
     * follow
     * the
     * Location
     * header
     * associated
     * with
     * the
     * response.
     * When
     * the
     * original
     * request
     * method
     * was
     * POST,
     * the
     * redirected
     * request
     * will
     * use
     * the
     * GET
     * method.
     */
    HttpStatusCode[HttpStatusCode["Found"] = 302] = "Found";
    /**
     * Indicates
     * that
     * the
     * requested
     * information
     * is
     * located
     * at
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header.
     *
     * The
     * default
     * action
     * when
     * this
     * status
     * is
     * received
     * is to
     * follow
     * the
     * Location
     * header
     * associated
     * with
     * the
     * response.
     * When
     * the
     * original
     * request
     * method
     * was
     * POST,
     * the
     * redirected
     * request
     * will
     * use
     * the
     * GET
     * method.
     */
    HttpStatusCode[HttpStatusCode["Redirect"] = 302] = "Redirect";
    /**
     * Automatically
     * redirects
     * the
     * client
     * to
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header
     * as
     * the
     * result
     * of a
     * POST.
     *
     * The
     * request
     * to
     * the
     * resource
     * specified
     * by
     * the
     * Location
     * header
     * will
     * be
     * made
     * with
     * a
     * GET.
     */
    HttpStatusCode[HttpStatusCode["SeeOther"] = 303] = "SeeOther";
    /**
     * Automatically
     * redirects
     * the
     * client
     * to
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header
     * as
     * the
     * result
     * of a
     * POST.
     *
     * The
     * request
     * to
     * the
     * resource
     * specified
     * by
     * the
     * Location
     * header
     * will
     * be
     * made
     * with
     * a
     * GET.
     */
    HttpStatusCode[HttpStatusCode["RedirectMethod"] = 303] = "RedirectMethod";
    /**
     * Indicates
     * that
     * the
     * client's
     * cached
     * copy
     * is up
     * to
     * date.
     *
     * The
     * contents
     * of
     * the
     * resource
     * are
     * not
     * transferred.
     */
    HttpStatusCode[HttpStatusCode["NotModified"] = 304] = "NotModified";
    /**
     * Indicates
     * that
     * the
     * request
     * should
     * use
     * the
     * proxy
     * server
     * at
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header.
     */
    HttpStatusCode[HttpStatusCode["UseProxy"] = 305] = "UseProxy";
    /**
     * A
     * proposed
     * extension
     * to
     * the
     * HTTP/1.1
     * specification
     * that
     * is
     * not
     * fully
     * specified.
     */
    HttpStatusCode[HttpStatusCode["Unused"] = 306] = "Unused";
    /**
     * Indicates
     * that
     * the
     * request
     * information
     * is
     * located
     * at
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header.
     *
     * The
     * default
     * action
     * when
     * this
     * status
     * is
     * received
     * is to
     * follow
     * the
     * Location
     * header
     * associated
     * with
     * the
     * response.
     * When
     * the
     * original
     * request
     * method
     * was
     * POST,
     * the
     * redirected
     * request
     * will
     * also
     * use
     * the
     * POST
     * method.
     */
    HttpStatusCode[HttpStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    /**
     * Indicates
     * that
     * the
     * request
     * information
     * is
     * located
     * at
     * the
     * URI
     * specified
     * in
     * the
     * Location
     * header.
     *
     * The
     * default
     * action
     * when
     * this
     * status
     * is
     * received
     * is to
     * follow
     * the
     * Location
     * header
     * associated
     * with
     * the
     * response.
     * When
     * the
     * original
     * request
     * method
     * was
     * POST,
     * the
     * redirected
     * request
     * will
     * also
     * use
     * the
     * POST
     * method.
     */
    HttpStatusCode[HttpStatusCode["RedirectKeepVerb"] = 307] = "RedirectKeepVerb";
    /**
     * Indicates
     * that
     * the
     * request
     * could
     * not
     * be
     * understood
     * by
     * the
     * server.
     *
     * The
     * HTTP
     * 400
     * (BadRequest)
     * is
     * sent
     * when
     * no
     * other
     * error
     * is
     * applicable,
     * or if
     * the
     * exact
     * error
     * is
     * unknown
     * or
     * does
     * not
     * have
     * its
     * own
     * error
     * code.
     */
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    /**
     * Indicates
     * that
     * the
     * requested
     * resource
     * requires
     * authentication.
     *
     * The
     * WWW-Authenticate
     * header
     * contains
     * the
     * details
     * of
     * how
     * to
     * perform
     * the
     * authentication.
     */
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    /**
     * Reserved
     * for
     * future
     * use.
     */
    HttpStatusCode[HttpStatusCode["PaymentRequired"] = 402] = "PaymentRequired";
    /**
     * Indicates
     * that
     * the
     * server
     * refuses
     * to
     * fulfill
     * the
     * request.
     */
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    /**
     * Indicates
     * that
     * the
     * requested
     * resource
     * does
     * not
     * exist
     * on
     * the
     * server.
     */
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    /**
     * Indicates
     * that
     * the
     * request
     * method
     * (POST
     * or
     * GET)
     * is
     * not
     * allowed
     * on
     * the
     * requested
     * resource.
     */
    HttpStatusCode[HttpStatusCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    /**
     * Indicates
     * that
     * the
     * client
     * has
     * indicated
     * with
     * Accept
     * headers
     * that
     * it
     * will
     * not
     * accept
     * any
     * of
     * the
     * available
     * representations
     * of
     * the
     * resource.
     */
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    /**
     * Indicates
     * that
     * the
     * requested
     * proxy
     * requires
     * authentication.
     *
     * The
     * Proxy-authenticate
     * header
     * contains
     * the
     * details
     * of
     * how
     * to
     * perform
     * the
     * authentication.
     */
    HttpStatusCode[HttpStatusCode["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    /**
     * Indicates
     * that
     * the
     * client
     * did
     * not
     * send
     * a
     * request
     * within
     * the
     * time
     * the
     * server
     * was
     * expecting
     * the
     * request.
     */
    HttpStatusCode[HttpStatusCode["RequestTimeout"] = 408] = "RequestTimeout";
    /**
     * Indicates
     * that
     * the
     * request
     * could
     * not
     * be
     * carried
     * out
     * because
     * of a
     * conflict
     * on
     * the
     * server.
     */
    HttpStatusCode[HttpStatusCode["Conflict"] = 409] = "Conflict";
    /**
     * Indicates
     * that
     * the
     * requested
     * resource
     * is no
     * longer
     * available.
     */
    HttpStatusCode[HttpStatusCode["Gone"] = 410] = "Gone";
    /**
     * Indicates
     * that
     * the
     * required
     * Content-length
     * header
     * is
     * missing.
     */
    HttpStatusCode[HttpStatusCode["LengthRequired"] = 411] = "LengthRequired";
    /**
     * Indicates
     * that
     * a
     * condition
     * set
     * for
     * this
     * request
     * failed,
     * and
     * the
     * request
     * cannot
     * be
     * carried
     * out.
     *
     * Conditions
     * are
     * set
     * with
     * conditional
     * request
     * headers
     * like
     * If-Match,
     * If-None-Match,
     * or
     * If-Unmodified-Since.
     */
    HttpStatusCode[HttpStatusCode["PreconditionFailed"] = 412] = "PreconditionFailed";
    /**
     * Indicates
     * that
     * the
     * request
     * is
     * too
     * large
     * for
     * the
     * server
     * to
     * process.
     */
    HttpStatusCode[HttpStatusCode["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    /**
     * Indicates
     * that
     * the
     * URI
     * is
     * too
     * long.
     */
    HttpStatusCode[HttpStatusCode["RequestUriTooLong"] = 414] = "RequestUriTooLong";
    /**
     * Indicates
     * that
     * the
     * request
     * is an
     * unsupported
     * type.
     */
    HttpStatusCode[HttpStatusCode["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    /**
     * Indicates
     * that
     * the
     * range
     * of
     * data
     * requested
     * from
     * the
     * resource
     * cannot
     * be
     * returned,
     * either
     * because
     * the
     * beginning
     * of
     * the
     * range
     * is
     * before
     * the
     * beginning
     * of
     * the
     * resource,
     * or
     * the
     * end
     * of
     * the
     * range
     * is
     * after
     * the
     * end
     * of
     * the
     * resource.
     */
    HttpStatusCode[HttpStatusCode["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    /**
     * Indicates
     * that
     * an
     * expectation
     * given
     * in an
     * Expect
     * header
     * could
     * not
     * be
     * met
     * by
     * the
     * server.
     */
    HttpStatusCode[HttpStatusCode["ExpectationFailed"] = 417] = "ExpectationFailed";
    /**
     * Indicates
     * that
     * the
     * server
     * understands
     * the
     * content
     * type
     * of
     * the
     * request
     * and
     * the
     * request
     * is
     * syntactically
     * correct,
     * but
     * was
     * unable
     * to
     * process
     * the
     * contained
     * instructions
     * (semantically
     * erroneous).
     */
    HttpStatusCode[HttpStatusCode["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    /**
     * Indicates
     * that
     * the
     * client
     * should
     * switch
     * to a
     * different
     * protocol
     * such
     * as
     * TLS/1.0.
     */
    HttpStatusCode[HttpStatusCode["UpgradeRequired"] = 426] = "UpgradeRequired";
    /**
     * Indicates
     * that
     * a
     * generic
     * error
     * has
     * occurred
     * on
     * the
     * server.
     */
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    /**
     * Indicates
     * that
     * the
     * server
     * does
     * not
     * support
     * the
     * requested
     * function.
     */
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    /**
     * Indicates
     * that
     * an
     * intermediate
     * proxy
     * server
     * received
     * a bad
     * response
     * from
     * another
     * proxy
     * or
     * the
     * origin
     * server.
     */
    HttpStatusCode[HttpStatusCode["BadGateway"] = 502] = "BadGateway";
    /**
     * Indicates
     * that
     * the
     * server
     * is
     * temporarily
     * unavailable,
     * usually
     * due
     * to
     * high
     * load
     * or
     * maintenance.
     */
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    /**
     * Indicates
     * that
     * an
     * intermediate
     * proxy
     * server
     * timed
     * out
     * while
     * waiting
     * for a
     * response
     * from
     * another
     * proxy
     * or
     * the
     * origin
     * server.
     */
    HttpStatusCode[HttpStatusCode["GatewayTimeout"] = 504] = "GatewayTimeout";
    /**
     * Indicates
     * that
     * the
     * requested
     * HTTP
     * version
     * is
     * not
     * supported
     * by
     * the
     * server.
     */
    HttpStatusCode[HttpStatusCode["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
//# sourceMappingURL=HttpStatusCode.js.map