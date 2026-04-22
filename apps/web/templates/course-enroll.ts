const courseEnrollTemplate = `
doctype html
html
    head
        style(type='text/css').
            .cta-container {
                margin: 32px 0px;
                text-align: center;
            }
            .cta {
                border: 1px solid #07077b;
                border-radius: 4px;
                padding: 4px 8px;
                text-decoration: none;
                color: white;
                background-color: #07077b;
                font-weight: bold;
            }
            .cta:hover {
                background-color: #060665;
            }
            .platform-branding-container {
                margin: 40px 0px;
            }
            .platform-branding-cta {
                text-decoration: none;
                color: #000000;
                padding: 6px 10px;
                background-color: #FFFFFF;
                border: 1px solid;
                border-radius: 6px;
                text-align: center;
            }
    body
        p   You have been enrolled in a course: <strong> #{courseName} </strong>.
        p 
            |   To access all of your content, 
            |   #[a(href=\`\${loginLink}\`) log in] here.
        if !hideCourseLitBranding
            div(class="platform-branding-container")
                a(
                    href="https://aurogurukul.com"
                    target="_blank"
                    class="platform-branding-cta"
                ) Powered by <strong> Aurogurukul </strong>
`;

export default courseEnrollTemplate;
