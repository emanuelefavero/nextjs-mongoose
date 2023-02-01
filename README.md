# Next.js Mongoose

This is a Next.js project using MongoDB as a database (Mongoose as the ODM)

> Note: An ODM is an Object Document Mapper. It's a library that allows you to interact with your database using objects

## Getting Started

- Add your MongoDB URI to the `MONGODB_URI` environment variable in `.env.local`

> Note: I'm using MongoDB Atlas

- Install dependencies and run the development server:

```bash
npm i
npm run dev
```

## Deploying to Vercel

- Add your MongoDB URI to the `MONGODB_URI` environment variable in Vercel
- Change the server URL in `utils/serverURL.js` to your production Vercel URL
