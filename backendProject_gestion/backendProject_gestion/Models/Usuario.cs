using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backendProject_gestion.Models
{
    public class Usuario
    {
        public int idUsuario { get; set; }
        public String nombre { get; set; }
        public String correo { get; set; }
        

        public Usuario() { }
        public Usuario(int IdUsuario, string Nombre, string Correo)
        {
            idUsuario = IdUsuario;
            nombre = Nombre;
            correo = Correo;
            
        }

        public Usuario(string Nombre, string Correo)
        {
            nombre = Nombre;
            correo = Correo;
         
        }

    }
}