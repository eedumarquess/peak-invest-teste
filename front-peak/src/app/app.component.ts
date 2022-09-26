import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(
    private http: HttpClient,
  ) {
    this.apiURL = 'https://localhost:7044'
  }

  title = 'front-peak';

  readonly apiURL: string;

  sendValues() {
    this.http.post(`${ this.apiURL }/value=100&parcel=1`, null)
      .subscribe(result => console.log(result))
  }

  sendID() {
    this.http.get(`${ this.apiURL }/1`)
      .subscribe(result => console.log(result))
  }
}
