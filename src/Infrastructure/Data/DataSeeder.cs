using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public static class DataSeeder
    {
        public static async Task SeedAsync(UserManager<IdentityUser> userManager)
        {
            var admin = await userManager.FindByNameAsync("admin@example.com");
            if(admin == null)
            {
                var user = new IdentityUser { UserName = "admin@example.com", Email = "admin@example.com", EmailConfirmed = true };
                await userManager.CreateAsync(user, "Admin@123");
            }
        }
    }
}
