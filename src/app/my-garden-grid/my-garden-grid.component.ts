import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { Garden } from '../garden';

@Component({
  selector: 'app-my-garden-grid',
  templateUrl: './my-garden-grid.component.html',
  styleUrls: ['./my-garden-grid.component.css']
})
export class MyGardenGridComponent implements OnInit {

  garden!: Garden;

  isShowModalContent = true;
  dimensionX = 0;
  dimensionY = 0;

  constructor(public gardenService: GardenService) { }

  createGridArray(x: number, y: number) {
    console.log("Aantal vaken breed: " + y);
    console.log("Aantal vakken hoog: " + x);
  }
  
  toggleDisplayGardenContentModal(x: number, y:number) {
    console.log("Kies een groente voor vak " + x + ", " + y)
    this.dimensionX = x;
    this.dimensionY = y;
    this.isShowModalContent = !this.isShowModalContent;
  }

  ngOnInit(): void {

    this.gardenService.getGarden(1).subscribe(
      data => {
        this.garden = data;
        this.createGridArray(data.dimensionX, data.dimensionY);
      }
    );  

  }

}
