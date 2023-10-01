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
        //[JsonIgnore]
        //public List<ImagemSuspeito> images { get; set; }
        // [JsonIgnore]
        // public List<ArquivosSuspeitos> files { get; set; }
        // public string warning_message { get; set; }
        // public string remarks { get; set; }
        // public string details { get; set; }
        // public string additional_information { get; set; }
        // public string caution { get; set; }
        // public string reward_text { get; set; }
        // // public int reward_min { get; set; }
        // // public int reward_max { get; set; }
        // [JsonIgnore]
        //public List<string> dates_of_birth_used { get; set; }
        //public List<string> dates_of_birth_used { get; set; }



        // Propriedade de navegação para DataNascimentoSuspeitoModel
        [NotMapped]
        public List<string> dates_of_birth_used { get; set; }
        // // public string place_of_birth { get; set; }
        // //[JsonIgnore]
        //// public List<string> locations { get; set; }
        // //[JsonIgnore]
        // //public List<string> field_offices { get; set; }
        // //[JsonIgnore]
        // //public List<string> legat_names { get; set; }
        public string status { get; set; }
        // public string person_classification { get; set; }
        // public string poster_classification { get; set; }
        // public string ncic { get; set; }
        // [JsonIgnore]
        // public int? age_min { get; set; }
        // [JsonIgnore]
        // public int? age_max { get; set; }
        // [JsonIgnore]
        // public int weight_min { get; set; }
        // [JsonIgnore]
        // public int weight_max { get; set; }
        // [JsonIgnore]
        // //public int? height_min { get; set; }
        // //public int? height_max { get; set; }
        // //public string eyes { get; set; }
        // //public string hair { get; set; }
        // //public string build { get; set; }
        public string sex { get; set; }
        // //public string race { get; set; }

        public string nationality { get; set; }
        // //public string scars_and_marks { get; set; }
        // //public string complexion { get; set; }
        // //[JsonIgnore]
        // //[JsonProperty("occupations")]
        // //public List<string> Occupations { get; set; }
        // //[JsonIgnore]
        // //public List<string> possible_countries { get; set; }
        // //[JsonIgnore]
        // //public List<string> possible_states { get; set; }
        // public string modified { get; set; }
        // public string publication { get; set; }
        // public string path { get; set; }

        //public SuspeitoModel(string id, string description)
        //{
        //    this.uid = id;
        //    this.description = description;
        //}


    }




    public class Root
    {
        public int total { get; set; }
        public int page { get; set; }
        public List<SuspeitoModel> items { get; set; }
    }
}
