import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  materiaSeleccionada = 'fdr';
  carreraSeleccionada = 'tsudsm';
  cuatrimestreSeleccionado = 1;

  carreras: any[] = [
    { value: 'tsudsm', nombre: 'TSU DSM'},
    { value: 'idgs', nombre: 'IDGS'},
    // { value: 'admon', nombre: 'Administración'}
  ]

  cuatrimestres: number[] = [ 1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11 ]

  materias: any[] = [
    { value: 'eoe_1', nombre: 'Expresión Oral y Escrita'},
    { value: 'fdr', nombre: 'Fundamentos de Redes'},
    { value: 'fdp', nombre: 'Fundamentos de Programación'},
    { value: 'poo', nombre: 'Programación Orientada a Objetos'},
    { value: 'edr', nombre: 'Enrutamiento de Redes'},
    { value: 'eoe_2', nombre: 'Expresión Oral y Escrita II'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarTema() {
    console.log(this.carreraSeleccionada);
    console.log(this.cuatrimestreSeleccionado);
    console.log(this.materiaSeleccionada);
  }

}
