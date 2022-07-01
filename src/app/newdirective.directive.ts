import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewdirective]'
})
export class NewdirectiveDirective implements OnInit{

  constructor(private renderer:Renderer2,private elementref:ElementRef) { }
  @Input() colorname:string;
  @HostBinding('style.backgroundColor') backgroundColor:string;
  @HostListener('mouseenter') mouseover(eventData:Event) {
    // this.renderer.setStyle(this.elementref.nativeElement,'background-color','transparent');
    this.backgroundColor='transparent';
    this.renderer.setStyle(this.elementref.nativeElement,
      'color','black');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event) {
    // this.renderer.setStyle(this.elementref.nativeElement,'background-color','red');
    this.backgroundColor=this.colorname;
    this.renderer.setStyle(this.elementref.nativeElement,
      'color','#eee');
  }
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementref.nativeElement,'background-color','red');
    this.backgroundColor=this.colorname;
    this.renderer.setStyle(this.elementref.nativeElement,
    'color','#eee');
    this.renderer.setStyle(this.elementref.nativeElement,
      'text-align','center');
  }
  
}
