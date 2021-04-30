using TheChosenCarAPI.Domain.General;

namespace TheChosenCarAPI.Domain.Cars
{
    public class Brand : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string CountryId { get; set; }

        public Country Country { get; set; }
    }
}
