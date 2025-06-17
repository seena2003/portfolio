# portfolio
Currently, I am pursuing a Bachelor of Engineering in Computer Science at Malnad College of Engineering, Hassan, with a strong academic record (CGPA: 9.15/10).  I have a strong technical background in Java, Python, C, HTML/CSS, JavaScript, and MySQL, along with experience in Linux, GitHub, Docker and AWS. 

# Welcome to your personal portfolio project

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this project using various hosting platforms like Vercel, Netlify, or GitHub Pages. Here's how to deploy using Vercel:

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Follow the deployment steps

## Can I connect a custom domain to my project?

Yes, you can! Most hosting platforms like Vercel, Netlify, and GitHub Pages support custom domains. The process typically involves:

1. Adding your domain in your hosting platform's settings
2. Configuring your domain's DNS settings
3. Waiting for DNS propagation

Check your hosting platform's documentation for specific instructions on setting up a custom domain.

## Updating Project Images

The portfolio projects currently use placeholder images from Unsplash. To replace them with your actual project screenshots:

1. **Prepare your images:**

   - Create screenshots or find representative images for each of your projects.
   - Ensure they are optimized for the web (e.g., compressed JPEGs or PNGs).
   - A good aspect ratio for the project cards is around 5:3 (e.g., 500px wide by 300px tall).

2. **Add images to the project:**

   - Place your new images in the `public/photos/` directory. You can create a subfolder like `public/photos/projects/` if you prefer.

3. **Update the code:**

   - Open `src/pages/Index.tsx`.
   - Locate the `projects` array.
   - For each project, update the `image` property with the correct path to your new image. For example, if you added an image named `my-project-screenshot.png` to `public/photos/`, the path would be `"/photos/my-project-screenshot.png"`.

   ```javascript
   const projects = [
     {
       title: "AgriBot",
       description: "AI-powered agriculture platform...",
       // TODO: Replace with actual project image path (e.g., "/photos/project-agribot.png")
       image: "/photos/your-agribot-image.png", // Update this line
       tech: ["Python", "TensorFlow", "React", "IoT", "PostgreSQL"],
       github: "#",
       demo: "#",
     },
     // ... other projects
   ];
   ```

## Contact Form

The portfolio includes a contact form in `src/pages/Index.tsx`.

### Current Implementation

The form is currently configured to submit data to a Google Form. This is a simple way to collect responses without a dedicated backend. To make this functional:

1. **Create a Google Form:**

   - Go to [Google Forms](https://docs.google.com/forms) and create a new form.
   - Add fields for "Name", "Email", and "Message" (or however you want to structure it).

2. **Get Form and Field IDs:**

   - Open your Google Form. The URL in your browser will contain the Form ID (e.g., `https://docs.google.com/forms/d/e/1FAIpQLSf_YOUR_FORM_ID/viewform`).
   - To get the field entry IDs:
     - Click the "Send" button on your Google Form, then click the link icon to get the shareable link. Open this link.
     - Right-click on each input field (Name, Email, Message) and select "Inspect" or "Inspect Element".
     - Look for the `name` attribute of the `<input>` or `<textarea>` tag. It will look something like `entry.123456789`. This is the entry ID for that field.

3. **Update the Code:**
   - Open `src/pages/Index.tsx`.
   - Find the `handleSubmit` function.
   - Replace `'https://docs.google.com/forms/d/e/1FAIpQLSf_YOUR_FORM_ID/formResponse'` with your form's response URL.
   - Replace `'entry.YOUR_NAME_FIELD_ID'`, `'entry.YOUR_EMAIL_FIELD_ID'`, and `'entry.YOUR_MESSAGE_FIELD_ID'` with the corresponding entry IDs you found.

### Recommended Alternatives

For a more professional and flexible solution, consider these alternatives:

- **EmailJS ([https://www.emailjs.com/](https://www.emailjs.com/)):** Allows you to send emails directly from your client-side JavaScript code without needing a backend. You would integrate their SDK into your React component.
- **Static Form Providers:** Services like Formspree ([https://formspree.io/](https://formspree.io/)) or Netlify Forms (if deploying on Netlify) can handle form submissions for static sites.
- **Custom Backend:** Develop a simple backend (e.g., using Node.js/Express, Python/Flask, or serverless functions on platforms like Vercel, Netlify, or AWS Lambda). This backend would receive the form data and then use a transactional email service (like SendGrid, Mailgun) to send you an email.

Choosing an alternative will likely involve removing the current Google Forms submission logic and implementing the new service's SDK or API calls.
