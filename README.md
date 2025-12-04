# 🗨️ React Native Chat App

A modular React Native chat application with system‑driven responses, quick‑reply options, and enforced code quality via Husky + Commitlint.

---

## ✨ Features

- Chat UI built with `FlatList` and custom `MessageItem` component.
- System greeting: starts every conversation with “Hello, what can I help you with today”.
- Quick‑reply options: 5 static options displayed under the greeting.
- Dynamic responses:
  - User taps an option → system replies “Great, let me fetch information on [choice]”.
  - Temporary “fetching…” message → replaced with mock data after delay.
- Reset button: clears the conversation and restores the initial greeting + options.
- Modular architecture:
  - `hooks/useChatConversation.ts` → chat logic.
  - `data/systemOptions.ts` → static options + mock data.
  - `data/systemResponses.ts` → reusable system response strings.
- Code quality enforcement:
  - Husky hooks for linting, formatting, testing, and commit message validation.
  - Commitlint with Conventional Commit rules.

---

## 📂 Project Structure

    src/
      components/
        MessageItem.tsx
      hooks/
        useChatConversation.ts
      data/
        systemOptions.ts
        systemResponses.ts
    ChatScreen.tsx
    .husky/
      pre-commit
      pre-push
      commit-msg
    commitlint.config.js

---

## 🚀 Getting Started

1. Install dependencies with your package manager (e.g. `npm install`).
2. Run the app using your React Native tooling (`npm start` or `expo start`).

---

## 🛡️ Husky + Commitlint Setup

- Install Husky as a dev dependency.
- Enable Husky with `npx husky install`.
- Add `"prepare": "husky install"` to your `package.json` scripts.
- Create hooks manually in `.husky/`:
  - Pre‑commit → run lint + format
  - Pre‑push → run tests
  - Commit‑msg → validate commit messages with Commitlint

---

## 📖 Conventional Commit Cheat‑Sheet

Format:  
`<type>(scope): <description>`

Types:

- `feat` → new feature
- `fix` → bug fix
- `chore` → maintenance
- `docs` → documentation
- `style` → formatting only
- `refactor` → code restructure
- `test` → add/update tests
- `perf` → performance improvement

Examples:

- `feat(chat): add quick-reply options`
- `fix(ui): correct button alignment`
- `chore(husky): configure pre-commit lint`

---

## ⚙️ Commitlint Rules

Defined in `commitlint.config.js`:

- Subject must be lowercase
- Subject max length: 72 chars
- Scope required
- Valid types only (`feat`, `fix`, `chore`, etc.)
- Blank line before body/footer

---

## 🧪 Scripts

In `package.json`:

- `lint` → run ESLint
- `format` → run Prettier
- `test` → run Jest

---

## 📌 Roadmap

- Add typing indicator animation (instead of plain “fetching…”)
- Connect to real backend API
- Expand quick‑reply options dynamically

---

## 📝 License

MIT License. Free to use and modify.

---
