import { buildOpenApiRoutes } from "./index.mjs";

const routeSpec = buildOpenApiRoutes();

export const openapiSpec = {
    openapi: "3.0.3",
    info: {
        title: "Aurogurukul REST API",
        version: "1.0.0",
        description:
            "OpenAPI documentation for the public Aurogurukul REST API surface.",
    },
    servers: [
        {
            url: "/",
            description: "Current Aurogurukul school origin",
        },
    ],
    tags: routeSpec.tags,
    paths: routeSpec.paths,
    components: {
        ...(routeSpec.components ?? {}),
        securitySchemes: {
            ...(routeSpec.components?.securitySchemes ?? {}),
            ApiKeyAuth: {
                type: "apiKey",
                in: "header",
                name: "x-api-key",
                description:
                    "API key created in Aurogurukul dashboard settings. The legacy `apikey` request-body field is still accepted but deprecated.",
            },
        },
    },
};
