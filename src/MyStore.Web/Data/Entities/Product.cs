using System.ComponentModel.DataAnnotations.Schema;

namespace MyStore.Web.Data.Entities {
  public class Product {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public string Image { get; set; }
    public double Popularity { get; set; }
  }
}