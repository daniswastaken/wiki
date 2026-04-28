# Bedrock Perfected Wiki

This repository contains the source code and documentation for the Bedrock Perfected wiki. The project is built using VitePress and serves as the official documentation for the Bedrock Perfected addon.

## Technical Overview

The wiki is a static site generated with VitePress. It includes detailed information regarding biomes, items, mechanics, and quality-of-life improvements introduced by the addon.

### Requirements

- Node.js (Latest LTS recommended)
- npm

## Development

To set up the project locally for development, follow these steps:

1. Install the necessary dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local server address (typically `http://localhost:5173`).

## Production

To generate a production-ready build of the wiki:

1. Run the build command:
   ```bash
   npm run build
   ```

2. To preview the production build locally:
   ```bash
   npm run preview
   ```

## Project Structure

- `docs/`: Contains the markdown source files for the wiki content.
- `docs/.vitepress/`: Configuration files for the VitePress site.
- `docs/public/`: Static assets such as images and icons.
