using System.ComponentModel.DataAnnotations;

namespace my_contacts_back.Models
{
    public class Contact
    {
        [Key]
        public string personalId { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string email { get; set; }
        public string phoneNumber { get; set; }
    }
}
