using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using TheChosenCarAPI.Common.Security.Handlers;
using TheChosenCarAPI.Common.Security.Policies;
using TheChosenCarAPI.Common.Services.Contracts;

namespace TheChosenCarAPI.Common.Configuration
{
    public static class CommonConfiguration
    {
        public static void AddCommonServices(this IServiceCollection services, IConfiguration configuration)
        {
            string domain = $"https://{configuration["Auth0:Domain"]}/";

            services
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.Authority = domain;
                    options.Audience = configuration["Auth0:Audience"];
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        NameClaimType = ClaimTypes.NameIdentifier
                    };
                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("read:messages", policy => policy.Requirements.Add(new HasScopeRequirement("read:welcome", domain)));
            });

            services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

            services.AddScoped<ICurrentUserService, Services.CurrentUserService>();
        }
    }
}
