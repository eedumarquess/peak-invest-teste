
namespace back_peak.Controllers

{
    public static class RegisterController
	{
		public static string Register(int id)
		{

            var list = new List<KeyValuePair<int, string>>
            {
                new KeyValuePair<int, string>(1, "Joao"),
                new KeyValuePair<int, string>(2, "Maria"),
                new KeyValuePair<int, string>(3, "Ana")
            };

            var result = list.First(c => c.Key == id).Value;

            return result;
		}
	}
}

