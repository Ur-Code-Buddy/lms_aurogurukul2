---
title: Integrate with Aurogurukul API
description: Learn how to integrate with your Aurogurukul school using the API
layout: ../../../layouts/MainLayout.astro
---

## Introduction

Aurogurukul provides a powerful API that allows you to manage your school programmatically. This guide will help you understand how to integrate with the Aurogurukul API.

## Prerequisites

Before you start, ensure you have the following:

1. An Aurogurukul account with admin privileges.
2. An API key for your domain. You can generate one from the dashboard.

## Obtaining the API Key

To interact with the Aurogurukul API, you need an API key. Follow these steps to obtain your API key:

1. Log in to your Aurogurukul admin account.
2. Navigate to the dashboard.
3. Go to the `Settings > Miscellaneous > API Keys` section and generate a new API key.

## Setting Up the Environment

You need to set up your environment variables to store your Aurogurukul server URL and API key securely. Here is an example of how to do it in JavaScript:

```javascript
const lmsBaseUrl = process.env.LMS_BASE_URL;
const lmsApiKey = process.env.LMS_API_KEY;

export async function createUser({ email }) {
    if (!lmsBaseUrl || !lmsApiKey) {
        return;
    }

    const endPoint = `${lmsBaseUrl}/api/user`;

    const response = await fetch(endPoint, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email,
            apikey: lmsApiKey,
        }),
    });

    let responseBody = await response.json();

    if (response.ok && !responseBody.error) {
        return response;
    } else {
        throw new Error(
            `${responseBody.error}, ${response.status}, ${response.statusText}, ${endPoint}`,
        );
    }
}
```

### Explanation

1. **LMS_BASE_URL**: Your school’s base URL (same origin you use in the browser).
2. **LMS_API_KEY**: The API key you generated from the admin dashboard.

## Example Usage

Here is an example of how to use the `createUser` function:

```javascript
import { createUser } from "./path-to-your-function";

const email = "user@example.com";

createUser({ email })
    .then((response) => {
        console.log("User created successfully:", response);
    })
    .catch((error) => {
        console.error("Error creating user:", error);
    });
```

