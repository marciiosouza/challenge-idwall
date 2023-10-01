using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Idwall.Migrations
{
    /// <inheritdoc />
    public partial class DataDeNascimento : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "dates_of_birth_used",
                table: "Suspeito",
                type: "NVARCHAR2(2000)",
                nullable: true,
                defaultValue: "");

            migrationBuilder.AlterColumn<string>(
                name: "dates_of_birth_used",
                table: "DataNascimentoSuspeito",
                type: "NVARCHAR2(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(450)")
                .OldAnnotation("Relational:ColumnOrder", 1);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dates_of_birth_used",
                table: "Suspeito");

            migrationBuilder.AlterColumn<string>(
                name: "dates_of_birth_used",
                table: "DataNascimentoSuspeito",
                type: "NVARCHAR2(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "NVARCHAR2(450)")
                .Annotation("Relational:ColumnOrder", 1);
        }
    }
}
