using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class teste22223 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DataNascimentoSuspeito");

            migrationBuilder.DropColumn(
                name: "DatesOfBirthUsed",
                table: "Suspeito");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DatesOfBirthUsed",
                table: "Suspeito",
                type: "NVARCHAR2(2000)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "DataNascimentoSuspeito",
                columns: table => new
                {
                    uid = table.Column<string>(type: "NVARCHAR2(450)", nullable: false),
                    dates_of_birth_used = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_DataNascimentoSuspeito_Suspeito_uid",
                        column: x => x.uid,
                        principalTable: "Suspeito",
                        principalColumn: "uid",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DataNascimentoSuspeito_uid",
                table: "DataNascimentoSuspeito",
                column: "uid");
        }
    }
}
