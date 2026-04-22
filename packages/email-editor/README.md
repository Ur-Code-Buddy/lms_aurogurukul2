# Introduction

WYSIWYG email editor package used in the Aurogurukul web app.

## Installation

The project depends of TailwindCSS, so you need to have it configured on your project, before installating this package.

```sh
npm i @aurogurukul/email-editor
```

### Importing the CSS

#### 1. Tailwind v4

In your CSS file, add

```css
@source "./node_modules/@aurogurukul/email-editor";
# ... remaining code ...
```

#### 2. Tailwind v3

In your tailwind config, add

```js
module.exports = {
    content: [
        // ... remaining code ...
        "./node_modules/@aurogurukul/email-editor",
    ],
    // ... remaining code ...
};
```

## Tech Stack

- [React](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [React email](https://react.email/)

## Usage

To show the email editor

```js
import { EmailEditor } from "@aurogurukul/email-editor";
import "@aurogurukul/email-editor/styles.css";

export default App() {
    return (<EmailEditor  />)
}
```
