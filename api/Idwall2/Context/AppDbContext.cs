
using Idwall.Model;
using IdWall.Model;
using Microsoft.EntityFrameworkCore;

namespace IdWall.Context
{
    public class AppDbContext
    {
        public class DataBaseContext : DbContext
        {
            // Propriedade que será responsável pelo acesso a tabela de Pessoa
            public DbSet<SuspeitoModel> suspeito { get; set; }
            public DbSet<UsuarioModel> usuario { get; set; }
            //public DbSet<SuspeitoInterpolModel> suspeitoInterpol { get; set; }




            public DataBaseContext(DbContextOptions options) : base(options)
            {
            }

            protected DataBaseContext()
            {
            }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.Entity<DataNascimentoSuspeitoModel>()
                    .HasKey(d => new { d.uid, d.dates_of_birth_used });

                base.OnModelCreating(modelBuilder);
            }

        }
    }
}
