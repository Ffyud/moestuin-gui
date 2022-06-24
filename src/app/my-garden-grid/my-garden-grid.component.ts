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
    console.log("Aantal vaken breed: " + y);
    console.log("Aantal vakken hoog: " + x);
  }

  elementHasContent(x: number, y: number) {
    console.log("check wat op plek " + x + ", " + y + " staat: ")
    const returnvalue = this.gardenContentArray.find(element => element.positionX == x && element.positionY == y);
    if(returnvalue !== undefined) {
      return "hasPlant"
    } else {
      return "hasNone"; // niet gevonden
    }
  }
  
  toggleDisplayGardenContentModal(x: number, y:number) {
    console.log("Kies een groente voor vak " + x + ", " + y)
    this.dimensionX = x;
    this.dimensionY = y;
    this.isShowModalContent = !this.isShowModalContent;
  }

  ngOnInit(): void {
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
        console.log("Gardencontent: ") 
        console.log(this.gardenContentArray)
        // FIXME gardencontent moet in dat model geduwt worden
      }
    );

  }

}
