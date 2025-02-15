import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'pensamento-component',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent implements OnInit{

  // [] é quem recebe as infos de fora no caso pensamento é uma var de um componete filho
  // Thumb component - componente que recebe todas as infos de fora
  @Input() pensamento = {
    conteudo: 'I Love Angular',
    autoria:'João Pedro Meister Ivacow',
    modelo: 'modelo3'
  }


  ngOnInit(): void {

  }

  larguraPensamento() : string
  {
    if(this.pensamento.conteudo.length > 256)
    {
      return 'pensamento-g'
    }
    return 'pensamento-p'

  }

}
