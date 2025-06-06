// src/js/theme.js

const themeToggleButton = document.getElementById('theme-toggle');

const setTheme = (theme) => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
};

const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
};

const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
};

themeToggleButton.addEventListener('click', toggleTheme);
document.addEventListener('DOMContentLoaded', loadTheme);