using Microsoft.EntityFrameworkCore;
using MyStore.Web.Data.Entities;

namespace MyStore.Web.Data {
  public class MyStoreContext : DbContext {
    public MyStoreContext (DbContextOptions<MyStoreContext> options) : base (options) { }

    protected override void OnModelCreating (ModelBuilder modelBuilder) {
      base.OnModelCreating (modelBuilder);
      // modelBuilder.Entity<ProductPurchase>().HasKey(pp => new { pp.ProductId, pp.PurchaseId});
      modelBuilder.Entity<CartItem>().Property(ci => ci.Id).ValueGeneratedOnAdd();
      modelBuilder.Entity<Product>().Property(p => p.Id).ValueGeneratedOnAdd();
      modelBuilder.Entity<Purchase>().Property(p => p.Id).ValueGeneratedOnAdd();

      var products = new [] {
        new Product {
          Id = 1,
            Name = "Water",
            Price = 1.2m,
            Image = "https://cdn0.woolworths.media/content/wowproductimages/large/285416.jpg",
            Popularity = 0.9
        },
        new Product {
          Id = 2,
            Name = "Cabbage",
            Price = 2.1m,
            Image = "http://www.specialtyproduce.com/sppics/915.png",
            Popularity = 0.1
        },
        new Product {
          Id = 3,
            Name = "Pens",
            Price = 9.9m,
            Image = "https://www.hach.ch/media/catalog/product/cache/1/image/700x/040ec09b1e35df139433887a97daa66f/2/1/216371-1.jpg",
            Popularity = 0.2
        },
        new Product {
          Id = 4,
            Name = "Teddy",
            Popularity = 0.99,
            Price = 29.90m,
            Image = "https://i5.walmartimages.com/asr/7617e51c-6004-42c1-ae63-006728db4ced_1.e3d0bbf4faa40c0a21af34e4f1d02546.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
        },
        new Product {
          Id = 5,
            Name = "Lego Mindstorms EV3",
            Popularity = 0.5,
            Price = 239.90m,
            Image = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6022/6022005_sd.jpg;maxHeight=640;maxWidth=550",
        },
        new Product {
          Id = 6,
            Name = "Bread",
            Popularity = 0.7,
            Price = 1.95m,
            Image = "https://www.kochtopf.me/wp-content/uploads/2009/02/Basler-Brot.jpg",
        },
        new Product {
          Id = 7,
            Name = "Apple",
            Popularity = 0.4,
            Price = 2.20m,
            Image = "https://www.chefsculinar.de/chefsculinar/ds_img/assets_800/wk-01-apfel.jpg",
        },
        new Product {
          Id = 8,
            Name = "Bananas",
            Popularity = 0.8,
            Price = 2.45m,
            Image = "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2NS8xNDkvb3JpZ2luYWwvYmFuYW5hcy5qcGc=",
        },
        new Product {
          Id = 9,
            Name = "Lindt Bunny",
            Popularity = 0.2,
            Price = 8.90m,
            Image = "https://www.lindt.de/fileadmin/data_lindt_de/user_uploads/produkte/ostern/goldhasen-assets/67111.png",
        },
        new Product {
          Id = 10,
            Name = "IceTea",
            Popularity = 0.3,
            Price = 1.40m,
            Image = "https://www.marlenessweetthings.ch/wp-content/uploads/2019/05/Migros-Kult-Ice-Tea12.jpg",
        },
        new Product {
          Id = 11,
            Name = "Peaches",
            Popularity = 0.6,
            Price = 2.00m,
            Image = "https://www.gesundheit.gv.at/GenticsImageStore/547/auto/prop/r/leben/ernaehrung/saisonkalender/Pfirsich.jpg?pamlz2&validation=094cf28c1f11069d9fe2aeab3503abbcf2e43ee11c88b8f7870e9745b03c9d58",
        },
      };

      modelBuilder.Entity<Product> ().HasData (products);
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Purchase> Purchases { get; set; }
  }
}