// Example Template - JavaScript

// Log inicjalizacji
console.log('✅ Script loaded successfully!');
console.log('📁 Project: Example Template');

// DOM Elements
const demoButton = document.getElementById('demo-button');

// Event Listeners
if (demoButton) {
    demoButton.addEventListener('click', handleButtonClick);
}

// Functions
function handleButtonClick() {
    console.log('🎯 Button clicked!');
    
    // Przykładowa animacja
    demoButton.textContent = 'Kliknięte! ✓';
    demoButton.style.background = '#10b981';
    
    setTimeout(() => {
        demoButton.textContent = 'Kliknij mnie!';
        demoButton.style.background = '';
    }, 2000);
}

// Przykładowa funkcja utility
function logInfo(message) {
    console.log(`ℹ️ ${message}`);
}

// Inicjalizacja
document.addEventListener('DOMContentLoaded', () => {
    logInfo('DOM fully loaded and parsed');
    logInfo('Ready to start coding!');
});

// Przykładowe dane
const exampleData = {
    projectName: 'Example Template',
    version: '1.0.0',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+']
};

console.log('📦 Project Data:', exampleData);

