"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains
 * the
 * values
 * of
 * error
 * types
 * due to
 * a
 * failure
 * of an
 * API
 * request.
 */
var ErrorType;
(function (ErrorType) {
    /**
     * Represents
     * that
     * the
     * resource
     * does
     * not
     * exist.
     */
    ErrorType["Missing"] = "missing";
    /**
     * Represents
     * that
     * a
     * required
     * field
     * on a
     * resource
     * has
     * not
     * been
     * set.
     */
    ErrorType["MissingField"] = "missing_field";
    /**
     * Represents
     * that
     * the
     * formatting
     * of a
     * field
     * is
     * invalid.
     */
    ErrorType["Invalid"] = "invalid";
    /**
     * Represents
     * that
     * another
     * resource
     * has
     * the
     * same
     * value
     * as
     * this
     * field.
     */
    ErrorType["AlreadyExists"] = "already_exists";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
//# sourceMappingURL=ErrorType.js.map