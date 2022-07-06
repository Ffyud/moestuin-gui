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
    .subscribe(
      data => {
        this.gardenContentArray = data;
        console.log(this.gardenContentArray);

        const result = this.gardenContentArray.filter((thing, index, self) => 
          index === self.findIndex((t) => (
          t.plant.id === thing.plant.id)
          )
        )
        this.gardenContentArray = result;


      }
    );
  }
}
