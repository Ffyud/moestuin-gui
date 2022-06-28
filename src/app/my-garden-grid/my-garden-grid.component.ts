import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { Garden } from '../garden';
import { GardenContent } from '../gardencontent';

@Component({
  selector: 'app-my-garden-grid',
  templateUrl: './my-garden-grid.component.html',
  styleUrls: ['./my-garden-grid.component.css']
})
export class MyGardenGridComponent implements OnInit {

  garden!: Garden;
  gardenContentArray!: GardenContent[]; // FIXME het model gebruiken

  isShowModalContent = true;
  dimensionX = 0;
  dimensionY = 0;

  constructor(public gardenService: GardenService) { }

  createGridArray(x: number, y: number) {
    console.log("Aantal vakken breed: " + y);
    console.log("Aantal vakken hoog: " + x);
  }

  // FIXME wordt te vaak gebruikt
  getBlockPlantContent(x: number, y: number) { 
    if(this.gardenContentArray !== undefined) {
      const returnvalue = this.gardenContentArray.find(element => element.positionX == x && element.positionY == y);
      if(returnvalue !== undefined) {
        return returnvalue.plant;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  
  toggleDisplayGardenContentModal(x: number, y:number) {
    console.log("Kies een groente voor vak " + x + ", " + y)
    this.dimensionX = x;
    this.dimensionY = y;
    this.isShowModalContent = !this.isShowModalContent;
  }

  newGardenContentSubmitted() {
    this.isShowModalContent = true;
    this.getGardenAndGardenContent();
  }
  
  ngOnInit(): void {
    this.getGardenAndGardenContent();
  }

  private getGardenAndGardenContent() {
    let gardenId = 1;
    this.gardenService.getGarden(gardenId).subscribe(
      data => {
        this.garden = data;
        this.createGridArray(data.dimensionX, data.dimensionY);
      }
    );

    this.gardenService.getGardenContent(gardenId).subscribe(
      data => {
        this.gardenContentArray = data;
      }
    );
  }
}
