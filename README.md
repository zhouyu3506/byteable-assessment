<img width="1439" height="860" alt="image" src="https://github.com/user-attachments/assets/1b7f4b59-8e00-4bdf-9b26-c8249cfdafda" />


# Legal CRM Dashboard with AI Agent and Google OAuth

A cloud-ready Legal CRM Dashboard built with React, featuring AI-powered workflow automation using OpenAI and secure authentication via Google OAuth.

This project demonstrates how AI agents can automate CRM operations such as case intake, follow-ups, and task generation.

---

## Live Features

### Authentication (Public API Integration)

* Google OAuth login via `@react-oauth/google`
* Secure JWT decoding
* User session persistence using localStorage
* Displays authenticated user profile

---

### AI Agent Automation (OpenAI Integration)

This project integrates OpenAI to automatically generate intelligent follow-up tasks.

Agents implemented:

#### Intake Agent

Triggered when a new case is created.

Uses OpenAI to generate:

* Legal intake checklist
* Required documentation tasks
* Consultation preparation tasks

#### Follow-Up Agent

Triggered when a case moves into negotiation stage.

Uses OpenAI to generate:

* Client follow-ups
* Document requests
* Negotiation preparation tasks

---

### CRM Pipeline Management

Features:

* Case pipeline with multiple stages:

  * Intake
  * Discovery
  * Negotiation
  * Settled

* Create new cases

* Track case progress

* Automatically trigger AI agents

* Task management system

---

### Dashboard Analytics

Displays:

* Total cases
* Total tasks
* Agent activity log
* AI-generated task events

Example:

```
AI Intake Agent generated tasks for "Estate Planning"
```

---

## Architecture Overview

Frontend:

* React
* Context API (global CRM state)
* TailwindCSS

AI Integration:

* OpenAI API
* Agent-based architecture
* Modular agent services

Authentication:

* Google OAuth 2.0

State Management:

* CRMContext (Deals, Tasks, Events)

---

## Project Structure

```
src/

agent/
  intakeAgent.js
  followUpAgent.js

services/
  openaiService.js

context/
  CRMContext.jsx

pages/
  Dashboard.jsx
  Pipeline.jsx

App.jsx
```

---

## Public API Integrations Used

Google OAuth
Used for authentication.

OpenAI API
Used to generate intelligent legal workflow tasks.

Authentication method:

* Google OAuth 2.0
* OpenAI API Key via environment variable

---

## Environment Setup

Create `.env` file:

```
VITE_OPENAI_API_KEY=your_key_here
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

Run:

```
npm install
npm run dev
```

---

## Example Workflow

1. User logs in via Google OAuth
2. User clicks "New Case"
3. Intake Agent triggers automatically
4. OpenAI generates legal tasks
5. Tasks appear in dashboard
6. Event log records AI activity

---

## Why This Project Matters

This project demonstrates:

* AI Agent integration into real business workflow
* Public API integration (OAuth + OpenAI)
* Full-stack architecture design
* AI-driven automation system design

This architecture can scale into production CRM, SaaS, or enterprise legal platforms.

---

## Author

Yu Zhou
AI / ML / Software Engineer
