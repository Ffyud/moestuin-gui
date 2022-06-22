import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { Garden } from '../garden';

@Component({
  selector: 'app-my-garden',
  templateUrl: './my-garden.component.html',
  styleUrls: ['./my-garden.component.css']
})
export class MyGardenComponent implements OnInit {

  garden!: Object;

  constructor(public gardenService: GardenService) { }

  ngOnInit(): void {
    this.gardenService.getGarden(1).subscribe(
      data => this.garden = data
    );

    
    console.log("my-garden open"); // FIXME data ophalen van get request
  }

}
