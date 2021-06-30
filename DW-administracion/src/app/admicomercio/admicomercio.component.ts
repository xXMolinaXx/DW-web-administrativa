import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Importar
import { Router } from '@angular/router';

@Component({
  selector: 'app-admicomercio',
  templateUrl: './admicomercio.component.html',
  styleUrls: ['./admicomercio.component.css']
})
export class AdmicomercioComponent implements OnInit {
  idCategoria=this.route.snapshot.paramMap.get("idCategoria");
  categoria=this.route.snapshot.paramMap.get("nombreCategoria");
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
    this.traerComercios();
  }
  abrirModal(modal:any){
this.modalService.open(modal,{size:'lg',centered:true})
  }

  /******COMERCIOS */
  traerComercios(){
    this.http.get(`http://localhost:8888/categorias/comercios/${this.idCategoria}`).subscribe(res=>{
      console.log(res);
      this.arrObjetos=res

      }); 
   }
   /*****AGREGAR COMERCIO */
   agregarComercio(){
     this.http.post(`http://localhost:8888/categorias/${this.idCategoria}/comercios`,{
      idCategoria:this.idCategoria,
      nombre:this.nombreEmpresa,
      imagen:this.nombreImagen,
      logo:'logo.jpg',
      descripcion:this.descripcion
     }).subscribe(res=>{
       console.log(res);
      this.traerComercios();
      this.modalService.dismissAll()
      })
   }

}
