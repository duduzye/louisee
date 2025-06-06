// src/js/components.js

export function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Welcome to Louise Patisserie!</h2>
            <p>Enjoy our delicious treats.</p>
        </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.style.display = 'block';
}

export function createDropdown() {
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');
    dropdown.innerHTML = `
        <button class="dropbtn">Select Language</button>
        <div class="dropdown-content">
            <a href="#" data-lang="pt">Português</a>
            <a href="#" data-lang="en">English</a>
        </div>
    `;
    document.body.appendChild(dropdown);

    const links = dropdown.querySelectorAll('.dropdown-content a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = event.target.getAttribute('data-lang');
            // Call the translation function from i18n.js here
            console.log(`Language changed to: ${lang}`);
        });
    });
}