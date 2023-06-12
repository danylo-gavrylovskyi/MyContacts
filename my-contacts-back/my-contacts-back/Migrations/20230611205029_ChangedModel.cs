using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace my_contacts_back.Migrations
{
    /// <inheritdoc />
    public partial class ChangedModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Contacts",
                newName: "surname");

            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Contacts",
                newName: "phoneNumber");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Contacts",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Contacts",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "PersonalId",
                table: "Contacts",
                newName: "personalId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "surname",
                table: "Contacts",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "phoneNumber",
                table: "Contacts",
                newName: "PhoneNumber");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Contacts",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Contacts",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "personalId",
                table: "Contacts",
                newName: "PersonalId");
        }
    }
}
