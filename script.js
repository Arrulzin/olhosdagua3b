:root {
    --color-gold: #FFD700;
    --color-brown: #5C4033;
    --color-burnt-red: #8B0000;
    --color-turquoise: #40E0D0;
    --color-cream: #F5F5DC;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Playfair Display', serif;
    background-color: var(--color-brown);
    color: var(--color-cream);
    line-height: 1.6;
    overflow-x: hidden;
}

header {
    text-align: center;
    padding: 3rem 1rem;
    background-color: rgba(0, 0, 0, 0.4);
}

header h1 {
    font-size: 2.5rem;
    color: var(--color-gold);
}

header p {
    font-style: italic;
    margin-top: 0.5rem;
}

main {
    padding: 2rem 1rem;
}

section {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

section.visible {
    opacity: 1;
    transform: translateY(0);
}

section h2 {
    color: var(--color-burnt-red);
    margin-bottom: 1rem;
    font-size: 2rem;
}

.intro img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.gallery-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.gallery-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

.gallery-container img:hover {
    transform: scale(1.05);
}

footer {
    text-align: center;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    font-style: italic;
}

@media (min-width: 768px) {
    body {
        font-size: 1.1rem;
    }

    header h1 {
        font-size: 3.5rem;
    }

    .gallery-container {
        flex-direction: row;
        justify-content: center;
    }

    .gallery-container img {
        width: 30%;
    }
}
