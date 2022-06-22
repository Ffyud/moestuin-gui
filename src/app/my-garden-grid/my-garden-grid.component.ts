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

  constructor(public gardenService: GardenService) { }

  createGridArray(x: number, y: number) {
    console.log("dimensie X: " + x);
    console.log("dimensie Y: " + y);
  }

  ngOnInit(): void {
    this.gardenService.getGarden(3).subscribe(
      data => {
        this.garden = JSON.parse(JSON.stringify(data));
        this.createGridArray(5, 4); // FIXME use returned dimensions
      }
    );  

  }

}
