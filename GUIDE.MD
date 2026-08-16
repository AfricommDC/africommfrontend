# Development Guide

This guide covers the essential steps and best practices for working on the Africomm frontend project.

## Getting Started

### 1. Clone and Setup
```bash
git clone  https://github.com/AfricommDC/africommfrontend.git

```
```bash
cd africommfrontend
```

```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will run at `http://localhost:5173`

## Branch Naming Convention

Use clear, descriptive branch names following this format:

- **Features**: `feature/brief-description`
  - Example: `feature/add-donation-form`
- **Bug Fixes**: `fix/brief-description`
  - Example: `fix/navbar-mobile-responsive`
- **Documentation**: `docs/brief-description`
  - Example: `docs/update-readme`
- **Chores**: `chore/brief-description`
  - Example: `chore/update-dependencies`
- **Refactoring**: `refactor/brief-description`
  - Example: `refactor/volunteer-component`

## Development Workflow

### 1. Create a Feature Branch
Always create a new branch from `development`:
```bash
git checkout development
git pull origin development
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes
- Edit components in `src/components/`
- Keep components focused and reusable
- Use TypeScript for type safety
- Follow ESLint rules

### 3. Test Your Changes
Run linting to catch any issues:
```bash
npm run lint
```

### 4. Commit Your Changes
Write clear, descriptive commit messages:
```bash
git add .
git commit -m "feat: add new volunteer signup form"
```

Follow this format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `refactor:` for code refactoring
- `chore:` for maintenance tasks
- `style:` for styling changes

### 5. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title describing the changes
- Description of what was changed and why
- Screenshots if UI changes were made
- Reference to any related issues

### 6. Code Review
- Wait for code review feedback
- Address any comments or requested changes
- Once approved, merge to `development`

## Component Development

### Creating a New Page Component

1. Create a new file in `src/components/Navigation/` (for main pages)
2. Use TypeScript and export as default:
```tsx
import React from 'react';

export default function MyNewPage() {
  return (
    <div>
      {/* Component content */}
    </div>
  );
}
```

3. Add the route in `src/App.tsx`:
```tsx
import MyNewPage from './components/Navigation/MyNewPage';

// Inside Routes:
<Route path="/my-path" element={<MyNewPage />} />
```

4. Add navigation link in `src/components/Navbar.tsx`

### Using UI Components

Use the reusable button component or other shadcn/ui components:
```tsx
import { Button } from '@/components/ui/button';

<Button className="bg-blue-500">Click Me</Button>
```

## Styling Guidelines

- Use Tailwind CSS utility classes
- Keep styles in component files
- Use consistent spacing and colors
- Ensure mobile responsiveness
- Test on different screen sizes

## Before Submitting a PR

- [ ] Code passes `npm run lint`
- [ ] Code compiles without TypeScript errors
- [ ] Changes are tested locally
- [ ] Commit messages are clear and descriptive
- [ ] No unnecessary console logs or comments
- [ ] UI changes are responsive and look good on mobile
- [ ] Updated GUIDE.MD if adding new processes

## Common Tasks

### Adding a New Route
1. Create component in appropriate folder
2. Import in `App.tsx`
3. Add `<Route>` in the Routes section
4. Add navigation link in `Navbar.tsx`

### Updating Styling
- Modify Tailwind classes in component files
- Use consistency with existing designs
- Test across different screen sizes

### Fixing Bugs
1. Create a `fix/` branch
2. Locate and fix the issue
3. Test the fix thoroughly
4. Create PR with clear description of the bug and fix

## Troubleshooting

### Development Server Not Starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Linting Errors
```bash
# Check for issues
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### Build Fails
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Then try building
npm run build
```

## Project Structure Reference

```
src/
├── components/
│   ├── Hero.tsx                 # Landing page
│   ├── Navbar.tsx               # Navigation menu
│   ├── Footer.tsx               # Footer
│   ├── Navigation/
│   │   ├── Whoweare.tsx         # About Us page
│   │   ├── OurModel.tsx         # Our Model page
│   │   ├── ContactUs.tsx        # Contact page
│   │   └── Donations.tsx        # Donations page
│   ├── Footerheadline/
│   │   └── Volunteer.tsx        # Volunteer page
│   └── ui/
│       └── button.tsx           # Reusable button
├── assets/Africomm/             # Images and media
├── lib/utils.ts                 # Utility functions
├── App.tsx                      # Routes and main app
└── main.tsx                     # Entry point
```

## Questions or Issues?

For questions about the development process, check the README.md or ask in the project issues/discussions.