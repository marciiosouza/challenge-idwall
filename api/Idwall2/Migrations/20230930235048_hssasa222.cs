using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class hssasa222 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SuspeitoInterpol",
                columns: table => new
                {
                    entity_id = table.Column<string>(type: "NVARCHAR2(450)", nullable: false),
                    forename = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true),
                    name = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SuspeitoInterpol", x => x.entity_id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SuspeitoInterpol");
        }
    }
}
