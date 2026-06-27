# Raaga Heritage Backend

Backend REST API for the Raaga Heritage marketplace.

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Run Backend

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

## API Endpoints

| Method | Endpoint |
|--------|----------|
| GET | /api/products |
| GET | /api/products/:id |
| POST | /api/products |
| PUT | /api/products/:id |
| DELETE | /api/products/:id |
| GET | /api/products/search?q=keyword |