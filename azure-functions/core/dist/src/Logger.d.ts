/**
 * Allows
 * you to
 * write
 * streaming
 * function
 * logs.
 */
export interface Logger {
    /**
     * Writes
     * streaming
     * function
     * logs
     * at
     * the
     * default
     * trace
     * level.
     */
    <T>(...args: T[]): void;
    /**
     * Writes
     * to
     * error
     * level
     * logging
     * or
     * lower.
     */
    error<T>(...args: T[]): void;
    /**
     * Writes
     * to
     * warning
     * level
     * logging
     * or
     * lower.
     */
    warn<T>(...args: T[]): void;
    /**
     * Writes
     * to
     * info
     * level
     * logging
     * or
     * lower.
     */
    info<T>(...args: T[]): void;
    /**
     * Writes
     * to
     * verbose
     * level
     * logging.
     */
    verbose<T>(...args: T[]): void;
}
