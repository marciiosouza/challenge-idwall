using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class sagasd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SuspeitoInterpol");

            migrationBuilder.AddColumn<string>(
                name: "dates_of_birth_used",
                table: "Suspeito",
                type: "NVARCHAR2(2000)",
                nullable: true,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dates_of_birth_used",
                table: "Suspeito");

            migrationBuilder.CreateTable(
                name: "SuspeitoInterpol",
                columns: table => new
                {
                    entity_id = table.Column<string>(type: "NVARCHAR2(450)", nullable: false),
                    forename = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false),
                    name = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SuspeitoInterpol", x => x.entity_id);
                });
        }
    }
}
