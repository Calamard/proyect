import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ialumno',
  templateUrl: './ialumno.component.html',
  styleUrls: ['./ialumno.component.css']
   
})
export class IalumnoComponent  {

  signupForm: FormGroup
    
  constructor(
    private _builder: FormBuilder
  ){
    this.signupForm=this._builder.group({
      nombres:['', Validators.required] ,
      apellidos: ['', Validators.required], 
      email: ['', Validators.compose([Validators.email, Validators.required])] ,
      rut: ['', Validators.required],
      clave: ['', Validators.required] ,

    })
  }

  enviar(values){
    alert("Alumno creado con éxito")
    console.log(values)
  }

  
  
}
