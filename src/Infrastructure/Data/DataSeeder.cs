using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public static class DataSeeder
    {
        public static async Task SeedAsync(UserManager<IdentityUser> userManager)
        {
            var admin = await userManager.FindByNameAsync("superadmin");
            if(admin == null)
            {
                var user = new IdentityUser { UserName = "superadmin" };
                await userManager.CreateAsync(user, "Admin123!");
            }
        }
    }
}
