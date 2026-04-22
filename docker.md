# Docker setup

This guide explains how to run the LMS web app with Docker from the **repository root**. The stack is defined in **`docker-compose.yml`** at the root; it **builds** the Next.js app using **`services/app/Dockerfile`** (not the older sample under `deployment/docker/`, which used a prebuilt image and different defaults).

The compose file only runs the **`app`** container. **MongoDB is not part of this stack** — use an external database (for example **MongoDB Atlas**) and set **`DB_CONNECTION_STRING`** in `.env`.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) with Compose v2 (`docker compose`, not only `docker-compose`).
- Enough disk and RAM for a multi-stage Node 22 build (often several GB for `node_modules` and the Next.js build).

## 1. Environment file

1. In the repo root, create a file named **`.env`** (same folder as `docker-compose.yml`).
2. Copy variables you need from `apps/web` or from your existing deployment. Typical entries include:

   - **`DB_CONNECTION_STRING`** — full MongoDB URI for your **external** cluster (Atlas or other).
   - **`AUTH_SECRET`** (and, if you use them, **`BETTER_AUTH_SECRET`**, **`BETTER_AUTH_URL`**) — see `apps/web` and your auth provider docs.
   - **`SUPER_ADMIN_EMAIL`** — first boot admin.
   - **`EMAIL_HOST`**, **`EMAIL_PORT`**, **`EMAIL_USER`**, **`EMAIL_PASS`**, **`EMAIL_FROM`** — mail delivery.
   - **`MEDIALIT_APIKEY`**, **`MEDIALIT_SERVER`** — optional; file storage via MediaLit.
   - **`DB_TRANSACTIONS`** — often `false` for standalone MongoDB without replica set.

3. Do **not** commit `.env`; it is listed in `.gitignore`.

Compose **`env_file: .env`** injects these into the **`app`** container. Values in the compose file (for example **`PORT=3000`**) override duplicate keys from `.env` when both set the same variable.

Ensure your Atlas (or other) cluster allows connections from where the container runs (for example IP access list `0.0.0.0/0` for testing, or your server IP in production).

## 2. Build and run

From the **repository root**:

```bash
docker compose up --build
```

- First run builds the image (can take several minutes) and then starts the **`app`** service.
- The app is available at **`http://localhost:3000`** (host port **3000** maps to port **3000** inside the container).

Detached mode:

```bash
docker compose up --build -d
```

View logs:

```bash
docker compose logs -f app
```

Stop:

```bash
docker compose down
```

## 3. Auth URL when testing locally

If **`BETTER_AUTH_URL`** (or similar) points to a public HTTPS hostname but you open **`http://localhost:3000`**, sign-in redirects may not match. For strict local testing, set the auth base URL to your local origin (for example **`http://localhost:3000`**) in `.env`. Use your real public URL in production.

## 4. Legacy sample compose

The file **`deployment/docker/docker-compose.yml`** is an older reference layout: it may reference a legacy container image name, defaults internal port **80**, and includes a MongoDB service. Prefer the **root** `docker-compose.yml` for this project unless you intentionally want that layout.

## 5. Troubleshooting

- **Port in use:** Change the host side in `docker-compose.yml`, for example `"3001:3000"`, and open `http://localhost:3001`.
- **Image build fails at `next build` (exit code 1):** The real error is usually **above** the last few lines. Run a plain log to see it:  
  `docker compose build --progress=plain app 2>&1 | tee build.log`  
  Typical causes:
  - **Out of memory** during `next build` or TypeScript: use a **larger** VM (e.g. 4 GB+ RAM), add **swap**, or rely on the Dockerfile’s **`NODE_OPTIONS=--max-old-space-size=8192`** (already set in `services/app/Dockerfile`).
  - **TypeScript / compile errors:** fix the reported file and line in the log.
  - **Disk full (`No space left on device` / `StorageFull`):** Next.js (Turbopack) needs **several gigabytes** of free space during `next build` for layers, `node_modules`, and temp files. If the log shows a Rust/Tokio panic with `code: 28` or `StorageFull`, the **host or Docker’s data disk is full** — not an application bug. **Fix:** free disk on the server (`df -h`), remove unneeded files, run `docker system df` then `docker system prune -a` (removes unused images; use carefully), or **build the image on a machine with more space** and `docker push` to a registry, then `docker pull` on the server. Aim for **at least ~15–20 GB free** before building if the disk was tight.
- **Cannot reach MongoDB from the app:** Confirm **`DB_CONNECTION_STRING`** in `.env`, Atlas network access (IP allow list), and that the URI user/password and database name are correct.
