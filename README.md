# Flixa - Chat with PDFs using AI

Flixa is a modern web application that allows users to upload PDFs and have interactive conversations about their content using AI. Built with Next.js and featuring full Persian (Farsi) language support.

## Features

- 📄 PDF Upload & Processing
- 💬 AI-powered chat interface
- 🔍 RAG (Retrieval Augmented Generation) for contextual responses
- 🔐 User authentication
- 🌙 Dark mode support
- 🇮🇷 Full Persian (RTL) language support
- 📱 Responsive design

## Tech Stack

- **Framework:** Next.js 14
- **Authentication:** NextAuth.js
- **Database:** PostgreSQL with Drizzle ORM
- **AI/ML:** OpenAI API
- **Styling:** Tailwind CSS
- **Storage:** Vercel Blob Storage
- **Deployment:** Vercel
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL database
- OpenAI API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/rezashahnazar/flixa.git
cd flixa
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file:

```env
# Database
POSTGRES_URL=your_postgres_connection_string

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret

# Vercel Blob
BLOB_READ_WRITE_TOKEN=your_blob_token
```

4. Run database migrations:

```bash
pnpm tsx migrate.ts
```

5. Start the development server:

```bash
pnpm dev
```

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - Reusable React components
- `/lib` - Utility functions and configurations
- `/drizzle` - Database schema and migrations
- `/public` - Static assets
- `/styles` - Global styles and Tailwind configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Contact

- **Author:** Reza Shahnazar
- **Email:** reza.shahnazar@gmail.com
- **GitHub:** [@rezashahnazar](https://github.com/rezashahnazar)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI powered by [OpenAI](https://openai.com/)
- Deployed on [Vercel](https://vercel.com/)
