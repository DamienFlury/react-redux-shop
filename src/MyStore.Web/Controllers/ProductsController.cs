using Microsoft.AspNetCore.Mvc;
using MyStore.Web.Models;
using System.Collections.Generic;

namespace MyStore.Web.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : Controller {
        public IEnumerable<Product> GetAll() {
            return new [] { new Product { Id = 1, Title = "Apples", Cost = 1.5m } };
        }
    }
}