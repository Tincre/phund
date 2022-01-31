# funded

A simple **S**ingle **P**age **A**pp for getting funded. Built on
[Next.js](https://nextjs.org), styled with [Tailwindcss](https://tailwindcss.com), and deployed on [Vercel](https://vercel.com). 

Development and support provided by [Tincre](https://tincre.com).

## Development Setup

Clone this repo. Then,

```bash
yarn install
yarn run dev
```

🚀 The dev site will be running locally at `localhost:3000` 🚀.
### Tests 

Tests leverage `jest` and Kent Dodd's `react testing library`. These can 
be found under the `__tests__` directory and run with `yarn run test`. 

### Content updates 

Make your content changes to the `cms.data.js` file in the root of this
repository.

> ℹ We are upgrading and standardizing the naming conventions so that they may be updated without examining the component codebase. ℹ

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
- Google Accounts,
- Github,
- Gitlab,
- Microsoft, 
- and Twitter. 

We can and will add more at a later date.

## Contributions 

We :heart: community contributions.


