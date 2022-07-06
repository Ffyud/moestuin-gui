import { Component, OnInit } from '@angular/core';
import { GardenService } from '../garden.service';
import { GardenContent } from '../gardencontent';
import { of, pipe } from 'rxjs';
import { distinct } from 'rxjs/operators';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-my-garden-overview',
  templateUrl: './my-garden-overview.component.html',
  styleUrls: ['./my-garden-overview.component.css']
})
export class MyGardenOverviewComponent implements OnInit {

  gardenContentArray!: GardenContent[];
  monthsOfYear: Array<String> = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul",
    "aug", "sep", "okt", "nov", "dec"];

  currentMonth: number = new Date().getMonth() + 1;
  
  constructor(private gardenService: GardenService) { }

  getMonthActionSeed(seedPeriod: string, monthIndex: number) {
    let seedPeriodArray = seedPeriod.split(",");
    if(seedPeriodArray.includes(monthIndex.toString())) {
      return true;
    } else {
      return false;
    }
  }

  getMonthActionGround(plantPeriod: string, monthIndex: number) {
    let plantPeriodArray = plantPeriod.split(",");
    if(plantPeriodArray.includes(monthIndex.toString())) {
      return true;
    } else {
      return false;
    }
  }

  getMonthActionHarvest( harvestPeriod: string, monthIndex: number) {
    let harvestPeriodArray = harvestPeriod.split(",");
    if(harvestPeriodArray.includes(monthIndex.toString())) {
      return true;
    } else {
      return false;
    }
  }

  getMonthCurrent(monthIndex: number) {
    if(monthIndex === this.currentMonth) {
      return true;
    } else {
      return false;
    }
  }

  gardenId: number = 1; // FIXME hardcoded gardenId lol wut
  
  ngOnInit(): void {
    this.getOverviewContent();
  }

  private getOverviewContent() {
    this.gardenService.getGardenContent(this.gardenId)
      .pipe(
        // object simpeler maken?
        distinct()
      )
      .subscribe(
        data => {
          this.gardenContentArray = data;
        }
      );
  }
}
