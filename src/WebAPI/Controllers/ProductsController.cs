using Microsoft.AspNetCore.Mvc;
using Domain.Entities;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Infrastructure.Data;
using System.Linq;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductsController(AppDbContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Product> Get() => _context.Products.ToList();

        [HttpPost]
        public IActionResult Post(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return CreatedAtAction(nameof(Post), product);
        }
    }
}
