import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Garden } from './garden';
import { GardenContent } from './gardencontent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GardenService {

  constructor(public http: HttpClient) { }

  getGarden(id: number): Observable<Garden> {
    return this.http.get<Garden>('http://localhost:8080/garden/' + id);
  }

  deleteGardenContent(gardenId: number, locationX: number, locationY: number): Observable<HttpStatusCode> {
    return this.http.delete<HttpStatusCode>('http://localhost:8080/gardencontent/garden/' + gardenId + '/' + locationX + '/' + locationY)
  }

  getGardenContent(gardenId: number): Observable<GardenContent[]> {
    return this.http.get<GardenContent[]>('http://localhost:8080/gardencontent/garden/' + gardenId);
  }

  saveGardenContent(gardenContent: GardenContent) {
    return this.http.post('http://localhost:8080/gardencontent/', gardenContent);
  }

  save(garden: Garden) {
    return this.http.post('http://localhost:8080/garden', garden);
  }

}
