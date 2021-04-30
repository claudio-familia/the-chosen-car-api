using TheChosenCarAPI.DataAccess.Repositories;
using TheChosenCarAPI.DataAccess.Repositories.Contracts;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace TheChosenCarAPI.DataAccess.Configuration
{
    public static partial class RepositoriesConfiguration
    {
        public static void AddRepositories(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<TheChosenCarDBContext>(m =>
            {
                m.UseMySQL(configuration.GetConnectionString("TheChosenCar"));
            });

            services.AddScoped<IDataRepositoryFactory, DataRepositoryFactory>();
            services.AddTransient(typeof(IDataRepository<>), typeof(Repository<>));
        }
    }
}
