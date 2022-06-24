import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-new-garden-content-form',
  templateUrl: './new-garden-content-form.component.html',
  styleUrls: ['./new-garden-content-form.component.css']
})
export class NewGardenContentFormComponent implements OnInit {

  constructor(public plantService: PlantService) { }

  plants!: Plant[];

  @Input()
  gridLocationX!: number;

  @Input()
  gridLocationY!: number;

  saveNewPlant(plantId: number) {
    // TODO save actie voor jiuste coordinaten
    // TODO event terug emitten om dialoog te sluiten
    console.log("Plant met id " + plantId + " opslaan voor locatie " +this.gridLocationX + ", " + this.gridLocationY)
  }

  ngOnInit(): void {
    this.plantService.getPlants().subscribe(
      data => { 
        this.plants = data;
        console.log(data)
       }
    );
  }

}
