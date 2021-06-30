import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  correo='';
  contrasena='';
  tipoUsuario=1;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  ingresar(){
    this.http.post('http://localhost:8888/usuarios/entrar',{
      correo: this.correo,
       contrasena: this.contrasena,
        tipoUsuario: this.tipoUsuario
    }).subscribe(res=>{
      console.log(res)
      this.router.navigate(['categorias'])
      sessionStorage.setItem('usuario',JSON.stringify(res));
    })
  }

}
