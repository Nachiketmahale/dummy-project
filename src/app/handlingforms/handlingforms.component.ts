import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-handlingforms',
  templateUrl: './handlingforms.component.html',
  styleUrls: ['./handlingforms.component.css']
})
export class HandlingformsComponent implements OnInit {
  @ViewChild('f') reference:NgForm;

  constructor() {}

  ngOnInit(): void {
  }
  Onsubmit(form:NgForm){
    console.log(form.value);

  }
}
