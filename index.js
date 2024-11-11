const express = require('express');
const app = express();

const frases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "No te rindas, el principio es siempre la parte más difícil."
];

// Ruta para la raíz ("/")
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Frases Motivacionales. Usa /frase para obtener una frase.');
});

// Ruta para obtener una frase aleatoria
app.get('/frase', (req, res) => {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    res.json({ frase });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
