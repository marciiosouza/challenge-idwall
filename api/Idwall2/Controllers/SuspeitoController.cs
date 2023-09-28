
using IdWall.Model;
using IdWall.Repository;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using static IdWall.Context.AppDbContext;

namespace IdWall.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SuspeitoController : ControllerBase
    {

        private readonly SuspeitoRepository suspeitoRepository;


        public SuspeitoController(DataBaseContext context)
        {
            suspeitoRepository = new SuspeitoRepository(context);
        }

        [HttpGet]
        public ActionResult<List<SuspeitoModel>> ListarTodos()
        {
            try
            {
                var lista = suspeitoRepository.Listar();
                if(lista != null)
                {
                    return Ok(lista);

                }
                else
                {
                    return NotFound();
                }
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }

        }
       


        [HttpGet("{id:int}")]
        public ActionResult<SuspeitoModel> ListarPorId([FromRoute] int id)
        {

            try
            {
                var pessoalModel = suspeitoRepository.ConsultarPorId(id);
                return Ok(pessoalModel);
            }
            catch (KeyNotFoundException e)
            {
                throw e;
            }
        }

        [HttpPost]
        public ActionResult<SuspeitoModel> Post([FromBody] SuspeitoModel suspeitoModel)
        {
            try
            {
                suspeitoRepository.InserirSuspeito(suspeitoModel);
                var location = new Uri(Request.GetEncodedUrl() + "/" + suspeitoModel.SuspeitoId);
                return Created(location, suspeitoModel);
            }
            catch(Exception ex)
            {
                //return BadRequest(new {message = $"Não foi possível cadastrar orepresentante"});
                return BadRequest(ex);
            }
        }


        [HttpDelete("{id:int}")]
        public ActionResult<SuspeitoModel> DeletarSuspeito([FromRoute] int id)
        {
            try
            {
                var suspeitoModel = suspeitoRepository.ConsultarPorId(id);

                if (suspeitoModel != null)
                {
                    suspeitoRepository.ExcluirSuspeito(suspeitoModel);
                    // Retorno Sucesso.
                    // Efetuou a exclusão, porém sem necessidade de informar os dados.
                    return NoContent();
                }
                else
                {
                    return NotFound("Não encontrado!");
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }


        [HttpGet("classificacao/{classificacao}")]
        public ActionResult<List<SuspeitoModel>> ListarPorClassificacao([FromRoute] char classificacao)
        {
            var lista = suspeitoRepository.ListarPorClassificacao(classificacao);
            return Ok(lista);
        }

        [HttpGet("nacionalidade/{nacionalidade}")]
        public ActionResult<List<SuspeitoModel>> ListarporNacionalidade([FromRoute] string nacionalidade)
        {
            var lista = suspeitoRepository.ListarPorNacionalidade(nacionalidade);
            return Ok(lista);
        }

        [HttpGet("contador")]
        public int ContadorSuspeitoTotal()
        {
            var contador = suspeitoRepository.ContarTotalSuspeito();
            return contador;
        }

        [HttpGet("contadorNacionalidade/{nacionalidade}")]
        public int ContadorSuspeitoPorNacionalidade(string nacionalidade)
        {
            var contador = suspeitoRepository.ContarPorNacionalidade(nacionalidade);
            return contador;
        }

    }
}
