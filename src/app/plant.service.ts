import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Plant } from './plant';
import { GardenContent } from './gardencontent';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(public http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:8080/plant');
  }

}
