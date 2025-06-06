// This is the main JavaScript file that initializes the application, sets up event listeners, and handles the overall functionality of the site.

import { translate } from './i18n.js';
import { toggleTheme, applyTheme } from './theme.js';
import { initComponents } from './components.js';
import { validateContactForm } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {
    // Apply the saved theme on page load
    applyTheme();

    // Initialize interactive components
    initComponents();

    // Set up event listeners for language toggle
    const languageButtons = document.querySelectorAll('.language-toggle');
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.dataset.lang;
            translate(lang);
        });
    });

    // Set up event listener for theme toggle
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        toggleTheme();
    });

    // Set up form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            if (!validateContactForm(event.target)) {
                event.preventDefault();
            }
        });
    });
