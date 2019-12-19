<h1 align="center">
  Olivierjm.dev
</h1>

Find it live here https://olivierjm.dev

## Quick Setup
**Contents**

- Basic profile info
- Random dev quotes
- Articles(dev and non-dev related)
- Links to other sites

#### _Set-up Locally_

In your terminal, navigate to where you would like this blog to live, then run

```bash
#clone the repo using ssh
git clone git@github.com:olivierjm/olivierjm.dev.git personal-website

#clone the repo using https
git clone https://github.com/olivierjm/olivierjm.dev.git personal-website

#navigate to the directory
cd personal-website

#install dependencies & run dev server with yarn
yarn install
yarn dev

#or with npm
npm install
npm run dev
```

A new browser window should open with the dev server running or you can navigate to localhost:8000

### Instant Previews

The [instant preview](https://forestry.io/docs/previews/instant-previews/) method spins up the Gatsby development server for a long-lived preview that can quickly respond to content updates. When using instant previews, your preview command should be the develop command. The development server spawned by this command should be available over port 8080, and bind to 0.0.0.0. The forestry:preview command in this project's package.json will spin up a Gatsby dev server compatible with Forestry's instant previews.

## Deploy Options

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/olivierjm/olivierjm.dev)
