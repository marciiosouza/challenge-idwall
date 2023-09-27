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
                var location = new Uri(Request.GetEncodedUrl()+"/"+ usuariomodel.Email);

                return Created(location, usuariomodel);
            }catch (Exception ex)
            {
                return BadRequest(new { message = $"Não foi possível cadastrar suspeito" });
            }
        }


        [HttpPost("/encontrarUsuario")]
        public ActionResult<UsuarioModel> EncontrarUsuario([FromBody] UsuarioModel usuariomodel)
        {

            Console.WriteLine(usuariomodel.Email);
            Console.WriteLine(usuariomodel.Senha);
            var usuarioEncontrado = usuarioRepository.ExisteUsuario(usuariomodel.Email, usuariomodel.Senha);
            Console.WriteLine(usuarioEncontrado);
            if (usuarioEncontrado != null)
            {
                return Ok(usuarioEncontrado); // Retorna o usuário encontrado
            }

            return NotFound("Usuário não encontrado");
        }

        [HttpOptions]
        public IActionResult EncontrarUsuarioOptions()
        {
            // Adicione este código
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:5173");
            return Ok();
        }

    }
}
