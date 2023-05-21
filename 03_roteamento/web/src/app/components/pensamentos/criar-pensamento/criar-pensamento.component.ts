import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: 1,
    conteudo:'Estudando Angular',
    autoria: "Dev",
    modelo:"modelo2"
  }

  constructor() { }

  criarPensamento(){
    alert('Novo pensamento criado')
  }

  cancelarPensamento(){

  }

  ngOnInit(): void {
  }


}
