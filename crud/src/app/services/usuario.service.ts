import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { usuario: "jvalvin", nombre: "Jose", apellido: "Valvin", sexo: "Masculino" },
    { usuario: "residente", nombre: "Rene", apellido: "Algo", sexo: "Masculino" },
    { usuario: "piterwrite", nombre: "Pedro", apellido: "Paramo", sexo: "Masculino" },
    { usuario: "olverin", nombre: "Juan", apellido: "Olvera", sexo: "Masculino" },
    { usuario: "alixd", nombre: "Alici", apellido: "Winters", sexo: "Femenino" },
    { usuario: "ferchin", nombre: "Fernando", apellido: "Santgermain", sexo: "Masculino" },
    { usuario: "fleurent", nombre: "Gabriela", apellido: "Neofita", sexo: "Femenino" },
    { usuario: "alexita", nombre: "Alejandra", apellido: "Curnicova", sexo: "Femenino" },
    { usuario: "selena512", nombre: "Selena", apellido: "Quintanilla", sexo: "Femenino "}
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift( usuario );
  }
}
