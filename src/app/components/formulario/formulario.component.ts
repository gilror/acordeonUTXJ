import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  materiaSeleccionada = 'fdr';
  temaSeleccionado = '';



  materias: any[] = [
    { value: 'eoe_1', nombre: 'Expresión Oral y Escrita'},
    { value: 'fdr', nombre: 'Fundamentos de Redes'},
    { value: 'fdp', nombre: 'Fundamentos de Programación'},
    { value: 'poo', nombre: 'Programación Orientada a Objetos'},
    { value: 'edr', nombre: 'Enrutamiento de Redes'},
    { value: 'eoe_2', nombre: 'Expresión Oral y Escrita II'}

  ]

  temas: any[] = [
    { value: 'tema1', nombre: 'Ejemplo de tema 1'},
    { value: 'tema2', nombre: 'Ejemplo de tema 2'},
    { value: 'tema3', nombre: 'Ejemplo de tema 3'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarTema() {
    console.log(this.temaSeleccionado);
    console.log(this.materiaSeleccionada);
  }

}
