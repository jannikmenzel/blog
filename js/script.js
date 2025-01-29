// Funktion zum Laden von Markdown-Dateien
function loadMarkdownFile(filePath) {
    console.log(`Lade Datei: ${filePath}`);
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP-Fehler: ${response.status}`);
            }
            return response.text();
        })
        .then(markdown => {
            // Überprüfen, ob marked verfügbar ist
            if (typeof marked !== 'function') {
                throw new Error('Marked.js ist nicht geladen.');
            }
            // Blogbilder Fix
            const fixedMarkdown = markdown.replace(/!\[(.*?)]\(\/(assets\/.*?)\)/g, '![$1]($2)');
            // Markdown zu HTML konvertieren und einfügen
            document.getElementById('blog-content').innerHTML = marked(fixedMarkdown);
        })
        .catch(error => {
            console.error('Fehler:', error.message);
            document.getElementById('blog-content').innerHTML = `
                <p>Fehler beim Laden des Artikels.</p>
                <p>Details: ${error.message}</p>`;
        });
}

// Artikel laden
const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('article');

if (articleId) {
    const fileName = `Artikel-${articleId}.md`;
    const filePath = `articles/${fileName}`;
    loadMarkdownFile(filePath);
} else {
    document.getElementById('blog-content').innerHTML = `
        <p>Kein Artikel ausgewählt. Bitte wähle einen Artikel von der Startseite.</p>`;
}