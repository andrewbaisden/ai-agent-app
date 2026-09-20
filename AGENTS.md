# AGENTS.md

Guidance for humans and coding agents working in this repository.

This file follows the same engineering contract used on [andrewbaisden.com](https://andrewbaisden.com): established stack first, small reversible diffs, no drive-by architecture. **Do not copy that site's Next.js / hero / contact-function rules into this repo.** They are a different product.

## What this repo is

This is a **multi-agent portfolio demo**: a Vite + React chat UI talking to a Flask API. Five Groq-backed specialists (Welcome, Project, Career, Client, Research) answer questions about sample projects, skills, services, and tech research.

It is **not** the [andrewbaisden.com](https://andrewbaisden.com) marketing site. There is **no Next.js App Router**, **no Resend contact pipeline**, and **no live CMS**. Project, career, and service facts are **hardcoded sample data** in the Python agents. The contact form is client-side only and does not send mail.

## Non-negotiable rules

- Never commit secrets. `backend/.env` is local only. Do not paste keys into screenshots, logs, or agent transcripts.
- Agent behaviour lives in [`backend/agents/`](backend/agents/). Each specialist subclasses [`backend/agents/base_agent.py`](backend/agents/base_agent.py). Do not fork a second LLM client or a second system-prompt style.
- Chat HTTP contract is one shape: `POST /api/{agent}` with `{ "message": string }` returns `{ "response": string }`. `agent` is `welcome` | `project` | `career` | `client` | `research`. Do not invent a parallel chat endpoint.
- Frontend chat goes through [`frontend/src/components/Chat.jsx`](frontend/src/components/Chat.jsx). Pages pass `agentType` that must match a Flask route. Do not hardcode extra agent IDs in the UI without a matching backend route and class.
- **Tailwind is the established styling system** (utilities plus `@layer components` in [`frontend/src/index.css`](frontend/src/index.css)). [`frontend/src/style.css`](frontend/src/style.css) is leftover handwritten CSS. Do not reintroduce Bootstrap, and do not start a shadcn migration as a drive-by.
- Do not add Postgres, Prisma, Better Auth / Clerk, Redis, BullMQ, Zustand, or TanStack Query unless there is a clear architectural purpose (live server data, auth, background jobs, or interaction state that local `useState` cannot hold).
- Do not introduce a second LLM provider, a second chat contract, or a second contact-delivery path. Groq + the existing POST contract stay until a dedicated redesign.
- Prefer small, reversible diffs. Do not rewrite the agent router to land an unrelated UI tweak.
- Keep authoritative portfolio facts on the **server** (the Python agent dicts). The client holds chat UI state only. Do not duplicate project/career/service catalogues in React.

## Tech stack

Use the established engineering stack unless a new dependency has a clear architectural purpose.

### Established in this repo

| Layer | Choice |
| --- | --- |
| Package manager | **npm** (`frontend/package-lock.json`) |
| Frontend | **Vite 6** + **React 19** (`frontend/src`) |
| Language | **JavaScript** (JSX). Python **3.8+** on the API |
| Routing | **React Router 7** |
| HTTP | **axios** |
| Styling | **Tailwind CSS 3** + leftover handwritten CSS |
| Backend | **Flask 2** + **flask-cors** |
| LLM | **Groq** OpenAI-compatible chat completions (`llama3-8b-8192`; Research uses `llama-3.3-70b-versatile`) |
| Code quality | **ESLint 9** (frontend only) |
| Hosting | Local only today (`vite` :5173, Flask :5001) |

`axios` and `react-router` currently sit in `devDependencies`. Treat them as **runtime** deps; if you touch `package.json`, move them to `dependencies` rather than adding a second HTTP/router library.

`agno` is listed in [`requirements.txt`](requirements.txt) and is **unused**. Do not start using it without a dedicated Agno migration. Do not add a second agent framework beside the existing `BaseAgent` classes.

### Add when justified

These are the target stack defaults for new product surface. **Do not install them for this demo without a real need.**

| Layer | Choice | When |
| --- | --- | --- |
| Language | TypeScript, **strict** | Dedicated JS → TS migration. No `any` without a one-line justification on that binding. Keep React runtime and `@types/react` on the **same major**. |
| Package manager | **pnpm** | Dedicated npm → pnpm migration. Do not mix lockfiles. |
| Styling | Tailwind CSS, shadcn/ui | Already on Tailwind; shadcn only for a dedicated component-system migration |
| Forms / validation | **Zod** + **React Hook Form** | Real contact or proposal submission (the contact form is fake today) |
| Email | **Resend** | If contact mail is actually delivered |
| Client state | **Zustand** | Interaction state that has outgrown `useState` / Context |
| Server state | **TanStack Query** | Remote collections and mutations beyond one-shot chat POSTs |
| Database | **PostgreSQL** + **Prisma** | Persistent product data (replace hardcoded agent dicts) |
| Auth | **Better Auth** (prefer) or **Clerk** | Signed-in users |
| Caching / jobs | **Redis**, **BullMQ** | Rate limits, queues, or background research jobs |
| Testing | **Vitest**, **React Testing Library**, **Playwright** | First tests / CI |
| Code quality | **Biome**, **Husky**, **lint-staged** | If ESLint is replaced in a dedicated pass |
| CI/CD | **GitHub Actions** | Merge gate |
| Infra | **Docker**; Fly.io / AWS (or similar) for the Flask process | A process that cannot live in a static host |
| Frontend host | **Netlify** or **Vercel** | Static Vite build |
| Monitoring | **Sentry**, **PostHog** | Error tracking / product analytics with project keys in env |

#### Zustand (when added)

Use for appropriate **interaction** state such as:

- selected agent / page chat session
- unsaved proposal or contact draft
- theme / overlay prefs

Do **not** duplicate authoritative server state (projects, skills, services) in Zustand.

#### TanStack Query (when added)

Use for remote data such as:

- chat history persisted on a server
- CMS or live project listings
- mutations (contact, proposals)

Realtime updates must **update or invalidate** Query caches deliberately rather than becoming a second uncontrolled store.

## Project map

| Path | Role |
| --- | --- |
| `frontend/src/App.jsx` | Routes: `/`, `/projects`, `/career`, `/services`, `/research`, `/contact` |
| `frontend/src/components/Layout.jsx` | Live nav + footer (the ones in use) |
| `frontend/src/components/Chat.jsx` | Shared chat UI; posts to Flask |
| `frontend/src/components/Navbar.jsx` | **Unused** Bootstrap-era nav. Do not extend; delete or replace in a dedicated cleanup |
| `frontend/src/components/Footer.jsx` | **Unused**. Same as Navbar |
| `frontend/src/pages/*.jsx` | One page per agent (Contact has no agent) |
| `frontend/src/index.css` | Tailwind layers + chat component classes |
| `frontend/src/style.css` | Leftover global CSS; prefer Tailwind for new styles |
| `backend/main.py` | Flask app, CORS, keyword routers, `0.0.0.0:5001` |
| `backend/agents/base_agent.py` | Groq client (`GROQ_API_KEY`, `llama3-8b-8192`) |
| `backend/agents/welcome_agent.py` | Greeter / section suggestions |
| `backend/agents/project_agent.py` | Sample projects (`project1`–`project3`) |
| `backend/agents/career_agent.py` | Sample skills + experience |
| `backend/agents/client_agent.py` | Sample services + proposal prompts |
| `backend/agents/research_agent.py` | Groq web-search tool path (separate model) |
| `requirements.txt` | Python deps (install from repo root into `venv/`) |
| `img/` | README screenshot only |

Frontend chat base URL is hardcoded to `http://127.0.0.1:5001`. Vite has **no proxy**. Do not assume `/api/*` from the Vite origin works — except `Services.jsx`, which incorrectly posts to `/api/client/proposal` (that route does not exist). Proposal chat must go through `POST /api/client` like every other client message.

## Commands

From the repo root:

```shell
python3 -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip3 install -r requirements.txt
cd backend && python3 main.py     # http://127.0.0.1:5001
```

In a second terminal:

```shell
cd frontend
npm install
npm run dev                       # http://localhost:5173
npm run build
npm run preview
npm run lint                      # eslint .
```

There is **no** `typecheck`, unit test, or e2e script today. Add them as named npm/pytest scripts when the first tests land — do not leave ad-hoc commands undocumented.

Copy `GROQ_API_KEY` into `backend/.env` (there is no `.env.example` yet; add one with a placeholder if you touch env docs). Get a key at [GroqCloud](https://console.groq.com/home).

## Testing expectations before a PR

There is no CI yet. Until GitHub Actions exists, do not open or merge a PR until these are green locally:

1. `cd frontend && npm run lint`
2. Flask app imports and boots (`python3 backend/main.py`)
3. Manual smoke: Welcome chat round-trip against local Flask
4. Any new test script you add, run it

Also:

- New behaviour needs a test at the **cheapest layer** that would catch a regression: Python unit first, component next, e2e last.
- Mock Groq (`BaseAgent.get_response` / `requests.post`) in tests. Never call Groq from CI or unit tests.
- Do not snapshot whole chat transcripts. Assert HTTP contracts, agent routing, and a few accessible controls instead.
- When CI is added, GitHub Actions is the merge gate. Do not merge with skipped or failing tests.

## Dependency policy

- Default to the established stack above.
- New **runtime** dependencies need a clear architectural purpose, not convenience or familiarity.
- Do not add a library that duplicates axios, React Router, Flask, or the Groq HTTP client in `BaseAgent`.
- Frontend: `npm install` / `npm install -D`. Commit `frontend/package-lock.json`.
- Python: pin in `requirements.txt`. Do not add Poetry/uv unless a dedicated packaging migration.
- Stay on React **19.x** already in the repo. Do not mix React 18 with React 19 types (or the reverse) if TypeScript is added.
- Tailwind stays the styling system. Do not take a drive-by shadcn dependency to style one control.
- Sentry and PostHog stay out until there are project keys and a product reason to ship them.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/), scoped where it adds clarity:

`feat:`, `fix:`, `refactor:`, `test:`, `chore:`, `docs:`, `perf:`

Examples in **this** repo:

- `feat(agents): route career job-fit prompts`
- `fix(chat): point proposal requests at /api/client`
- `feat(research): compare two technologies`
- `fix(contact): stop claiming success when nothing was sent`
- `chore(frontend): move axios to dependencies`
- `docs: add agent HTTP contract`

Keep commits **logically scoped**. Do not bundle an agent-prompt change with a Tailwind tweak and a CI addition.

## Environment

| Variable | Where | Notes |
| --- | --- | --- |
| `GROQ_API_KEY` | `backend/.env` | Required for every agent completion. Never commit a real key. |

`python-dotenv` loads from the process cwd (`backend/` when running `python3 main.py`). Put the file there, not only at the repo root.

## Hosting and CI

- No GitHub Actions workflow exists. Add lint + a Groq-mocked agent test before relying on CI as a merge gate.
- Frontend is a static Vite app. Flask is a long-running process on port **5001** and cannot live in a Netlify function as-is.
- Docker, Fly.io, and AWS are out of scope until the API is deployed.
- CORS is wide open (`CORS(app)`). Tighten origins when this is not localhost-only.

## Known debt (do not make worse)

- **Contact** (`frontend/src/pages/Contact.jsx`) always shows success and never hits an API.
- **Proposal** in Services posts to a missing `/api/client/proposal` route, then ignores the body.
- **Chat** renders model markdown with `dangerouslySetInnerHTML` and no sanitizer.
- **Chat** API host is hardcoded localhost; production builds cannot reach Flask without a change.
- **Navbar.jsx** / **Footer.jsx** are unused duplicates of Layout.
- Sample GitHub/demo URLs and company names are placeholders, not live portfolio facts.
- Research `tools: [{ "type": "web_search" }]` is Groq-specific and may fail; keep failures user-visible, do not silently swap providers.

## Do not

- Check in `.env`, `.env.local`, or real API keys.
- Add Prisma, auth, Redis, or a second global state library “for consistency with other repos.”
- Point the frontend at a second LLM (OpenAI, Anthropic, Ollama) without a dedicated provider design.
- Leave keyword routing in `backend/main.py` and a duplicate of the same keywords in React.
- Treat unused `Navbar.jsx` / `Footer.jsx` as the source of truth for chrome — `Layout.jsx` is.
- Add `next lint` or Biome **and** keep ESLint without a dedicated linter migration. ESLint is the linter today.
