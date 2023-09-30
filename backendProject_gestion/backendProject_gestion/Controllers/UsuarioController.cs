using backendProject_gestion.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace backendProject_gestion.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"GET, POST, PUT, DELETE, OPTIONS")]

    public class UsuarioController : ApiController
    {
        // GET api/Usuario
        public IEnumerable<Usuario> Get()
        {
            GestorUsuario gUsuario = new GestorUsuario();
            return gUsuario.GetUsuarios();
        }

        // GET api/Usuario/5
        public string Get(int idUsuario)
        {
            return "value";
        }

        // POST api/Usuario
        public bool Post([FromBody] Usuario usuario)
        {
            GestorUsuario gUsuario = new GestorUsuario();
            bool res = gUsuario.addUsuario(usuario);
            return res;
        }

        // PUT api/Usuario/5
        public bool Put(int idUsuario, [FromBody] Usuario usuario)
        {
            GestorUsuario gUsuario = new GestorUsuario();
            bool res = gUsuario.updateUsuario(idUsuario, usuario);
            return res;
        }

        // DELETE api/Usuario/5
        public bool Delete(int idUsuario)
        {
            GestorUsuario gUsuario = new GestorUsuario();
            bool res = gUsuario.deleteUsuario(idUsuario);
            return res;
        }
    }
}