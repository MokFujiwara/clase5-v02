import { Component } from '@angular/core';
//importar el componente de manejo de formularios
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Permite crear objetos que se pueden utilizar en nuestra página TypeScript.
  constructor() { }

  //Para definir una variable se ocupa
  // nombre:Tipo="valor inicial", los tipos pueden ser string, number, boolean, any, array (arreglo)
  rut: string = "12478333-6";
  nombreCompleto: string;
  edad: number;
  // Crearemos controles de formularios asociados a la etiqueta <ion-input>
  // <ion-input> [formControl]="elRut"> </ion-input>
  persona = new FormGroup({
    elRut: new FormControl(''),
    elNombreCompleto: new FormControl(''),
    laEdad: new FormControl(''),

  });
  //creación de un arreglo (Declarar)
  lista_personas = new Array();
  //crear un registro de personas
  perso:any;

  //creación de un método
  grabar() {
    this.perso={
      rut: this.persona.controls.elRut.value,
      nombre: this.persona.controls.elNombreCompleto.value,
      edad: this.persona.controls.laEdad.value
    };
    this.lista_personas.push(this.perso);
    var datos = this.lista_personas;
    localStorage.setItem('misdatos',JSON.stringify(datos));
    alert("Grabado");
  }
  eliminar() { }
  listar() { }


}
