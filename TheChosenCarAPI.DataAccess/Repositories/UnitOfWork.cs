using Microsoft.EntityFrameworkCore.Storage;
using TheChosenCarAPI.DataAccess.Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace TheChosenCarAPI.DataAccess.Repositories
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly TheChosenCarDBContext _DataContext;

        public UnitOfWork(TheChosenCarDBContext dataContext)
        {
            _DataContext = dataContext;
        }

        public IDbContextTransaction CreateTransaction()
        {
            return this._DataContext.Database.BeginTransaction();
        }

        public int SaveChanges()
        {
            return _DataContext.SaveChanges();
        }

        public void Dispose()
        {
            if (_DataContext != null)
            {
                _DataContext.Dispose();
            }
        }
    }
}
