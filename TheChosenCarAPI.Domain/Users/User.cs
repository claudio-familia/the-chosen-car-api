using System;
using System.Collections.Generic;
using System.Text;

namespace TheChosenCarAPI.Domain.Users
{
    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsEmailVerified { get; set; }
        public bool IsPhoneNumberVerified { get; set; }
        public int CountryId { get; set; }
        public int? StateId { get; set; }        
    }
}
