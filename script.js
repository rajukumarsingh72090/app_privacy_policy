/**
 * Configuration for app policies.
 * Add new apps to this array to automatically display them on the page.
 */
const apps = [
    {
        id: "edumania",
        name: "Edumania",
        description: "View all policies related to Edumania, including Privacy and Account Deletion policies.",
        icon: "🎓",
        link: "edumania/index.html",
        color1: "#3b82f6",
        color2: "#2dd4bf"
    }
];

function createCard(app, index) {
    const card = document.createElement('a');
    card.href = app.link;
    card.className = 'policy-card';
    card.style.animationDelay = `${0.2 + (index * 0.1)}s`;

    // Background gradient for the icon
    const bgGradient = app.color1 ? `background: linear-gradient(135deg, ${app.color1}, ${app.color2});` : '';

    card.innerHTML = `
        <div class="card-icon" style="${bgGradient}">
            ${app.icon}
        </div>
        <div class="card-content">
            <h2 class="card-title">${app.name}</h2>
            <p class="card-desc">${app.description}</p>
        </div>
        <div class="card-footer">
            Read Policy
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </div>
    `;

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('policy-grid');

    if (apps.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1 / -1;">No policies added yet. Configure apps in script.js to see them here.</p>';
        return;
    }

    apps.forEach((app, index) => {
        const card = createCard(app, index);
        grid.appendChild(card);
    });
});
