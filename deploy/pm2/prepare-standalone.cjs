"use strict";

/**
 * After `pnpm --filter @courselit/web... run build`, Next standalone output lives under
 * `apps/web/.next/standalone` but still needs `public` and `.next/static` copied in — same
 * layout as `services/app/Dockerfile` (runner stage).
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "../..");
const standalone = path.join(root, "apps/web/.next/standalone");
const serverJs = path.join(standalone, "apps/web/server.js");

if (!fs.existsSync(standalone)) {
    console.error(
        "[prepare-standalone] Missing apps/web/.next/standalone. Run:\n" +
            "  pnpm --filter @courselit/web... run build",
    );
    process.exit(1);
}

if (!fs.existsSync(serverJs)) {
    console.error(
        "[prepare-standalone] Missing apps/web/server.js under standalone. " +
            "Check Next.js standalone output or monorepo layout.",
    );
    process.exit(1);
}

const srcPublic = path.join(root, "apps/web/public");
const srcStatic = path.join(root, "apps/web/.next/static");
if (!fs.existsSync(srcStatic)) {
    console.error(
        "[prepare-standalone] Missing apps/web/.next/static — build may be incomplete.",
    );
    process.exit(1);
}

fs.mkdirSync(path.join(standalone, "apps/web/.next"), { recursive: true });

const destPublic = path.join(standalone, "apps/web/public");
const destStatic = path.join(standalone, "apps/web/.next/static");
fs.cpSync(srcPublic, destPublic, { recursive: true, force: true });
fs.cpSync(srcStatic, destStatic, { recursive: true, force: true });

const nc = path.join(root, "apps/web/next.config.js");
if (fs.existsSync(nc)) {
    fs.copyFileSync(nc, path.join(standalone, "apps/web/next.config.js"));
    fs.copyFileSync(nc, path.join(standalone, "next.config.js"));
}

console.log("[prepare-standalone] OK. PM2 cwd:", standalone);
