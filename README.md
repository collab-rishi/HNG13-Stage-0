# Cat Fact Profile API 🐱

A simple Node.js REST API that returns my profile and a random cat fact, fetched live from an external API.

## 📌 Endpoint

**GET** `/me`

### ✅ Sample Response

```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T12:34:56.789Z",
  "fact": "Cats have five toes on their front paws but only four on the back ones."
}
```

## 🧑‍💻 How to Run Locally

### Clone the repo:
```bash
git clone https://github.com/yourusername/cat-fact-api.git
cd profile
```

## Install dependencies:

```bash
npm install
```

## Create a .env file:

```bash
touch .env
```
### Add:

```
PORT=your_port
EMAIL=your_email
NAME=your_name
STACK=Node.js/Express
```

## Run the server:

```bash
npm run dev
```

## Open in browser or test with curl/Postman:
```bash
http://localhost:{your_port}/me
```

## 📦 Dependencies

- Express

- Axios

- dotenv

- cors
- nodemon

## 🌐 Deployment

### Deploying on Railway

1. Go to [railway.app](https://railway.app)
2. Create a new project and connect your GitHub repo
3. Set the environment variables (`EMAIL`, `NAME`, `STACK`) under "Variables"
4. Railway auto-deploys your app and gives you a live URL

## 📝 Notes

-  The /me endpoint returns a new cat fact every time it is requested.

- If the Cat Fact API is down or times out, a fallback message is returned instead of the fact.

- Timestamp is generated in real-time UTC using ISO 8601 format.

- Response is returned as application/json.

## 💡 What I Learned

This project reinforced:

- Working with third-party APIs using Axios

- Structuring well-formed JSON responses

- Graceful error handling and fallbacks

- Using environment variables for cleaner config

- Setting up and testing a basic RESTful API in Node.js/Express