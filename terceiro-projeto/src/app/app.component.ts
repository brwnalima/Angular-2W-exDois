import { Component, OnInit } from '@angular/core';


interface Colaborador {
  id: number;
  nome: string;
  salario: number; 
  cargo: string;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  
  
    nathan: Colaborador = {
      id: 7,
      nome: "Nathan Carlos Exercicio",
      salario: 4500,
      cargo: "Dev Pl"
    }
    
  
  title: string = 'Listagem de Colaboradores';

  ngOnInit(): void {
    
  }

}
