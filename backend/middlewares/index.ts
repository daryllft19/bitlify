import {Middleware, ExpressErrorMiddlewareInterface} from "routing-controllers";

@Middleware({ type: "after" })
export default class DefaultErrorHandler implements ExpressErrorMiddlewareInterface {

  error(error: any, request: any, response: any, next: (err: any) => any) {
      response
        .status(error.response.status)
        .send({
          message: error.message
        });
    }

}
