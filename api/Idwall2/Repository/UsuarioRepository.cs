using IdWall.Model;
using Microsoft.EntityFrameworkCore;
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

        public UsuarioModel ExisteUsuario(string email, string senha)
        {
            // Consulta o banco de dados para encontrar um usuário com o email especificado
            var usuarioRetornado = dataBaseContext.usuario.FirstOrDefault(u => u.Email == email );

            if (usuarioRetornado != null)
            {
                // Verifique se a senha corresponde à senha no banco de dados
                if (usuarioRetornado.Senha == senha)
                {
                    return usuarioRetornado; // Senha corresponde, retornamos o usuário
                }
            }

            return null; // Usuário não encontrado ou senha incorreta, retornamos null
        }

        //public UsuarioModel ExisteUsuario(string email, string senha)
        //{
        //    // Consulta o banco de dados para encontrar um usuário com o email especificado
        //    var usuario = dataBaseContext.usuario.FirstOrDefault(u => u.Email == email);

        //    if (usuario != null)
        //    {
        //        // Verifique se a senha corresponde à senha no banco de dados
        //        if (usuario.Senha == senha)
        //        {
        //            return usuario; // Senha corresponde, retornamos o usuário
        //        }
        //    }

        //    return null; // Usuário não encontrado ou senha incorreta, retornamos null
        //}

        //public void ExcluirUsuario(string usuario)
        //{
        //    var usuario = new UsuarioModel { Usuario = usu };
        //}


    }
}
