﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyStore.Web.Data;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MyStore.Web.Migrations
{
    [DbContext(typeof(MyStoreContext))]
    partial class MyStoreContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("MyStore.Web.Data.Entities.CartItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ProductId");

                    b.Property<int?>("PurchaseId");

                    b.Property<int>("Quantity");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("PurchaseId");

                    b.ToTable("CartItem");
                });

            modelBuilder.Entity("MyStore.Web.Data.Entities.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Image");

                    b.Property<string>("Name");

                    b.Property<double>("Popularity");

                    b.Property<decimal>("Price");

                    b.HasKey("Id");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Image = "https://cdn0.woolworths.media/content/wowproductimages/large/285416.jpg",
                            Name = "Water",
                            Popularity = 0.90000000000000002,
                            Price = 1.2m
                        },
                        new
                        {
                            Id = 2,
                            Image = "http://www.specialtyproduce.com/sppics/915.png",
                            Name = "Cabbage",
                            Popularity = 0.10000000000000001,
                            Price = 2.1m
                        },
                        new
                        {
                            Id = 3,
                            Image = "https://www.hach.ch/media/catalog/product/cache/1/image/700x/040ec09b1e35df139433887a97daa66f/2/1/216371-1.jpg",
                            Name = "Pens",
                            Popularity = 0.20000000000000001,
                            Price = 9.9m
                        },
                        new
                        {
                            Id = 4,
                            Image = "https://i5.walmartimages.com/asr/7617e51c-6004-42c1-ae63-006728db4ced_1.e3d0bbf4faa40c0a21af34e4f1d02546.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
                            Name = "Teddy",
                            Popularity = 0.98999999999999999,
                            Price = 29.90m
                        },
                        new
                        {
                            Id = 5,
                            Image = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6022/6022005_sd.jpg;maxHeight=640;maxWidth=550",
                            Name = "Lego Mindstorms EV3",
                            Popularity = 0.5,
                            Price = 239.90m
                        },
                        new
                        {
                            Id = 6,
                            Image = "https://www.kochtopf.me/wp-content/uploads/2009/02/Basler-Brot.jpg",
                            Name = "Bread",
                            Popularity = 0.69999999999999996,
                            Price = 1.95m
                        },
                        new
                        {
                            Id = 7,
                            Image = "https://www.chefsculinar.de/chefsculinar/ds_img/assets_800/wk-01-apfel.jpg",
                            Name = "Apple",
                            Popularity = 0.40000000000000002,
                            Price = 2.20m
                        },
                        new
                        {
                            Id = 8,
                            Image = "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2NS8xNDkvb3JpZ2luYWwvYmFuYW5hcy5qcGc=",
                            Name = "Bananas",
                            Popularity = 0.80000000000000004,
                            Price = 2.45m
                        },
                        new
                        {
                            Id = 9,
                            Image = "https://www.lindt.de/fileadmin/data_lindt_de/user_uploads/produkte/ostern/goldhasen-assets/67111.png",
                            Name = "Lindt Bunny",
                            Popularity = 0.20000000000000001,
                            Price = 8.90m
                        },
                        new
                        {
                            Id = 10,
                            Image = "https://www.marlenessweetthings.ch/wp-content/uploads/2019/05/Migros-Kult-Ice-Tea12.jpg",
                            Name = "IceTea",
                            Popularity = 0.29999999999999999,
                            Price = 1.40m
                        },
                        new
                        {
                            Id = 11,
                            Image = "https://www.gesundheit.gv.at/GenticsImageStore/547/auto/prop/r/leben/ernaehrung/saisonkalender/Pfirsich.jpg?pamlz2&validation=094cf28c1f11069d9fe2aeab3503abbcf2e43ee11c88b8f7870e9745b03c9d58",
                            Name = "Peaches",
                            Popularity = 0.59999999999999998,
                            Price = 2.00m
                        });
                });

            modelBuilder.Entity("MyStore.Web.Data.Entities.Purchase", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.HasKey("Id");

                    b.ToTable("Purchases");
                });

            modelBuilder.Entity("MyStore.Web.Data.Entities.CartItem", b =>
                {
                    b.HasOne("MyStore.Web.Data.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("MyStore.Web.Data.Entities.Purchase")
                        .WithMany("Items")
                        .HasForeignKey("PurchaseId");
                });
#pragma warning restore 612, 618
        }
    }
}