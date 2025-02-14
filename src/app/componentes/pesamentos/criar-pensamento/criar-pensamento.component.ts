import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent implements OnInit {


  pensamento = {
    id: '1',
    conteudo:'Aprendendo Angular',
    autoria: 'Dev',
    modelo:'modelo1'
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  CriarPensamento() {
    alert("NOVO PENSAMENTO CRIADO")
  }

  CancelarPensamento() {
    alert("CANCELANDO PENSAMENTO")
  }

}
