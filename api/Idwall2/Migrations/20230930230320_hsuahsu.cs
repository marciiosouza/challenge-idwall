using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class hsuahsu : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Suspeito",
                columns: table => new
                {
                    uid = table.Column<string>(type: "NVARCHAR2(450)", nullable: false),
                    title = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true),
                    description = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true),
                    sex = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true),
                    nationality = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suspeito", x => x.uid);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    Email = table.Column<string>(type: "NVARCHAR2(450)", nullable: true),
                    Senha = table.Column<string>(type: "NVARCHAR2(2000)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.Email);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Suspeito");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
