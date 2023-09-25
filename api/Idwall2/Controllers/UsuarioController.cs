using IdWall.Model;
using IdWall.Repository;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using static IdWall.Context.AppDbContext;

namespace IdWall.Controllers
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

        [HttpGet]
        public ActionResult<List<UsuarioModel>> Get()
        {
            try
            {
                var lista = usuarioRepository.ListarTodos();
                if (lista != null)
                {
                    return Ok(lista);

                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

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
