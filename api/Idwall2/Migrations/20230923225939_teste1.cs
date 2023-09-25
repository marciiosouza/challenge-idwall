using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IdWall.Migrations
{
    /// <inheritdoc />
    public partial class teste1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pessoas");

            migrationBuilder.CreateTable(
                name: "Suspeito",
                columns: table => new
                {
                    SUSPEITOID = table.Column<int>(type: "NUMBER(10)", nullable: false)
                        .Annotation("Oracle:Identity", "START WITH 1 INCREMENT BY 1"),
                    NOME = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false),
                    CLASSIFICACAO = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false),
                    SEXO = table.Column<string>(type: "NVARCHAR2(1)", nullable: false),
                    ENDERECO = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Suspeito", x => x.SUSPEITOID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Suspeito");

            migrationBuilder.CreateTable(
                name: "Pessoas",
                columns: table => new
                {
                    SUSPEITOID = table.Column<int>(type: "NUMBER(10)", nullable: false)
                        .Annotation("Oracle:Identity", "START WITH 1 INCREMENT BY 1"),
                    CLASSIFICACAO = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false),
                    ENDERECO = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false),
                    NOME = table.Column<string>(type: "NVARCHAR2(2000)", nullable: false),
                    SEXO = table.Column<string>(type: "NVARCHAR2(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pessoas", x => x.SUSPEITOID);
                });
        }
    }
}
