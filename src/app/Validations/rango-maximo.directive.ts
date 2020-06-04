import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[RangoMaximo]',
  providers: [{provide:NG_VALIDATORS,useExisting:RangoMaximoDirective,multi:true}]
})
export class RangoMaximoDirective implements Validator {

  constructor() { }
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
  
    const rango = <number>control.value;
    if(!rango){return;}
    if(rango <2 || rango>70){
      return {'RangoMaximo' :{'message':'ingrese experiencias entre 2 y 70 años'}}
    }
    return null;

  }
 

}
