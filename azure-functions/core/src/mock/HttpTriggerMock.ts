/* tslint:disable */
import * as Url from 'url';

import {AzureFunctionsExecutable} from '../AzureFunctionsExecutable';
import {AzureFunction, AzureFunctionDone, Context} from '../Context';
import {HttpMethod} from '../HttpRequest';

export interface AfterExecution<TBody = any> {
  done: (executable: AzureFunctionDone<TBody>) => void;
}

export class HttpTriggerMock implements AzureFunctionsExecutable, AfterExecution {
  private context: Context;
  private pattern: string;
  private doDone: AzureFunctionDone = () => {};
  private characterFormattingSeparator = ':';

  constructor() {
    this.pattern = '';
    this.context = this.createContextDefault();
  }

  /**
   * Defines the Http Method for mock
   */
  hasMethod(method: HttpMethod): HttpTriggerMock {
    this.context.req!.method = method;
    return this;
  }

  /**
   * Defines the URL Method for mock
   * @param url Url to mock
   */
  hasUrl(url: string): HttpTriggerMock {
    this.context.req!.url = url;
    this.buildQuery();
    this.buildParams();
    return this;
  }

  /**
   * Set the pattern for creating the request parameters via the URL path
   * @param pattern pattern for mock
   */
  hasPattern(pattern: string): HttpTriggerMock {
    this.pattern = pattern;
    this.buildParams();
    return this;
  }

  /**
   * Defines the request body for mock
   * @param body Request body
   */
  hasBody<TBody>(body: TBody): HttpTriggerMock {
    this.context.req!.body = body;
    return this;
  }

  /**
   * Defines the request header for mock
   * @param header Header used in requisition
   * @param value Value of the header used in the request
   */
  addHeader(header: string, value: string): HttpTriggerMock {
    this.context.req!.headers[header] = value;
    return this;
  }

  /**
   * Executes the mock trigger
   * @param executable Function performed after triggering
   */
  run<TBody>(executable: AzureFunction<TBody>): AfterExecution<TBody> {
    try {
      const promise = executable(this.context, this.context.req!);

      if (!this.isVoid(promise)) {
        promise
          .then(response => {
            const value = response as TBody;
            this.doDone(null, value);
          })
          .catch(error => {
            this.doDone(error);
          })
      }
    } catch (error) {
      this.doDone(error)
    }

    return this;
  }

  done<TBody>(executable: AzureFunctionDone<TBody>): void {
    this.doDone = executable;
  }

  private isVoid<TBody>(value: Promise<TBody|void>|void|TBody): value is void {
    return value === undefined;
  }

  private newInvocationId(): string {
    const invocationId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

    return invocationId;
  }

  private createContextDefault(): Context {
    const invocationId = this.newInvocationId();

    const context: Context = {
      invocationId,
      executionContext: {invocationId, functionName: '', functionDirectory: ''},
      bindings: {},
      bindingData: {},
      bindingDefinitions: [{name: '', type: '', direction: 'in'}],
      done: (error, result): void => {
        this.doDone(error, result);
      },
      req: {
        method: HttpMethod.Get,
        url: '',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        query: {},
        params: {},
        body: undefined,
        rawBody: undefined
      },
      res: {}
    };

    return context;
  }


  private parameterFormatting(nameParam: string, valueParam: string): FormattingPath {
    if (nameParam.indexOf(this.characterFormattingSeparator) === -1) {
      return {nameParam, valueParam};
    }
    const nameAndFormatting = nameParam.split(this.characterFormattingSeparator);
    const nameParamWithoutFormatting = nameAndFormatting[0];
    const formatting = nameAndFormatting[1];
    let formattingPath: FormattingPath;

    switch (formatting) {
      case 'int':
      case 'float':
      case 'number':
        formattingPath = {nameParam: nameParamWithoutFormatting, valueParam: Number(valueParam)};
        break;
      case 'date':
        const date = new Date(valueParam);

        formattingPath = {nameParam: nameParamWithoutFormatting, valueParam: date};
        break;
      default:
        formattingPath = {nameParam: nameParamWithoutFormatting, valueParam};
        break;
    }

    return formattingPath;
  }

  private buildQuery() {
    this.context.req!.query = this.parseQuery(this.context.req!.url);
  }

  private parseQuery(url: string): {} {
    const parse = Url.parse(url, true);
    const query: {} = parse.query;

    return query;
  }

  private buildParams(): void {
    this.context.req!.params = this.parseParams(this.context.req!.url, this.pattern);
  }

  private parseParams(url: string, pattern: string): {[key: string]: any} {
    if (!pattern) {
      return {};
    }

    const indexQueryString = url.indexOf('?');

    if (indexQueryString > -1) {
      url = url.substring(0, indexQueryString);
    }

    const delimiters: Delimiter[] = [{prefixDelimit: '{', sufixDelimit: '}'}];

    const params: {[key: string]: any} = {};

    delimiters.forEach(delimiter => {
      const specialCharsRegex: RegExp = /[\\\^\$\*\+\.\?\(\)]/g;
      const tokenRegex: RegExp = new RegExp(
        `${delimiter.prefixDelimit}([^${delimiter.prefixDelimit}${delimiter.sufixDelimit}\t\r\n]+)${
          delimiter.sufixDelimit}`,
        'g');
      const tokens: RegExpMatchArray|null = pattern.match(tokenRegex);
      const patternRegex: RegExp = new RegExp(pattern.replace(specialCharsRegex, '\\$&').replace(tokenRegex, '(\.+)'));

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

export interface Delimiter {
  prefixDelimit: string;
  sufixDelimit: string;
}

export interface FormattingPath {
  nameParam: string;
  valueParam: number|string|Date;
}

/* tslint:enable */