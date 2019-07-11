import "reflect-metadata";

import {
  HttpTrigger,
  Get,
  Options,
  Head,
  All,
  Patch,
  Put,
  Delete,
  Post,
  Request,
  Body,
  Query
} from "../../src/triggers/http/HttpTrigger";
import {
  ERROR_DUPLICATE_TRIGGER,
  METADATAKEY_TRIGGER,
  METADATAKEY_TRIGGER_NAME,
  METADATAKEY_HTTPTRIGGER_METHOD,
  METADATAKEY_HTTPTRIGGER_PATH,
  METADATAKEY_HTTPTRIGGER_ARGS
} from "../../src/triggers/Constants";
import { HttpTriggerManager } from "../../src/triggers/HttpTriggerManager";
import { HttpMethod } from "../../src";

describe("HttpTrigger.@httpTrigger()", () => {
  it("Validates the operation of the decorator without parameter.", async done => {
    @HttpTrigger()
    class UserController {}

    const isTrigger = Reflect.getOwnMetadata(
      METADATAKEY_TRIGGER,
      UserController
    );
    const isHTTPTrigger =
      Reflect.getOwnMetadata(METADATAKEY_TRIGGER_NAME, UserController) ===
      "httpTrigger";

    expect(true).toEqual(isTrigger);
    expect(true).toEqual(isHTTPTrigger);

    done();
  });
});

describe("HttpTrigger.@httpTrigger(route)", () => {
  it("Validates the operation of the decorator with route.", async done => {
    @HttpTrigger("/api/users")
    class UserController {}

    const path: string = Reflect.getOwnMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController
    );

    expect("/api/users").toEqual(path);

    done();
  });
});

describe("HttpTrigger.@httpTrigger(options)", () => {
  it("Validates the operation of the decorator with options.", async done => {
    const fun = () => {
      @HttpTrigger("/api/users")
      @HttpTrigger()
      class UserController {}
    };

    expect(fun).toThrow(ERROR_DUPLICATE_TRIGGER);

    done();
  });
});

describe("HttpTrigger.@Get", () => {
  it("Valid execution of the get decorator with no path.", async done => {
    class UserController {
      @Get()
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Get);
    expect(path).toEqual("/");

    done();
  });

  it("valid to decorator execution Get with path.", async done => {
    class UserController {
      @Get("/users")
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Get);
    expect(path).toEqual("/users");

    done();
  });
});

describe("HttpTrigger.@Post", () => {
  it("Valid execution of the post decorator with no path.", async done => {
    class UserController {
      @Post()
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Post);
    expect(path).toEqual("/");

    done();
  });

  it("valid to decorator execution post with path.", async done => {
    class UserController {
      @Post("/users")
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Post);
    expect(path).toEqual("/users");

    done();
  });
});

describe("HttpTrigger.@Delete", () => {
  it("Valid execution of the Delete decorator with no path.", async done => {
    class UserController {
      @Delete()
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Delete);
    expect(path).toEqual("/");

    done();
  });

  it("valid to decorator execution Delete with path.", async done => {
    class UserController {
      @Delete("/users")
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Delete);
    expect(path).toEqual("/users");

    done();
  });
});

describe("HttpTrigger.@Put", () => {
  it("Valid execution of the Put decorator with no path.", async done => {
    class UserController {
      @Put()
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Put);
    expect(path).toEqual("/");

    done();
  });

  it("valid to decorator execution Put with path.", async done => {
    class UserController {
      @Put("/users")
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Put);
    expect(path).toEqual("/users");

    done();
  });
});

describe("HttpTrigger.@Patch", () => {
  it("Valid execution of the Patch decorator with no path.", async done => {
    class UserController {
      @Patch()
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Patch);
    expect(path).toEqual("/");

    done();
  });

  it("valid to decorator execution Patch with path.", async done => {
    class UserController {
      @Patch("/users")
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Patch);
    expect(path).toEqual("/users");

    done();
  });
});

describe("HttpTrigger.@Options", () => {
  it("Valid execution of the Options decorator with no path.", async done => {
    class UserController {
      @Options()
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Options);
    expect(path).toEqual("/");

    done();
  });

  it("valid to decorator execution Get with path.", async done => {
    class UserController {
      @Options("/users")
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Options);
    expect(path).toEqual("/users");

    done();
  });
});

describe("HttpTrigger.@Head", () => {
  it("Valid execution of the Head decorator with no path.", async done => {
    class UserController {
      @Head()
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Head);
    expect(path).toEqual("/");

    done();
  });

  it("valid to decorator execution Head with path.", async done => {
    class UserController {
      @Head("/users")
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual(HttpMethod.Head);
    expect(path).toEqual("/users");

    done();
  });
});

describe("HttpTrigger.@All", () => {
  it("Valid execution of the All decorator with no path.", async done => {
    class UserController {
      @All()
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual("All");
    expect(path).toEqual("/");

    done();
  });

  it("valid to decorator execution Head with path.", async done => {
    class UserController {
      @All("/users")
      static getUsers() {}
    }

    const method = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      UserController.getUsers
    );
    const path = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      UserController.getUsers
    );

    expect(method).toEqual("All");
    expect(path).toEqual("/users");

    done();
  });
});

describe("HttpTrigger: Decorators in function parameters", () => {
  it("Without param.", async done => {
    class UserController {
      static getUsers(@Request() req: any, @Body() body: any) {}
    }
    const userController = new UserController();
    const decoratorsArgs = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_ARGS,
      userController.constructor,
      "getUsers"
    );

    expect(decoratorsArgs).toEqual({
      "Request:0": { index: 0, data: undefined },
      "Body:1": { index: 1, data: undefined }
    });

    done();
  });

  it("With param.", async done => {
    class UserController {
      static getUsers(@Body("name") name: any, @Query("filter") value: any) {}
    }

    const decoratorsArgs = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_ARGS,
      UserController,
      "getUsers"
    );

    expect(decoratorsArgs).toEqual({
      "Body:0": { index: 0, data: "name" },
      "Query:1": { index: 1, data: "filter" }
    });

    done();
  });
});
