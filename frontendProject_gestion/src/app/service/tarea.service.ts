import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http:HttpClient) { }

  url:string = "https://localhost:44336/api/Tarea";
  
  getTarea (){
    return this.http.get(this.url);
  }
  addTarea(tarea:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>(this.url, tarea);
  }

  updateTarea(idTarea:number, tarea:Tarea):Observable<Tarea>{
    return this.http.put<Tarea>(this.url +`/${idTarea}`, tarea);
  }

  deleteTarea(idTarea:number){
    return this.http.delete(this.url +`/${idTarea}`);
  }
}
