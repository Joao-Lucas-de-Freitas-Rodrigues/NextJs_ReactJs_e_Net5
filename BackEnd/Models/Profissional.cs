using System.ComponentModel.DataAnnotations;

namespace Integracao.Models
{
    public class Profissional
    {
        [Key]
        public int id { get; set; }
        
        [Required]
        public string nome{ get; set; }

        [Required]
        public int idade { get; set; }

        [Required]
        public string profissao { get; set; }

        [Required]
        [StringLength(11)]
        public string telefone { get; set; }

        [Required]
        public double salario { get; set; }
    }
}
