using Microsoft.Extensions.DependencyInjection;

namespace TheChosenCarAPI.Common.Configuration
{
    public static class CommonConfiguration
    {
        public static void AddCommonServices(this IServiceCollection services)
        {
            services.AddScoped<Services.Contracts.ICurrentUserService, Services.CurrentUserService>();
        }
    }
}
