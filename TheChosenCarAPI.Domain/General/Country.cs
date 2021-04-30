namespace TheChosenCarAPI.Domain.General
{
    public class Country : BaseEntity
    {
        public string Name { get; set; }
        public string FormalName { get; set; }
        public string IsoCode { get; set; }
        public string Continent { get; set; }
        public string Flag { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
    }
}
