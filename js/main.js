/**
 * Main script: renders data from js/data/*.js and handles interactions.
 *
 * Load order in index.html matters:
 *   1. js/data/recommendations.js
 *   2. js/data/projects.js
 *   3. js/data/team-members.js
 *   4. js/main.js
 */
(function () {
    'use strict';

    const recommendations = window.RECOMMENDATIONS || [];
    const projects = window.PROJECTS || [];
    const teamMembers = window.TEAM_MEMBERS || [];

    // DOM Elements
    const tabLinks = document.querySelectorAll('.tab-btn');
    const pageSections = document.querySelectorAll('.page-section');
    const recommendationsList = document.getElementById('recommendations-list');
    const workGrid = document.getElementById('work-grid');
    const teamGrid = document.getElementById('team-grid');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalScroll = document.getElementById('modal-scroll');
    const modalClose = document.getElementById('modal-close');

    // Item templates
    function recommendationHTML(rec, index) {
        return `
            <div class="recommendation-item" data-id="${rec.id}">
                <div class="recommendation-header" role="button" tabindex="0" aria-expanded="false">
                    <span class="recommendation-number">${String(index + 1).padStart(2, '0')}</span>
                    <span class="recommendation-title">${rec.title}</span>
                    <div class="recommendation-toggle">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="recommendation-content">
                    <div class="recommendation-detail">${rec.content}</div>
                </div>
            </div>`;
    }

    function projectCardHTML(proj) {
        return `
            <article class="work-card" data-id="${proj.id}">
                <div class="work-card-image">
                    <img src="${proj.image}" alt="${proj.title}" loading="lazy">
                </div>
                <div class="work-card-content">
                    <h3 class="work-card-title">${proj.title}</h3>
                    <p class="work-card-description">${proj.shortDesc}</p>
                </div>
            </article>`;
    }

    function memberCardHTML(member) {
        return `
            <article class="member-card" data-id="${member.id}">
                <div class="member-card-image">
                    <img src="${member.image}" alt="${member.name}" loading="lazy">
                </div>
                <div class="member-card-content">
                    <h3 class="member-card-name">${member.name}</h3>
                    <p class="member-card-role">${member.role}</p>
                </div>
            </article>`;
    }

    // Pagination
    const SECTIONS = {
        recommendations: {
            data: recommendations,
            pageSize: 4,
            container: recommendationsList,
            pagination: document.getElementById('recommendations-pagination'),
            render: recommendationHTML
        },
        projects: {
            data: projects,
            pageSize: 6,
            container: workGrid,
            pagination: document.getElementById('projects-pagination'),
            render: projectCardHTML
        },
        members: {
            data: teamMembers,
            pageSize: 8,
            container: teamGrid,
            pagination: document.getElementById('team-pagination'),
            render: memberCardHTML
        }
    };

    const currentPages = { recommendations: 1, projects: 1, members: 1 };

    function totalPagesOf(cfg) {
        return Math.max(1, Math.ceil(cfg.data.length / cfg.pageSize));
    }

    function renderSection(key) {
        const cfg = SECTIONS[key];
        const totalPages = totalPagesOf(cfg);
        currentPages[key] = Math.min(Math.max(currentPages[key], 1), totalPages);
        const page = currentPages[key];
        const start = (page - 1) * cfg.pageSize;
        const items = cfg.data.slice(start, start + cfg.pageSize);

        cfg.container.innerHTML = items
            .map((item, i) => cfg.render(item, start + i))
            .join('');

        cfg.pagination.innerHTML = paginationHTML(key, page, totalPages);
    }

    /**
     * Windowed page list: always shows first, last, and current ± 2,
     * with '…' marking gaps. Small totals show every page.
     */
    function pageNumbers(page, totalPages) {
        if (totalPages <= 7) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        const pages = new Set([1, totalPages]);
        for (let i = page - 2; i <= page + 2; i++) {
            if (i >= 1 && i <= totalPages) pages.add(i);
        }
        const sorted = [...pages].sort((a, b) => a - b);
        const result = [];
        let prev = 0;
        for (const p of sorted) {
            if (p - prev === 2) result.push(prev + 1);
            else if (p - prev > 2) result.push('…');
            result.push(p);
            prev = p;
        }
        return result;
    }

    function paginationHTML(key, page, totalPages) {
        if (totalPages <= 1) return '';

        let html = `<button class="page-btn" data-key="${key}" data-action="prev" aria-label="Previous page" ${page === 1 ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>`;

        pageNumbers(page, totalPages).forEach(p => {
            if (p === '…') {
                html += `<span class="page-ellipsis" aria-hidden="true">&hellip;</span>`;
            } else {
                html += `<button class="page-btn${p === page ? ' active' : ''}" data-key="${key}" data-page="${p}" ${p === page ? 'aria-current="page"' : ''}>${p}</button>`;
            }
        });

        html += `<button class="page-btn" data-key="${key}" data-action="next" aria-label="Next page" ${page === totalPages ? 'disabled' : ''}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>`;

        return html;
    }

    function handlePaginationClick(e) {
        const btn = e.target.closest('.page-btn');
        if (!btn || btn.disabled) return;

        const key = btn.dataset.key;
        const cfg = SECTIONS[key];
        if (!cfg) return;

        if (btn.dataset.action === 'prev') currentPages[key]--;
        else if (btn.dataset.action === 'next') currentPages[key]++;
        else currentPages[key] = parseInt(btn.dataset.page, 10);

        renderSection(key);

        // Scroll back to this sub-section's heading
        const anchor = cfg.container.previousElementSibling;
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function toggleRecommendation(header) {
        const expanded = header.parentElement.classList.toggle('expanded');
        header.setAttribute('aria-expanded', expanded);
    }

    // Tabs (anchor links with smooth scroll + scroll spy)
    function setActiveTab(tabName) {
        tabLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.tab === tabName);
        });
    }

    function updateActiveTabOnScroll() {
        const offset = 160;
        let current = pageSections[0] && pageSections[0].id;
        pageSections.forEach(section => {
            if (section.getBoundingClientRect().top - offset <= 0) {
                current = section.id;
            }
        });
        if (current) setActiveTab(current);
    }

    // Modal
    function youtubeId(url) {
        if (!url) return '';
        const id = url.trim().match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
        if (id) return id[1];
        return /^[A-Za-z0-9_-]{11}$/.test(url.trim()) ? url.trim() : '';
    }

    // Only the first <h3> section (Project Overview) is shown under the video
    function firstSection(html) {
        if (!html) return '';
        const start = html.search(/<h3[\s>]/i);
        const section = start === -1 ? html : html.slice(start);
        const next = section.toLowerCase().indexOf('<h3', 4);
        const excerpt = (next === -1 ? section : section.slice(0, next)).trim();
        return excerpt || html.trim();
    }

    function openModal(type, id) {
        const isProject = type === 'project';
        const data = isProject
            ? projects.find(p => p.id === id)
            : teamMembers.find(m => m.id === id);

        if (!data) return;

        const label = data.title || data.name;
        const badge = isProject ? 'Project' : 'Team Member';
        const videoId = isProject ? youtubeId(data.video) : '';

        let hero;
        if (videoId) {
            hero = `
                <div class="modal-video-header">
                    <span class="modal-badge">${badge}</span>
                    <h2 class="modal-hero-title" id="modal-title">${label}</h2>
                </div>
                <div class="modal-video">
                    <div class="modal-video-frame">
                        <iframe src="https://www.youtube.com/embed/${videoId}" title="${label}"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>`;
        } else if (data.image && isProject) {
            hero = `
                <div class="modal-hero">
                    <img src="${data.image}" alt="${label}">
                    <div class="modal-hero-overlay">
                        <span class="modal-badge">${badge}</span>
                        <h2 class="modal-hero-title" id="modal-title">${label}</h2>
                    </div>
                </div>`;
        } else if (data.image) {
            hero = `
                <div class="modal-hero modal-hero--member">
                    <img class="modal-avatar" src="${data.image}" alt="${label}">
                    <span class="modal-badge">${badge}</span>
                    <h2 class="modal-hero-title" id="modal-title">${label}</h2>
                    <p class="modal-hero-role">${data.role || ''}</p>
                </div>`;
        } else {
            hero = `
                <div class="modal-simple-header">
                    <span class="modal-badge">${badge}</span>
                    <h2 class="modal-hero-title" id="modal-title">${label}</h2>
                </div>`;
        }

        const content = videoId
            ? firstSection(data.fullContent)
            : (data.fullContent || data.bio);

        modalScroll.innerHTML = hero + (content ? `<div class="modal-body">${content}</div>` : '');
        modalScroll.scrollTop = 0;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        modalClose.focus();
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Events
    function setupEventListeners() {
        tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                setActiveTab(link.dataset.tab);
            });
        });

        window.addEventListener('scroll', updateActiveTabOnScroll, { passive: true });

        recommendationsList.addEventListener('click', (e) => {
            const header = e.target.closest('.recommendation-header');
            if (header) toggleRecommendation(header);
        });

        recommendationsList.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const header = e.target.closest('.recommendation-header');
            if (header) {
                e.preventDefault();
                toggleRecommendation(header);
            }
        });

        workGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.work-card');
            if (card) openModal('project', card.dataset.id);
        });

        teamGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.member-card');
            if (card) openModal('member', card.dataset.id);
        });

        Object.keys(SECTIONS).forEach(key => {
            SECTIONS[key].pagination.addEventListener('click', handlePaginationClick);
        });

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    // Initialize
    function init() {
        Object.keys(SECTIONS).forEach(renderSection);
        setupEventListeners();
    }

    document.addEventListener('DOMContentLoaded', init);
})();
