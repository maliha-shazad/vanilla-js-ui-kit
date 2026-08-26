# Vanilla JS UI Kit

A small reusable UI component library built with HTML, CSS, and
Vanilla JavaScript.

This project demonstrates how component-based thinking can be
applied without using a framework such as React.

---

## Overview

The UI Kit contains four reusable components:

- Button
- Card
- Modal
- Toast Notification

Each component is created through a JavaScript function and accepts
parameters that control its content, appearance, and behavior.

The project also includes a demo page where each component is
used multiple times with different variants and configurations.

---

## Features

### Reusable Buttons

Buttons are generated using the `createButton()` function.

Supported variants include:

- Primary
- Secondary
- Outline
- Danger

Example:

```javascript
createButton({
    text: "Save Changes",
    variant: "primary",
    onClick: () => {
        console.log("Button clicked");
    }
});
