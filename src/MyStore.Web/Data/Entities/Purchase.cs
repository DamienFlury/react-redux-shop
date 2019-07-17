using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyStore.Web.Data.Entities {
  public class Purchase {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public ICollection<CartItem> Items { get; set; }
  }
}