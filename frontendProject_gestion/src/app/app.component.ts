import { Component } from '@angular/core';
import { UsuarioService } from './service/usuario.service';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario:Usuario = new Usuario();
  datatable:any = [];

  constructor(private usuarioService:UsuarioService){

  }

  ngOnInit(): void{
    this.onDataTable();
  }

  onDataTable(){
    this.usuarioService.getUsuario().subscribe(res => {
      this.datatable = res;
      console.log(res);
    } );
  }

onAddUsuario(usuario:Usuario):void{
  this.usuarioService.addUsuario(usuario).subscribe(res => {
    if(res){
      alert(`El usuario ${usuario.nombre} se ha registrado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}

onUpdateUsuario(usuario:Usuario):void{
  this.usuarioService.updateUsuario(usuario.idUsuario, usuario).subscribe(res => {
    if(res){
      alert(`El usuario número ${usuario.idUsuario} se ha modificado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}

onDeleteUsuario(idUsuario:number):void{
  this.usuarioService.deleteUsuario(idUsuario).subscribe(res => {
    if(res){
      alert(`El usuario número ${idUsuario} se ha eliminado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}

onSetData(select:any){
  this.usuario.idUsuario = select.idUsuario;
  this.usuario.nombre = select.nombre;
  this.usuario.correo = select.correo;
}

clear(){
  this.usuario.idUsuario =0;
  this.usuario.nombre = "";
  this.usuario.correo = "";
}
}

