import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
  providers:[NewserviceService]
})

export class PropertyBindingComponent implements OnInit {
  btn1State:boolean=false;
  btn2State:boolean=true;
  btn3State:boolean=true;
  btn4State:boolean=false;
  btn5State:boolean=true;
  btn6State:boolean=false
  inputState:boolean=true;
  btn1:string="edit";
  btn2:string="readonly"
  btn3:string="show";
  btn4:string="hide";
  text:string="";
  showStatus:boolean=true;
  status:boolean=true;
  input1displatstatus={};
  input1displaystatus='display';
  input2displaystatus='display';
  constructor(private logservice:NewserviceService) {}

  ngOnInit(): void {
  }

  changeState(){
  }

  btn1Click(){
    this.btn1State=true;
    this.btn2State=false;
    this.inputState=false;
  }

  btn2Click(){
    this.btn1State=false;
    this.btn2State=true;
    this.inputState=true;
  }

  btn3Click(){
    this.showStatus=true;
    this.btn3State=true;
    this.btn4State=false;
    // this.input1displaystatus="display";
  //  this.logservice.changename("display");
  }

  btn4Click(){
   this.showStatus=false;
   this.btn4State=true;
   this.btn3State=false;
  //  this.input1displaystatus="hide";
  // this.logservice.changename(this.input1displaystatus,"hide");
  }

  btn5Click(){
    this.status=true;
    this.btn5State=true;
    this.btn6State=false;
    this.input2displaystatus=this.logservice.changename('display');
    // this.logservice.changename(this.input1displaystatus,"display");
    // console.log(this.input1displaystatus);
  }
  btn6Click(){
    this.status=false;
    this.btn5State=false;
    this.btn6State=true;
    this.input2displaystatus=this.logservice.changename('hide');
    // this.input2displaystatus="hide";
    // this.logservice.changename(this.input1displaystatus,"hide");
    // console.log(this.input1displaystatus);

  }
  onchange(event:Event){
    this.text=(<HTMLInputElement>event.target).value
  }
}
