using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;

namespace Integracao.Models
{
    public class ProfissionalDBContext : DbContext
    {

        public ProfissionalDBContext(DbContextOptions<ProfissionalDBContext> options):base(options)
        {

        }
        public DbSet<Profissional> profissional { get; set; }
    }
}
