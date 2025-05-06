# Teste Carlos Lopes – Aplicação Angular + API C# (.NET Core)

Aplicação front-end com **Angular 17** e uma API mockada em ASP.NET Core WebAPI - 02/05/2025

Estrutura do projeto

```
Teste_Carlos_Lopes/
│
├── TestCarlosFrontEnd/ → Aplicação Angular 17
└── TesteCarlosApi/     → API mockada em C# (.NET 6+)
```

---

## Instruções para execução local

### Requisitos

- Node.js (recomendado: v18 ou superior)
- Angular CLI - Versão 17
- .NET 6 SDK ou superior

---

### 1. Back-end (API C#)

```bash
cd TesteCarlosApi
dotnet run
```
A API gerará um link como:`https://localhost:5001/api/pessoas`

---

### 2. Front-end (Angular)

```bash
cd ../TesteCarlosFrontEnd
npm install
npx ng serve
```

> Acesse a aplicação em: http://localhost:4200 ou de acordo com o link gerado ao executar.

---

### IMPORTANTE

#### Validar a URL da API no front-end:

Abra o arquivo:

```
TesteCarlosFrontEnd/src/app/services/pessoa.service.ts
```

E verifique se a variável `apiUrl` aponta corretamente para a API que você subiu no passo anterior:

```ts
private apiUrl = 'https://localhost:5001/api/pessoas';
```

> Caso a porta ou endereço seja diferente no seu ambiente, ajuste aqui antes de rodar.


## Desenvolvido por:

**Carlos Lopes Junior ** 
Teste Técnico - Desenvolvedor Pleno
