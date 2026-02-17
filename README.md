# Legal CRM Dashboard with AI Agent and Google OAuth

A cloud-ready Legal CRM Dashboard built with React, featuring:

* Google OAuth authentication
* AI-powered CRM analytics agent
* Case pipeline management
* Event logging system
* Modular agent architecture

This project demonstrates full-stack architecture, agent integration, and public API authentication.

---

# Features

## Authentication (Public API Integration)

* Google OAuth login via @react-oauth/google
* Secure JWT decoding
* User session persistence via localStorage

Displays:

* Name
* Email
* Profile picture

---

## CRM Dashboard

Tracks:

* Total Cases
* Contacts
* Tasks
* Agent Events

Includes real-time event log.

---

## Case Pipeline Management

Supports case stages such as:

* Intake
* Estate Planning
* Settlement

Modular pipeline architecture allows future automation.

---

## AI Agent Integration

Custom agents located in:

```
src/agent/
```

Example agents:

* intakeAgent.js
* followUpAgent.js

Agents generate structured CRM events via:

```
src/services/eventLog.js
```

---

## Architecture

```
React Frontend
  ├── Dashboard UI
  ├── Pipeline UI
  ├── Google OAuth Login
  └── CRM Context State

Agent Layer
  ├── Intake Agent
  ├── Follow-Up Agent

Service Layer
  ├── Event Log Service
  └── OpenAI Service (extensible)

Authentication
  └── Google OAuth (Public API Integration)
```

---

## Tech Stack

Frontend

* React
* Vite
* Tailwind CSS

Authentication

* Google OAuth

AI / Agent Architecture

* Modular agent design
* Event-driven logging

Deployment Ready

* Environment variable support
* Clean repository structure

---

## Public API Integration (Requirement D)

This project integrates Google OAuth using:

```
@react-oauth/google
```

Authentication method used:

OAuth 2.0 via Google Identity Services

User data retrieved:

* Name
* Email
* Profile picture

---

## Setup Instructions

Clone repo:

```
git clone https://github.com/zhouyu3506/byteable-assessment.git
cd byteable-assessment
```

Install:

```
npm install
```

Create `.env`

```
VITE_GOOGLE_CLIENT_ID=your_client_id_here
```

Run:

```
npm run dev
```

---

## Security

Environment variables are excluded via:

```
.env
.gitignore
```

No secrets are committed.

---

## Future Improvements

* AI automated case classification
* AI follow-up suggestions
* Backend persistence layer
* Multi-user support

---

## Author

Yu Zhou
Northeastern University
AI / Software Engineering Candidate
