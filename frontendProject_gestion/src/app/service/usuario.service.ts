import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:44336/api/Usuario";
  
  getUsuario (){
    return this.http.get(this.url);
  }

  addUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario);
  }

  updateUsuario(idUsuario:number, usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(this.url +`/${idUsuario}`, usuario);
  }

  deleteUsuario(idUsuario:number){
    return this.http.delete(this.url +`/${idUsuario}`);
  }
  
}
