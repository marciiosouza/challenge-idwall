using IdWall.Model;
using static IdWall.Context.AppDbContext;

namespace IdWall.Repository
{
    public class SuspeitoRepository
    {
        private readonly DataBaseContext dataBaseContext;


        public SuspeitoRepository(DataBaseContext ctx)
        {
            dataBaseContext = ctx;
        }

        public SuspeitoModel ConsultarPorId(string id)
        {
            var pessoa = dataBaseContext.suspeito.Find(id);

            return pessoa;
        }


        public IList<SuspeitoModel> Listar()
        {
            var lista = new List<SuspeitoModel>();
            lista = dataBaseContext.suspeito.ToList<SuspeitoModel>();
            return lista;
        }


        public SuspeitoModel ConsultarPorNome(String nome)
        {
            var pessoa = dataBaseContext.suspeito.Where(r => r.title.Contains(nome)).FirstOrDefault<SuspeitoModel>();

            return pessoa;
        }

        public void InserirSuspeito(SuspeitoModel suspeito)
        {
            dataBaseContext.suspeito.Add(suspeito);
            dataBaseContext.SaveChanges();
        }

        public void ExcluirSuspeito(SuspeitoModel suspeitoModel)
        {
            //var suspeito = new SuspeitoModel { SuspeitoId = id };

            dataBaseContext.suspeito.Remove(suspeitoModel);
            dataBaseContext.SaveChanges();
        }

        //public IList<SuspeitoModel>ListarPorClassificacao(char classificacao)
        //{
        //var lista = dataBaseContext.suspeito.Where(e => e.Classificacao.Equals(classificacao)).ToList<SuspeitoModel>();
        //return lista;
        //}

        public IList<SuspeitoModel> ListarPorNacionalidade(string nacionalidade)
        {
            var lista = dataBaseContext.suspeito.Where(e => e.nationality.Equals(nacionalidade)).ToList<SuspeitoModel>();
            return lista;
        }

        public int ContarTotalSuspeito()
        {
            var contador = dataBaseContext.suspeito.Count();
            return contador;
        }

        //public int ContarPorNacionalidade(string nacionalidade)
        //{
        //var total = dataBaseContext.suspeito.Count(s => s.Nacionalidade == nacionalidade);
        //return total;
        //}

        public void API(SuspeitoModel suspeitoModel)
        {
            dataBaseContext.suspeito.Add(suspeitoModel);
            dataBaseContext.SaveChanges();
        }

        public bool ExisteSuspeito(string id)
        {
            // Verifique se existe um suspeito com o ID especificado no banco de dados.
            bool suspeitoExiste = dataBaseContext.suspeito.Any(r => r.uid == id);

            return suspeitoExiste;
        }
    }
}
