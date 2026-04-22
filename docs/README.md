# Developer documentation

This repository contains the Aurogurukul LMS: software for running online courses and digital products. It includes course authoring, student management, Stripe payments, a site builder, sales pages, and basic analytics.

The codebase is a monorepo managed with [pnpm workspaces](https://pnpm.io/workspaces).

## Local development

Set `apps/web/.env` for your environment. From the repository root:

```sh
pnpm install
pnpm build
pnpm dev
```

## Package releases

Package publishing is automated with [Changesets](https://github.com/changesets/changesets). To record a release:

```sh
pnpm exec changeset
```

## Widgets

Custom UI extensions are documented in [widgets.md](widgets.md).

## Environment variables

See [docker-compose.yml](../deployment/docker/docker-compose.yml) for the available environment variables and how they are wired for deployment.

## Database migrations

Migrations live in [apps/web/.migrations](../apps/web/.migrations). Files are named `DD-MM-YY_HH-MM-<migration-purpose>.js` so they sort chronologically.

### Running a migration script

Each migration is a standalone script.

1. Create a folder and initialize Node:

```
mkdir migration
cd migration
npm init -y
```

2. Install dependencies (check the top of the migration file; often this is enough):

```
npm i mongoose nanoid
```

3. Copy the migration file into that folder.

4. Run it against your database:

```
DB_CONNECTION_STRING=mongodb://<mongodb-url> node migration-script.js
```
