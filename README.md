# playwright-canary

## Install Dependencies

```sh
npm install
```

## Run local tests

First run local development server:

```sh
npm run dev
```

Then run Playwright tests:

```sh
BASE_URL=http://localhost:5678 SCREENSHOT_DIR=canary/screenshots npm run test
```

## Build app

```sh
npm run build
```

## Build canary

```sh
npm run build:canary
```
