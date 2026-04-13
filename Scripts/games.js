/**
 * TSBC Games Database
 * Easy-to-edit format for adding new games to the portfolio.
 */
const gamesData = [
    {
        id: "ssia-vanguard",
        title: "SSIA: Vanguard Chronicles",
        engine: "RPG Maker VX Ace",
        genre: "2D Gacha / RPG",
        platforms: "Mobile & Windows",
        status: "Released",
        statusColor: "green", // green, blue, yellow, or red
        releaseDate: "Aug 17, 2025",
        image: "https://img.itch.zone/aW1nLzI0OTUzNzA1LmpwZw==/original/gyEMFM.jpg",
        link: "https://tenstudiosbc.itch.io/ssia-vanguard-chronicles",
        description: "A strategic 2D gacha game set in the SSIA Universe."
    },
    {
        id: "ssia-shadowfront",
        title: "SSIA: ShadowFront",
        engine: "Godot Engine",
        genre: "Tactical Shooter",
        platforms: "PC",
        status: "Announced",
        statusColor: "blue",
        releaseDate: "TBA (Est. 2026)",
        image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800", // Placeholder
        link: "#",
        description: "Next-gen tactical operations within the Sierra Secret Investigation Agency."
    },
    {
        id: "sandy-state-game",
        title: "Sandy State Stories",
        engine: "TSBC Custom",
        genre: "Adventure",
        platforms: "TBA",
        status: "Upcoming",
        statusColor: "yellow",
        releaseDate: "TBA",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800", // Placeholder
        link: "#",
        description: "The immersive game adaptation of the long-running YouTube series."
    }
];

// This function renders the games into the HTML container
function renderGames() {
    const container = document.getElementById('games-grid');
    if (!container) return;

    container.innerHTML = gamesData.map(game => {
        // Map status colors to Tailwind classes
        const colors = {
            green: "bg-green-500/20 text-green-500",
            blue: "bg-blue-500/20 text-blue-500",
            yellow: "bg-yellow-500/20 text-yellow-500",
            red: "bg-red-500/20 text-red-500"
        };
        const badgeClass = colors[game.statusColor] || colors.blue;

        return `
            <div class="bg-black border border-white/5 rounded-xl overflow-hidden hover:border-red-600/50 transition-all group flex flex-col shadow-xl">
                <div class="h-52 overflow-hidden relative">
                    <img src="${game.image}" alt="${game.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div class="absolute top-4 left-4">
                        <span class="text-[10px] ${badgeClass} px-3 py-1 rounded-full font-black uppercase tracking-widest border border-white/5">
                            ${game.status}
                        </span>
                    </div>
                </div>
                <div class="p-6 flex-grow flex flex-col">
                    <h4 class="text-xl font-bold">${game.title}</h4>
                    <p class="text-[10px] text-red-500 font-bold uppercase tracking-widest mt-1">${game.engine}</p>
                    <p class="text-sm text-gray-500 mt-4 line-clamp-2">${game.description}</p>
                    
                    <div class="mt-auto pt-6">
                        <div class="flex items-center justify-between mb-4 text-[10px] text-gray-600 font-bold uppercase tracking-tighter">
                            <span>Platform: ${game.platforms}</span>
                            <span>${game.releaseDate}</span>
                        </div>
                        <a href="${game.link}" ${game.link !== '#' ? 'target="_blank"' : ''} 
                           class="block w-full ${game.link !== '#' ? 'bg-white text-black hover:bg-red-600 hover:text-white' : 'bg-white/5 text-gray-500 cursor-not-allowed'} 
                           py-3 rounded-lg font-black text-center text-xs transition-all flex items-center justify-center gap-2">
                            ${game.link !== '#' ? '<i data-lucide="external-link" class="w-3 h-3"></i> VIEW PROJECT' : 'COMING SOON'}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Re-run icons for the newly injected HTML
    if (window.lucide) lucide.createIcons();
}
