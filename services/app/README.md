# Introduction

Aurogurukul application image for containerized runs. Configure environment variables, then start the process as documented below.

## Getting started

Define a `.env` file containing the variables described in the **Environment variables** section and run:

```sh
docker run -p 3000:3000 your-registry/lms-app
```

The app will be available at http://localhost:3000

### Environment variables

**AUTH_SECRET**

A random string to use as a secret to sign the JWT tokens the API generates. Required parameter. No default value.

**DB_CONNECTION_STRING**

The connection string to a remote mongodb instance. Defaults to `mongodb://localhost/app`.

**EMAIL_USER**
The username for your email server.

**EMAIL_PASS**
The password for your email server.

**EMAIL_HOST**
The address of your email server.

**EMAIL_FROM**
The name that appears in the from field of the email sent by Aurogurukul.

**MEDIALIT_SERVER**
The URL of the MediaLit server. Defaults to `https://medialit.cloud`.

**MEDIALIT_APIKEY**
The API key to access MediaLit.
