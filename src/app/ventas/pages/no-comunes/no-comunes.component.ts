import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect
  nombre = 'Guido';
  genero = 'masculino'
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Roberto', 'Carlos','Luciana'];
  clientesMap = {
    '=0': 'No tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(): void {
    this.genero === 'masculino'
      ? (
          this.nombre = 'Romina',
          this.genero = 'femenino'
        )
      : (
        this.nombre = 'Guido',
        this.genero = 'masculino'
      )
  }

  borrarCliente(): void {
    if (this.clientes.length > 0){
      this.clientes.pop();
    }
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //jsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: true
    }
  ]

  miObservable = interval(3500);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500)
  })

}
