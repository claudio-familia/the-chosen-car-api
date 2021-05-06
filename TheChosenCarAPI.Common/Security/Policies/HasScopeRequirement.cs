using System;
using Microsoft.AspNetCore.Authorization;

namespace TheChosenCarAPI.Common.Security.Policies
{
    public class HasScopeRequirement : IAuthorizationRequirement
    {
        public string Issuer { get; }
        public string Scope { get; }

        public HasScopeRequirement(string scope, string issuer)
        {
            Scope = scope ?? throw new UnauthorizedAccessException(nameof(scope));
            Issuer = issuer ?? throw new UnauthorizedAccessException(nameof(issuer));
        }
    }
}
