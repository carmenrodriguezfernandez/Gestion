using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backendProject_gestion.Models
{
    public class Tarea
    {
        public int idTarea { get; set; }
        public String titulo { get; set; }
        public String descripcion { get; set; }
       
        public int idUsuario { get; set; }


        public Tarea() { }
        public Tarea(int IdTarea, string Titulo, string Descripcion, int IdUsuario)

        {
            idTarea = IdTarea;
            titulo = Titulo;
            descripcion = Descripcion;
            idUsuario = IdUsuario;
        }

        public Tarea(string Titulo, string Descripcion, int IdUsuario)
        {
            titulo = Titulo;
            descripcion = Descripcion;
            idUsuario = IdUsuario;
        }



    }
}