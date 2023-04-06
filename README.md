# DealShare

A web-based application which is specifically designed on the principle of Business-to-business marketing. 

## Getting Started

- Installing dependencies

```bash
npm install
```

- Running Development Server

```bash
npm run dev
```

- Generating a production build (in case you want to deploy)

```bash
npm run build
```

After `npm run dev`, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory Structure

- `public/`: AA directory of assets, such as images, icons, and fonts, that is publicly accessible
- `src/`: All the application related code
  - `components/`: Modular and reusable components that can be utilized in other sections and components
  - `lib/`: 
    - `app/`: Utility functions, hooks, and request functions related to various pages
    - `api/`: Contains files for database queries, middleware, and controllers
  - `pages/`: Represent unique routes/pages with a directory structure mimicking the app's URL structure
    - 'api/': Handle incoming API requests
  - `sections`: Sections of different pages
  - `styles`:  CSS files for defining the visual styles and layout of the application
- `package.json`:  Manifest for the project, containing metadata such as the project name, version, dependencies, scripts, and more
