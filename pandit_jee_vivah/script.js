const policies = [
    {
        id: "privacy",
        name: "Privacy Policy",
        description: "Read how Pandit Jee Vivah protects your matrimonial information, verified contacts, and horoscope data.",
        icon: "🛡️",
        link: "pandit_jee_vivah_privacy_policy.html",
        color1: "#f59e0b",
        color2: "#d97706"
    },
    {
        id: "account-deletion",
        name: "Account Deletion Policy",
        description: "Learn how to instantly delete your account, wipe all photos & messages, or submit a data removal request.",
        icon: "🗑️",
        link: "pandit_jee_vivah_account_deletion_policy.html",
        color1: "#ef4444",
        color2: "#f87171"
    }
];

function createCard(policy, index) {
    const card = document.createElement('a');
    card.href = policy.link;
    card.className = 'policy-card';
    card.style.animationDelay = `${0.2 + (index * 0.1)}s`;

    // Background gradient for the icon
    const bgGradient = policy.color1 ? `background: linear-gradient(135deg, ${policy.color1}, ${policy.color2});` : '';

    card.innerHTML = `
        <div class="card-icon" style="${bgGradient}">
            ${policy.icon}
        </div>
        <div class="card-content">
            <h2 class="card-title">${policy.name}</h2>
            <p class="card-desc">${policy.description}</p>
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

    if (policies.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1 / -1;">No policies available.</p>';
        return;
    }

    policies.forEach((policy, index) => {
        const card = createCard(policy, index);
        grid.appendChild(card);
    });
});
