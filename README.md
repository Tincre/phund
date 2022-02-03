# funded

A simple **S**ingle **P**age **A**pp for getting funded. Built on
[Next.js](https://nextjs.org), styled with [Tailwindcss](https://tailwindcss.com), and deployed on [Vercel](https://vercel.com). 

Development and support provided by [Tincre](https://tincre.com).

## Features 

- Add your SAFE note, a business email, and [SendGrid](https://sendgrid.com) API key, get on-demand 
email delivery of your note for authenticated users plus a notification to your business email.

- Simple content changes maximize efficient customization for your business and your capital raise.

- [Tailwindcss](https://tailwindcss.com) styling to beautifully modify your css right next to your 
logic. 

- [Next.js](https://nextjs.org) to optimize your engineering on the web.

- [next-auth](https://next-auth.js.org) for build-in security over your walled garden + SEC requirements for **not** marketing private placements (SAFE) to non-accredited investors. 

- next-seo for easy and efficient Search Engine Optimization.

- jest/React Testing Library to declaratively test components and page renders.

- Sensible defaults!

## Development Setup

Clone this repo. Then,

```bash
yarn install
yarn run dev
```

🚀 The dev site will be running locally at `localhost:3000` 🚀.

#### Environment 
You'll need some credentials to get up and running properly.

Create a `.env` file in the same directory as your `package.json`, as follows. 
```env
DATABASE_URL="postgresql://<your-connection-info>"
SHADOW_DATABASE_URL="postgresql://<your-shadow-connection-info"
CHECKPOINT_DISABLE=1
SIGNING_PASSPHRASE="<a-generated-passphrase>"
NEXTAUTH_SECRET="<a-generated-passphrase>"
EMAIL_SERVER="smtp://<your-email-smtp-info>"
FROM_EMAIL="investors@tincre.com"
NEXTAUTH_URL=http://localhost:3000
CONVERTKIT_API_URL=https://api.convertkit.com/v3/
CONVERTKIT_API_KEY=<your-api-key>
CONVERTKIT_FORM_ID=<your-form-id>
```

### Tests 

Tests leverage `jest` and Kent Dodd's `react testing library`. These can 
be found under the `__tests__` directory and run with `yarn run test`. 

### Content updates 

Make your content changes to the `cms.data.js` file in the root of this
repository. In addition, you'll need to edit `siteMetadata.js` for proper SEO updating. 

> ℹ We are upgrading and standardizing the naming conventions so that they may be updated without examining the component codebase. ℹ

### Newsletter signup 

The `Footer` component includes a signup for a newsletter through ConvertKit. 

Feel free to replace or add to the functionality in `pages/api/convertkit.js`
for additional providers (such as Buttowndown or Mailchip). 

### Database Infrastructure

We generally use PostgreSQL databases via ORMs at Tincre.

In particular, this site uses [Prisma](https://prisma.io) for its database
ORM.

#### Updating tables

To update tables we use Prisma's tools. 

> _Prisma has fantastic documentation https://www.prisma.io/docs/!_

Simply add a table via the schema classes in the `prisma/schema.prisma` file. 

Once finished run `npx prisma format && npx migrate dev` to format/lint the
prisma schema and migrate it. Your client will update locally.

Commit the changes from `prisma/schema.prisma` and the migration file. :boom:

> _:warning: Production sites will need to be built twice on CI/CD infra, depending on your setup :warning:._

#### CRUD Operations 

Database functionality lives in the `/lib` directory. In particular, a global
import `prisma` is in `prisma.js`.

This contains a `prisma` object you should use via a default export. 

##### `db.js` or `db.ts`
CRUD operations are in the `lib/db*{.js|.ts}`. In particular, examples 
of creating, reading, updating, and deleting table objects are extant within
this file. 

> :notebook: Inline documentation is critical and provided using @jsdoc!

### Authentication Infrastructure
Auth is provided out of the box by [next-auth](https://next-auth.js.org). In particular,
we use the [Prisma Adapter](https://next-auth.js.org/adapters/prisma) 
throughout this project.

#### Client-side Page Authentication

We add authentication to individual pages via the client, which checks for the auth session, validating it via the /api/auth/session backend api function via the `useSession` hook. This hook is populated by the `SessionProvider` Higher Order Component within the custom `_app.jsx` Next App overload.

After successful authentication, the redirected user will have a state session stored 
in their browser.

#### Server-side Page Authentication

For server-side rendering and other protected api endpoints, such as /api/<protected>, we check for the session to confirm that the header provides the appropriate authentication.

This is handled seamlessly within via the next-auth library. 


#### Providers

Right now we offer the following authentication providers:

- direct-to-email link,
- (coming soon) Google Accounts,
- (coming soon) Github,
- (coming soon) Gitlab,
- (coming soon) Microsoft, 
- (coming soon) and Twitter. 

We can and will add more at a later date.

## Contributions 

We :heart: community contributions.


