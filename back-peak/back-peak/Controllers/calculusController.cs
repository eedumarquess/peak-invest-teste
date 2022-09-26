namespace back_peak.Controllers

{
	public static class CalculusController
	{
		public static double Calculus(float value, int parcel)
		{
            var totalValue = value * parcel;

            var finalValue = totalValue + (0.05 * totalValue);

            return finalValue;
        }
	}
}

