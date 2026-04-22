import { SwaggerUi } from "@/components/swagger-ui";
import { notFound } from "next/navigation";
import { PRODUCT_NAME } from "@/config/branding";

export const metadata = {
    title: "Swagger UI",
    description: `Interactive Swagger UI for the ${PRODUCT_NAME} REST API.`,
};

export default function SwaggerPage() {
    if (process.env.NODE_ENV !== "development") {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white px-4 py-8">
            <div className="mx-auto max-w-7xl">
                <h1 className="mb-2 text-3xl font-semibold">
                    {PRODUCT_NAME} API
                </h1>
                <p className="mb-6 text-sm text-slate-600">
                    Interactive Swagger UI for the current public REST API
                    surface.
                </p>
                <div className="overflow-hidden rounded-lg border border-slate-200">
                    <SwaggerUi />
                </div>
            </div>
        </main>
    );
}
