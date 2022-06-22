import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-garden-content-form',
  templateUrl: './new-garden-content-form.component.html',
  styleUrls: ['./new-garden-content-form.component.css']
})
export class NewGardenContentFormComponent implements OnInit {

  constructor() { }

  saveNewPlant() {
    console.log("nieuwe plant ")
  }
  ngOnInit(): void {
  }

}
