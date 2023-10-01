using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class hsuhdsaj : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dates_of_birth_used",
                table: "Suspeito");

            migrationBuilder.CreateTable(
                name: "DataNascimentoSuspeito",
                columns: table => new
                {
                    dates_of_birth_used = table.Column<string>(type: "NVARCHAR2(450)", nullable: false),
                    uid = table.Column<string>(type: "NVARCHAR2(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DataNascimentoSuspeito", x => new { x.uid, x.dates_of_birth_used });
                    table.ForeignKey(
                        name: "FK_DataNascimentoSuspeito_Suspeito_uid",
                        column: x => x.uid,
                        principalTable: "Suspeito",
                        principalColumn: "uid",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DataNascimentoSuspeito");

            migrationBuilder.AddColumn<string>(
                name: "dates_of_birth_used",
                table: "Suspeito",
                type: "NVARCHAR2(2000)",
                nullable: false,
                defaultValue: "");
        }
    }
}
