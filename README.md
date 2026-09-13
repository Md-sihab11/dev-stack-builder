# B14-A05-DevStack

A responsive React-based Dev Stack Builder where users can explore different technologies and build their own personalized technology stack.

## 🚀 Live Project

- Live Link: [DevStack-Builder](https://devstackb.netlify.app/)

## 📁 Project Structure 

```text
B14-A05-DevStack/
├── public/                # Static assets and icons
├── src/                   # Source code for the application
│   ├── assets/            # Images and media files
│   ├── components/        # Reusable UI components
│   │   ├── availableStacks.tsx
│   │   ├── banner.tsx
│   │   ├── ExploreSide.tsx
│   │   ├── Footer.tsx
│   │   ├── navbar.tsx
│   │   ├── SelectedTechnology.tsx
│   │   └── techCard.tsx
│   ├── types/             # TypeScript type definitions
│   ├── App.css            # Global application styles
│   ├── App.tsx            # Main application component
│   ├── index.css          # Tailwind/Base CSS configuration
│   └── main.tsx           # React entry point
├── ui/                    # Design files and wireframes
│   ├── DevStack.fig       # Figma design file
│   └── DevStack.penpot    # Penpot design file
├── package.json           # Dependencies and project metadata
└── README.md              # Project documentation

```
## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## ✨ Features

1. **Explore Technologies**
   - Users can browse different technologies with their icon, category, difficulty, rating, and description.

2. **Build Your Own Stack**
   - Users can add technologies to their personal stack.
   - Duplicate technologies cannot be added.
   - Selected technologies can be removed individually or all at once.

3. **Responsive & Interactive UI**
   - The website works on desktop, tablet, and mobile devices.
   - Toast notifications are shown when technologies are added or removed.


## 📚 React Questions & Answers

1. What is JSX, and why is it used in React?  
Ans: JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to write and understand.

2. What is the difference between props and state?  
Ans: Props are used to pass data from parent to child. State stores data that can change inside a component.

3. What does the `useState` hook do, and where did you use it in this project?  
Ans: useState is used to store and update data. I used it to store the selected technologies in the Your Stack section.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?  
Ans: useEffect runs code after rendering. It can be used to load JSON data when the component starts.

5. Why does every item in a .map() list need a unique key prop?  
Ans: A unique key helps React identify each item and update the list correctly.

6. What is conditional rendering? Show one place you used it.  
Ans: Conditional rendering means showing different UI based on a condition.
I used it to show a message when no technology is selected.
Example:
 ```text
{selected.length === 0 ? (  
  <p>No Technology Selected Yet</p>   
) : (  
  // selected technologies  
)}
```
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?  
Ans: A parent passes data through props. A child can send data back by calling a function passed through props.

## ⭐ If you like this project, consider giving it a star!
