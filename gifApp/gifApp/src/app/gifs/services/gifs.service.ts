import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "R4ScInZXLXHSjENI2MrzSoXAw76K7caO";
  private serviceUrl: string = "https://api.giphy.com/v1/gifs";
  private _historial: string[] = [];

  public results: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {

    if( localStorage.getItem("historial") ) {
      this._historial = JSON.parse(localStorage.getItem("historial")!);
    }
  }

  buscarGifs(query: string) {

    query = query.trim().toLowerCase();

    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      localStorage.setItem("historial", JSON.stringify(this.historial))
    }

    if(this._historial.length === 10) {
      this._historial.pop();
    }

    const params = new HttpParams()
                      .set('api_key', this.apiKey )
                      .set('limit', 10 )
                      .set('q', query );

    console.log(params.toString());
    this.http.get<SearchGifsResponse>(`${ this.serviceUrl }/search`, { params })
    .subscribe((res) => {
      this.results = res.data;
    })
  }
}
