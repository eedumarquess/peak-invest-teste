
using static back_peak.Controllers.CalculusController;
using static back_peak.Controllers.RegisterController;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(c =>
{
    c.AllowAnyHeader();
    c.AllowAnyMethod();
    c.AllowAnyOrigin();

});

app.MapGet("/{id}", (int id) =>
{
    var result = Register(id);

    return Results.Json(result);
});

app.MapPost("/value={value}&parcel={parcel}", (float value, int parcel) =>
{
    var result = Calculus(value, parcel);

    return Results.Json(result);
});

app.Run();