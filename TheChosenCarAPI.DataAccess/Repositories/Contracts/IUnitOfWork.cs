using Microsoft.EntityFrameworkCore.Storage;

namespace TheChosenCarAPI.DataAccess.Repositories.Contracts
{
    public interface IUnitOfWork
    {
        IDbContextTransaction CreateTransaction();
        int SaveChanges();
    }
}
