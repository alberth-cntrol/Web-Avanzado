import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  @Output() evento = new EventEmitter();
  index:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario() {
    this.evento.emit("Usuario " + this.index);
    this.index++
  }
}