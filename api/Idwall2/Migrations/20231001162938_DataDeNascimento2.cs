using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class DataDeNascimento2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dates_of_birth_used",
                table: "Suspeito");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "dates_of_birth_used",
                table: "Suspeito",
                type: "NVARCHAR2(2000)",
                nullable: true,
                defaultValue: "");
        }
    }
}
