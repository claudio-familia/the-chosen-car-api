namespace TheChosenCarAPI.Domain.General
{
    public class State : BaseEntity
    {
        public string Name { get; set; }
        public int CountryId { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }

        public Country Country { get; set; }
    }
}
