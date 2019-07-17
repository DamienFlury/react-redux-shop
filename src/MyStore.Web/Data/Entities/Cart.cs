using System.Collections.Generic;

namespace MyStore.Web.Data.Entities {
  public class Cart {
    public int Id { get; set; }
    public ICollection<CartItem> Items { get; set; }
  }
}