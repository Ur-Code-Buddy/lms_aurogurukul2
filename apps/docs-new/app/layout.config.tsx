import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                <Image
                    src="/favicon.svg"
                    alt="Aurogurukul logo"
                    width={24}
                    height={24}
                />
                Aurogurukul Docs
            </>
        ),
    },
    githubUrl: "https://github.com",
};
