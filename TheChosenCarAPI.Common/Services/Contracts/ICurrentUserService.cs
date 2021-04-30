using System;
using System.Collections.Generic;
using System.Text;

namespace TheChosenCarAPI.Common.Services.Contracts
{
    public interface ICurrentUserService
    {
        public int? UserId { get; }
        public bool IsAuthenticated { get; }
    }
}
