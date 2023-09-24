using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IdWall.Model
{
    [Table("Suspeito")]
    public class SuspeitoModel
    {
        [Key]
        [Required]
        [Column("SUSPEITOID")]
        public int SuspeitoId { get; set; }

        [Column("NOME")]
        public string Nome { get; set; }
        [Column("CLASSIFICACAO")]
        public char Classificacao { get; set; }
        [Column("SEXO")]
        public char Sexo { get; set; }
        [Column("ENDERECO")]
        public string Endereco { get; set; }
        [Column("NACIONALIDADE")]
        public string Nacionalidade { get; set; }

        public SuspeitoModel()
        {
        }

        public SuspeitoModel(int suspeitoId, string nome, char classificacao, char sexo, string endereco, string nacionalidade)
        {
            SuspeitoId = suspeitoId;
            Nome = nome;
            Classificacao = classificacao;
            Sexo = sexo;
            Endereco = endereco;
            Nacionalidade = nacionalidade;
        }
    }
}
