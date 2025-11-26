# Projekty HTML/CSS/JS

Struktura do szybkiego uruchamiania prostych projektów z wykorzystaniem czystego HTML, CSS i JavaScript.

## 🎯 Szybkie Uruchomienie

```bash
# Zainstaluj dependencies (pierwsza instalacja)
yarn install

# Uruchom wybrany projekt
yarn css-scroll-driven-knockout-text
# lub
yarn example-template
```

## 🚀 Szybki Start

### Instalacja

```bash
yarn install
# lub
npm install
```

### Uruchomienie projektu

```bash
# Uruchom wybrany projekt
yarn css-scroll-driven-knockout-text

# Lista dostępnych projektów
yarn example-template
yarn css-scroll-driven-knockout-text
```

Każdy projekt uruchamia się na dedykowanym porcie z:

-   ⚡ Hot Module Replacement (natychmiastowy reload CSS/JS)
-   🔄 Automatyczne odświeżanie przy zmianie plików
-   🚀 Ultra szybki startup

## 📁 Struktura Projektu

```
/
├── package.json            # Dependencies i skrypty do uruchamiania projektów
├── vite.config.js          # Główny config (edukacyjny, z komentarzami)
├── scripts/
│   ├── run-project.js     # Wrapper - uruchamia Vite w folderze projektu
│   └── add-project.js     # Automatyczne dodawanie skryptów
├── projects/               # Każdy projekt w osobnym folderze
│   ├── example-template/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── css-scroll-driven-knockout-text/
│       ├── index.html
│       └── style.css
└── README.md
```

**Jak to działa:**

-   Każdy projekt uruchamia się z własnego folderu jako root
-   `run-project.js` zmienia katalog roboczy (`cwd`) na folder projektu
-   Vite widzi `index.html` projektu i serwuje go bezpośrednio
-   Każdy projekt działa niezależnie na swoim porcie

## ➕ Dodawanie Nowych Projektów

### Krok 1: Skopiuj szablon

```bash
# Windows (PowerShell)
Copy-Item -Path "projects/example-template" -Destination "projects/nazwa-projektu" -Recurse

# Linux/Mac
cp -r projects/example-template projects/nazwa-projektu
```

### Krok 2: Edytuj pliki projektu

Zmodyfikuj pliki w swoim nowym folderze:

-   `index.html` - struktura strony
-   `style.css` - style wizualne
-   `script.js` - logika aplikacji

### Krok 3: Dodaj skrypt uruchomieniowy

**Automatycznie** (zalecane):

```bash
yarn add-project nazwa-projektu
# lub
npm run add-project nazwa-projektu
```

**Ręcznie** - edytuj `package.json` i dodaj:

```json
"scripts": {
    "nazwa-projektu": "vite --root projects/nazwa-projektu --port 3003"
}
```

**Porty:**

-   3001 - example-template
-   3002 - css-scroll-driven-knockout-text
-   3003+ - twoje nowe projekty (automatycznie przydzielane)

### Krok 4: Uruchom projekt

```bash
yarn nazwa-projektu
# lub
npm run nazwa-projektu
```

---

## 🎬 Pełny Przykład - Dodanie Nowego Projektu

```bash
# 1. Skopiuj szablon (Windows PowerShell)
Copy-Item -Path "projects/example-template" -Destination "projects/moj-nowy-projekt" -Recurse

# 2. Dodaj skrypt (automatycznie znajdzie wolny port)
yarn add-project moj-nowy-projekt

# 3. Uruchom projekt
yarn moj-nowy-projekt

# 4. Edytuj pliki w projects/moj-nowy-projekt/ - HMR zadziała automatycznie!
```

## 🛠️ Technologie

-   **HTML5** - semantyczna struktura
-   **CSS3** - nowoczesne style z CSS Variables
-   **JavaScript ES6+** - czysta logika bez frameworków
-   **Vite 5.4.x** - ultra szybki dev server z HMR (Hot Module Replacement)
-   **Node.js wrapper scripts** - uruchamianie projektów z różnych folderów

### 📚 Nauka Vite

-   **Główny config:** `vite.config.js` - pełne komentarze i przykłady
-   **Dokumentacja:** [vitejs.dev](https://vitejs.dev/)
-   **Guide:** [vitejs.dev/guide](https://vitejs.dev/guide/)
-   **Config reference:** [vitejs.dev/config](https://vitejs.dev/config/)

## 💡 Wskazówki

### Struktura każdego projektu

Każdy projekt powinien zawierać minimum:

-   `index.html` - punkt wejścia
-   `style.css` - style
-   `script.js` - logika (opcjonalnie)
-   `vite.config.js` - custom config (opcjonalnie)

### Best Practices

-   Używaj semantycznego HTML5
-   Stosuj CSS Variables dla łatwej konfiguracji kolorów
-   Komentuj kod dla lepszej czytelności
-   Testuj responsywność na różnych urządzeniach
-   Sprawdzaj konsolę przeglądarki (F12) podczas developmentu

### Dodatkowe pliki

Możesz dodawać dodatkowe zasoby:

```
projects/nazwa-projektu/
├── index.html
├── style.css
├── script.js
├── vite.config.js   # Opcjonalna konfiguracja Vite
├── images/          # Obrazy
├── assets/          # Inne zasoby
└── modules/         # Dodatkowe moduły JS
```

**Custom config Vite (opcjonalnie):**
Jeśli projekt potrzebuje specjalnej konfiguracji, dodaj `vite.config.js` w jego folderze:

```js
import { defineConfig } from "vite";

export default defineConfig({
    // Twoja konfiguracja
});
```

## 📋 Dostępne Projekty

Każdy projekt uruchamiasz bezpośrednio:

```bash
# Example Template (port 3001)
yarn example-template

# CSS Scroll-Driven Knockout Text (port 3002)
yarn css-scroll-driven-knockout-text
```

### Pomysły na nowe projekty:

-   Landing pages
-   Portfolio
-   Galerie zdjęć
-   Formularze
-   Animacje CSS
-   Mini gry w JavaScript
-   API integrations
-   Scroll animations
-   UI Components

## 📝 Wszystkie Komendy

```bash
# Uruchamianie projektów
yarn example-template                 # Uruchom example-template (port 3001)
yarn css-scroll-driven-knockout-text  # Uruchom knockout-text (port 3002)

# Zarządzanie projektami
yarn add-project nazwa-projektu       # Dodaj skrypt dla nowego projektu

# Alternatywnie: npm
npm run example-template              # Użyj npm zamiast yarn
```

## 🔧 Konfiguracja Vite

### Główny vite.config.js (edukacyjny)

W głównym katalogu jest `vite.config.js` z pełnymi komentarzami do nauki.
**Nie jest używany przez projekty** - służy jako przykład/dokumentacja.

### Konfiguracja dla konkretnego projektu

Skopiuj `vite.config.js` do folderu projektu i dostosuj:

```bash
# Skopiuj szablon config
Copy-Item vite.config.js projects/moj-projekt/vite.config.js

# Edytuj według potrzeb
```

**Przykład - zmiana portu tylko dla jednego projektu:**

```javascript
// projects/moj-projekt/vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    server: {
        port: 3010,
        open: true,
    },
});
```

### Budowanie do produkcji

Dodaj build script dla projektu w `package.json`:

```json
"scripts": {
    "build:moj-projekt": "cd projects/moj-projekt && vite build"
}
```

Pliki wygenerują się w `projects/moj-projekt/dist`.

### Praktyczne przykłady konfiguracji

#### 1. Projekt z API proxy

```javascript
// Przekieruj /api do backendu
export default defineConfig({
    server: {
        proxy: {
            "/api": "http://localhost:8080",
        },
    },
});
```

#### 2. Projekt z aliasami ścieżek

```javascript
import { resolve } from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@components": resolve(__dirname, "./src/components"),
        },
    },
});
```

#### 3. Projekt z CSS preprocessorem

```javascript
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./variables.scss";`,
            },
        },
    },
});
```

#### 4. Projekt ze sourcemapami dla produkcji

```javascript
export default defineConfig({
    build: {
        sourcemap: true,
        minify: false, // Bez minifikacji dla debugowania
    },
});
```

## 🔍 Troubleshooting

### Vite nie uruchamia się

```bash
# Usuń node_modules i reinstaluj
Remove-Item -Recurse -Force node_modules
yarn install
```

### Port zajęty

Zmień port w skrypcie w `package.json`:

```json
"projekt": "node scripts/run-project.js projects/projekt 3005"
```

### Problem z npm

Użyj yarn zamiast npm:

```bash
yarn install
yarn dev
```

## 📝 Licencja

MIT - możesz swobodnie używać i modyfikować ten szablon.
