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

        public SuspeitoModel ConsultarPorId(int id)
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
            var pessoa = dataBaseContext.suspeito.Where(r => r.nome.Contains(nome)).FirstOrDefault<SuspeitoModel>();

            return pessoa;
        }

        public void InserirSuspeito(SuspeitoModel pessoa)
        {
            dataBaseContext.suspeito.Add(pessoa);
            dataBaseContext.SaveChanges();
        }
    }
}
