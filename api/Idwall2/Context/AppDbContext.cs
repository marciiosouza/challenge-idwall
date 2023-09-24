using IdWall2.Model;
using Microsoft.EntityFrameworkCore;

namespace IdWall2.Context
{
    public class AppDbContext
    {
        public class DataBaseContext : DbContext
        {
            // Propriedade que será responsável pelo acesso a tabela de Pessoa
            public DbSet<SuspeitoModel> suspeito { get; set; }
            public DbSet<UsuarioModel> usuario { get; set; }




            public DataBaseContext(DbContextOptions options) : base(options)
            {
            }

            protected DataBaseContext()
            {
            }

        }
    }
}
