import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventohijopadre';
  usuarios: string[] = [];

  actualizar(t: string) {
    this.usuarios.push(t);
  }
}
