import { HttpTriggerManager } from "../../../../src/triggers/http/HttpTriggerManager";

import { HttpTriggerMock } from "../../../../src/mock/HttpTriggerMock";
import {
  Get,
  Param,
  HttpTrigger,
  Query
} from "../../../../src/triggers/http/HttpTrigger";

describe("HttpTriggerManager", () => {
  it("validates the execution of choose best method.", async done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock
      .hasUrl("https://contoso.com/orders/10")
      .hasPattern("/orders/{orderId}")
      .run((context, args) => {
        const httpTriggerManager = new HttpTriggerManager();

        @HttpTrigger()
        class Teste {
          name: "Welson Play";

          @Get("orders/:orderId")
          getOrderByid(@Param("orderId") orderId: number) {
            expect(true).toEqual(true);
            done();
          }

          @Get("orders/:orderId/{format:alpha}")
          getOrderByIdWithFormat(
            @Query() orderId: number,
            @Param("product") format: string
          ) {
            // expect(true).toEqual(true);
            // done();
          }
        }

        httpTriggerManager.run(Teste, context, args);
      });
  });
});

describe("HttpTriggerManager", () => {
  it("validates the execution of choose best method.", async done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock
      .hasUrl("https://contoso.com/orders/10")
      .hasPattern("/orders/{orderId}")
      .run((context, args) => {
        const httpTriggerManager = new HttpTriggerManager();

        @HttpTrigger()
        class OrdersController {
          @Get("orders/:orderId")
          getOrderByid(@Param("orderId") orderId: number) {
            expect(true).toEqual(true);
            done();
          }

          @Get("orders/:orderId/{format:alpha}")
          getOrderByIdWithFormat(
            @Query() orderId: number,
            @Param("product") format: string
          ) {
            expect(true).toEqual(false);
            done();
          }
        }

        httpTriggerManager.run(OrdersController, context, args);
      });
  });
});
