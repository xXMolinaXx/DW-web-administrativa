import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Importar
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador-empresas',
  templateUrl: './administrador-empresas.component.html',
  styleUrls: ['./administrador-empresas.component.css']
})
export class AdministradorEmpresasComponent implements OnInit {
  
  arrObjetos:any=[];
  faPlus=faPlus;
  closeResult = '';
  nombreEmpresa:string='';
  descripcion:string='';
  nombreImagen:string='';
  constructor(private http: HttpClient,private modalService: NgbModal,private route: ActivatedRoute,private router:Router) {
    if(sessionStorage.getItem('usuario')==null){
      this.router.navigate(['/'])
    }
    
   }

  ngOnInit(): void {
    
      this.traerCategorias();
    
  }

  /*******CATEGORIAS */
 traerCategorias(){
  this.http.get('http://localhost:8888/categorias').subscribe(res=>{
    console.log(res);
    this.arrObjetos=res

    
    }); 
 }
  abrirModal(modal:any){
this.modalService.open(modal,{size:'lg',centered:true});
  }
  agregarCategoria(){
    //console.log({nombre:this.nombreEmpresa,descripcion: this.descripcion,urlImagen: this.nombreImagen});
    this.http.post('http://localhost:8888/categorias',{nombre:this.nombreEmpresa,descripcion: this.descripcion,urlImagen: this.nombreImagen})
    .subscribe(res=>{
      console.log(res);
    });
    this.modalService.dismissAll()
    this.traerCategorias()
  }
    /*******CATEGORIAS */
  eliminarCategoria(id:any){
    this.http.delete('http://localhost:8888/categorias/'+id)
    .subscribe(res=>{
      console.log(res);
      this.traerCategorias;
    });
  }

    

}
