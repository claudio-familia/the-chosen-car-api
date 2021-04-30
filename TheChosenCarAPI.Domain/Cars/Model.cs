namespace TheChosenCarAPI.Domain.Cars
{
    public class Model : BaseEntity
    {
        public int BrandId { get; set; }
        public int TypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Brand Brand { get; set; }
        public Type Type { get; set; }
    }
}
