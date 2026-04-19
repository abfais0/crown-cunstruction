# Crownline Construction

This is a React + Vite + Tailwind CSS application for Crownline Construction.

## Deployment to Cloudflare Pages

The error you encountered happens because the Cloudflare Dashboard's "Direct Upload" feature does not automatically build TypeScript/Vite projects. You have two options to fix this:

### Option 1: Use the `wrangler` CLI (Recommended)

I have added a `deploy` script to your `package.json`. To deploy using the command line:

1. Open your terminal in the project folder.
2. Run the following command:
   ```bash
   npm run deploy
   ```
3. Follow the prompts to log in to your Cloudflare account and select your project.

### Option 2: Manual Upload via Dashboard

If you prefer using the Cloudflare Dashboard's drag-and-drop uploader:

1. Run the build command locally:
   ```bash
   npm run build
   ```
2. This will create a `dist` folder in your project.
3. **Crucial:** Only upload the contents of the `dist` folder to Cloudflare, not the entire project folder.

### Option 3: Git Integration (Best Practice)

1. Push your code to a GitHub or GitLab repository.
2. In the Cloudflare Pages dashboard, select "Connect to Git".
3. Use the following build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js Version:** Set `NODE_VERSION` to `20` in Environment Variables.

## Environment Variables

Make sure to add your `GEMINI_API_KEY` to the Cloudflare Pages dashboard under **Settings > Variables and Secrets** so the chatbot functions correctly in production.
