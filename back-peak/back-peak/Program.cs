
using static back_peak.Controllers.CalculusController;
using static back_peak.Controllers.RegisterController;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/{id}", (int id) =>
{
    var result = Register(id);

    return result;
});

app.MapPost("/value={value}&parcel={parcel}", (float value, int parcel) =>
{
    var result = Calculus(value, parcel);

    return result;
});

app.Run();