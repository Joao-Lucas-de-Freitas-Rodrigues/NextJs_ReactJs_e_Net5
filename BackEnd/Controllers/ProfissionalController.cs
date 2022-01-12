using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Integracao.Models;
using System.Data.SqlClient;
using System.Linq;
using System.Data;
using System.Collections.Generic;
using System.Linq.Expressions;
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Integracao.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfissionalController : ControllerBase
    {

        private readonly ProfissionalDBContext _context;
        
        public ProfissionalController(ProfissionalDBContext context)
        {
            _context = context; 
        }

        //api/Profissional
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Profissional>>> Get()
        {
            return await _context.profissional.ToListAsync();
        }

        //api/Profissional/[id]
        [HttpGet("{id}")]
        public async Task<ActionResult<Profissional>> GetProfissional(int id)
        {
            var profissional = await _context.profissional.FindAsync(id);  

            if(profissional == null)
            {
                return NotFound();  
            }
            return Ok(profissional);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Profissional>> PutProfissional(int id,Profissional profissional)
        {
            profissional.id = id;

            _context.Entry(profissional).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return NoContent();
        }

        //api/Profissional
        //So muda o jeito de acessar (Post)
        [HttpPost]
        public async Task<ActionResult<Profissional>> PostProfissional(Profissional profissional)
        {
            _context.profissional.Add(profissional);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfissional", new { id = profissional.id }, profissional);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Profissional>> DeleteProfissional(int id)
        {
            var profissional = await _context.profissional.FindAsync(id);
            if (profissional == null)
            {
                return NotFound();  
            }

            _context.profissional.Remove(profissional);
            await _context.SaveChangesAsync();

            return profissional;
        }
    
        
    }
}

 