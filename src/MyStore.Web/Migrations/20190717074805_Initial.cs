using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace MyStore.Web.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Name = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    Image = table.Column<string>(nullable: true),
                    Popularity = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Purchases",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Purchases", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CartItem",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Quantity = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false),
                    PurchaseId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CartItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CartItem_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CartItem_Purchases_PurchaseId",
                        column: x => x.PurchaseId,
                        principalTable: "Purchases",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Image", "Name", "Popularity", "Price" },
                values: new object[,]
                {
                    { 1, "https://cdn0.woolworths.media/content/wowproductimages/large/285416.jpg", "Water", 0.90000000000000002, 1.2m },
                    { 2, "http://www.specialtyproduce.com/sppics/915.png", "Cabbage", 0.10000000000000001, 2.1m },
                    { 3, "https://www.hach.ch/media/catalog/product/cache/1/image/700x/040ec09b1e35df139433887a97daa66f/2/1/216371-1.jpg", "Pens", 0.20000000000000001, 9.9m },
                    { 4, "https://i5.walmartimages.com/asr/7617e51c-6004-42c1-ae63-006728db4ced_1.e3d0bbf4faa40c0a21af34e4f1d02546.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF", "Teddy", 0.98999999999999999, 29.90m },
                    { 5, "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6022/6022005_sd.jpg;maxHeight=640;maxWidth=550", "Lego Mindstorms EV3", 0.5, 239.90m },
                    { 6, "https://www.kochtopf.me/wp-content/uploads/2009/02/Basler-Brot.jpg", "Bread", 0.69999999999999996, 1.95m },
                    { 7, "https://www.chefsculinar.de/chefsculinar/ds_img/assets_800/wk-01-apfel.jpg", "Apple", 0.40000000000000002, 2.20m },
                    { 8, "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA2NS8xNDkvb3JpZ2luYWwvYmFuYW5hcy5qcGc=", "Bananas", 0.80000000000000004, 2.45m },
                    { 9, "https://www.lindt.de/fileadmin/data_lindt_de/user_uploads/produkte/ostern/goldhasen-assets/67111.png", "Lindt Bunny", 0.20000000000000001, 8.90m },
                    { 10, "https://www.marlenessweetthings.ch/wp-content/uploads/2019/05/Migros-Kult-Ice-Tea12.jpg", "IceTea", 0.29999999999999999, 1.40m },
                    { 11, "https://www.gesundheit.gv.at/GenticsImageStore/547/auto/prop/r/leben/ernaehrung/saisonkalender/Pfirsich.jpg?pamlz2&validation=094cf28c1f11069d9fe2aeab3503abbcf2e43ee11c88b8f7870e9745b03c9d58", "Peaches", 0.59999999999999998, 2.00m }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CartItem_ProductId",
                table: "CartItem",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_CartItem_PurchaseId",
                table: "CartItem",
                column: "PurchaseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CartItem");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Purchases");
        }
    }
}
