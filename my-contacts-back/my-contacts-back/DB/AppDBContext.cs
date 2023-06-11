using Microsoft.EntityFrameworkCore;
using my_contacts_back.Models;

namespace my_contacts_back.DB
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
