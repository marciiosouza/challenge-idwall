using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IdWall2.Model
{
    [Table("Usuario")]
    public class UsuarioModel
    {
        [Key]
        public string Usuario { get; set; }  

        public string Email { get; set; }

        public string Senha { get; set; }

        public UsuarioModel(string usuario, string email, string senha)
        {
            Usuario = usuario;
            Email = email;
            Senha = senha;
        }
    }
}
