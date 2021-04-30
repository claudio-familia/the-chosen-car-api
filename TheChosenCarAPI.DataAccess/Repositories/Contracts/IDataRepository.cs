﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using TheChosenCarAPI.Common.Models.Pagination.Contracts;

namespace TheChosenCarAPI.DataAccess.Repositories.Contracts
{
    public interface IDataRepository
    {
    }

    public interface IDataRepository<T> : IDataRepository
        where T : class, new()
    {
        T Add(T entity);

        void Remove(T entity);

        void Remove(long id);

        T Update(T entity);

        IEnumerable<T> GetAll();

        IPagedList<T> GetPaged(int startRowIndex, int pageSize);

        IEnumerable<T> GetAll(Func<IQueryable<T>, IQueryable<T>> transform, Expression<Func<T, bool>> filter = null);

        IEnumerable<TResult> GetAll<TResult>(Func<IQueryable<T>, IQueryable<TResult>> transform, Expression<Func<T, bool>> filter = null);

        int GetCount<TResult>(Func<IQueryable<T>, IQueryable<TResult>> transform, Expression<Func<T, bool>> filter = null);

        IPagedList<T> GetPaged(Func<IQueryable<T>, IQueryable<T>> transform, Expression<Func<T, bool>> filter = null, int startRowIndex = -1, int pageSize = -1);

        IPagedList<TResult> GetPaged<TResult>(Func<IQueryable<T>, IQueryable<TResult>> transform, Expression<Func<T, bool>> filter = null, int startRowIndex = -1, int pageSize = -1);

        T Get(int id);

        T Get(Guid id);

        T Get(Expression<Func<T, bool>> filter = null);

        TResult Get<TResult>(Func<IQueryable<T>, IQueryable<TResult>> transform, Expression<Func<T, bool>> filter = null);

        bool Exists(int id);

        bool Exists(Expression<Func<T, bool>> filter = null);
    }
}
