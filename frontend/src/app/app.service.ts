import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  createBitlink(longURL:string) {
    return this.http.post(`${environment.bitlifyURL}/bitlify`, {
      longURL 
    });
  }
}
