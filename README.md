# Vanilla JS UI Kit

A reusable UI component library built with **HTML, CSS, and Vanilla JavaScript**.

This project demonstrates how component-based thinking can be applied without using a framework such as React. It includes reusable **Buttons, Cards, Modals, and Toast Notifications**, each created through configurable JavaScript functions.

---

## ✨ Overview

The goal of this project was to build a small reusable UI kit from scratch using Vanilla JavaScript.

Instead of hardcoding the same UI elements multiple times, each component is created through a reusable function that accepts parameters and returns a functional DOM element.

The project also includes an interactive demo page where every component is used multiple times with different properties and variants.

---

## 🚀 Features

- Reusable Button component
- Reusable Card component
- Functional Modal component
- Functional Toast Notification component
- Configurable component properties
- Multiple button variants
- Multiple reusable cards
- Multiple modal configurations
- Success, Error, and Info toast notifications
- Toast auto-dismiss functionality
- Toast stacking
- Modal open and close functionality
- Close modal by clicking outside
- Close modal using the Escape key
- Responsive design
- Smooth CSS transitions and animations
- Dynamic DOM manipulation
- No JavaScript framework required
- No Node.js or Python required

---

## 🧩 Components

### 1. Button Component

The Button component is created using the `createButton()` function.

It accepts parameters such as:

- `text`
- `variant`
- `onClick`
- `type`

#### Example

```javascript
createButton({
    text: "Save Changes",
    variant: "primary",
    onClick: () => {
        console.log("Button clicked");
    }
});
```

### Available Variants

```text
primary
secondary
outline
danger
```

The same function can create different button styles and behaviors by changing the parameters.

---

### 2. Card Component

The Card component is created using the `createCard()` function.

Each card can receive different content and actions through parameters.

#### Parameters

- `title`
- `category`
- `description`
- `image`
- `buttonText`
- `onButtonClick`

#### Example

```javascript
createCard({
    category: "Development",
    title: "Web Development",
    description: "Build modern responsive websites.",
    image: "image-url",
    buttonText: "Explore",
    onButtonClick: () => {
        console.log("Card selected");
    }
});
```

The same function can generate multiple cards with completely different content.

---

### 3. Modal Component

The Modal component is created using the `createModal()` function.

It supports interactive behavior including opening, closing, confirmation actions, and keyboard interaction.

#### Features

- Custom title
- Custom content
- Custom confirm button
- Custom cancel button
- Open functionality
- Close functionality
- Click-outside-to-close
- Escape-key-to-close
- Custom confirmation callback

#### Example

```javascript
const modal = createModal({
    title: "Welcome",
    content: "<p>This is a reusable modal.</p>",
    confirmText: "Continue",
    onConfirm: () => {
        console.log("Confirmed");
    }
});

document.body.appendChild(modal.element);

modal.open();
```

The same modal function can be reused to create different modal windows.

---

### 4. Toast Notification Component

Toast notifications are created using the `createToast()` function.

The component provides temporary feedback to the user without interrupting the page experience.

#### Supported Types

```text
success
error
info
```

#### Example

```javascript
createToast({
    message: "Changes saved successfully!",
    type: "success",
    duration: 3000
});
```

#### Toast Features

- Automatic dismissal
- Manual close button
- Configurable duration
- Success notifications
- Error notifications
- Information notifications
- Multiple toast stacking

For example, multiple notifications can be displayed at the same time:

```javascript
createToast({
    message: "First notification",
    type: "success"
});

createToast({
    message: "Second notification",
    type: "info"
});

createToast({
    message: "Third notification",
    type: "error"
});
```

---

## 🎨 Demo Page

The project includes a dedicated demo page showing how the components can be reused.

### Buttons

- Primary Button
- Secondary Button
- Outline Button
- Danger Button

### Cards

- Web Development
- UI / UX Design
- Software Quality

### Modals

- Welcome Modal
- Information Modal

### Toast Notifications

- Success Toast
- Error Toast
- Info Toast
- Multiple Toasts / Stacking Demo

---

## 🛠️ Technologies Used

- **HTML5** — Page structure
- **CSS3** — Styling, responsive design, transitions, and animations
- **JavaScript (ES6+)** — Reusable components and DOM manipulation

No frameworks or external JavaScript libraries are used.

---

## 📁 Project Structure

```text
vanilla-js-ui-kit/
│
├── index.html
├── style.css
└── components.js
```

### `index.html`

Contains the structure of the demo page and containers where the reusable components are rendered.

### `style.css`

Contains all styling for the UI components, responsive layouts, animations, modals, buttons, cards, and toast notifications.

### `components.js`

Contains the reusable component functions:

```javascript
createButton()
createCard()
createModal()
createToast()
```

It also contains the demo implementation of each component.

---

## ▶️ How to Run

This project does not require Node.js, npm, Python, or any build tools.

### Option 1 — Open Directly

Simply download or clone the repository and open:

```text
index.html
```

in any modern web browser.

### Option 2 — Clone the Repository

```bash
git clone https://github.com/your-username/vanilla-js-ui-kit.git
```

Then open the project folder and launch `index.html`.

No installation or build process is required.

---

## 💡 Component-Based Thinking

Thinking in components changed the way I structure my code by encouraging me to separate reusable UI logic from the page itself. Instead of repeatedly writing similar HTML and event handlers, I created functions that accept parameters and generate the required UI dynamically. This makes the code easier to maintain, reuse, and extend when new features are added. It also helped me understand the basic idea behind component-based frameworks such as React.

---

## 🧠 Key Technical Decisions

### Reusable Functions

Each UI element is generated through a dedicated function instead of duplicating HTML.

```javascript
createButton()
createCard()
createModal()
createToast()
```

This keeps the code modular and makes components easier to reuse.

### Configuration Objects

Components accept configuration objects instead of fixed values.

For example:

```javascript
createButton({
    text: "Delete",
    variant: "danger",
    onClick: deleteItem
});
```

This allows one component function to support multiple use cases.

### DOM Manipulation

The project uses JavaScript DOM APIs to dynamically generate and control UI elements.

```javascript
document.createElement()
appendChild()
classList
addEventListener()
```

### CSS Classes

JavaScript handles component behavior while CSS handles presentation. This separation keeps the component logic cleaner and makes styling easier to maintain.

---

## 📚 What I Learned

Through this project, I practiced:

- Creating reusable JavaScript functions
- Passing objects as component properties
- Dynamic DOM manipulation
- Event listeners
- Callback functions
- Creating reusable UI patterns
- Managing component behavior
- Working with CSS classes dynamically
- Creating interactive modals
- Implementing toast notifications
- Handling multiple notifications
- Creating responsive interfaces
- Separating UI logic from page structure

---

## 🔮 Future Improvements

With more time, I would expand the UI kit with additional reusable components such as:

- Dropdown
- Accordion
- Tabs
- Tooltip
- Loading Spinner
- Form Input
- Checkbox
- Radio Button
- Pagination
- Navigation Menu

I would also improve:

- Accessibility
- Keyboard navigation
- ARIA attributes
- Component documentation
- Dark/light theme support
- Component testing
- File organization

A future version could also be converted into a small NPM package or rebuilt using a component-based framework such as React.

---

## 📸 Demo

The demo page showcases all four reusable components in one interface.

Users can interact with the buttons, open different modals, trigger different toast notifications, and display multiple stacked notifications.

---

## 👩‍💻 Author

**Maliha Shahzad**

Software Engineering Student

**Skills:** Front-End Development | SQA | SEO Auditing

---

## 📌 Project Purpose

This project was developed as part of a front-end development internship task to understand reusable UI architecture and component-based thinking before moving to a JavaScript framework.

---

## ⭐ Key Takeaway

> Build reusable components, not repetitive code.

This project demonstrates how the basic principles of component-based development can be implemented using **Vanilla JavaScript** before moving to frameworks such as React.
