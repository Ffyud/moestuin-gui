import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Garden } from '../garden';
import { GardenService } from '../garden.service';
import { GardenContent } from '../gardencontent';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-new-garden-content-form',
  templateUrl: './new-garden-content-form.component.html',
  styleUrls: ['./new-garden-content-form.component.css']
})
export class NewGardenContentFormComponent implements OnInit {

  constructor(public plantService: PlantService, public gardenService: GardenService) { }

  plants!: Plant[];
  gardenContent!: GardenContent;
  plant!: Plant;
  garden!: Garden;

  @Input()
  gridLocationX!: number;

  @Input()
  gridLocationY!: number;

  saveEmpty() {
    this.gardenContent = new GardenContent();
    this.plant = new Plant();
    this.garden = new Garden();

    this.garden.id = 1; // FIXME rofl hardcoded
    this.gardenContent.positionX = this.gridLocationX;
    this.gardenContent.positionY = this.gridLocationY;

    this.gardenService.deleteGardenContent(this.garden.id, this.gardenContent.positionX, 
      this.gardenContent.positionY).subscribe(
        e => {
          console.log("Verwijder inhoud op " + this.gridLocationX + ", " + this.gridLocationY + " gelukt.");
          this.savingIsDone.emit(true); 
        }
      ); 
  }

  saveNewPlant(plantId: number) {
    console.log("Plant met id " + plantId + " opslaan voor locatie " +this.gridLocationX + ", " + this.gridLocationY)

    this.gardenContent = new GardenContent();
    this.plant = new Plant();
    this.garden = new Garden();

    this.plant.id = plantId;
    this.gardenContent.plant = this.plant;

    this.garden.id = 1; // FIXME rofl hardcoded
    this.gardenContent.garden = this.garden;

    this.gardenContent.positionX = this.gridLocationX;
    this.gardenContent.positionY = this.gridLocationY;

    this.gardenService.deleteGardenContent(this.garden.id, this.gardenContent.positionX, 
      this.gardenContent.positionY).subscribe(
        e => {
          console.log("Verwijderen van oude gardenContent gelukt.");
          this.gardenService.saveGardenContent(this.gardenContent).subscribe(
            data => { 
              console.log("Opslaan van nieuwe gardenContent gelukt.");
              this.savingIsDone.emit(true); 
            }
         );
        }
      ); 
  }

  @Output() savingIsDone = new EventEmitter<boolean>();
  
  ngOnInit(): void {
    this.plantService.getPlants().subscribe(
      data => { 
        this.plants = data;
       }
    );
  }
}
