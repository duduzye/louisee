// File: /louise-patisserie/louise-patisserie/src/js/i18n.js

const translations = {
    en: {
        title: "Louise Patisserie",
        description: "Artisanal sweets made with love and selected ingredients.",
        menu: "See the Menu",
        contact: "Get in Touch",
        about: "About Louise Patisserie",
        aboutText: "Located in the heart of Santo Amaro, São Paulo, Louise Patisserie is a virtual store specializing in artisanal sweets. Our goal is to bring moments of happiness to you and your family through unique and unforgettable flavors.",
        products: "Our Products",
        brigadeiros: "Gourmet Brigadeiros",
        brigadeirosDesc: "Made with Belgian chocolate and available in various flavors.",
        happinessCup: "Cup of Happiness",
        happinessCupDesc: "Perfect for birthdays, weddings, and other celebrations.",
        artisanalCakes: "Artisanal Cakes",
        artisanalCakesDesc: "Options like lemon pie, cheesecake, and chocolate cake."
    },
    pt: {
        title: "Louise Patisserie",
        description: "Doces artesanais feitos com amor e ingredientes selecionados.",
        menu: "Veja o Cardápio",
        contact: "Entre em Contato",
        about: "Sobre a Louise Patisserie",
        aboutText: "Localizada no coração do bairro de Santo Amaro, São Paulo, a Louise Patisserie é uma loja virtual especializada em doces artesanais. Nosso objetivo é trazer momentos de felicidade para você e sua família através de sabores únicos e inesquecíveis.",
        products: "Nossos Produtos",
        brigadeiros: "Brigadeiros Gourmet",
        brigadeirosDesc: "Feitos com chocolate belga e disponíveis em diversos sabores.",
        happinessCup: "Copo da Felicidade",
        happinessCupDesc: "Perfeitos para aniversários, casamentos e outras celebrações.",
        artisanalCakes: "Tortas Artesanais",
        artisanalCakesDesc: "Opções como torta de limão, cheesecake e torta de chocolate."
    }
};

let currentLanguage = localStorage.getItem('language') || 'pt';

function translatePage() {
    document.querySelector('h1').textContent = translations[currentLanguage].title;
    document.querySelector('.destaque p').textContent = translations[currentLanguage].description;
    document.querySelector('.cta-button').textContent = translations[currentLanguage].menu;
    document.querySelector('.cta-button.secundario').textContent = translations[currentLanguage].contact;
    document.querySelector('.informacoes h2').textContent = translations[currentLanguage].about;
    document.querySelector('.informacoes p').textContent = translations[currentLanguage].aboutText;
    document.querySelector('.produtos h2').textContent = translations[currentLanguage].products;

    const productItems = document.querySelectorAll('.produto-item');
    productItems[0].querySelector('h3').textContent = translations[currentLanguage].brigadeiros;
    productItems[0].querySelector('p').textContent = translations[currentLanguage].brigadeirosDesc;
    productItems[1].querySelector('h3').textContent = translations[currentLanguage].happinessCup;
    productItems[1].querySelector('p').textContent = translations[currentLanguage].happinessCupDesc;
    productItems[2].querySelector('h3').textContent = translations[currentLanguage].artisanalCakes;
    productItems[2].querySelector('p').textContent = translations[currentLanguage].artisanalCakesDesc;
}

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    translatePage();
}

document.addEventListener('DOMContentLoaded', () => {
    translatePage();
});

export { switchLanguage };