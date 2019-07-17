using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyStore.Web.Data;
using MyStore.Web.Data.Entities;

namespace MyStore.Web.Controllers {

  [ApiController]
  [Route ("api/[controller]")]
  public class CheckoutController : ControllerBase {

    private readonly MyStoreContext _context;

    public CheckoutController (MyStoreContext context) => _context = context;

    [HttpPost]
    public async Task<IActionResult> CheckoutAsync ([FromBody] Cart cart) {
      _context.Purchases.Add (new Purchase {
        Items = cart.Items.Select (item => new CartItem { ProductId = item.ProductId, Quantity = item.Quantity }).ToList()
      });
      await _context.SaveChangesAsync ();
      return Ok ();
    }
  }
}