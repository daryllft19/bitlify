import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appService: AppService) {}

  title = 'bitlify';
  longURL = 'http://bitly.com';
  shortURL = '';


  bitlify() {
    this.appService.createBitlink(this.longURL)
      .subscribe((data: any) => {
        this.shortURL = data.bitlink;
      });
  }
}
