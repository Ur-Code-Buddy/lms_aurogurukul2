---
title: Manage users using Aurogurukul API
description: Manage users on your Aurogurukul school using API
layout: ../../../layouts/MainLayout.astro
---

To manage users on Aurogurukul, you need to interact with our API. This guide will walk you through the steps to create and manage users using the API.

## Prerequisites

Before you start, ensure you have the following:

1. A Aurogurukul account with admin privileges.
2. An API key for your domain. Refer to the [introduction section](/en/developers/introduction) to learn how to obtain your API key.

## Creating a User

To create a user, you need to send a POST request to the `/api/user` endpoint with the required details.

### Endpoint

```
POST /api/user
```

### Request Headers

- `Content-Type: application/json`
- `domain`: Your domain name

### Request Body

```json
{
    "apikey": "your-api-key",
    "email": "user@example.com",
    "name": "User Name",
    "permissions": ["read", "write"],
    "subscribedToUpdates": true
}
```

### Permissions

Here are the possible values for the `permissions` array:

- `course:manage`
- `course:manage_any`
- `course:publish`
- `course:enroll`
- `media:manage`
- `site:manage`
- `setting:manage`
- `user:manage`
- `community:manage`

### Response

- **200 OK**: User created successfully.
- **400 Bad Request**: Missing or invalid parameters.
- **401 Unauthorized**: Invalid API key.
- **404 Not Found**: Domain not found.
- **500 Internal Server Error**: An error occurred on the server.

### Example

```bash
curl -X POST https://yourdomain.com/api/user \
-H "Content-Type: application/json" \
-H "domain: yourdomain.com" \
-d '{
  "apikey": "your-api-key",
  "email": "user@example.com",
  "name": "User Name",
  "permissions": ["course:manage", "community:manage"],
  "subscribedToUpdates": true
}'
```

### Response Example

```json
{
    "email": "5d41402abc4b2a76b9719d911017c592"
}
```

## Error Handling

If the user already exists, you will receive a `400 Bad Request` response with the message `The user already exists`. For any other errors, you will receive a `500 Internal Server Error` response with the message `An internal error occurred. Please try again.`.

