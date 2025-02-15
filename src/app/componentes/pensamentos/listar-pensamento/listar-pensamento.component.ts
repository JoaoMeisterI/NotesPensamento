import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent,CommonModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'I Love Angular',
      autoria:'João Pedro Meister Ivacow',
      modelo: 'modelo1'
    },
    {
      conteudo: 'I Love React',
      autoria:'João Pedro Meister Ivacow',
      modelo: 'modelo3'
    },
    {
      conteudo: "A tecnologia evolui rapidamente, impactando a sociedade em diversas áreas. Inteligência artificial, automação e computação em nuvem transformam negócios e a vida cotidiana. Estar atualizado e adaptar-se às mudanças é essencial para o sucesso no mundo moderno e competitivo.",
      autoria:'João Pedro Meister Ivacow',
      modelo: 'modelo3'
    }
  ]
}
