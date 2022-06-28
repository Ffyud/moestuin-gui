import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { GardenContent } from '../gardencontent';

@Component({
  selector: 'app-my-garden-overview',
  templateUrl: './my-garden-overview.component.html',
  styleUrls: ['./my-garden-overview.component.css']
})
export class MyGardenOverviewComponent implements OnInit {

  gardenContentArray!: GardenContent[];
  monthsOfYear: Array<String> = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul",
    "aug", "sep", "okt", "nov", "dec"];
  
  constructor(private gardenService: GardenService) { }

  // TODO maak van een string een array

  getMonthActionSeed(seedPeriod: string, monthIndex: number) {
    if(seedPeriod.includes(monthIndex.toString())) {
      return true;
    } else {
      return false;
    }
  }

  getMonthActionGround(plantPeriod: string, monthIndex: number) {
    if(plantPeriod.includes(monthIndex.toString())) {
      return true;
    } else {
      return false;
    }
  }

  getMonthActionHarvest( harvestPeriod: string, monthIndex: number) {
    if(harvestPeriod.includes(monthIndex.toString())) {
      return true;
    } else {
      return false;
    }
  }

  gardenId: number = 1; // FIXME hardcoded gardenId lol wut
  
  ngOnInit(): void {
    this.gardenService.getGardenContent(this.gardenId).subscribe(
      data => { this.gardenContentArray = data; }
    );
  }

}
