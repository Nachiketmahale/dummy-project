import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  @Input() user:{name:string, email:string};
  data:string="Data variable"
  constructor() { }

  ngOnInit(): void {
  }

}
