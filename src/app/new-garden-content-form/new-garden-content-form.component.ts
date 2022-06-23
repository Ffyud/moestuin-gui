import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-garden-content-form',
  templateUrl: './new-garden-content-form.component.html',
  styleUrls: ['./new-garden-content-form.component.css']
})
export class NewGardenContentFormComponent implements OnInit {

  constructor() { }

  @Input()
  gridLocationX!: number;

  @Input()
  gridLocationY!: number;

  saveNewPlant() {
    // TODO save actie voor jiuste coordinaten
    // TODO event terug emitten om dialoog te sluiten
    console.log("nieuwe plant ")
  }

  ngOnInit(): void {
  }

}
