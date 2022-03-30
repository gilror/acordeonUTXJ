import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listTemas: any[] = [];

  title = 'acordeonUTXJ';


  buscarTemas(parametros: any){
    console.log('Soy el padre')
    console.log(parametros)
  }


}
