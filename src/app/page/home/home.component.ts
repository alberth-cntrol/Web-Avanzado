import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre:string ='Nombre usuario';

  constructor() { }

  ngOnInit(): void {
  }
  cambiarnombre(){
    this.nombre ='Alberth Castillo'
  }

}
