# prime-deals

## create `backend` and `frontend` directories
- create `backend` and `frontend` directory from inside the root directory of your project.
- run `mkdir backend frontend`

## backend

- `cd backend`
- run `npm init --yes`
- run `npm i -D typescript ts-node`
- run `npx tsc --init`, this will create `tsconfig.json` file
- uncomment `"outDir"` entry and setting it to `"./build"` from inside the `tsconfig.json`, which will put all of our compiled TypeScript files into `"./build"` directory.
- run `npm i express dotenv mongoose --save`
- run `npm i --save-dev @types/express`

## create an entry point for our application

- now create `app.ts` file inside `backend/src`.
- Look for `src/app.ts` for the code.

## installing nodemon dependencies
run `npm i nodemon --save-dev`
Add below configurations to your `package.json` file inside `scripts` tag.

- for mac and linux/ubuntu:
```js
"dev": "NODE_ENV=DEVELOPMENT nodemon src/app.ts",
"prod": "NODE_ENV=PRODUCTION nodemon src/app.ts",
```

- for windows:
```js
"dev": "SET NODE_ENV=DEVELOPMENT& nodemon src/app.ts",
"prod": "SET NODE_ENV=PRODUCTION& nodemon src/app.ts",
```
- run `npm run dev`

