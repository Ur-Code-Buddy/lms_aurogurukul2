"use strict";

/**
 * PM2 process for the Next.js standalone server (same entry as Docker: node apps/web/server.js).
 *
 * Usage (from repo root, after build + prepare):
 *   pnpm --filter @courselit/web... run build
 *   pnpm pm2:prepare
 *   pnpm pm2:start
 *
 * Environment: place a `.env` file at the repository root (same keys as Docker / production).
 * Simple KEY=value lines are merged into `env` below; override defaults for PORT / HOSTNAME / NODE_ENV.
 */
const fs = require("fs");
const path = require("path");

function loadDotEnv(filePath) {
    const result = {};
    if (!fs.existsSync(filePath)) return result;
    const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eq = trimmed.indexOf("=");
        if (eq === -1) continue;
        const key = trimmed.slice(0, eq).trim();
        if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) continue;
        let val = trimmed.slice(eq + 1).trim();
        if (
            (val.startsWith('"') && val.endsWith('"')) ||
            (val.startsWith("'") && val.endsWith("'"))
        ) {
            val = val.slice(1, -1);
        }
        result[key] = val;
    }
    return result;
}

const root = path.resolve(__dirname, "../..");
const standalone = path.join(root, "apps/web/.next/standalone");
const rootEnv = loadDotEnv(path.join(root, ".env"));

module.exports = {
    apps: [
        {
            name: "aurogurukul-web",
            cwd: standalone,
            script: "apps/web/server.js",
            interpreter: "node",
            instances: 1,
            exec_mode: "fork",
            merge_logs: true,
            max_memory_restart: "1G",
            env: {
                ...rootEnv,
                NODE_ENV: rootEnv.NODE_ENV || "production",
                PORT: String(rootEnv.PORT || "3000"),
                HOSTNAME: rootEnv.HOSTNAME || "0.0.0.0",
            },
        },
    ],
};
