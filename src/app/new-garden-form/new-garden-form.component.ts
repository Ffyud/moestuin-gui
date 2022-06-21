import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Garden } from '../garden';
import { GardenService } from '../garden.service';

@Component({
  selector: 'app-new-garden-form',
  templateUrl: './new-garden-form.component.html',
  styleUrls: ['./new-garden-form.component.css']
})
export class NewGardenFormComponent implements OnInit {

  garden = new Garden();

  constructor(public gardenService: GardenService) { }

  saveNewGarden() {
    this.gardenService.save(this.garden).subscribe();
    this.savingIsDone.emit(true);
  }

  @Output() savingIsDone = new EventEmitter<boolean>();
  
  ngOnInit(): void {
  }

}
