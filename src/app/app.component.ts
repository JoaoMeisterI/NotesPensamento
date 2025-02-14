import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CriarPensamentoComponent } from './componentes/pesamentos/criar-pensamento/criar-pensamento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RodapeComponent,CriarPensamentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes-pensamentos';
}
