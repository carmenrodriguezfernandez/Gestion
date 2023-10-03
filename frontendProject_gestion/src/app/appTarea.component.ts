import { Component } from '@angular/core';
import { TareaService } from './service/tarea.service';
import { Tarea } from './models/tarea';

@Component({
  selector: 'appTarea-root',
  templateUrl: './appTarea.component.html',
  styleUrls: ['./appTarea.component.css']
})
export class AppTareaComponent {
  tarea:Tarea = new Tarea();
  datatable:any = [];

  constructor(private tareaService:TareaService){

  }

  ngOnInit(): void{
    this.onDataTable();
  }

  onDataTable(){
    this.tareaService.getTarea().subscribe(res => {
      this.datatable = res;
      console.log(res);
    } );
  }

onAddTarea(tarea:Tarea):void{
  this.tareaService.addTarea(tarea).subscribe(res => {
    if(res){
      alert(`La tarea ${tarea.titulo} se ha registrado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}

onUpdateTarea(tarea:Tarea):void{
  this.tareaService.updateTarea(tarea.idTarea, tarea).subscribe(res => {
    if(res){
      alert(`La tarea número ${tarea.idTarea} se ha modificado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}

onDeleteTarea(id:number):void{
  this.tareaService.deleteTarea(id).subscribe(res => {
    if(res){
      alert(`La tarea número ${id} se ha eliminado con exito!`);
      this.clear();
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}

onSetData(select:any){
  this.tarea.idTarea = select.idTarea;
  this.tarea.titulo = select.titulo;
  this.tarea.descripcion = select.descripcion;
}

clear(){
  this.tarea.idTarea =0;
  this.tarea.titulo = "";
  this.tarea.descripcion = "";
}
}

