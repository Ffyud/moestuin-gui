import { Plant } from "./plant";
import { Garden } from "./garden";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class GardenContent {
    id!: number;
    positionY: number = 0;
    positionX: number = 0;
    plant!: Plant;
    garden!: Garden;
}