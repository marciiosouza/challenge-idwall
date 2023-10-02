using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class teste23 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_DataNascimentoSuspeito",
                table: "DataNascimentoSuspeito");

            migrationBuilder.RenameColumn(
                name: "dates_of_birth_used",
                table: "Suspeito",
                newName: "DatesOfBirthUsed");

            migrationBuilder.AlterColumn<string>(
                name: "dates_of_birth_used",
                table: "DataNascimentoSuspeito",
                type: "NVARCHAR2(2000)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(450)");

            migrationBuilder.CreateIndex(
                name: "IX_DataNascimentoSuspeito_uid",
                table: "DataNascimentoSuspeito",
                column: "uid");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_DataNascimentoSuspeito_uid",
                table: "DataNascimentoSuspeito");

            migrationBuilder.RenameColumn(
                name: "DatesOfBirthUsed",
                table: "Suspeito",
                newName: "dates_of_birth_used");

            migrationBuilder.AlterColumn<string>(
                name: "dates_of_birth_used",
                table: "DataNascimentoSuspeito",
                type: "NVARCHAR2(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(2000)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_DataNascimentoSuspeito",
                table: "DataNascimentoSuspeito",
                columns: new[] { "uid", "dates_of_birth_used" });
        }
    }
}
