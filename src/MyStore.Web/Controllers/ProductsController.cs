using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyStore.Web.Data;
using MyStore.Web.Data.Entities;

namespace MyStore.Web.Controllers {

  [ApiController]
  [Route("api/[controller]")]
  public class ProductsController : ControllerBase {

    private readonly MyStoreContext _context;

    public ProductsController(MyStoreContext context)
     => _context = context;

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public ActionResult<IEnumerable<Product>> Products() => Ok(_context.Products);

  }
}