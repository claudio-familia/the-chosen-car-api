namespace TheChosenCarAPI.Domain.Cars
{
    public class Type : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Capacity { get; set; }
    }
}
