using Microsoft.AspNetCore.Mvc;
using Domain.Entities;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> Products = new();

        [HttpGet]
        public IEnumerable<Product> Get() => Products;

        [HttpPost]
        public IActionResult Post(Product product)
        {
            product.Id = Products.Count + 1;
            Products.Add(product);
            return CreatedAtAction(nameof(Post), product);
        }
    }
}
