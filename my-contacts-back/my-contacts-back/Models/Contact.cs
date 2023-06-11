using System.ComponentModel.DataAnnotations;

namespace my_contacts_back.Models
{
    public class Contact
    {
        [Key]
        public string PersonalId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
