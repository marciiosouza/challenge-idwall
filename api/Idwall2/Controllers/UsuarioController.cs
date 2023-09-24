using IdWall2.Model;
using IdWall2.Repository;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using static IdWall2.Context.AppDbContext;

namespace IdWall2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly UsuarioRepository usuarioRepository;

        public UsuarioController(DataBaseContext ctx)
        {
            usuarioRepository = new UsuarioRepository(ctx);
        }

        [HttpPost]
        public ActionResult<UsuarioModel> Post([FromBody] UsuarioModel usuariomodel)
        {
            try
            {
                usuarioRepository.InserirUsuario(usuariomodel);
                var location = new Uri(Request.GetEncodedUrl()+"/"+ usuariomodel.Usuario);

                return Created(location, usuariomodel);
            }catch (Exception ex)
            {
                return BadRequest(new { message = $"Não foi possível cadastrar suspeito" });
            }
        }

    }
}
