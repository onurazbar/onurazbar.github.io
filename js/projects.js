/**
 * Single source of truth for the projects section.
 *
 * Add a project here and it appears on the page with both translations —
 * no edits needed in index.html or i18n.js. i18n.js folds `title` and
 * `description` into the `translations` object under `projects.projectN`,
 * so project copy flows through the same data-i18n path as everything else.
 *
 * Fields:
 *   id          numeric, must be unique; drives the `projects.projectN` i18n key
 *   title       shown as the card heading (per language)
 *   description card body copy (per language)
 *   tech        chips, rendered in order
 *   image       path relative to the site root; falls back to `icon` if missing
 *   icon        Font Awesome class used for the placeholder and the title glyph
 *   url         source code link
 *   status      mono HUD label in the card corner (untranslated on purpose)
 */
const PROJECTS = [
    {
        id: 1,
        title: { tr: 'SpaceCraft', en: 'SpaceCraft' },
        description: {
            tr: 'Bu, 2 boyutlu bir uzay aracı oyunudur. Oyun yazılımı, C++ dili kullanılarak SFML kütüphanesi ile geliştirilmiştir.',
            en: 'This is a 2D spacecraft game. The game software is developed in C++ using the SFML library.'
        },
        tech: ['C++', 'SFML'],
        image: 'images/spacecraft.webp',
        icon: 'fa-solid fa-rocket',
        url: 'https://github.com/onurazbar/SpaceCraft',
        status: 'ACTIVE'
    },
    {
        id: 2,
        title: { tr: 'Snake', en: 'Snake' },
        description: {
            tr: 'Bu, 2 boyutlu bir yılan oyunudur. Oyun yazılımı, C++ dili kullanılarak SFML kütüphanesi ile geliştirilmiştir.',
            en: 'This is a 2D snake game. The game software is developed in C++ using the SFML library.'
        },
        tech: ['C++', 'SFML'],
        image: 'images/snake.webp',
        icon: 'fa-solid fa-staff-snake',
        url: 'https://github.com/onurazbar/Snake',
        status: 'ACTIVE'
    },
    {
        id: 3,
        title: { tr: 'BackGammon', en: 'BackGammon' },
        description: {
            tr: 'Bu, 2 boyutlu bir tavla konsol oyunudur. Oyun yazılımı, C++ dili ile geliştirilmiştir.',
            en: 'This is a 2D backgammon console game. The game software was developed using the C++ language.'
        },
        tech: ['C++'],
        image: 'images/backgammon.webp',
        icon: 'fa-solid fa-dice',
        url: 'https://github.com/onurazbar/BackGammon',
        status: 'ARCHIVED'
    },
    {
        id: 4,
        title: { tr: 'RayTracer', en: 'RayTracer' },
        description: {
            tr: 'Bu, konsol tabanlı basit bir ışın izleme uygulamasıdır. Kaynak kodu, nesne yönelimli mimaride C++ ile yazılmıştır.',
            en: 'This is a console based simple ray tracer application. The source code is written in C++ upon an object oriented concept.'
        },
        tech: ['C++'],
        image: 'images/raytracer.webp',
        icon: 'fa-solid fa-cube',
        url: 'https://github.com/onurazbar/RayTracer',
        status: 'ACTIVE'
    }
];

/**
 * Builds the project cards. Text nodes carry data-i18n keys rather than literal
 * strings, so the language switcher keeps working after a re-render.
 */
function renderProjects(target) {
    const grid = target || document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = PROJECTS.map((p, index) => {
        const sysId = 'PRJ-' + String(p.id).padStart(3, '0');
        const chips = p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

        return `
        <article class="project-card glass" style="--card-index:${index}">
            <div class="project-meta">
                <span class="sys-id">SYS.ID: ${sysId}</span>
                <span class="sys-status status-${p.status.toLowerCase()}">STATUS: ${p.status}</span>
            </div>

            <div class="project-image">
                <img src="${p.image}" alt="" loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="image-placeholder-project"><i class="${p.icon}"></i></div>
                <span class="project-scan"></span>
            </div>

            <div class="project-info">
                <h3>
                    <i class="${p.icon}"></i>
                    <span data-i18n="projects.project${p.id}.title">${p.title.tr}</span>
                </h3>
                <p data-i18n="projects.project${p.id}.description">${p.description.tr}</p>
                <div class="project-tech">${chips}</div>
                <div class="project-links">
                    <a href="${p.url}" class="project-link" target="_blank" rel="noopener">
                        <i class="fa-solid fa-code-branch"></i>
                        <span data-i18n="projects.code">Kaynak Kod</span>
                    </a>
                </div>
            </div>
        </article>`;
    }).join('');
}

renderProjects();
