using Microsoft.EntityFrameworkCore;
using static IdWall.Context.AppDbContext;
using System.IO;

// Helper to load .env file
void LoadEnv(string filePath)
{
    if (!File.Exists(filePath)) return;
    foreach (var line in File.ReadAllLines(filePath))
    {
        var parts = line.Split('=', 2, StringSplitOptions.RemoveEmptyEntries);
        if (parts.Length != 2) continue;
        var key = parts[0].Trim();
        var value = parts[1].Trim().Trim('"').Trim('\'');
        Environment.SetEnvironmentVariable(key, value);
    }
}

// Load .env from project root
LoadEnv(Path.Combine(Directory.GetCurrentDirectory(), ".env"));

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var connectionString = builder.Configuration.GetConnectionString("DatabaseConnection");

// If it's a placeholder or empty, try to get from Environment
if (string.IsNullOrEmpty(connectionString) || connectionString == "MYSQL_CONNECTION_STRING" || connectionString == "ORACLE_CONNECTION_STRING")
{
    connectionString = Environment.GetEnvironmentVariable(connectionString ?? "MYSQL_CONNECTION_STRING");
}

builder.Services.AddDbContext<DataBaseContext>(options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)).EnableSensitiveDataLogging(true));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost5173", builder =>
    {
        builder.WithOrigins("http://localhost:5173")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowLocalhost5173");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
