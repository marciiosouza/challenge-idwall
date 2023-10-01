using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class hssasa : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "status",
                table: "Suspeito",
                type: "NVARCHAR2(2000)",
                nullable: true,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "status",
                table: "Suspeito");
        }
    }
}
