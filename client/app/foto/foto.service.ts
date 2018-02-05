import { Response } from '@angular/http/src/static_response';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { FotoComponent } from './foto.component';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

  http: Http;
  headers: Headers;
  url: string = 'v1/fotos';

  constructor(http: Http) {

    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  cadastra(foto: FotoComponent): Observable<Response> {

    return this.http
      .post(this.url, JSON.stringify(foto), { headers: this.headers })
  }

  lista(): Observable<FotoComponent[]> {
    
    return this.http
      .get(this.url).map(res => res.json())
  }

  remove(foto: FotoComponent): Observable<Response> {

    return this.http.delete(this.url+'/'+foto._id);
  }


}