# AI Security Review Demo

A simple Node.js/Express.js application designed to demonstrate how AI code reviewers can identify security vulnerabilities that traditional linters often miss.

## 🚀 Getting Started

### Prerequisites

- Node.js installed

### Installation

```bash
npm install
```

### Running the App

Start the development server with nodemon:

```bash
npm run dev
```

The server will be running at `http://localhost:3000`.

## 🛠 API Endpoints

### Get All Users

- **URL:** `/api/users`
- **Method:** `GET`
- **Description:** Returns a list of all users.

### Get User by ID

- **URL:** `/api/users/:id`
- **Method:** `GET`
- **Description:** Returns user details based on the provided ID.

## 🔒 Security Context

This project contains intentional security flaws (PII leaks) for demonstration purposes. Use this to test your AI code review tools!