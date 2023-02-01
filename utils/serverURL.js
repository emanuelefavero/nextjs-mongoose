const dev = process.env.NODE_ENV !== 'production'

// TODO - change this to your deployed vercel URL
export const serverURL = dev
  ? 'http://localhost:3000'
  : 'YOUR_DEPLOYED_VERCEL_URL'
