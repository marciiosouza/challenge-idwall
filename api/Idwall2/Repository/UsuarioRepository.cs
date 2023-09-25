using IdWall.Model;
using static IdWall.Context.AppDbContext;

namespace IdWall.Repository
{
    public class UsuarioRepository
    {
        private readonly DataBaseContext dataBaseContext;

        public UsuarioRepository(DataBaseContext ctx)
        {
            dataBaseContext = ctx;
        }

        public IList<UsuarioModel> ListarTodos()
        {
            var lista = new List<UsuarioModel>();
            lista = dataBaseContext.usuario.ToList<UsuarioModel>();
            return lista;
        }

        public void InserirUsuario(UsuarioModel usuario)
        {
            dataBaseContext.usuario.Add(usuario);
            dataBaseContext.SaveChanges();
        }

        //public void ExcluirUsuario(string usuario)
        //{
        //    var usuario = new UsuarioModel { Usuario = usu };
        //}


    }
}
