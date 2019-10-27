import { JsonController, Body, Post, BadRequestError } from "routing-controllers";
import { BitlyService } from '../../lib/bitly';


@JsonController()
export default class BitlyController {
  bs: any;
  constructor() {
    this.bs = new BitlyService(process.env.BITLY_ACCESS_TOKEN);
  }
  @Post("/bitlify")
  async post(@Body() data: any) {
    if (!Object.keys(data).includes('longURL'))
      throw new BadRequestError('longURL missing');

    const bl = await this.bs.createBitlink(data.longURL);
    return {
      bitlink: bl.link
    }; 
  }
}
