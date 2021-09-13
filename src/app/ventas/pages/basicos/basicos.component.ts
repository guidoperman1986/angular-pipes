import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.html']
})
export class BasicosComponent implements OnInit {
  nombreLower = 'guido';
  nombreUpper = 'GUIDO';
  nombreCompleto = 'guiDo perMan';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
