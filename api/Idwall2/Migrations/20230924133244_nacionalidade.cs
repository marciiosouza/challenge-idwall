using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IdWall.Migrations
{
    /// <inheritdoc />
    public partial class nacionalidade : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NACIONALIDADE",
                table: "Suspeito",
                type: "NVARCHAR2(4)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NACIONALIDADE",
                table: "Suspeito");
        }
    }
}
