using Microsoft.EntityFrameworkCore;

namespace Mission10_Rossiter.Data
{
    public class BowlerDbContext : DbContext
    {
        public BowlerDbContext(DbContextOptions<BowlerDbContext> options) : base(options) 
        { 
        }

        public DbSet<Bowlers> Bowlers { get; set; }
    }
}
