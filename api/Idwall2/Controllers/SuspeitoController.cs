using IdWall2.Model;
using IdWall2.Repository;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using static IdWall2.Context.AppDbContext;

namespace IdWall2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SuspeitoController : ControllerBase
    {

        private readonly SuspeitoRepository pessoaRepository;


        public SuspeitoController(DataBaseContext context)
        {
            pessoaRepository = new SuspeitoRepository(context);
        }

        [HttpGet]
        public ActionResult<List<SuspeitoModel>> Get()
        {
            try
            {
                var lista = pessoaRepository.Listar();
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
        public ActionResult<SuspeitoModel> GetporId([FromRoute] int id)
        {

            try
            {
                var pessoalModel = pessoaRepository.ConsultarPorId(id);
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
                pessoaRepository.InserirSuspeito(suspeitoModel);
                var location = new Uri(Request.GetEncodedUrl() + "/" + suspeitoModel.SuspeitoId);
                return Created(location, suspeitoModel);
            }
            catch(Exception ex)
            {
                return BadRequest(new {message = $"Não foi possível cadastrar orepresentante"});
            }
        }
        
    }
}
