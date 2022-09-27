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
    this.resultCalculus = ''
    this.resultConsult = ''
  }

  title = 'front-peak';

  readonly apiURL: string;

  resultCalculus: Object;
  resultConsult: Object;

  sendValues(inputValue: HTMLInputElement, inputParcels: HTMLInputElement) {
    this.http.post(`${ this.apiURL }/value=${inputValue.value}&parcel=${inputParcels.value}`, null)
      .subscribe(result => this.resultCalculus = `R$ ${result.toLocaleString()}`)
  }

  sendID(inputID: any) {
    if (inputID.value == 1 || inputID.value == 2 || inputID.value == 3) {
      this.http.get(`${ this.apiURL }/${inputID.value}`)
      .subscribe(result => this.resultConsult = `${result}`)
    }

    if (inputID.value != 1 || inputID.value != 2 || inputID.value != 3) {
      this.resultConsult = 'ID Não Encontrada :/'
    }
  }
}
