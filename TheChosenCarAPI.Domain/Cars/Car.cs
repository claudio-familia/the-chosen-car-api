using System;
using System.Collections.Generic;
using System.Text;

namespace TheChosenCarAPI.Domain.Cars
{
    public class Car
    {
        public int ModelId { get; set; }
        public int CarImagesId { get; set; }
        public int Year { get; set; }
        public DateTime ReleaseDate { get; set; }
        public decimal MinPrice { get; set; }
        public decimal MaxPrice { get; set; }
        public decimal KmPerGallon { get; set; }
    }
}
