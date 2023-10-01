

using IdWall.Model;
using IdWall.Repository;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.DirectoryServices.Protocols;
using static IdWall.Context.AppDbContext;

namespace IdWall.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SuspeitoController : ControllerBase
    {

        private readonly SuspeitoRepository suspeitoRepository;

        private readonly DataBaseContext dataBaseContext;

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





        [HttpGet("{id}")]
        public ActionResult<SuspeitoModel> ListarPorId([FromRoute] string id)
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
                var location = new Uri(Request.GetEncodedUrl() + "/" + suspeitoModel.uid);
                return Created(location, suspeitoModel);
            }
            catch (Exception ex)
            {
                //return BadRequest(new {message = $"Não foi possível cadastrar orepresentante"});
                return BadRequest(ex);
            }
        }


        //[HttpDelete("{id:int}")]
        //public ActionResult<SuspeitoModel> DeletarSuspeito([FromRoute] string id)
        //{
        //    try
        //    {
        //        var suspeitoModel = suspeitoRepository.ConsultarPorId(id);

        //        if (suspeitoModel != null)
        //        {
        //            suspeitoRepository.ExcluirSuspeito(suspeitoModel);
        //            // Retorno Sucesso.
        //            // Efetuou a exclusão, porém sem necessidade de informar os dados.
        //            return NoContent();
        //        }
        //        else
        //        {
        //            return NotFound("Não encontrado!");
        //        }
        //    }
        //    catch (Exception e)
        //    {
        //        return BadRequest();
        //    }
        //}


        //[HttpGet("classificacao/{classificacao}")]
        //public ActionResult<List<SuspeitoModel>> ListarPorClassificacao([FromRoute] char classificacao)
        //{
        //    var lista = suspeitoRepository.ListarPorClassificacao(classificacao);
        //    return Ok(lista);
        //}

        //[HttpGet("nacionalidade/{nacionalidade}")]
        //public ActionResult<List<SuspeitoModel>> ListarporNacionalidade([FromRoute] string nacionalidade)
        //{
        //    var lista = suspeitoRepository.ListarPorNacionalidade(nacionalidade);
        //    return Ok(lista);
        //}


        [HttpGet("nome/{nome}")]
        public ActionResult<List<SuspeitoModel>> ProcurarNome([FromRoute] string nome)
        {
            var Suspeito = suspeitoRepository.ConsultarPorNome(nome);
            return Ok(Suspeito);
        }

        //[HttpGet("contador")]
        //public int ContadorSuspeitoTotal()
        //{
        //    var contador = suspeitoRepository.ContarTotalSuspeito();
        //    return contador;
        //}

        //[HttpGet("contadorNacionalidade/{nacionalidade}")]
        //public int ContadorSuspeitoPorNacionalidade(string nacionalidade)
        //{
        //    var contador = suspeitoRepository.ContarPorNacionalidade(nacionalidade);
        //    return contador;
        //}





        [HttpGet("wanted")]
        public async Task<IActionResult> GetWantedListAndDisplayInConsole()
        {

            try
            {


                // Crie uma instância do HttpClient (certifique-se de instalar o pacote NuGet System.Net.Http se ainda não estiver instalado).
                using (HttpClient client = new HttpClient())
                {
                    // Defina um tempo limite de 30 segundos para a solicitação.
                    client.Timeout = TimeSpan.FromSeconds(30);

                    // Crie um CancellationTokenSource para monitorar o tempo limite.
                    using (var cts = new CancellationTokenSource())
                    {
                        // Atribua o token de cancelamento ao token do HttpClient.
                        client.DefaultRequestHeaders.Add("User-Agent", "YourApp"); // Adicione um User-Agent se necessário.
                        client.CancelPendingRequests();
                        cts.Token.Register(() => client.CancelPendingRequests());

                        // Defina a URL da API que deseja consultar.
                        string apiUrl = "https://api.fbi.gov/@wanted?pageSize=200&page=1&sort_on=modified&sort_order=desc";

                        try
                        {
                            // Faça a solicitação GET para a API com o token de cancelamento.
                            HttpResponseMessage response = await client.GetAsync(apiUrl, cts.Token);

                            // Verifique se a solicitação foi bem-sucedida (código de status 200 OK).
                            if (response.IsSuccessStatusCode)
                            {

                                // Leia o conteúdo da resposta como uma string.
                                string content = await response.Content.ReadAsStringAsync();

                                // Desserialize o JSON em um objeto ApiResponse.
                                var apiResponse = JsonConvert.DeserializeObject<Root>(content);

                                // Itere sobre os itens da API e exiba os dados no console.
                                foreach (var item in apiResponse.items)
                                {
                                    if (item.uid != null)
                                    {
                                        var existeSuspeito = suspeitoRepository.ExisteSuspeito(item.uid);

                                        //var ExisteSuspeito = dataBaseContext.suspeito.Where(r => r.uid.Contains(item.uid)).FirstOrDefault<SuspeitoModel>();
                                        if (existeSuspeito == false)
                                        {

                                        // string json = @"{
                                        //    ""dates_of_birth_used"": [
                                        //        ""string1"",
                                        //        ""string2"",
                                        //        ""string3""
                                        //    ]
                                        //}";

                                            var entity = new SuspeitoModel();
                                            entity.uid = item.uid;
                                            entity.description = item.description;
                                            entity.nationality = item.nationality;
                                            entity.title = item.title;
                                            entity.sex = item.sex;
                                            entity.status = item.status;

                                            // Combina os valores do array em uma única string separada por vírgulas

                                            //var jsonData = JsonConvert.DeserializeObject<SuspeitoModel>(json);
                                            //entity.dates_of_birth_used = string.Join(", ", jsonData.dates_of_birth_used);

                                            suspeitoRepository.API(entity);
                                        }
                                    }
                                }
                                // Retorne uma resposta indicando que os dados foram exibidos no console.
                                return Ok(apiResponse);
                            }
                            else
                            {
                                return StatusCode((int)response.StatusCode, $"Erro na solicitação: {response.StatusCode}");
                            }
                        }
                        catch (TaskCanceledException)
                        {
                            // A solicitação foi cancelada devido ao tempo limite.
                            return BadRequest("A solicitação excedeu o tempo limite.");
                        }
                    }
                }
            }
            catch (HttpRequestException e)
            {
                return BadRequest($"Erro na solicitação HTTP: {e.Message}");
            }
        }


        //[HttpGet("wantedinterpol")]
        //public async Task<IActionResult> GetWantedInterpol()
        //{

        //    try
        //    {


        //        // Crie uma instância do HttpClient (certifique-se de instalar o pacote NuGet System.Net.Http se ainda não estiver instalado).
        //        using (HttpClient client = new HttpClient())
        //        {
        //            // Defina um tempo limite de 30 segundos para a solicitação.
        //            client.Timeout = TimeSpan.FromSeconds(30);

        //            // Crie um CancellationTokenSource para monitorar o tempo limite.
        //            using (var cts = new CancellationTokenSource())
        //            {
        //                // Atribua o token de cancelamento ao token do HttpClient.
        //                client.DefaultRequestHeaders.Add("User-Agent", "YourApp"); // Adicione um User-Agent se necessário.
        //                client.CancelPendingRequests();
        //                cts.Token.Register(() => client.CancelPendingRequests());

        //                // Defina a URL da API que deseja consultar.
        //                string apiUrl = "https://ws-public.interpol.int/notices/v1/red";

        //                try
        //                {
        //                    // Faça a solicitação GET para a API com o token de cancelamento.
        //                    HttpResponseMessage response = await client.GetAsync(apiUrl, cts.Token);

        //                    // Verifique se a solicitação foi bem-sucedida (código de status 200 OK).
        //                    if (response.IsSuccessStatusCode)
        //                    {

        //                        // Leia o conteúdo da resposta como uma string.
        //                        string content = await response.Content.ReadAsStringAsync();

        //                        // Desserialize o JSON em um objeto ApiResponse.
        //                        var apiResponse = JsonConvert.DeserializeObject<ApiResponseInterpol>(content);
        //                        if (apiResponse != null && apiResponse.supeitoInterpol != null)
        //                        {
        //                            // Itere sobre os itens da API e exiba os dados no console.
        //                            foreach (var item in apiResponse.supeitoInterpol)
        //                            {
        //                                Console.WriteLine(item);
        //                                //if (item.uid != null)
        //                                //{
        //                                //    var existeSuspeito = suspeitoRepository.ExisteSuspeito(item.uid);

        //                                //    //var ExisteSuspeito = dataBaseContext.suspeito.Where(r => r.uid.Contains(item.uid)).FirstOrDefault<SuspeitoModel>();
        //                                //    if (existeSuspeito == false)
        //                                //    {
        //                                //        var entity = new SuspeitoModel();
        //                                //        entity.uid = item.uid;
        //                                //        entity.description = item.description;
        //                                //        entity.nationality = item.nationality;
        //                                //        entity.title = item.title;
        //                                //        entity.sex = item.sex;
        //                                //        entity.status = item.status;

        //                                //        suspeitoRepository.API(entity);
        //                                //    }
        //                                //}
        //                            }
        //                        }
        //                    // Retorne uma resposta indicando que os dados foram exibidos no console.
        //                        return Ok(apiResponse);
        //                    }
        //                    else
        //                    {
        //                        return StatusCode((int)response.StatusCode, $"Erro na solicitação: {response.StatusCode}");
        //                    }
        //                }
        //                catch (TaskCanceledException)
        //                {
        //                    // A solicitação foi cancelada devido ao tempo limite.
        //                    return BadRequest("A solicitação excedeu o tempo limite.");
        //                }
        //            }
        //        }
        //    }
        //    catch (HttpRequestException e)
        //    {
        //        return BadRequest($"Erro na solicitação HTTP: {e.Message}");
        //    }
        //}




    }
}
