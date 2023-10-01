using IdWall.Model;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Idwall.Model
{
    [Table("DataNascimentoSuspeito")]
    public class DataNascimentoSuspeitoModel
    {
        [Key]
        public string uid { get; set; }
        [Key]
        public string dates_of_birth_used { get; set; }

        [ForeignKey("uid")]
        public SuspeitoModel Suspeito { get; set; }

    }



    
}
