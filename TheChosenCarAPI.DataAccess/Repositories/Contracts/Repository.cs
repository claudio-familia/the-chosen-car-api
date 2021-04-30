using TheChosenCarAPI.Common;

namespace TheChosenCarAPI.DataAccess.Repositories.Contracts
{
    public class Repository<TEntity> : RepositoryBase<TEntity, TheChosenCarDBContext> where TEntity : class, IAuditableEntity, new()
    {
        public Repository(TheChosenCarDBContext context) : base(context) { }
    }
}
