import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Garden } from './garden';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

  constructor(public http: HttpClient) { }

  getGarden(id: number) {

    let params = new HttpParams().set("id", id);
    return this.http.get('http://localhost:8080/garden', {params: params});
  }

  save(garden: Garden) {
    return this.http.post('http://localhost:8080/garden', garden);
  }

}
