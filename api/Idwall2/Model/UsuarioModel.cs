using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IdWall.Model
{
    [Table("Usuario")]
    public class UsuarioModel
    {
        [Key]
        public string Email { get; set; }

        public string Senha { get; set; }

        public UsuarioModel(string email, string senha)
        {
            Email = email;
            Senha = senha;
        }
    }
}
