using IdWall2.Model;
using static IdWall2.Context.AppDbContext;

namespace IdWall2.Repository
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
