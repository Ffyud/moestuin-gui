import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

  constructor() { }

  isShow = true;
  newGardenMade = false;

  toggleDisplay() {
    console.log("Maak nieuwe tuin!")
    this.isShow = !this.isShow;
  }

  newGardenSubmitted() {
    this.toggleDisplay();
  }

  ngOnInit(): void {
  }

}
