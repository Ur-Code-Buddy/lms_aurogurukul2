import { generateUniqueId } from "@courselit/utils";

export const homePageTemplate = [
    {
        widgetId: generateUniqueId(),
        name: "rich-text",
        deleteable: true,
        shared: false,
        settings: {
            pageId: "homepage",
            type: "site",
            entityId: "demo",
            text: {
                type: "doc",
                content: [
                    {
                        type: "paragraph",
                        attrs: { dir: null, ignoreBidiAutoUpdate: null },
                        content: [
                            {
                                type: "text",
                                text: "Welcome to ",
                            },
                            {
                                type: "text",
                                marks: [{ type: "bold" }],
                                text: "Aurogurukul",
                            },
                            {
                                type: "text",
                                text: "—your hub for courses, materials, and progress in one place. Sign in to resume learning, or browse the catalog to enroll.",
                            },
                        ],
                    },
                ],
            },
            alignment: "left",
            color: "#ffffff",
            backgroundColor: "#704dff",
            fontSize: 3,
            verticalPadding: "py-2",
        },
    },
    {
        widgetId: generateUniqueId(),
        name: "hero",
        deleteable: true,
        shared: false,
        settings: {
            title: "Learn with purpose. Move at your pace.",
            description: {
                type: "doc",
                content: [
                    {
                        type: "paragraph",
                        attrs: { dir: null, ignoreBidiAutoUpdate: null },
                        content: [
                            {
                                type: "text",
                                text: "Explore courses designed for real outcomes—organized modules, practical focus, and support when you need it. ",
                            },
                            {
                                type: "text",
                                marks: [{ type: "bold" }],
                                text: "Start with a program that fits your goals.",
                            },
                        ],
                    },
                ],
            },
            buttonAction: "/products",
            buttonCaption: "Browse courses",
            youtubeLink: "https://www.youtube.com/watch?v=VkBnNxneA_A&list=PLU9il4c3BBUU6iPLgqjXXtn9apt69Pz9S",
            alignment: "right",
            style: "normal",
            mediaRadius: 2,
            titleFontSize: 5,
            descriptionFontSize: 1,
            contentAlignment: "left",
        },
    },
    {
        widgetId: generateUniqueId(),
        name: "grid",
        deleteable: true,
        shared: false,
        settings: {
            pageId: "homepage",
            type: "site",
            entityId: "demo",
            title: "What you get here",
            description: {
                type: "doc",
                content: [
                    {
                        type: "paragraph",
                        attrs: { dir: null, ignoreBidiAutoUpdate: null },
                        content: [
                            {
                                type: "text",
                                text: "Everything is built around clarity: what to study next, how you are doing, and where to get help.",
                            },
                        ],
                    },
                ],
            },
            headerAlignment: "left",
            items: [
                {
                    title: "Clear learning paths",
                    description: {
                        type: "doc",
                        content: [
                            {
                                type: "paragraph",
                                attrs: {
                                    dir: null,
                                    ignoreBidiAutoUpdate: null,
                                },
                                content: [
                                    {
                                        type: "text",
                                        text: "Lessons and materials are grouped so you always know the next step—no guesswork, no clutter.",
                                    },
                                ],
                            },
                        ],
                    },
                    buttonCaption: "See programs",
                    buttonAction: "/products",
                },
                {
                    title: "Learn on your schedule",
                    description: {
                        type: "doc",
                        content: [
                            {
                                type: "paragraph",
                                attrs: {
                                    dir: null,
                                    ignoreBidiAutoUpdate: null,
                                },
                                content: [
                                    {
                                        type: "text",
                                        text: "Study when it works for you. Pick up where you left off on any device with your progress saved.",
                                    },
                                ],
                            },
                        ],
                    },
                    buttonCaption: "View courses",
                    buttonAction: "/products",
                },
                {
                    title: "Progress you can trust",
                    description: {
                        type: "doc",
                        content: [
                            {
                                type: "paragraph",
                                attrs: {
                                    dir: null,
                                    ignoreBidiAutoUpdate: null,
                                },
                                content: [
                                    {
                                        type: "text",
                                        text: "Track completion and milestones so you stay motivated and can celebrate wins along the way.",
                                    },
                                ],
                            },
                        ],
                    },
                    buttonCaption: "Get started",
                    buttonAction: "/products",
                },
            ],
            itemsAlignment: "center",
            columns: 3,
            // backgroundColor: "#f4f4f5",
        },
    },
    {
        widgetId: generateUniqueId(),
        name: "faq",
        deleteable: true,
        shared: false,
        settings: {
            pageId: "homepage",
            type: "site",
            entityId: "demo",
            title: "Frequently asked questions",
            description: {
                type: "doc",
                content: [
                    {
                        type: "paragraph",
                        attrs: { dir: null, ignoreBidiAutoUpdate: null },
                        content: [
                            {
                                type: "text",
                                text: "Quick answers about enrolling, access, and how learning works on this site.",
                            },
                        ],
                    },
                ],
            },
            headerAlignment: "center",
            items: [
                {
                    title: "How do I enroll in a course?",
                    description: {
                        type: "doc",
                        content: [
                            {
                                type: "paragraph",
                                attrs: {
                                    dir: null,
                                    ignoreBidiAutoUpdate: null,
                                },
                                content: [
                                    {
                                        type: "text",
                                        text: "Open the course catalog, choose a program, and follow the checkout or enrollment steps. After that, your lessons appear in your account whenever you sign in.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    title: "How long do I have access?",
                    description: {
                        type: "doc",
                        content: [
                            {
                                type: "paragraph",
                                attrs: {
                                    dir: null,
                                    ignoreBidiAutoUpdate: null,
                                },
                                content: [
                                    {
                                        type: "text",
                                        text: "Access depends on how each course is set up—some are lifetime, others follow a fixed term. The course page or receipt will spell out what applies to your purchase.",
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    title: "Who can I contact for help?",
                    description: {
                        type: "doc",
                        content: [
                            {
                                type: "paragraph",
                                attrs: {
                                    dir: null,
                                    ignoreBidiAutoUpdate: null,
                                },
                                content: [
                                    {
                                        type: "text",
                                        text: "Use the site’s support or contact options, or reply to your enrollment email. The school running this site can answer billing, access, and content questions.",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        widgetId: generateUniqueId(),
        name: "newsletter-signup",
        deleteable: true,
        shared: false,
        settings: {
            title: "Stay in the loop",
            subtitle:
                "Occasional updates on new programs, cohorts, and resources—no spam.",
            btnText: "Subscribe",
            alignment: "center",
            // backgroundColor: "#f4f4f5",
        },
    },
    {
        widgetId: generateUniqueId(),
        name: "rich-text",
        deleteable: true,
        shared: false,
        settings: {
            pageId: "homepage",
            type: "site",
            entityId: "demo",
            text: {
                type: "doc",
                content: [
                    {
                        type: "paragraph",
                        attrs: { dir: null, ignoreBidiAutoUpdate: null },
                        content: [
                            {
                                type: "text",
                                marks: [{ type: "bold" }],
                                text: "Keep building your skills",
                            },
                        ],
                    },
                ],
            },
            alignment: "center",
            fontSize: 9,
            verticalPadding: "py-2",
        },
    },
    {
        widgetId: generateUniqueId(),
        name: "rich-text",
        deleteable: true,
        shared: false,
        settings: {
            pageId: "homepage",
            type: "site",
            entityId: "demo",
            text: {
                type: "doc",
                content: [
                    {
                        type: "paragraph",
                        attrs: { dir: null, ignoreBidiAutoUpdate: null },
                        content: [
                            {
                                type: "text",
                                text: "Our catalog grows as new programs and sessions launch. Visit the course list for the latest offerings, or subscribe above for announcements from the school.",
                            },
                        ],
                    },
                ],
            },
            alignment: "center",
            // color: "#525252",
            fontSize: 5,
            verticalPadding: "py-2",
        },
    },
];
