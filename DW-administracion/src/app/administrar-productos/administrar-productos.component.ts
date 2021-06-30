import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent implements OnInit {
  productos:any=[];
  idCategoria=this.route.snapshot.paramMap.get("idCategoria");
  idComercio=this.route.snapshot.paramMap.get("idComercio");
  faPlus=faPlus;
  imagen='';
  nombre='';
  descripcion='';
  precio=0;

  constructor(private http:HttpClient,private route:ActivatedRoute,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.traerProductos();
  }
  traerProductos(){
    this.http.get(`http://localhost:8888/categorias/${this.idCategoria}/productos/${this.idComercio}`)
    .subscribe( (res:any) =>{
      console.log(res);
      this.productos=res[0].productos;
    })
  }

  abrirModal(modal:any){
    this.modalService.open(modal,{size:'lg',centered:true});
      }

  agregarProducto(){
    this.http.post(`http://localhost:8888/categorias/${this.idCategoria}/productos/${this.idComercio}`,{
      imagen: this.imagen,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
    }).subscribe(
      result=>{
        console.log(result);
        this.traerProductos();
      }
    )
    
  }
}
