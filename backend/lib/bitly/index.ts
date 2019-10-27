import axios from 'axios';
import logger from '../logger';

export class BitlyService {
  axios:any;

  constructor(accessToken:string){
    this.axios = axios.create({
      baseURL: process.env.BITLY_URL,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async createBitlink(longURL:string) {
    const bitlink = await this.axios.post('/v4/bitlinks', {
      long_url: longURL
    });

    logger.info(`[ ${longURL} ] [ ${bitlink.data.link} ]`);
    return bitlink.data;
  }
}
