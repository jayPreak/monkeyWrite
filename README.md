# MonkeyWrite

MonkeyWrite is a collaborative document editing application inspired by Google Docs. Built with modern web technologies, it allows users to create, edit, and share documents in real-time with others.

## Features

- **Real-time Collaboration:** Edit documents simultaneously with others, powered by Liveblocks.
- **User Authentication:** Secure login and user management using Clerk.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Rich Text Editing:** A dynamic editor with support for text formatting and styling.
- **TypeScript Integration:** Ensuring type safety and robust development practices.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router.
- **Language:** [TypeScript](https://www.typescriptlang.org/).
- **Authentication:** [Clerk](https://clerk.dev/) for user login and management.
- **Real-time Collaboration:** [Liveblocks](https://liveblocks.io/) for shared editing functionality.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for a modern, responsive UI.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/monkeywrite.git
   cd monkeywrite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and configure the following:
   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   CLERK_API_KEY=<your-clerk-api-key>
   LIVEBLOCKS_SECRET_KEY=<your-liveblocks-secret-key>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to access the application.

## Usage

1. Sign up or log in using Clerk authentication.
2. Create a new document or open an existing one.
3. Start typing! Changes are automatically saved and shared with collaborators in real-time.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

MonkeyWrite is licensed under the [MIT License](./LICENSE).

## Acknowledgments

- [Google Docs](https://docs.google.com/) for inspiring this project.
- [Clerk](https://clerk.dev/) for seamless authentication.
- [Liveblocks](https://liveblocks.io/) for powering real-time collaboration.

---

Thank you for using MonkeyWrite! If you have any questions or feedback, feel free to open an issue or contribute to the project.


<img width="1470" alt="image" src="https://github.com/user-attachments/assets/3d6f21a8-45dd-48d9-a518-297e91734801" />
<img width="1476" alt="image" src="https://github.com/user-attachments/assets/3a5f8892-373a-4ff3-8ac5-c100d627b298" />

