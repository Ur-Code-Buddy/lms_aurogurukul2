const magicCodeEmail = `
doctype html
html
    head
        style(type='text/css').     
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
        p   #{code} is your verification code.
        p
            strong IMPORTANT:
            |   Do not share this email with anyone as anyone can log in to your
            |   account using the link in this email.
        if !hideCourseLitBranding
            div(class="platform-branding-container")
                a(
                    href="https://aurogurukul.com"
                    target="_blank"
                    class="platform-branding-cta"
                ) Powered by <strong> Aurogurukul </strong>
`;

export default magicCodeEmail;
