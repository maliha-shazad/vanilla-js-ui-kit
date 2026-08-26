/* =========================================================
   VANILLA JS UI KIT
   Reusable Button, Card, Modal & Toast Components
   ========================================================= */


/* =========================================================
   1. BUTTON COMPONENT
   ========================================================= */

/*
    Usage:

    createButton({
        text: "Click Me",
        variant: "primary",
        onClick: () => {}
    });
*/

function createButton({
    text = "Button",
    variant = "primary",
    onClick = null,
    type = "button"
} = {}) {

    const button = document.createElement("button");

    button.className =
        `ui-button ui-button-${variant}`;

    button.type = type;

    button.textContent = text;

    if (typeof onClick === "function") {

        button.addEventListener(
            "click",
            onClick
        );
    }

    return button;
}


/* =========================================================
   2. CARD COMPONENT
   ========================================================= */

/*
    Usage:

    createCard({
        title: "Web Development",
        category: "Development",
        description: "...",
        image: "...",
        buttonText: "Learn More",
        onButtonClick: () => {}
    });
*/

function createCard({

    title = "Card Title",

    category = "Category",

    description = "Card description",

    image = "",

    buttonText = "Learn More",

    onButtonClick = null

} = {}) {

    const card = document.createElement("article");

    card.className = "ui-card";


    /*
        Image
    */

    if (image) {

        const imageElement =
            document.createElement("img");

        imageElement.className =
            "ui-card-image";

        imageElement.src = image;

        imageElement.alt = title;

        card.appendChild(imageElement);
    }


    /*
        Content
    */

    const content =
        document.createElement("div");

    content.className =
        "ui-card-content";


    /*
        Category
    */

    const categoryElement =
        document.createElement("span");

    categoryElement.className =
        "ui-card-category";

    categoryElement.textContent =
        category;


    /*
        Title
    */

    const titleElement =
        document.createElement("h3");

    titleElement.className =
        "ui-card-title";

    titleElement.textContent =
        title;


    /*
        Description
    */

    const descriptionElement =
        document.createElement("p");

    descriptionElement.className =
        "ui-card-description";

    descriptionElement.textContent =
        description;


    /*
        Button
    */

    const button =
        createButton({

            text: buttonText,

            variant: "outline",

            onClick: onButtonClick

        });


    content.appendChild(categoryElement);

    content.appendChild(titleElement);

    content.appendChild(descriptionElement);

    content.appendChild(button);

    card.appendChild(content);

    return card;
}


/* =========================================================
   3. MODAL COMPONENT
   ========================================================= */

/*
    Usage:

    const modal = createModal({
        title: "Hello",
        content: "This is a modal."
    });

    document.body.appendChild(modal.element);

    modal.open();

    modal.close();
*/

function createModal({

    title = "Modal",

    content = "",

    confirmText = "Confirm",

    cancelText = "Cancel",

    onConfirm = null

} = {}) {


    /*
        Overlay
    */

    const overlay =
        document.createElement("div");

    overlay.className =
        "modal-overlay";


    /*
        Modal
    */

    const modal =
        document.createElement("div");

    modal.className =
        "modal";


    /*
        Header
    */

    const header =
        document.createElement("div");

    header.className =
        "modal-header";


    const heading =
        document.createElement("h3");

    heading.textContent =
        title;


    const closeButton =
        document.createElement("button");

    closeButton.className =
        "modal-close";

    closeButton.innerHTML =
        "&times;";

    closeButton.setAttribute(
        "aria-label",
        "Close modal"
    );


    /*
        Body
    */

    const body =
        document.createElement("div");

    body.className =
        "modal-body";

    body.innerHTML =
        content;


    /*
        Footer
    */

    const footer =
        document.createElement("div");

    footer.className =
        "modal-footer";


    /*
        Cancel button
    */

    const cancelButton =
        createButton({

            text: cancelText,

            variant: "secondary",

            onClick: close

        });


    /*
        Confirm button
    */

    const confirmButton =
        createButton({

            text: confirmText,

            variant: "primary",

            onClick: () => {

                if (
                    typeof onConfirm ===
                    "function"
                ) {

                    onConfirm();
                }

                close();
            }

        });


    /*
        Build Modal
    */

    header.appendChild(heading);

    header.appendChild(closeButton);

    footer.appendChild(cancelButton);

    footer.appendChild(confirmButton);

    modal.appendChild(header);

    modal.appendChild(body);

    modal.appendChild(footer);

    overlay.appendChild(modal);


    /*
        Open
    */

    function open() {

        overlay.classList.add("active");

        document.body.style.overflow =
            "hidden";
    }


    /*
        Close
    */

    function close() {

        overlay.classList.remove("active");

        document.body.style.overflow =
            "";
    }


    /*
        Close button
    */

    closeButton.addEventListener(
        "click",
        close
    );


    /*
        Click outside modal
    */

    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                overlay
            ) {

                close();
            }
        }
    );


    /*
        Escape key
    */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Escape"
            ) {

                close();
            }
        }
    );


    return {

        element: overlay,

        open,

        close

    };
}


/* =========================================================
   4. TOAST COMPONENT
   ========================================================= */

/*
    Usage:

    createToast({
        message: "Saved successfully!",
        type: "success",
        duration: 3000
    });
*/


function createToast({

    message = "Notification",

    type = "success",

    duration = 3000

} = {}) {


    /*
        Create container
        only once
    */

    let container =
        document.querySelector(
            ".toast-container"
        );


    if (!container) {

        container =
            document.createElement("div");

        container.className =
            "toast-container";

        document.body.appendChild(
            container
        );
    }


    /*
        Toast
    */

    const toast =
        document.createElement("div");

    toast.className =
        `ui-toast ${type}`;


    /*
        Icon
    */

    const icon =
        document.createElement("span");

    icon.className =
        "toast-icon";

    if (type === "success") {

        icon.textContent = "✓";

    } else if (type === "error") {

        icon.textContent = "!";

    } else {

        icon.textContent = "i";
    }


    /*
        Message
    */

    const messageElement =
        document.createElement("span");

    messageElement.textContent =
        message;


    /*
        Close button
    */

    const closeButton =
        document.createElement("button");

    closeButton.className =
        "toast-close";

    closeButton.innerHTML =
        "&times;";


    /*
        Add elements
    */

    toast.appendChild(icon);

    toast.appendChild(
        messageElement
    );

    toast.appendChild(
        closeButton
    );

    container.appendChild(
        toast
    );


    /*
        Remove Toast
    */

    function removeToast() {

        toast.classList.add(
            "toast-out"
        );

        setTimeout(() => {

            toast.remove();

            /*
                Remove empty container
            */

            if (
                container.children.length ===
                0
            ) {

                container.remove();
            }

        }, 300);
    }


    /*
        Close button
    */

    closeButton.addEventListener(
        "click",
        removeToast
    );


    /*
        Auto dismiss
    */

    setTimeout(
        removeToast,
        duration
    );


    return {

        element: toast,

        close: removeToast

    };
}


/* =========================================================
   DEMO PAGE
   ========================================================= */


/* =========================================================
   BUTTON DEMO
   ========================================================= */

const buttonDemo =
    document.getElementById(
        "buttonDemo"
    );


/*
    Primary
*/

buttonDemo.appendChild(

    createButton({

        text: "Primary Button",

        variant: "primary",

        onClick: () => {

            createToast({

                message:
                    "Primary button clicked!",

                type: "success"

            });

        }

    })

);


/*
    Secondary
*/

buttonDemo.appendChild(

    createButton({

        text: "Secondary Button",

        variant: "secondary",

        onClick: () => {

            createToast({

                message:
                    "Secondary button clicked.",

                type: "info"

            });

        }

    })

);


/*
    Outline
*/

buttonDemo.appendChild(

    createButton({

        text: "Outline Button",

        variant: "outline",

        onClick: () => {

            createToast({

                message:
                    "Outline button clicked.",

                type: "info"

            });

        }

    })

);


/*
    Danger
*/

buttonDemo.appendChild(

    createButton({

        text: "Delete",

        variant: "danger",

        onClick: () => {

            createToast({

                message:
                    "Delete action triggered.",

                type: "error"

            });

        }

    })

);


/* =========================================================
   CARD DEMO
   ========================================================= */

const cardDemo =
    document.getElementById(
        "cardDemo"
    );


const cards = [

    {

        category: "Development",

        title: "Web Development",

        description:
            "Build responsive and interactive websites using modern front-end technologies.",

        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",

        buttonText:
            "Explore"

    },

    {

        category: "Design",

        title: "UI / UX Design",

        description:
            "Create clean, intuitive and user-focused digital experiences.",

        image:
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",

        buttonText:
            "View Design"

    },

    {

        category: "Testing",

        title: "Software Quality",

        description:
            "Improve product reliability through structured testing and quality practices.",

        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",

        buttonText:
            "Learn More"

    }

];


cards.forEach(cardData => {

    const card =
        createCard({

            ...cardData,

            onButtonClick: () => {

                createToast({

                    message:
                        `${cardData.title} selected.`,

                    type: "success"

                });

            }

        });


    cardDemo.appendChild(card);

});


/* =========================================================
   MODAL DEMO
   ========================================================= */

const modalDemo =
    document.getElementById(
        "modalDemo"
    );


/*
    First Modal
*/

const welcomeModal =
    createModal({

        title:
            "Welcome to the UI Kit",

        content:
            `
                <p>
                    This modal was created using a
                    reusable JavaScript function.
                    Its content, title and actions
                    can all be changed through parameters.
                </p>
            `,

        confirmText:
            "Got It",

        onConfirm: () => {

            createToast({

                message:
                    "Thanks for checking it out!",

                type: "success"

            });

        }

    });


document.body.appendChild(
    welcomeModal.element
);


modalDemo.appendChild(

    createButton({

        text: "Open Welcome Modal",

        variant: "primary",

        onClick: () => {

            welcomeModal.open();

        }

    })

);


/*
    Second Modal
*/

const infoModal =
    createModal({

        title:
            "Component Information",

        content:
            `
                <p>
                    Components keep UI logic
                    reusable and easier to maintain.
                    This same modal function can
                    generate completely different
                    modal windows.
                </p>
            `,

        confirmText:
            "Understood",

        onConfirm: () => {

            createToast({

                message:
                    "Information confirmed.",

                type: "info"

            });

        }

    });


document.body.appendChild(
    infoModal.element
);


modalDemo.appendChild(

    createButton({

        text: "Open Info Modal",

        variant: "outline",

        onClick: () => {

            infoModal.open();

        }

    })

);


/* =========================================================
   TOAST DEMO
   ========================================================= */

const toastDemo =
    document.getElementById(
        "toastDemo"
    );


/*
    Success Toast
*/

toastDemo.appendChild(

    createButton({

        text: "Success Toast",

        variant: "primary",

        onClick: () => {

            createToast({

                message:
                    "Your changes were saved successfully.",

                type: "success",

                duration: 4000

            });

        }

    })

);


/*
    Error Toast
*/

toastDemo.appendChild(

    createButton({

        text: "Error Toast",

        variant: "danger",

        onClick: () => {

            createToast({

                message:
                    "Something went wrong. Please try again.",

                type: "error",

                duration: 5000

            });

        }

    })

);


/*
    Info Toast
*/

toastDemo.appendChild(

    createButton({

        text: "Info Toast",

        variant: "secondary",

        onClick: () => {

            createToast({

                message:
                    "This notification will disappear automatically.",

                type: "info",

                duration: 3000

            });

        }

    })

);


/*
    Stacking Demo
*/

toastDemo.appendChild(

    createButton({

        text: "Show Multiple Toasts",

        variant: "outline",

        onClick: () => {

            createToast({

                message:
                    "First notification",

                type: "success",

                duration: 5000

            });

            setTimeout(() => {

                createToast({

                    message:
                        "Second notification",

                    type: "info",

                    duration: 5000

                });

            }, 250);

            setTimeout(() => {

                createToast({

                    message:
                        "Third notification",

                    type: "error",

                    duration: 5000

                });

            }, 500);

        }

    })

);