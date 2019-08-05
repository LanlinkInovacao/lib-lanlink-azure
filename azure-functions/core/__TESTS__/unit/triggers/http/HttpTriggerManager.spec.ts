import { HttpTriggerManager } from "../../../../src/triggers/http/HttpTriggerManager";

import { UserController } from "../../UserController";
import { HttpTriggerMock } from "../../../../src/mock/HttpTriggerMock";
import { Get, Param } from "../../../../src/triggers/http/HttpTrigger";

describe("HttpTriggerManager", () => {
  it("validates the execution of choose best method.", async done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock
      .hasUrl("https://contoso.com/orders/10")
      .hasPattern("/orders/{orderId}")
      .run((context, args) => {
        const httpTriggerManager = new HttpTriggerManager();

        class Teste {
          @Get("orders/:orderId")
          getUsers(@Param("orderId") orderId: number) {
            expect(true).toEqual(true);
            done();
          }
        }

        httpTriggerManager.run(Teste, context, args);
      });
  });
});
