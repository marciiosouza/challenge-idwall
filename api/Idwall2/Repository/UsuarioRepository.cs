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

        public void InserirUsuario(UsuarioModel usuario) {
            dataBaseContext.usuario.Add(usuario);
            dataBaseContext.SaveChanges();
        }
    }
}
