import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { HandlingformsComponent } from './handlingforms/handlingforms.component';
import {  RouterModule, Routes } from '@angular/router';
import { NewdirectiveDirective } from './newdirective.directive';
import { NewserviceService } from './newservice.service';
import { FormsModule } from '@angular/forms';
const appRoutes:Routes=[
  {path:'StringInterpolation',component:StringInterpolationComponent},
  {path:'PropertyBinding', component:PropertyBindingComponent},
  {path:'EventBinding', component:EventBindingComponent},
  {path:'Directives', component:DirectivesComponent},
  {path:'ServicesAndDependency', component:ServicesComponentComponent},
  {path:'HandlingForms', component:HandlingformsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DirectivesComponent,
    ServicesComponentComponent,
    HandlingformsComponent,
    NewdirectiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
