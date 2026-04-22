import React from "react";
import { DOCUMENTATION_LINK_LABEL } from "../../ui-config/strings";
import { documentationUrl } from "@/config/branding";

interface DocumentationLinkProps {
    text?: string;
    path: string;
}

export default function DocumentationLink({
    path,
    text = DOCUMENTATION_LINK_LABEL,
}: DocumentationLinkProps) {
    return (
        <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href={documentationUrl(path)}
        >
            {text}
        </a>
    );
}
