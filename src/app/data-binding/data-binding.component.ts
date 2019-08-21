import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "https://estudante.sc.senai.br//";
  urlImagem: string = "http://lorempixel.com/400/200/sports/"
  valorArmazenado: string= " ";
  valorAtual: string= " ";
  isMouseOver: boolean = false;
  showMessage: boolean = false
  valorCSS: string = " ";


  constructor() { }

  ngOnInit() {
  }

  onKeyUp(evento:KeyboardEvent){
    
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  armazenarValor(valor:string){
    this.valorArmazenado= valor;
    
  }
  onMouseOver(){
    this.isMouseOver = true;
  }
  onMouseOut(){
    this.isMouseOver = false;
  }

  changeShowMessage(){
    this.showMessage = !this.showMessage;
  }
  mudarValor(valor:string){
    this.valorCSS = valor;

  }

}
