### Prepare and Start Prisma ORM Server

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/pages/benchmarks.mdx

Execute these commands to prepare and then start the Prisma ORM server for benchmarking.

```bash
## Prisma
pnpm prepare:prisma
pnpm start:prisma
```

--------------------------------

### Install @libsql/client package

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-turso.mdx

Install the @libsql/client package, the official client for libSQL databases like Turso.

```bash
@libsql/client
```

--------------------------------

### Install Express

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-nile.mdx

Install the Express package for the web framework.

```bash
express
```

--------------------------------

### Example Output of Similar Guides Search

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/vector-similarity-search.mdx

An example JSON output showing the results of a vector similarity search, including guide names, URLs, and calculated similarity scores.

```json
[
  {
    name: 'Drizzle with Turso',
    url: '/docs/tutorials/drizzle-with-turso',
    similarity: 0.8642314333984994
  },
  {
    name: 'Drizzle with Supabase Database',
    url: '/docs/tutorials/drizzle-with-supabase',
    similarity: 0.8593631126014918
  },
  {
    name: 'Drizzle with Neon Postgres',
    url: '/docs/tutorials/drizzle-with-neon',
    similarity: 0.8541051184461372
  },
  {
    name: 'Drizzle with Vercel Edge Functions',
    url: '/docs/tutorials/drizzle-with-vercel-edge-functions',
    similarity: 0.8481551084241092
  }
]
```

--------------------------------

### Install Encore CLI

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-frameworks/drizzle-with-encore.mdx

Use these commands to install the Encore CLI on macOS, Linux, or Windows.

```bash
# macOS
brew install encoredev/tap/encore

# Linux
curl -L https://encore.dev/install.sh | bash

# Windows
iwr https://encore.dev/install.ps1 | iex
```

--------------------------------

### Start Drizzle ORM Server

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/pages/benchmarks.mdx

Run this command to start the Drizzle ORM server for benchmarking.

```bash
## Drizzle
pnpm start:drizzle
```

--------------------------------

### Install PostgreSQL Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-railway/bun-railway-pg.mdx

Install the `pg` package as the PostgreSQL driver and its type definitions using Bun.

```bash
pg
-D @types/pg
```

--------------------------------

### Install Neon Serverless Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-frameworks/drizzle-nextjs-neon.mdx

Install the Neon serverless driver package for connecting to Neon Postgres.

```bash
npm install @neondatabase/serverless
```

--------------------------------

### Drizzle Kit Configuration File Examples

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/kit-overview.mdx

Examples of `drizzle.config.ts` files, ranging from a simple setup to an extended configuration with various options.

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
});
```

```typescript
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./src/schema.ts",

  driver: "pglite",
  dbCredentials: {
    url: "./database/",
  },

  extensionsFilters: ["postgis"],
  schemaFilter: "public",
  tablesFilter: "*",

  introspect: {
    casing: "camel",
  },

  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },

  breakpoints: true,
  strict: true,
  verbose: true,
});
```

--------------------------------

### Example Output: Docker Images List

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/mysql-local-setup.mdx

Example output showing the details of downloaded Docker images, including repository, tag, and size.

```plaintext
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
mysql        latest    4e8a34aea708   2 months ago   609MB
```

--------------------------------

### Install Project Dependencies with pnpm

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/README.md

Use this command to install all required project dependencies.

```bash
pnpm install
```

--------------------------------

### Start the Node.js Application (Bash)

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-nile.mdx

Run this command to start the web application, making the API routes available for testing.

```bash
npx tsx src/app.ts
```

--------------------------------

### Start Supabase Local Development Stack

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-supabase-edge-functions.mdx

This command initializes and starts the local Supabase development services, including the database.

```bash
supabase start
```

--------------------------------

### Install Node-Postgres

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-nile.mdx

Install the node-postgres package for connecting to a Postgres database.

```bash
node-postgres
```

--------------------------------

### Start Netlify Local Development Server

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-netlify-edge-functions-supabase.mdx

Run this command to start the Netlify dev server and test your Edge Functions locally.

```bash
netlify dev
```

--------------------------------

### Drizzle Kit Generate CLI Options Examples

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-generate.mdx

Examples demonstrating the use of '--name' to specify a migration name and combining '--name' with '--custom' for a custom-named empty migration.

```shell
drizzle-kit generate --name=init
```

```shell
drizzle-kit generate --name=seed_users --custom
```

--------------------------------

### Install Drizzle ORM and Turso Client Packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-turso.mdx

Install the necessary Drizzle ORM and `@libsql/client` packages, along with `drizzle-kit` for development.

```npm
drizzle-orm @libsql/client
-D drizzle-kit
```

--------------------------------

### Initialize New Netlify Project

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-netlify-edge-functions-supabase.mdx

Use this command to start the interactive process of creating a new Netlify project.

```bash
netlify init
```

--------------------------------

### Example Output: Running Docker Containers

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/mysql-local-setup.mdx

Example output from `docker ps` command, confirming the MySQL container is running and its port mapping.

```plaintext
CONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                               NAMES
19506a8dc12b   mysql         "docker-entrypoint.s…"   4 seconds ago    Up 3 seconds    33060/tcp, 0.0.0.0:3306->3306/tcp   drizzle-mysql
```

--------------------------------

### Install Vercel Postgres client

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-vercel.mdx

Installs the official Vercel Postgres client library to connect to Vercel Postgres databases.

```bash
@vercel/postgres
```

--------------------------------

### Package.json Start Script for Bun Application

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-railway/bun-railway-pg.mdx

This `package.json` snippet defines the `start` script, which uses Bun to run the main application entry point, `src/index.ts`.

```json
{
  "scripts": {
    "start": "bun src/index.ts"
  }
}
```

--------------------------------

### Start Local Development Server with pnpm

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/README.md

Initiates the local development server, typically accessible at `localhost:4321`.

```bash
pnpm run dev
```

--------------------------------

### Install postgres package

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-supabase.mdx

Install the postgres package, a Node.js client, for connecting to your PostgreSQL database.

```bash
postgres
```

--------------------------------

### Extended CLI options for drizzle-kit up

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-up.mdx

Examples of using `drizzle-kit up` with command-line options to specify the database dialect and a custom output directory for migrations.

```shell
drizzle-kit up --dialect=postgresql
```

```shell
drizzle-kit up --dialect=postgresql --out=./migrations-folder
```

--------------------------------

### Install Dotenv Package

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-frameworks/drizzle-nextjs-neon.mdx

Install the `dotenv` package to manage environment variables in your project.

```bash
npm install dotenv
```

--------------------------------

### Install Netlify Edge Functions types

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-netlify-edge-functions-supabase.mdx

Optionally installs the `@netlify/edge-functions` package to import types for the `Context` object.

```bash
@netlify/edge-functions
```

--------------------------------

### Example Neon Postgres Connection String

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-netlify-edge-functions-neon.mdx

An example of a Neon Postgres database connection string, used to connect to the database.

```bash
postgres://username:password@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
```

--------------------------------

### Example Neon Database Connection String

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-neon.mdx

An example of a Neon Postgres database connection string, which you will find in your Neon Console.

```text
postgres://username:password@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb
```

--------------------------------

### Install Neon Serverless Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-neon.mdx

Install the Neon serverless driver to enable connection to your Neon Postgres database.

```bash
@neondatabase/serverless
```

--------------------------------

### Sample Project File Structure

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/migrate/migrate-from-prisma.mdx

This snippet shows the directory layout for the example project, highlighting the organization of Prisma files, database connection, routers, and controllers.

```plaintext
📦 <project root>
 ├ 📂 prisma
 │  ├ 📂 migrations
 │  │  ├ 📂 20240101200233_init
 │  │  │  └ 📜 migration.sql
 │  │  └ 📜 migration_lock.toml
 │  └ 📜 schema.prisma
 ├ 📂 src
 │  ├ 📂 db
 │  │  └ 📜 db.ts
 │  ├ 📂 routers
 │  │  ├ 📜 order.router.ts
 │  │  ├ 📜 product.router.ts
 │  │  └ 📜 supplier.router.ts
 │  ├ 📂 controllers
 │  │  ├ 📜 order.controller.ts
 │  │  ├ 📜 product.controller.ts
 │  │  └ 📜 supplier.controller.ts
 │  ├ 📜 index.ts
 │  └ 📜 server.ts
 ├ 📜 package.json
 └ 📜 tsconfig.json
```

--------------------------------

### Migration Folder Structure Example

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-migrate.mdx

Illustrates the typical directory structure for Drizzle Kit migration files within a project.

```plaintext
  ├ 📂 drizzle       
  │ ├ 📂 20242409125510_premium_mister_fear
  │ └ 📂 20242409135510_delicate_professor_xavie
  └ …
```

--------------------------------

### Example Output: List Docker Images

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/postgresql-local-setup.mdx

Illustrates the expected output when listing Docker images, showing details for the pulled PostgreSQL image.

```plaintext
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
postgres     latest    75282fa229a1   6 weeks ago     453MB
```

--------------------------------

### Install Drizzle ORM and development packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/node-sqlite-new.mdx

Install `drizzle-orm` and `dotenv` for runtime, and `drizzle-kit` and `tsx` as development dependencies.

```bash
npm install drizzle-orm dotenv -D drizzle-kit tsx
```

--------------------------------

### Configure Drizzle SQLite Proxy for Batch Queries

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-drizzle-proxy.mdx

This example shows how to extend the Drizzle SQLite proxy setup to support batch requests. It defines a second callback function to handle an array of queries, posting them to a `/batch` endpoint.

```typescript
import { drizzle } from 'drizzle-orm/sqlite-proxy';

type ResponseType = { rows: any[][] | any[] }[];

const db = drizzle(async (sql, params, method) => {
  // single queries logic. Same as in code above
}, async (queries: { sql: string, params: any[], method: 'all' | 'run' | 'get' | 'values'}[]) => {
    try {
      const result: ResponseType = await axios.post('http://localhost:3000/batch', { queries });

      return result;
    } catch (e: any) {
      console.error('Error from sqlite proxy server:', e);
      throw e;
    }
  });
```

--------------------------------

### Install Drizzle ORM and Postgres packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-supabase.mdx

Installs 'drizzle-orm' and 'postgres' for runtime, and 'drizzle-kit' as a development dependency.

```npm
drizzle-orm postgres
-D drizzle-kit
```

--------------------------------

### Install Neon serverless driver packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-planetscale-postgres.mdx

Install Drizzle ORM, the `@neondatabase/serverless` driver, and Drizzle Kit for connecting to PlanetScale Postgres in serverless environments.

```bash
drizzle-orm @neondatabase/serverless -D drizzle-kit
```

--------------------------------

### Perform sync queries with Drizzle and node:sqlite

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-node-sqlite.mdx

This example demonstrates how to use Drizzle ORM's synchronous API methods (`all`, `get`, `values`, `run`) with a `node:sqlite` driver.

```typescript
import { drizzle } from 'drizzle-orm/node-sqlite';
import { DatabaseSync } from 'node:sqlite';

const sqlite = new Database('sqlite.db');
const db = drizzle({ client: sqlite });

const result = db.select().from(users).all();
const result = db.select().from(users).get();
const result = db.select().from(users).values();
const result = db.select().from(users).run();
```

--------------------------------

### Install ESLint Drizzle Plugin v0.2.3

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/latest-releases/drizzle-orm-v0292.mdx

Install the specific version of the ESLint Drizzle Plugin to get the latest enhancements and bug fixes, including support for functions and improved error messages.

```bash
npm i eslint-plugin-drizzle@0.2.3
```

--------------------------------

### Install Drizzle ORM and TiDB Serverless packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-tidb.mdx

Install the necessary Drizzle ORM and TiDB Serverless packages, including `drizzle-kit` for development.

```bash
npm install drizzle-orm @tidbcloud/serverless
npm install -D drizzle-kit
```

--------------------------------

### Start Next.js Local Development Server

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-vercel-edge-functions.mdx

Launches the Next.js development server, allowing local testing of API routes and application components.

```bash
npx next dev
```

--------------------------------

### Run Encore Application

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-frameworks/drizzle-with-encore.mdx

Use this command to start your Encore application. Encore automatically applies Drizzle migrations when the application starts.

```bash
encore run

```

--------------------------------

### Example MySQL Database Connection URL

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/mysql-local-setup.mdx

Provides a concrete example of a MySQL connection URL for the locally set up 'drizzle-mysql' container.

```plaintext
mysql://root:mypassword@localhost:3306/mysql
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-neon.mdx

Install Drizzle ORM and Drizzle Kit as development dependencies for your project.

```bash
drizzle-orm -D drizzle-kit
```

--------------------------------

### Install Drizzle Kit

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/kit-overview.mdx

Installs Drizzle Kit as a development dependency in your project using npm.

```bash
-D drizzle-kit
```

--------------------------------

### Create New Encore Project with Drizzle

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-frameworks/drizzle-with-encore.mdx

Initialize a new Encore application with Drizzle ORM pre-configured using the provided example.

```bash
encore app create my-app --example=ts/drizzle
cd my-app
```

--------------------------------

### Example Output: List Running Docker Containers

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/postgresql-local-setup.mdx

Shows the expected output from `docker ps`, confirming that the `drizzle-postgres` container is running and its port mapping.

```plaintext
CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                    NAMES
df957c58a6a3   postgres   "docker-entrypoint.s…"   4 seconds ago   Up 3 seconds   0.0.0.0:5432->5432/tcp   drizzle-postgres
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/migrate/migrate-from-typeorm.mdx

Install Drizzle ORM and the `pg` driver, along with Drizzle Kit and its TypeScript types as development dependencies.

```bash
npm install drizzle-orm pg
npm install -D drizzle-kit @types/pg
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-bun-sqlite.mdx

Install the necessary Drizzle ORM and Drizzle Kit packages using npm.

```bash
drizzle-orm
-D drizzle-kit
```

--------------------------------

### Install arktype Package

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/arktype.mdx

Install the `arktype` package using npm to enable schema generation features.

```npm
arktype
```

--------------------------------

### Install Drizzle ORM and MySQL2 packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started-mysql.mdx

Install `drizzle-orm` and `mysql2` as runtime dependencies, and `drizzle-kit` as a development dependency.

```npm
drizzle-orm mysql2
-D drizzle-kit
```

--------------------------------

### Install Zod Dependency

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/zod.mdx

Installs the Zod library, which is used for schema validation with Drizzle ORM.

```bash
npm install zod
```

--------------------------------

### Configure ESLint with Drizzle Plugin 'recommended' Configuration

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/eslint-plugin.mdx

Example `.eslintrc.yml` configuration using the 'plugin:drizzle/recommended' preset, which is currently equivalent to 'all'.

```yaml
root: true
extends:
  - "plugin:drizzle/recommended"
parser: '@typescript-eslint/parser'
parserOptions:
  project: './tsconfig.json'
plugins:
  - drizzle
```

--------------------------------

### Example Xata PostgreSQL Connection String

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-xata.mdx

An illustrative example of a complete Xata PostgreSQL connection string, demonstrating how the format is populated with specific values.

```plaintext
postgresql://postgres:password@t56hgfp7hd2sjfeiqcn66qpo8s.us-east-1.xata.tech/app?sslmode=require
```

--------------------------------

### Initialize a new Gel project

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/gel-new.mdx

Use the `gel project init` command to set up a new Gel project, creating the necessary directory structure and configuration files.

```bash
gel project init
```

--------------------------------

### Install Valibot dependency

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/valibot.mdx

Install the `valibot` package using npm to enable schema validation functionalities.

```npm
valibot
```

--------------------------------

### Install Drizzle ORM and Netlify Database packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-netlify-db.mdx

Install the necessary Drizzle ORM and Netlify Database packages, along with Drizzle Kit for development dependencies.

```bash
drizzle-orm @netlify/database
-D drizzle-kit
```

--------------------------------

### Install Drizzle ORM and PostgreSQL driver packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-nile.mdx

Installs the necessary Drizzle ORM, `node-postgres` driver, and `drizzle-kit` for development dependencies.

```shell
npm install drizzle-orm postgres
npm install -D drizzle-kit
```

--------------------------------

### Get Help for Astro CLI with pnpm

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/README.md

Displays help information and available options for the Astro CLI.

```bash
pnpm run astro -- --help
```

--------------------------------

### Install Drizzle ORM and `better-sqlite3` packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started-sqlite.mdx

Install Drizzle ORM, `better-sqlite3`, and its TypeScript types for use with the `better-sqlite3` driver.

```npm
drizzle-orm better-sqlite3
-D drizzle-kit @types/better-sqlite3
```

--------------------------------

### Initialize Supabase Project

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-supabase-edge-functions.mdx

Use this command to create a new Supabase project locally, which generates a `supabase` folder with a `config.toml` file.

```bash
supabase init
```

--------------------------------

### Install Drizzle ORM and SQLite Cloud packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-sqlite-cloud.mdx

Install the Drizzle ORM, SQLite Cloud driver, and Drizzle Kit for development dependencies.

```bash
npm install drizzle-orm@beta @sqlitecloud/drivers -D drizzle-kit@beta
```

--------------------------------

### Install `node-postgres` driver packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-planetscale-postgres.mdx

Install Drizzle ORM, the `node-postgres` driver, Drizzle Kit, and TypeScript types for `node-postgres`.

```bash
drizzle-orm pg -D drizzle-kit @types/pg
```

--------------------------------

### Install dotenv package

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-netlify-edge-functions-supabase.mdx

Installs the `dotenv` package for managing environment variables, unless Node.js v20.6.0+ is used.

```bash
dotenv
```

--------------------------------

### Install Drizzle ORM and TypeBox Dependencies

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/typebox.mdx

Install the required packages for integrating Drizzle ORM with TypeBox schema generation.

```bash
drizzle-orm typebox
```

--------------------------------

### Install Drizzle ORM and PlanetScale Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-planetscale.mdx

Install the necessary Drizzle ORM, PlanetScale database driver, and Drizzle Kit packages using npm.

```bash
npm install drizzle-orm @planetscale/database -D drizzle-kit
```

--------------------------------

### Install Drizzle ORM and Gel packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started-gel.mdx

Install the necessary Drizzle ORM and Gel packages, including `drizzle-kit` for development dependencies.

```npm
drizzle-orm gel
-D drizzle-kit
```

--------------------------------

### Using `drizzle-kit push` for Migrations

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-export.mdx

Examples of the `drizzle-kit push` command, used for applying schema changes to the database, including an option for custom migrations.

```shell
drizzle-kit push --name=init
```

```shell
drizzle-kit push --name=seed_users --custom
```

--------------------------------

### Install Drizzle ORM and OP-SQLite Packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-op-sqlite.mdx

Install the necessary Drizzle ORM and OP-SQLite packages, along with Drizzle Kit as a development dependency.

```shell
drizzle-orm @op-engineering/op-sqlite
-D drizzle-kit
```

--------------------------------

### Install PostgreSQL Driver and TypeScript Runner

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-railway/node-railway-pg.mdx

Installs the `pg` package for PostgreSQL connectivity and `tsx` for running TypeScript files directly.

```bash
pg
-D @types/pg tsx
```

--------------------------------

### Install Drizzle ORM and PGlite packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-pglite.mdx

Install the necessary Drizzle ORM and PGlite packages, along with Drizzle Kit for development dependencies.

```bash
drizzle-orm @electric-sql/pglite
-D drizzle-kit
```

--------------------------------

### Build Production Site with pnpm

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/README.md

Compiles the project into a production-ready site, outputting to the `./dist/` directory.

```bash
pnpm run build
```

--------------------------------

### Install Drizzle ORM and PostgreSQL drivers for Prisma Postgres

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-prisma-postgres.mdx

Install `drizzle-orm` and `drizzle-kit` along with either the `pg` (node-postgres) or `postgres` (postgres.js) driver for connecting to Prisma Postgres.

```bash
drizzle-orm pg
-D drizzle-kit
```

```bash
drizzle-orm postres
-D drizzle-kit
```

--------------------------------

### Example of Generated SQL Migration

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-turso.mdx

This SQL snippet shows an example of a migration file generated by Drizzle Kit, defining the 'posts' and 'users' tables and a unique index.

```sql
CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`user_id` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);
```

--------------------------------

### Example Project File Structure

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/migrate/migrate-from-prisma.mdx

Illustrates a typical project directory layout after integrating Drizzle ORM, showing the placement of schema definitions, migration files, and application routing/controller layers.

```plaintext
📦 <project root>
 ├ 📂 src
 │  ├ 📂 drizzle
 │  │  ├ 📂 meta
 |  |  |  ├ 📜 _journal.json
 │  │  │  └ 📜 0000_snapshot.json
 │  │  ├ 📜 0000_cool_puff_adder.sql
 │  │  └ 📜 schema.ts
 │  ├ 📂 routers
 │  │  ├ 📜 order.router.ts
 │  │  ├ 📜 product.router.ts
 │  │  └ 📜 supplier.router.ts
 │  ├ 📂 controllers
 │  │  ├ 📜 order.controller.ts
 │  │  ├ 📜 product.controller.ts
 │  │  └ 📜 supplier.controller.ts
 │  ├ 📜 index.ts
 │  └ 📜 server.ts
 ├ 📜 package.json
 ├ 📜 drizzle.config.ts
 └ 📜 tsconfig.json
```

--------------------------------

### Install Expo SQLite Package

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/expo-new.mdx

Install the `expo-sqlite` package, which provides access to a SQLite database within Expo applications.

```bash
expo install expo-sqlite
```

--------------------------------

### Example PostgreSQL Connection URL

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/postgresql-local-setup.mdx

Provides a concrete example of a PostgreSQL connection URL using the default user, specified password, and local host/port for the `drizzle-postgres` container.

```plaintext
postgres://postgres:mypassword@localhost:5432/postgres
```

--------------------------------

### Install Drizzle ORM and Neon Serverless Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-neon.mdx

Install the `drizzle-orm` and `@neondatabase/serverless` packages, along with `drizzle-kit` for development, to enable Drizzle ORM with Neon.

```npm
drizzle-orm @neondatabase/serverless
-D drizzle-kit
```

--------------------------------

### Sample Data for Users Table

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/select-parent-rows-with-at-least-one-related-child-row.mdx

Example data for the 'users' table, showing three user entries with IDs, names, and emails.

```plaintext
+----+------------+----------------------+
| id |    name    |        email         |
+----+------------+----------------------+
|  1 | John Doe   | john_doe@email.com   |
+----+------------+----------------------+
|  2 | Tom Brown  | tom_brown@email.com  |
+----+------------+----------------------+
|  3 | Nick Smith | nick_smith@email.com |
+----+------------+----------------------+
```

--------------------------------

### Install Drizzle ORM and Turso Database Packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-turso-database.mdx

Use npm to install the required Drizzle ORM and Turso database client packages, including `drizzle-kit` for development.

```bash
drizzle-orm@beta @tursodatabase/database
-D drizzle-kit@beta
```

--------------------------------

### Install Drizzle ORM and MySQL2 packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/mysql-existing.mdx

Installs the necessary Drizzle ORM, MySQL2 driver, and development tools for a TypeScript project.

```bash
npm install mysql2 drizzle-orm
npm install -D drizzle-kit tsx dotenv
```

--------------------------------

### Install Drizzle ORM and Bun:SQLite packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/bun-sqlite-new.mdx

Install the necessary Drizzle ORM, Drizzle Kit, and Bun type definition packages using Bun's package manager.

```bash
bun add drizzle-orm -D drizzle-kit @types/bun
```

--------------------------------

### Install Drizzle ORM and Gel Packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/gel-existing.mdx

Specifies the packages and flags for installation using npm, including runtime and development dependencies.

```bash
drizzle-orm gel
  -D drizzle-kit tsx
```

--------------------------------

### Initialize Express Web Application with Drizzle and Nile

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-nile.mdx

This snippet sets up a basic Express application, imports necessary Drizzle schema and database utilities, and starts the server.

```typescript
import express from "express";
import { tenantDB, tenantContext, db } from "./db/db";
import {
  tenants as tenantSchema,
  todos as todoSchema
} from "./db/schema";
import { eq } from "drizzle-orm";

const PORT = process.env.PORT || 3001;

const app = express();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.use(express.json());
```

--------------------------------

### SQL Migration Script for Database Setup

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/migrate/migrate-from-prisma.mdx

This SQL script, generated by Prisma, creates the necessary tables and sets up foreign key constraints for the `products`, `suppliers`, `order_details`, and `orders` entities.

```sql
-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "unitPrice" DECIMAL(10,4) NOT NULL,
    "unitsInStock" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "suppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_details" (
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "order_details_pkey" PRIMARY KEY ("orderId","productId")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "orderDate" DATE NOT NULL,
    "shippedDate" DATE,
    "shipAddress" TEXT NOT NULL,
    "shipPostalCode" TEXT,
    "shipCountry" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "suppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
```

--------------------------------

### Install Drizzle ORM and SingleStore Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/singlestore-new.mdx

Install the required npm packages for Drizzle ORM, the SingleStore driver, the `mysql2` client, `dotenv` for environment variables, and `tsx` for running TypeScript files.

```bash
npm install mysql2 drizzle-orm @drizzle-team/singlestore-driver dotenv tsx
```

--------------------------------

### Install Drizzle ORM and Drizzle Kit

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-bun-sql.mdx

Installs the `drizzle-orm` package for database interactions and `drizzle-kit` as a development dependency for schema migrations and other CLI tools.

```bash
npm install drizzle-orm -D drizzle-kit
```

--------------------------------

### Install Drizzle ORM and TypeBox Legacy Dependencies

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/typebox-legacy.mdx

Installs the `drizzle-orm` and `@sinclair/typebox` packages, which are required for using the legacy `drizzle-typebox` integration.

```npm
drizzle-orm @sinclair/typebox
```

--------------------------------

### Preview Production Build Locally with pnpm

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/README.md

Allows local preview of the built production site before deployment.

```bash
pnpm run preview
```

--------------------------------

### Install Drizzle ORM and MSSQL Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started-mssql.mdx

Install the necessary Drizzle ORM and MSSQL driver packages, along with Drizzle Kit for development dependencies.

```bash
drizzle-orm@beta mssql
-D drizzle-kit@beta
```

--------------------------------

### Install Drizzle ORM and `node-postgres` packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started-postgresql.mdx

Install the necessary Drizzle ORM and `pg` packages, along with development dependencies for Drizzle Kit and TypeScript types.

```npm
drizzle-orm pg
-D drizzle-kit @types/pg
```

--------------------------------

### Generate Custom Migration with Drizzle Config File

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-generate.mdx

This extended example shows how to configure Drizzle Kit using a 'drizzle.config.ts' file located in a custom path, and then generate a custom migration using that configuration. It includes the config file content, the command, and the resulting file structure with example SQL.

```plaintext
📦 <project root>
 ├ 📂 migrations
 ├ 📂 configs
 │ └ 📜 drizzle.config.ts
 ├ 📂 src
 └ …
```

```ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./migrations"
});
```

```shell
npx drizzle-kit generate --config=./configs/drizzle.config.ts --name=seed-users --custom
```

```plaintext
📦 <project root>
 ├ …
 ├ 📂 migrations
 │ ├ 📂 20242409125510_init
 │ └ 📂 20242409125510_seed-users
 └ …
```

```sql
-- ./drizzle/20242409125510_seed-users/migration.sql

INSERT INTO "users" ("name") VALUES('Dan');
INSERT INTO "users" ("name") VALUES('Andrew');
INSERT INTO "users" ("name") VALUES('Dandrew');
```

--------------------------------

### Install Drizzle ORM and Vercel Postgres Packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-vercel-postgres.mdx

Install the necessary Drizzle ORM and Vercel Postgres packages, including drizzle-kit for development dependencies.

```bash
drizzle-orm @vercel/postgres
-D drizzle-kit
```

--------------------------------

### Install Drizzle ORM and Prisma Generator

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/prisma.mdx

Install the necessary Drizzle ORM package and the `drizzle-prisma-generator` for generating Drizzle schema from your Prisma schema.

```npm
drizzle-orm@latest
-D drizzle-prisma-generator
```

--------------------------------

### Example Generated SQL Migration

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-vercel-edge-functions.mdx

Illustrates a sample SQL migration file generated by Drizzle Kit, showing table and index creation statements for a 'users_table'.

```sql
CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`age` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);
```

--------------------------------

### Install Drizzle ORM and MSSQL packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/mssql-new.mdx

Installs Drizzle ORM, the `mssql` driver, `dotenv` for environment variables, and `drizzle-kit` with `tsx` for development dependencies.

```bash
drizzle-orm@beta mssql dotenv
-D drizzle-kit@beta tsx
```

--------------------------------

### SQL Web-Style Full-Text Search with websearch_to_tsquery

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/postgresql-full-text-search.mdx

Direct SQL query example demonstrating 'websearch_to_tsquery' for full-text search with simplified web-like syntax.

```sql
select * from posts
  where to_tsvector('english', title)
  @@ websearch_to_tsquery('english', 'family or first trip Europe or Asia');
```

--------------------------------

### TypeScript: Example output for next page

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/cursor-based-pagination.mdx

This snippet shows an example of the data structure returned when fetching the next page of users using cursor-based pagination.

```ts
// next page, 4-6 rows returned
[
  {
    id: 1,
    firstName: 'Alice',
    lastName: 'Johnson',
    createdAt: 2024-03-08T12:23:55.251Z
  },
  {
    id: 5,
    firstName: 'Beth',
    lastName: 'Davis',
    createdAt: 2024-03-08T12:40:55.182Z
  },
  {
    id: 4,
    firstName: 'Brian',
    lastName: 'Brown',
    createdAt: 2024-03-08T12:34:55.182Z
  }
]
```

--------------------------------

### Example Custom SQL Data Seeding Migration

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/kit-custom-migrations.mdx

This SQL snippet demonstrates how to seed initial user data into a 'users' table within a custom migration file.

```sql
-- ./drizzle/0001_seed-users.sql

INSERT INTO "users" ("name") VALUES('Dan');
INSERT INTO "users" ("name") VALUES('Andrew');
INSERT INTO "users" ("name") VALUES('Dandrew');
```

--------------------------------

### Install Drizzle ORM and PostgreSQL packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started-cockroach.mdx

Use npm to install the core Drizzle ORM and `pg` driver, along with development dependencies for Drizzle Kit and `pg` types.

```npm
drizzle-orm@beta pg
-D drizzle-kit@beta @types/pg
```

--------------------------------

### Connect to PlanetScale using new Client() with Drizzle ORM

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/latest-releases/drizzle-orm-v0294.mdx

This example shows the recommended way to establish a connection to PlanetScale using the `Client` instance from `@planetscale/database` with Drizzle ORM. This approach is preferred over `connect()` and will be mandatory in Drizzle ORM v0.30.0 to prevent runtime errors.

```ts
import { Client } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';

// create the connection
const client = new Client({
	host: process.env['DATABASE_HOST'],
	username: process.env['DATABASE_USERNAME'],
	password: process.env['DATABASE_PASSWORD'],
});

const db = drizzle(client);
```

--------------------------------

### Use Multiple `drizzle-kit` Configuration Files

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-push.mdx

Demonstrates how to specify a particular Drizzle Kit configuration file when running `drizzle-kit push` using the `--config` flag, useful for different environments.

```shell
drizzle-kit push --config=drizzle-dev.config.ts
```

```shell
drizzle-kit push --config=drizzle-prod.config.ts
```

--------------------------------

### Project File Structure Overview

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-nile.mdx

This snippet illustrates the directory and file organization of the project, highlighting key files for database connection, schema, and application logic.

```plaintext
📦 <project root>
 ├ 📂 src
 │   ├ 📂 db
 │   │  ├ 📜 db.ts
 │   │  └ 📜 schema.ts
 │   └ 📜 app.ts
 ├ 📂 drizzle
 │   ├ 📂 meta
 │   │  ├ 📜 _journal.json
 │   │  └ 📜 0000_snapshot.json
 │   ├ 📜 relations.ts
 │   ├ 📜 schema.ts
 │   └ 📜 0000_watery_spencer_smythe.sql
 ├ 📜 .env
 ├ 📜 drizzle.config.ts
 └ 📜 package.json
```

--------------------------------

### Install Drizzle ORM and development dependencies

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/node-sqlite-existing.mdx

Install `drizzle-orm` and `dotenv` as production dependencies, and `drizzle-kit` and `tsx` as development dependencies for your Node.js project.

```bash
npm install drizzle-orm dotenv
npm install -D drizzle-kit tsx
```

--------------------------------

### Install ESLint Drizzle Plugin and Dependencies

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/eslint-plugin.mdx

Install the ESLint Drizzle plugin along with TypeScript ESLint plugins and parser using npm.

```bash
npm install eslint-plugin-drizzle @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

--------------------------------

### Install Drizzle ORM and Xata Client with npm

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/latest-releases/drizzle-orm-v0304.mdx

Install the necessary Drizzle ORM and Xata client packages, along with Drizzle Kit for development, using npm.

```npm
drizzle-orm @xata.io/client
-D drizzle-kit
```

--------------------------------

### Configure ESLint with Drizzle Plugin 'all' Configuration

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/eslint-plugin.mdx

Example `.eslintrc.yml` configuration using the 'plugin:drizzle/all' preset to enable all Drizzle ESLint rules.

```yaml
root: true
extends:
  - "plugin:drizzle/all"
parser: '@typescript-eslint/parser'
parserOptions:
  project: './tsconfig.json'
plugins:
  - drizzle
```

--------------------------------

### Bun Application Entry Point with Drizzle Migrations

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-railway/bun-railway-pg.mdx

This `index.ts` file sets up a Bun HTTP server, connects to a PostgreSQL database using Drizzle, and automatically applies pending migrations on application startup.

```typescript
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { usersTable } from "./schema";

const db = drizzle(process.env.DATABASE_URL!);

await migrate(db, { migrationsFolder: "./migrations" });

const server = Bun.serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/users") {
      const users = await db.select().from(usersTable);
      return new Response(JSON.stringify(users), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("OK");
  }
});

console.log(`Server running on port ${server.port}`);
```

--------------------------------

### Configure package.json for ES Modules and Start Script

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-railway/node-railway-pg.mdx

This 'package.json' configuration enables ES module support and defines a start script for running the application using 'tsx'.

```json
{
  "type": "module",
  "scripts": {
    "start": "tsx src/index.ts"
  }
}
```

--------------------------------

### Generate Migrations with CLI Options

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-generate.mdx

Demonstrates running `drizzle-kit generate` by directly providing the dialect and schema path as command-line arguments.

```shell
npx drizzle-kit generate --dialect=postgresql --schema=./src/schema.ts
```

--------------------------------

### Example of Generated SQL Migration Script

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-db/drizzle-with-neon.mdx

Illustrates a typical SQL migration file generated by Drizzle Kit, showing table creation statements and foreign key constraints for `posts_table` and `users_table`.

```sql
CREATE TABLE IF NOT EXISTS "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
```

--------------------------------

### Install Drizzle ORM v1 RC and Drizzle Kit Beta

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/upgrade-v1.mdx

Install the beta versions of Drizzle ORM and Drizzle Kit to upgrade your project to the v1 Release Candidate.

```npm
drizzle-orm@beta
-D drizzle-kit@beta
```

--------------------------------

### Initialize Drizzle ORM and Run Migrations

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/migrate/migrate-from-sequelize.mdx

This snippet demonstrates how to connect the Drizzle ORM client, run database migrations from a specified folder, and then proceed with application startup. It uses `dotenv` for environment variable loading.

```typescript
import 'dotenv/config';
import { client, db } from './drizzle/db';
import { resolve } from 'node:path';
import { migrate } from 'drizzle-orm/node-postgres/migrator';


(async () => {
  await client.connect();

  // This command run all migrations from the migrations folder and apply changes to the database
  await migrate(db, { migrationsFolder: resolve(__dirname, './drizzle') });

  // ... start your application
})();
```

--------------------------------

### Create Sample SingleStore Users Table

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/mdx/get-started/singlestore/IntrospectSingleStore.mdx

Defines a sample `users_table` in SingleStore with `id`, `name`, `age`, and `email` columns, including primary and unique key constraints.

```sql
CREATE TABLE `users_table` (
	`id` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` int NOT NULL,
	`email` varchar(255) NOT NULL,
	CONSTRAINT `users_table_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_table_email_unique` UNIQUE(`email`)
);
```

--------------------------------

### Install Drizzle ORM and SQLite Cloud Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/sqlite-cloud-existing.mdx

Installs core Drizzle ORM, SQLite Cloud driver, and `dotenv` for runtime, along with `drizzle-kit` and `tsx` as development dependencies.

```bash
drizzle-orm@beta @sqlitecloud/drivers dotenv -D drizzle-kit@beta tsx
```

--------------------------------

### Install Drizzle ORM and Turso Database Packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/turso-database-existing.mdx

Installs core Drizzle ORM, Turso database driver, and environment variable management packages, along with Drizzle Kit and TSX for development.

```bash
drizzle-orm@beta @tursodatabase/database dotenv -D drizzle-kit@beta tsx
```

--------------------------------

### Example Railway PostgreSQL Public URL

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-with-railway/node-railway-pg.mdx

An example of the public connection string provided by Railway for a PostgreSQL database. This URL is necessary for local development.

```bash
postgresql://postgres:password@region.railway.app:port/railway
```

--------------------------------

### Run drizzle-kit up specifying dialect via CLI

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-up.mdx

Execute `drizzle-kit up` by directly providing the database dialect as a command-line option.

```shell
npx drizzle-kit up --dialect=postgresql
```

--------------------------------

### Install Expo SQLite Driver and Drizzle ORM

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/latest-releases/drizzle-orm-v0292.mdx

Install the necessary packages to use the new Expo SQLite Driver with Drizzle ORM, including `drizzle-orm` and `expo-sqlite`.

```bash
npm install drizzle-orm expo-sqlite@next
```

--------------------------------

### Install Drizzle ORM and Turso Database Packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/get-started/turso-database-new.mdx

Installs the necessary Drizzle ORM, Turso database driver, dotenv for environment variables, and tsx for running TypeScript files, along with drizzle-kit as a development dependency.

```shell
npm install drizzle-orm@beta @tursodatabase/database dotenv -D drizzle-kit@beta tsx
```

--------------------------------

### Start a MySQL Docker Container

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/mysql-local-setup.mdx

Starts a new MySQL container named 'drizzle-mysql' in detached mode, setting a root password and mapping port 3306 to the host.

```bash
docker run --name drizzle-mysql -e MYSQL_ROOT_PASSWORD=mypassword -d -p 3306:3306 mysql
```

--------------------------------

### Start PostgreSQL Docker Container

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/guides/postgresql-local-setup.mdx

Starts a new PostgreSQL container named `drizzle-postgres` with a specified password, running in detached mode, and mapping port 5432.

```bash
docker run --name drizzle-postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
```

--------------------------------

### Configure Drizzle Kit 0.21.0 with Dialect and Driver

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/upgrade-21.mdx

This `drizzle.config.ts` example shows the mandatory `dialect`, optional `driver`, and unified `url` for `dbCredentials` after upgrading to Drizzle Kit 0.21.0.

```ts
import { defineConfig } from "drizzle-kit"

export default defineConfig({
    dialect: "sqlite", // "postgresql" | "mysql"
    driver: "turso", // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
    dbCredentials: {
        url: ""
    }
})
```

--------------------------------

### Hono middleware and route handler for AsyncLocalStorage tenant context

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-nile.mdx

Demonstrates how to use a web framework middleware (Hono example) to populate `AsyncLocalStorage` with the tenant ID and then use `tenantDB` in route handlers.

```typescript
// Middleware to set tenant context
app.use("/api/tenants/:tenantId/*", async (c, next) => {
  const tenantId = c.req.param("tenantId");
  console.log("setting context to tenant: " + tenantId);
  return tenantContext.run(tenantId, () => next());
});

// Route handler
app.get("/api/tenants/:tenantId/todos", async (c) => {
    const todos = await tenantDB(c, async (tx) => {
      return await tx
        .select({
          id: todoSchema.id,
          tenant_id: todoSchema.tenantId,
          title: todoSchema.title,
          estimate: todoSchema.estimate,
        })
        .from(todoSchema);
    });
    return c.json(todos);
});
```

--------------------------------

### Install Drizzle ORM and Development Packages with npm

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/mdx/get-started/InstallPackages.mdx

Use this command to install Drizzle ORM and dotenv as production dependencies, and drizzle-kit and tsx as development dependencies.

```bash
npm install drizzle-orm {props.lib} dotenv -D drizzle-kit tsx{props.devlib}
```

--------------------------------

### Example Generated SQL Migration for Users Table

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/tutorials/drizzle-on-the-edge/drizzle-with-vercel-edge-functions.mdx

Illustrates a sample SQL `CREATE TABLE` statement generated by Drizzle Kit for a `users_table`, defining columns, primary key, and unique constraints.

```sql
CREATE TABLE `users_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` text NOT NULL,
	`email` text NOT NULL,
	CONSTRAINT `users_table_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_table_email_unique` UNIQUE(`email`)
);
```

--------------------------------

### Basic Usage of Drizzle Seed with PostgreSQL

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/seed-overview.mdx

This example demonstrates how to initialize Drizzle Seed and populate a PostgreSQL database with 10 users using a defined schema.

```ts
import { pgTable, integer, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";

const users = pgTable("users", {
  id: integer().primaryKey(),
  name: text().notNull(),
});

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, { users });
}

main();
```

--------------------------------

### Run `drizzle-kit push` with CLI Options

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/drizzle-kit-push.mdx

Executes `drizzle-kit push` by specifying dialect, schema path, and database URL directly as command-line arguments.

```shell
npx drizzle-kit push --dialect=postgresql --schema=./src/schema.ts --url=postgresql://user:password@host:port/dbname
```

--------------------------------

### Install Drizzle ORM and AWS SDK packages

Source: https://github.com/drizzle-team/drizzle-orm-docs/blob/main/src/content/docs/connect-aws-data-api-pg.mdx

Install the required Drizzle ORM package for AWS Data API PostgreSQL, the AWS SDK client for RDS Data, and Drizzle Kit for development dependencies.

```bash
drizzle-orm @aws-sdk/client-rds-data
-D drizzle-kit
```