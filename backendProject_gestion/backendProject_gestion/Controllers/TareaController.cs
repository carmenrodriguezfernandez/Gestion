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
    [EnableCors(origins: "*", headers: "*", methods: "GET, POST, PUT, DELETE, OPTIONS")]
    public class TareaController : ApiController
    {
        // GET api/Tarea
        public IEnumerable<Tarea> Get()
        {
            GestorTarea gTarea = new GestorTarea();
            return gTarea.GetTareas();
        }

        // GET api/Tarea/5
        public string Get(int idTarea)
        {
            return "value";
        }

        // POST api/Tarea
        public bool Post([FromBody] Tarea tarea)
        {
            GestorTarea gTarea = new GestorTarea();
            bool res = gTarea.addTarea(tarea);
            return res;
        }

        // PUT api/Tarea/5
        public bool Put(int idTarea, [FromBody] Tarea tarea)
        {
            GestorTarea gTarea = new GestorTarea();
            bool res = gTarea.updateTarea(idTarea, tarea);
            return res;
        }

        // DELETE api/Tarea/5
        public bool Delete(int idTarea)
        {
            GestorTarea gTarea = new GestorTarea();
            bool res = gTarea.deleteTarea(idTarea);
            return res;
        }
    }
}