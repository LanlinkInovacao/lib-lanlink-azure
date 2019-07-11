"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
const Url = require("url");
const HttpRequest_1 = require("../HttpRequest");
class HttpTriggerMock {
    constructor() {
        this.doDone = () => { };
        this.characterFormattingSeparator = ':';
        this.pattern = '';
        this.context = this.createContextDefault();
    }
    /**
     * Defines the Http Method for mock
     */
    hasMethod(method) {
        this.context.req.method = method;
        return this;
    }
    /**
     * Defines the URL Method for mock
     * @param url Url to mock
     */
    hasUrl(url) {
        this.context.req.url = url;
        this.buildQuery();
        this.buildParams();
        return this;
    }
    /**
     * Set the pattern for creating the request parameters via the URL path
     * @param pattern pattern for mock
     */
    hasPattern(pattern) {
        this.pattern = pattern;
        this.buildParams();
        return this;
    }
    /**
     * Defines the request body for mock
     * @param body Request body
     */
    hasBody(body) {
        this.context.req.body = body;
        return this;
    }
    /**
     * Defines the request header for mock
     * @param header Header used in requisition
     * @param value Value of the header used in the request
     */
    addHeader(header, value) {
        this.context.req.headers[header] = value;
        return this;
    }
    /**
     * Executes the mock trigger
     * @param executable Function performed after triggering
     */
    run(executable) {
        try {
            const promise = executable(this.context, this.context.req);
            if (!this.isVoid(promise)) {
                promise
                    .then(response => {
                    const value = response;
                    this.doDone(null, value);
                })
                    .catch(error => {
                    this.doDone(error);
                });
            }
        }
        catch (error) {
            this.doDone(error);
        }
        return this;
    }
    done(executable) {
        this.doDone = executable;
    }
    isVoid(value) {
        return value === undefined;
    }
    newInvocationId() {
        const invocationId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return invocationId;
    }
    createContextDefault() {
        const invocationId = this.newInvocationId();
        const context = {
            invocationId,
            executionContext: { invocationId, functionName: '', functionDirectory: '' },
            bindings: {},
            bindingData: {},
            bindingDefinitions: [{ name: '', type: '', direction: 'in' }],
            done: (error, result) => {
                this.doDone(error, result);
            },
            req: {
                method: HttpRequest_1.HttpMethod.Get,
                url: '',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                query: {},
                params: {},
                body: undefined,
                rawBody: undefined
            },
            res: {}
        };
        return context;
    }
    parameterFormatting(nameParam, valueParam) {
        if (nameParam.indexOf(this.characterFormattingSeparator) === -1) {
            return { nameParam, valueParam };
        }
        const nameAndFormatting = nameParam.split(this.characterFormattingSeparator);
        const nameParamWithoutFormatting = nameAndFormatting[0];
        const formatting = nameAndFormatting[1];
        let formattingPath;
        switch (formatting) {
            case 'int':
            case 'float':
            case 'number':
                formattingPath = { nameParam: nameParamWithoutFormatting, valueParam: Number(valueParam) };
                break;
            case 'date':
                const date = new Date(valueParam);
                formattingPath = { nameParam: nameParamWithoutFormatting, valueParam: date };
                break;
            default:
                formattingPath = { nameParam: nameParamWithoutFormatting, valueParam };
                break;
        }
        return formattingPath;
    }
    buildQuery() {
        this.context.req.query = this.parseQuery(this.context.req.url);
    }
    parseQuery(url) {
        const parse = Url.parse(url, true);
        const query = parse.query;
        return query;
    }
    buildParams() {
        this.context.req.params = this.parseParams(this.context.req.url, this.pattern);
    }
    parseParams(url, pattern) {
        if (!pattern) {
            return {};
        }
        const indexQueryString = url.indexOf('?');
        if (indexQueryString > -1) {
            url = url.substring(0, indexQueryString);
        }
        const delimiters = [{ prefixDelimit: '{', sufixDelimit: '}' }];
        const params = {};
        delimiters.forEach(delimiter => {
            const specialCharsRegex = /[\\\^\$\*\+\.\?\(\)]/g;
            const tokenRegex = new RegExp(`${delimiter.prefixDelimit}([^${delimiter.prefixDelimit}${delimiter.sufixDelimit}\t\r\n]+)${delimiter.sufixDelimit}`, 'g');
            const tokens = pattern.match(tokenRegex);
            const patternRegex = new RegExp(pattern.replace(specialCharsRegex, '\\$&').replace(tokenRegex, '(\.+)'));
            let matches = url.match(patternRegex);
            if (matches && tokens) {
                matches = matches.splice(1);
                for (let i = 0; i < tokens.length; i++) {
                    const regexReplace = new RegExp(`${delimiter.prefixDelimit}|${delimiter.sufixDelimit}`, 'g');
                    let parameterName = tokens[i].replace(regexReplace, '').trim();
                    let formatting = this.parameterFormatting(parameterName, matches[i]);
                    params[formatting.nameParam] = formatting.valueParam;
                }
            }
        });
        return params;
    }
}
exports.HttpTriggerMock = HttpTriggerMock;
/* tslint:enable */ 
//# sourceMappingURL=HttpTriggerMock.js.map