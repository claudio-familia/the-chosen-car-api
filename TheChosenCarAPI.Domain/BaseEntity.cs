﻿using System;
using TheChosenCarAPI.Common;
using TheChosenCarAPI.Domain.Users;

namespace TheChosenCarAPI.Domain
{
    public class BaseEntity : IAuditableEntity
    {
        public int Id { get; set; }
        public int CreatedBy { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public bool Active { get; set; }

        #region relations

        public User Creator { get; set; }
        public User Updater { get; set; }

        #endregion
    }
}
