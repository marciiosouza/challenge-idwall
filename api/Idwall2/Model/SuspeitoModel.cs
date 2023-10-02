using Idwall.Model;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IdWall.Model
{
    [Table("Suspeito")]
    public class SuspeitoModel
    {
        //public string @id { get; set; }
        [Key]
        public string uid { get; set; }

        public string title { get; set; }

        public string description { get; set; }
   
        public string status { get; set; }
       
        public string sex { get; set; }
        // //public string race { get; set; }

        [NotMapped]
        public string DatesOfBirthUsed { get; set; }

        public string nationality { get; set; }

        public string departamento { get; set; }

    }




    public class Root
    {
        public int total { get; set; }
        public int page { get; set; }
        public List<SuspeitoModel> items { get; set; }


    }
}
