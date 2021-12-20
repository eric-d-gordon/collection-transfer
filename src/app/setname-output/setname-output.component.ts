import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setname-output',
  templateUrl: './setname-output.component.html',
  styleUrls: ['./setname-output.component.css']
})
export class SetnameOutputComponent implements OnInit {

  setname: String = "set name here";

  constructor() { }

  ngOnInit(): void {
  }

}
