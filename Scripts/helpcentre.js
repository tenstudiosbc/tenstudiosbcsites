// ============================================================
//  TSBC HELP CENTRE DATABASE
//  helpcentre.js — Edit this file to manage all help content
// ============================================================
//
//  HOW TO ADD A NEW CATEGORY:
//  1. Add a new object inside the `helpData` array below
//  2. Give it a unique `id`, a `title`, an `icon` (Lucide icon name),
//     and a `color` accent class (e.g. "text-red-500").
//  3. Fill in the `articles` array with your Q&A items.
//
//  HOW TO ADD A NEW ARTICLE:
//  1. Find the category you want to add it to.
//  2. Add a new object inside that category's `articles` array.
//  3. Fill in `question` and `answer`. Use \n\n for paragraph breaks.
//
//  HOW TO ADD QUICK LINKS (shown in the hero section):
//  1. Edit the `quickLinks` array below.
//  2. Each item has a `label`, `icon`, and `categoryId` (must match a category `id`).
//
// ============================================================

const quickLinks = [
    { label: "Getting Started",   icon: "rocket",        categoryId: "getting-started"   },
    { label: "Game Troubleshoot", icon: "gamepad-2",     categoryId: "games"             },
    { label: "Community Rules",   icon: "shield-check",  categoryId: "community"         },
    { label: "Contact Support",   icon: "mail",          categoryId: "contact"           },
];

const helpData = [

    // ── CATEGORY 1 ──────────────────────────────────────────
    {
        id: "getting-started",
        title: "Getting Started",
        icon: "rocket",
        color: "text-red-500",
        articles: [
            {
                question: "What is TSBC?",
                answer: "TSBC (TenStudios Broadcasting Community) is a non-profit community founded on October 6, 2014. We focus on storytelling, cinematic video production, and immersive game development. Our roots trace back to the TV10 Indonesia era (2015–2020), and we have grown into a global creative community."
            },
            {
                question: "How do I join the TSBC community?",
                answer: "You can reach out to us through our Contact page or via our official social media channels. We welcome creators, developers, writers, and fans who share our passion for storytelling and game development."
            },
            {
                question: "Is TSBC free to join?",
                answer: "Yes! TSBC is a fully non-profit community. There are no membership fees. We operate entirely on passion, volunteer effort, and community support."
            },
        ]
    },

    // ── CATEGORY 2 ──────────────────────────────────────────
    {
        id: "games",
        title: "Games & Downloads",
        icon: "gamepad-2",
        color: "text-orange-400",
        articles: [
            {
                question: "Where can I download TSBC games?",
                answer: "All of our game releases are available through the TSBC Games portal at tsbcgames.tenstudiosbc.my.id. or check our itch.io, Individual game pages will have direct download links and installation instructions."
            },
            {
                question: "My game crashes on startup — what should I do?",
                answer: "First, make sure you have extracted the game folder fully before running it.\n\nFor RPG Maker VX Ace games, ensure the RTP (Run-Time Package) is installed. You can download the VX Ace RTP for free from the official Enterbrain/Degica website.\n\nIf the issue persists, check that your system meets the minimum requirements listed on the game's page, and try running the executable as Administrator."
            },
            {
                question: "The game shows a missing file error. How do I fix it?",
                answer: "This usually means the download was incomplete or the archive was not fully extracted. Try re-downloading the game and extracting it again to a folder with a simple path (e.g., C:\\Games\\TSBC) or in any directory with no special characters in the folder name."
            },
            {
                question: "How do I save my progress?",
                answer: "Press on ESC for windows and navigate to the save menu, for android please tap on FAB Menu and the press on the running icon, in android there is an auto-save feature that will save your progress at certain checkpoints, but we recommend manually saving often to avoid any potential data loss."
            },
            {
                question: "Are there content updates or patches for your games?",
                answer: "Yes. Patches and updates are posted on the TSBC Games portal and announced through our official news channels. We recommend always checking the game's page for the latest version before reporting bugs."
            },
        ]
    },

    // ── CATEGORY 3 ──────────────────────────────────────────
    {
        id: "media",
        title: "Media & Productions",
        icon: "clapperboard",
        color: "text-yellow-400",
        articles: [
            {
                question: "Where can I watch TSBC productions like SSIA?",
                answer: "Our video productions are hosted on our official YouTube channel. You can find links to all our series and films on the Portfolio section of the main website, or search 'SSIA TSBC' on YouTube."
            },
            {
                question: "Can I use TSBC media content for my own projects?",
                answer: "All TSBC media productions are protected under copyright. Clips may be used for non-commercial review or fan content with proper credit. For any commercial use or licensing inquiries, please reach out to us through the Contact page."
            },
            {
                question: "What is the SSIA Universe?",
                answer: "The SSIA (Sierra Secret Investigation Agency) Universe is TSBC's flagship cinematic series universe. It currently spans four main entries: SSIA, SSIA: Criminals Hunting Unit, SSIA: Fugitives Task Force, and SSIA: Origins. A game adaptation — SSIA: Vanguard Chronicles — is also in development."
            },
        ]
    },

    // ── CATEGORY 4 ──────────────────────────────────────────
    {
        id: "community",
        title: "Community & Rules",
        icon: "shield-check",
        color: "text-green-400",
        articles: [
            {
                question: "What are the TSBC community guidelines?",
                answer: "We ask all community members to be respectful, constructive, and collaborative. Hate speech, harassment, plagiarism, and spam of any kind are strictly prohibited. Content shared within the community must be original or properly credited."
            },
            {
                question: "How do I report a community issue or misconduct?",
                answer: "Please use the Contact page on our website to submit a report. Provide as much detail as possible. All reports are reviewed by our HRD and Operations team."
            },
            {
                question: "Can I contribute content to TSBC?",
                answer: "Absolutely! We are always open to passionate contributors. Whether you are a writer, artist, composer, or programmer, reach out via the Contact page with your portfolio or a brief introduction of what you'd like to contribute."
            },
        ]
    },

    // ── CATEGORY 5 ──────────────────────────────────────────
    {
        id: "contact",
        title: "Contact & Support",
        icon: "mail",
        color: "text-blue-400",
        articles: [
            {
                question: "How do I contact the TSBC team?",
                answer: "You can reach us through the official Contact page at Pages/contact.html. For faster responses, you may also reach out through our official social media handles linked in the website header and footer."
            },
            {
                question: "What are your support hours?",
                answer: "Our team is based in Western Indonesia (WIB, UTC+7). General response hours are 9:00 AM – 5:30 PM WIB on weekdays. Response times may vary as we are a volunteer-based non-profit team."
            },
            {
                question: "I found a bug or issue on the website. How do I report it?",
                answer: "We appreciate all bug reports! Please contact us through the Contact page and describe the issue in detail — including which browser you are using, the page where the issue occurred, and steps to reproduce it if possible."
            },
        ]
    },

    // ── ADD MORE CATEGORIES HERE ─────────────────────────────
    // {
    //     id: "my-new-category",
    //     title: "My New Category",
    //     icon: "star",         // Any Lucide icon name
    //     color: "text-purple-400",
    //     articles: [
    //         {
    //             question: "My question here?",
    //             answer: "My answer here."
    //         },
    //     ]
    // },

];


// ============================================================
//  RENDER ENGINE — Do not edit below unless you know what
//  you're doing. The render logic reads helpData above.
// ============================================================

function renderHelpCentre() {
    renderQuickLinks();
    renderCategories();
    initSearch();
}

function renderQuickLinks() {
    const container = document.getElementById('quick-links-grid');
    if (!container) return;
    container.innerHTML = quickLinks.map(link => `
        <button
            onclick="scrollToCategory('${link.categoryId}')"
            class="glass p-5 rounded-2xl flex flex-col items-center gap-3 hover:border-red-600/50 hover:bg-red-600/5 transition-all group cursor-pointer text-center">
            <i data-lucide="${link.icon}" class="w-7 h-7 text-red-500 group-hover:scale-110 transition-transform"></i>
            <span class="text-sm font-bold uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">${link.label}</span>
        </button>
    `).join('');
}

function renderCategories() {
    const container = document.getElementById('help-categories');
    if (!container) return;

    container.innerHTML = helpData.map(cat => `
        <div id="cat-${cat.id}" class="mb-14 scroll-mt-32">
            <div class="flex items-center gap-4 mb-8">
                <div class="p-3 glass rounded-xl">
                    <i data-lucide="${cat.icon}" class="w-6 h-6 ${cat.color}"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-black uppercase tracking-tight text-white">${cat.title}</h2>
                    <p class="text-xs text-gray-600 uppercase font-bold tracking-widest mt-1">${cat.articles.length} article${cat.articles.length !== 1 ? 's' : ''}</p>
                </div>
            </div>
            <div class="space-y-4">
                ${cat.articles.map((article, i) => renderAccordion(cat.id, i, article)).join('')}
            </div>
        </div>
    `).join('');
}

function renderAccordion(catId, index, article) {
    const uid = `acc-${catId}-${index}`;
    const paragraphs = article.answer.split('\n\n').map(p => `<p>${p}</p>`).join('');
    return `
        <div class="glass rounded-2xl overflow-hidden border border-white/5 hover:border-red-600/20 transition-all" data-searchable>
            <button
                onclick="toggleAccordion('${uid}')"
                class="w-full flex items-center justify-between px-7 py-5 text-left font-bold text-white hover:text-red-400 transition-colors group gap-4">
                <span class="text-sm md:text-base leading-snug">${article.question}</span>
                <i data-lucide="chevron-down" id="${uid}-icon" class="w-5 h-5 flex-shrink-0 text-gray-500 group-hover:text-red-500 transition-all duration-300"></i>
            </button>
            <div id="${uid}" class="hidden px-7 pb-6 text-gray-400 text-sm leading-relaxed space-y-3 border-t border-white/5">
                ${paragraphs}
            </div>
        </div>
    `;
}

function toggleAccordion(uid) {
    const body = document.getElementById(uid);
    const icon = document.getElementById(uid + '-icon');
    if (!body) return;
    const isOpen = !body.classList.contains('hidden');
    body.classList.toggle('hidden', isOpen);
    if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function scrollToCategory(id) {
    const el = document.getElementById('cat-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function initSearch() {
    const input = document.getElementById('help-search');
    const noResult = document.getElementById('no-results');
    if (!input) return;

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        const cards = document.querySelectorAll('[data-searchable]');
        let visible = 0;

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            const match = !q || text.includes(q);
            card.closest('[data-searchable]').style.display = match ? '' : 'none';
            if (match) visible++;
        });

        // Show/hide category headers based on visible cards
        document.querySelectorAll('#help-categories > div').forEach(section => {
            const anyVisible = [...section.querySelectorAll('[data-searchable]')].some(c => c.style.display !== 'none');
            section.style.display = anyVisible ? '' : 'none';
        });

        if (noResult) noResult.hidden = visible > 0 || !q;
    });
}