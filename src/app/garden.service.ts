import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  // Hoort misschien in aparte gardenContent service
  getGardenContent(id: number): Observable<GardenContent[]> {
    return this.http.get<GardenContent[]>('http://localhost:8080/gardencontent/garden/' + id);
  }

  save(garden: Garden) {
    return this.http.post('http://localhost:8080/garden', garden);
  }

}
