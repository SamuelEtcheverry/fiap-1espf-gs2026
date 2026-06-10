# ⬡ OrbitalWatch — Sistema de Monitoramento e Alerta de Colisões com Lixo Espacial

> **Global Solution 2026 · FIAP · Engenharia de Software · 1ESPF**  
> Disciplinas: Front-End Design & Web Development

---

## 👥 Equipe

| Nome | RM |
|---|---|
| Samuel Eduardo Lisboa Etcheverry | RM 573715 |
| Brenda Priscila Chalco Condori | RM 571971 |
| Diego Ruffini Silva Jimenez | RM 571015 |
| Nicolly Florencio Vilela | RM 573392 |

---

## 📋 Sobre o Projeto

O **OrbitalWatch** é uma plataforma web de monitoramento e alerta de colisões com lixo espacial. O projeto centraliza dados orbitais, calcula riscos de colisão e educa o público sobre a sustentabilidade do espaço — conectando a Indústria Espacial ao dia a dia das pessoas.

Mais de **140 milhões de detritos** orbitam a Terra a **28.000 km/h**, ameaçando satélites de comunicação, meteorologia, navegação e agronegócio. O OrbitalWatch oferece uma interface acessível para operadores espaciais, agências, pesquisadores e estudantes.

**ODS alinhados:** ODS 9 (Inovação e Infraestrutura) · ODS 13 (Ação Climática)

---

## 🌐 Estrutura do Projeto

```
OrbitalWatch/
├── index.html      
├── src/
│   ├── css/
│   │   ├── style.css
│   │   └── themes.css
│   └── js/
│       ├── app.js
│       ├── slideshow.js
│       ├── quiz.js
│       └── simulator.js
└── img/
    ├── slide1.svg
    ├── slide2.svg
    └── slide3.svg
```

---

## 🗂️ Seções da Landing Page

| # | Seção | Descrição |
|---|---|---|
| 01 | Problema | O que é lixo espacial e dados sobre a ameaça orbital |
| 02 | Tecnologia | Radares, telescópios, cálculo de risco e IA |
| 03 | Objetivos | O que o OrbitalWatch faz |
| 04 | Público-alvo | Operadores, agências, pesquisadores e estudantes |
| 05 | Casos Reais | Iridium 33, Fengyun-1C e Long March 6A |
| 06 | Aplicação | Como a solução protege serviços do cotidiano |
| 07 | Simulador | Cálculo interativo de risco de colisão |
| 08 | Quiz | 10 perguntas educativas sobre lixo espacial |
| 09 | Contato | Formulário com validação |

---

## ⚙️ Funcionalidades Implementadas

### 🎠 Slideshow (`slideshow.js`)
- 3 slides com transição automática a cada 5 segundos
- Navegação manual via dots
- Pausa ao passar o mouse no hero

### 🧮 Simulador de Risco (`simulator.js`)
- Entradas: nome do satélite, altitude (km), velocidade (km/h) e detritos próximos
- Cálculo de índice de risco por faixas (0–100)
- Três níveis de alerta: **BAIXO** · **MÉDIO** · **ALTO**
- Validação de campos e recomendação de ação

### 🧠 Quiz Educativo (`quiz.js`)
- 10 perguntas sobre lixo espacial e monitoramento orbital
- Feedback visual imediato (verde = certa, vermelho = errada)
- Barra de progresso e pontuação em tempo real
- Tela de resultado com mensagem personalizada
- Botão "Jogar novamente"

### 🎨 Troca de Tema (`app.js` + `themes.css`)
- 2 temas: **Dark** (padrão) e **Blue**
- Persistência via `localStorage`
- Transição suave entre temas via CSS

### 📬 Formulário de Contato (`app.js`)
- Validação de nome, e-mail e mensagem
- Exibição de erros inline sem recarregar a página
- Mensagem de sucesso após envio válido

### 📱 Responsividade (`style.css`)
- Layout responsivo com breakpoints em 900px e 700px
- Menu hambúrguer para mobile
- Grids adaptáveis (4 → 2 → 1 coluna)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica
- **CSS3** — variáveis CSS, Flexbox, Grid, media queries, transições
- **JavaScript puro** — sem frameworks ou bibliotecas externas
- **Google Fonts** — Syne (títulos) + Space Mono (corpo)
- **localStorage** — persistência do tema escolhido

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/[ORG]/orbitalwatch.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador **ou** use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8080

   # Com VS Code
   # Instale a extensão Live Server e clique em "Go Live"
   ```
3. Acesse `http://localhost:8080` no navegador.

> Não são necessárias instalações adicionais — o projeto usa apenas HTML, CSS e JavaScript puro.

---

*OrbitalWatch · FIAP Global Solution 2026 · Engenharia de Software · 1ESPF*
