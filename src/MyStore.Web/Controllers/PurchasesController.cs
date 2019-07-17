using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyStore.Web.Data;
using MyStore.Web.Data.Entities;

namespace MyStore.Web.Controllers {
  [ApiController]
  [Route("api/[controller]")]
  public class PurchasesController : ControllerBase {

    private readonly MyStoreContext _context;

    public PurchasesController(MyStoreContext context) => _context = context;

    [HttpGet]
    public ActionResult<IEnumerable<Purchase>> Purchases() => Ok(_context.Purchases.Include(p => p.Items));
  }
}