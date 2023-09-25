using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IdWall.Migrations
{
    /// <inheritdoc />
    public partial class ajusteclassificacao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CLASSIFICACAO",
                table: "Suspeito",
                type: "NVARCHAR2(1)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(2000)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "CLASSIFICACAO",
                table: "Suspeito",
                type: "NVARCHAR2(2000)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(1)");
        }
    }
}
