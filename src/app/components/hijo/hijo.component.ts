import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() nombrehijo: string='sin nombre';
  @Output() cambioNombreHijo= new EventEmitter<string>();
  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }
cambiarnombre(){
  this.nombrehijo ='Nils Llanos';
  this.cambioNombreHijo.emit(this.nombrehijo);
  this.dataService.nombreUsuario = this.nombrehijo;
}
}
