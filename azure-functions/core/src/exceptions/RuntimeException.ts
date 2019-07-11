export declare class Error {
  name: string;
  message: string;
  stack: string;
  constructor(message?: string);
}

export class RuntimeException extends Error {
  constructor(private readonly msg = ``) {
    super(msg);
  }

  what() {
    return this.msg;
  }
}
