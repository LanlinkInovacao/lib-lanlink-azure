import {HttpMethod} from '../../../../src/HttpRequest';
import {HttpTriggerMock} from '../../../../src/mock/HttpTriggerMock';


describe('AzureFunctionExecutableMock', () => {
  it('Validates if the default data is correct.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Get);
      expect(req.params).toEqual({});
      expect(req.query).toEqual({});
      expect(req.headers).toEqual({'Content-Type': 'application/json', 'Accept': 'application/json'});
      expect(req.body).toEqual(undefined);
      expect(req.rawBody).toEqual(undefined);
    });
    done();
  });

  it('Validates whether the result passed to the context done function is correct.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock
      .run((_context, req) => {
        _context.done('Error', {name: 'Play', team: 'Ceará'});
      })
      .done((error, result) => {
        expect(error).toEqual('Error');
        expect(result).toEqual({name: 'Play', team: 'Ceará'});
      });

    done();
  });

  it('Validates whether the result passed to the context done function is correct.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock
      .run((_context, req) => {
        _context.done(null, {name: 'Play', team: 'Ceará'});
      })
      .done((error, result) => {
        expect(error).toEqual(null);
        expect(result).toEqual({name: 'Play', team: 'Ceará'});
      });

    done();
  });

  it('Validate if header is added correctly.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.addHeader('Content-Type', 'application/x-www-form-urlencoded')
      .addHeader('Authorization', 'Bearer xxxxxxxx')
      .run((_context, req) => {
        expect(req.headers).toEqual({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer xxxxxxxx'
        });
      });
    done();
  });

  it('Validate the URL definition.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasUrl('http://api.cloudwedo.com/orders/10').run((_context, req) => {
      expect(req.url).toEqual('http://api.cloudwedo.com/orders/10');
    });
    done();
  });

  it('Validates the definition of HttpMethod.Get.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Get).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Get);
    });
    done();
  });

  it('Validates the definition of HttpMethod.Post.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Post).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Post);
    });
    done();
  });

  it('Validates the definition of HttpMethod.Delete.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Delete).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Delete);
    });
    done();
  });

  it('Validates the definition of HttpMethod.Head.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Head).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Head);
    });
    done();
  });

  it('Validates the definition of HttpMethod.Options.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Options).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Options);
    });
    done();
  });

  it('Validates the definition of HttpMethod.Patch.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Patch).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Patch);
    });
    done();
  });

  it('Validates the definition of HttpMethod.Post.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Post).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Post);
    });
    done();
  });

  it('Validates the definition of HttpMethod.Put.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Put).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Put);
    });
    done();
  });

  it('Validates the definition of HttpMethod.Trace.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasMethod(HttpMethod.Trace).run((_context, req) => {
      expect(req.method).toEqual(HttpMethod.Trace);
    });
    done();
  });

  it('Validates if the request body is set correctly.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasBody({name: 'Welson Play', team: 'Ceará'}).run((_context, req) => {
      expect(req.body).toEqual({name: 'Welson Play', team: 'Ceará'});
    });
    done();
  });

  it('Validate if when defining the query string in the url the query object is generated.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasUrl('https://contoso.com/orders?sort=name&sort-desc=id').run((_context, req) => {
      expect(req.query).toEqual({'sort': 'name', 'sort-desc': 'id'});
    });
    done();
  });

  it('Validates whether the params property is generated correctly.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasUrl('https://contoso.com/orders/10').hasPattern('orders/{id}').run((_context, req) => {
      expect(req.params).toEqual({id: '10'});
    });
    done();
  });

  it(
    'Validates whether the params property is generated correctly (The "/" will be used as the pattern prefix).',
    done => {
      const httpTriggerMock = new HttpTriggerMock();
      httpTriggerMock.hasUrl('https://contoso.com/orders/10').hasPattern('/orders/{id}').run((_context, req) => {
        expect(req.params).toEqual({id: '10'});
      });
      done();
    });

  it('Validates whether the params property is generated correctly (two levels).', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasUrl('https://contoso.com/orders/10/products/1')
      .hasPattern('orders/{orderId}/products/{productId}')
      .run((_context, req) => {
        expect(req.params).toEqual({orderId: '10', productId: '1'});
      });
    done();
  });

  it(
    'Validates whether the params property is generated correctly (two levels and the "/" will be used as the pattern prefix).',
    done => {
      const httpTriggerMock = new HttpTriggerMock();
      httpTriggerMock.hasUrl('https://contoso.com/orders/10/products/1')
        .hasPattern('/orders/{orderId}/products/{productId}')
        .run((_context, req) => {
          expect(req.params).toEqual({orderId: '10', productId: '1'});
        });
      done();
    });

  it('Validates whether the params property is mounted and formatted correctly.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasUrl('https://contoso.com/library/10/contains/book/publication-date/2019-02-01')
      .hasPattern('library/{libraryId:number}/contains/{contains:string}/publication-date/{publication:date}')
      .run((_context, req) => {
        expect(req.params).toEqual({libraryId: 10, contains: 'book', publication: new Date(Date.parse('2019-02-01'))});
      });
    done();
  });

  it(
    'Validate if when defining the query string and params in the url is generated the object query and params with formating.',
    done => {
      const httpTriggerMock = new HttpTriggerMock();
      httpTriggerMock.hasUrl('https://contoso.com/orders/10/products/1/quantity/10/price/5.3?sort=name&sort-desc=id')
        .hasPattern('/orders/{orderId}/products/{productId:number}/quantity/{quantity:int}/price/{price:float}')
        .run((_context, req) => {
          expect(req.query).toEqual({'sort': 'name', 'sort-desc': 'id'});
          expect(req.params).toEqual({orderId: '10', productId: 1, quantity: 10, price: 5.3});
        });
      done();
    });

  it('Validates if the request body is set correctly.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasBody({name: 'Welson Play', team: 'Ceará'}).run((_context, req) => {
      expect(req.body).toEqual({name: 'Welson Play', team: 'Ceará'});
    });
    done();
  });

  it('Validates the execution of a promise.', done => {
    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock.hasUrl('https://contoso.com/library/10/contains/book/publication-date/2019-02-01')
      .hasPattern('library/{libraryId:number}/contains/{contains:string}/publication-date/{publication:date}')
      .run(async (_context, req) => {
        expect(req.params).toEqual({libraryId: 10, contains: 'book', publication: new Date(Date.parse('2019-02-01'))});

        return 'value response';
      })
      .done((_error, response) => {
        expect(response).toEqual('value response');
      });
    done();
  });

  it('Validates the execution of function with error.', done => {
    const runFunction = () => {
      throw new Error('Error test');
    };

    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock
      .run(() => {
        runFunction();
      })
      .done((error, result) => {
        expect(error).toThrow('Error test');
      });
    done();
  });

  it('Validates the execution of a promise with error.', done => {
    const runFunction = () => {
      throw new Error('Error test');
    };

    const httpTriggerMock = new HttpTriggerMock();
    httpTriggerMock
      .run(async () => {
        throw new Error('Error test');
      })
      .done((error) => {
        expect(error).toThrow('Error test');
      });
    done();
  });
});