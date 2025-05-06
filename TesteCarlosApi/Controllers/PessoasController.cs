using Microsoft.AspNetCore.Mvc;
using TesteCarlosApi.Models;

namespace TesteCarlosApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetPessoas()
        {
            var pessoas = new List<Pessoa>();

            for (int i = 1; i <= 30; i++)
            {
                pessoas.Add(new Pessoa
                {
                    Cpf = $"000.000.000-{i:D2}",
                    Nome = i % 2 == 0 ? $"Jhon Doe {i}" : $"Jane Doe {i}",
                    Genero = i % 2 == 0 ? "Masculino" : "Feminino",
                    Endereco = $"Rua {i}",
                    Idade = 20 + (i % 30),
                    Municipio = $"Município {i % 5 + 1}",
                    Estado = "SP"
                });
            }

            return Ok(pessoas);
        }
    }
}
