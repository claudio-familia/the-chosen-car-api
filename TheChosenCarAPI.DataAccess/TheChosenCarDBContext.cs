using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using TheChosenCarAPI.Common.Services.Contracts;
using TheChosenCarAPI.Common;

namespace TheChosenCarAPI.DataAccess
{
    public class TheChosenCarDBContext : DbContext
    {
        private readonly ICurrentUserService _currentUserService;
        public TheChosenCarDBContext(DbContextOptions<TheChosenCarDBContext> options,
                                 ICurrentUserService currentUserService) : base(options)
        {
            _currentUserService = currentUserService;
        }

        #region Save Changes
        public override int SaveChanges()
        {            
            var auditableEntitySet = ChangeTracker.Entries<IAuditableEntity>();

            if (auditableEntitySet != null)
            {
                foreach (var auditableEntity in auditableEntitySet.Where(c => c.State == EntityState.Added || c.State == EntityState.Modified))
                {
                    if (auditableEntity.State == EntityState.Added)
                    {
                        auditableEntity.Entity.CreatedAt = DateTime.Now;
                        auditableEntity.Entity.CreatedBy = _currentUserService.UserId.Value;
                    }

                    auditableEntity.Entity.UpdatedAt = DateTime.Now;
                    auditableEntity.Entity.UpdatedBy = _currentUserService.UserId.Value;
                }
            }

            return base.SaveChanges();
        }

        #endregion
    }
}
