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
        public string nome { get; set; }
        [Column("CLASSIFICACAO")]
        public string classificacao { get; set; }
        [Column("SEXO")]
        public char sexo { get; set; }
        [Column("ENDERECO")]
        public string endereco { get; set; }

        public SuspeitoModel()
        {
        }

        public SuspeitoModel(int suspeitoId, string nome, string classificacao, char sexo, string endereco)
        {
            SuspeitoId = suspeitoId;
            this.nome = nome;
            this.classificacao = classificacao;
            this.sexo = sexo;
            this.endereco = endereco;
        }
    }
}
