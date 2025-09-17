# 👩‍👧 Tia Lara - Cuidado Infantil

Website feito com ❤️ para **divulgar e facilitar o contato** com o serviço de cuidado infantil, apoiando as famílias de **Uruana de Minas**.

[![Website](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Ftialara.com.br)](https://tialara.com.br)
[![Local Dev](https://img.shields.io/badge/local-localhost%3A3000-blue.svg)](http://localhost:3000)
[![Built with Astro](https://badgen.net/badge/Built%20with/Astro/ff5d01)](https://astro.build/)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

## 🌟 Sobre o Site

Site profissional para divulgar os serviços de cuidado infantil da Tia Lara em Uruana de Minas, MG. Inclui:

- **Apresentação pessoal** - História e experiência da Tia Lara
- **Serviços oferecidos** - Cuidados diários, atividades educativas e apoio aos pais  
- **Depoimentos** - Feedback de famílias satisfeitas
- **Certificações** - Qualificações profissionais (Primeiros Socorros, Desenvolvimento Infantil, etc.)
- **Área de Cobertura** - Mapa interativo destacando Uruana de Minas e região
- **Contato** - Formulário integrado e informações de contato

## 🚀 Desenvolvimento

### 🌟 Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)
- Git

### 📦 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/tia-lara.git
cd tia-lara

# 2. Instale as dependências
pnpm install

# 3. Inicie o servidor de desenvolvimento
pnpm astro dev
```

### 💻 Comandos Disponíveis

```bash
# Desenvolvimento - inicia servidor local
pnpm astro dev

# Build - gera arquivos estáticos para produção
pnpm astro build

# Preview - visualiza o build de produção localmente
pnpm astro preview

# Type check - verifica erros de TypeScript
pnpm astro check
```

## ✏️ Editando o Conteúdo

**Para atualizar o conteúdo do site, edite os arquivos Markdown em `src/content/`:**

### 🔧 Serviços
- Edite arquivos em `src/content/services/`
- Cada arquivo `.md` representa um serviço
- Frontmatter: `title`, `description`, `icon`, `order`

### 💬 Depoimentos  
- Edite arquivos em `src/content/testimonials/`
- Cada arquivo `.md` representa um depoimento
- Frontmatter: `name`, `location`, `rating`, `order`

### 🎓 Certificações
- Edite arquivos em `src/content/certifications/`
- Cada arquivo `.md` representa uma certificação
- Frontmatter: `title`, `institution`, `year`, `order`

### 🚀 Aplicar Mudanças

Após editar qualquer conteúdo:

1. **Desenvolvimento:** As mudanças aparecem automaticamente em `http://localhost:3000`
2. **Produção:** Execute `pnpm astro build` para gerar nova versão

## ✨ Tecnologias

- **[Astro](https://astro.build/)** - Framework moderno para sites estáticos
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário  
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript tipado
- **Content Collections** - Sistema de conteúdo baseado em Markdown
- **Responsive Design** - Otimizado para todos os dispositivos
- **SEO Ready** - Sitemap e meta tags otimizadas

## 🌐 Deploy

### Opções de Hospedagem (gratuitas):

#### **Vercel** (Recomendado)
1. Conecte seu repositório GitHub ao [Vercel](https://vercel.com)
2. Deploy automático a cada push na branch main

#### **Netlify**
1. Conecte seu repositório ao [Netlify](https://netlify.com)
2. Build command: `pnpm astro build`
3. Publish directory: `dist`

#### **GitHub Pages**
1. Configure GitHub Actions com workflow de Astro
2. Deploy automático da pasta `dist`

## 📞 Contato

**Para dúvidas sobre o site ou serviços:**

- 📧 **Email:** [contato@tialara.com.br](mailto:contato@tialara.com.br)
- 📍 **Localização:** Uruana de Minas, MG
- 🌐 **Website:** [tialara.com.br](https://tialara.com.br)

---

*Site desenvolvido com carinho para apoiar as famílias de Uruana de Minas* ❤️
