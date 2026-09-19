(() => {
  "use strict";

  const config = window.LYNKTR_CONFIG || {};
  const site = config.site || {};
  const profile = config.profile || {};
  const validThemes = ["dawn", "midnight", "forest", "paper", "neon", "graphite", "ocean"];
  const enabledThemes = (site.enabledThemes || validThemes).filter((theme) => validThemes.includes(theme));
  const themes = enabledThemes.length ? enabledThemes : ["dawn"];
  const validLinkStyles = ["soft", "outline", "minimal", "pill", "glass", "offset"];
  const defaultLinkStyle = validLinkStyles.includes(site.linkStyle) ? site.linkStyle : "soft";

  const icons = {
    arrow: '<path d="M5 12 12 5m-6 0h6v6"/>',
    bluesky: '<path d="M7.95 8.43C7.26 7.1 5.38 4.62 3.63 3.42 1.95 2.28 1.3 2.48.87 2.68.38 3.11.38 5.9c0 .54.3 4.55.49 5.2.63 2.18 2.9 2.92 4.82 2.58-3.35.56-4.22 2.4-2.37 4.23 3.51 3.45 5.1-.74 5.5-1.91.07-.22.11-.32.13-.23.02-.09.06.01.13.23.4 1.17 1.99 5.36 5.5 1.91 1.85-1.83.98-3.67-2.37-4.23 1.92.34 4.19-.4 4.82-2.58.19-.65.49-4.66.49-5.2 0-2.79-.49-3.22-.92-3.42-.43-.2-1.08-.4-2.76.74-1.75 1.2-3.63 3.68-4.32 5.01L8.95 9.6l-1-1.17Z" fill="currentColor" stroke="none"/>',
    book: '<path d="M4 3.5h10a2 2 0 0 1 2 2V17H6a2 2 0 0 1-2-2V3.5Z"/><path d="M6 17a2 2 0 0 1 0-4h10M7.5 7h5"/>',
    check: '<path d="m4 10 4 4 8-8"/>',
    code: '<path d="m7 6-4 4 4 4m6-8 4 4-4 4m-2-10L9 16"/>',
    email: '<rect x="2.5" y="4" width="15" height="12" rx="2"/><path d="m3 5 7 6 7-6"/>',
    github: '<path d="M10 1.7a8.5 8.5 0 0 0-2.68 16.57c.43.08.58-.18.58-.41v-1.65c-2.38.52-2.88-1.01-2.88-1.01-.39-.99-.95-1.25-.95-1.25-.78-.53.06-.52.06-.52.86.06 1.31.88 1.31.88.76 1.31 2.01.93 2.5.71.08-.55.3-.93.54-1.14-1.9-.22-3.9-.95-3.9-4.2 0-.93.33-1.69.88-2.28-.09-.22-.38-1.08.08-2.25 0 0 .72-.23 2.34.87A8.14 8.14 0 0 1 10 5.93c.72 0 1.44.1 2.12.29 1.63-1.1 2.34-.87 2.34-.87.47 1.17.17 2.03.09 2.25.54.59.87 1.35.87 2.28 0 3.26-2 3.98-3.91 4.19.31.27.58.79.58 1.6v2.19c0 .23.15.5.59.41A8.5 8.5 0 0 0 10 1.7Z" fill="currentColor" stroke="none"/>',
    globe: '<circle cx="10" cy="10" r="8"/><path d="M2 10h16M10 2a12.5 12.5 0 0 1 0 16m0-16a12.5 12.5 0 0 0 0 16"/>',
    heart: '<path d="M17 4.8a4.2 4.2 0 0 0-6 0L10 5.9 8.9 4.8a4.2 4.2 0 1 0-6 6L10 18l7.1-7.2a4.2 4.2 0 0 0-.1-6Z"/>',
    instagram: '<rect x="2.5" y="2.5" width="15" height="15" rx="4"/><circle cx="10" cy="10" r="3.3"/><circle cx="14.9" cy="5.2" r=".7" fill="currentColor" stroke="none"/>',
    linkedin: '<path d="M5.1 7.5V16M5.1 4.3v.1M9 16v-4.8c0-2.3 3-2.5 3-0.2v5m3.1 0v-5.8c0-4.5-4.9-4.3-6.1-2.1M3 7.5h4.2M3 16h4.2"/>',
    mail: '<rect x="2" y="4" width="16" height="12" rx="2"/><path d="m3 5 7 6 7-6"/>',
    mastodon: '<path d="M17.5 6.3c0-3.5-2.3-4.5-2.3-4.5C12.9.7 7.1.7 4.8 1.8c0 0-2.3 1-2.3 4.5 0 4.2-.2 9.4 3.8 10.5 1.8.5 3.4.6 4.7.5 2.4-.1 3.7-.8 3.7-.8l-.1-1.7s-1.7.5-3.6.4c-1.9-.1-3.9-.2-4.2-2.7v-.7s1.8.4 4.2.5c1.5.1 3-.1 4.5-.3 1.5-.2 2.8-.9 3-3.6.1-2.1 0-2.1 0-2.1ZM7 12V6.8c0-1.1.5-1.7 1.5-1.7 1.1 0 1.6.7 1.6 2v2.8m0 0V7.1c0-1.3.5-2 1.6-2 1 0 1.5.6 1.5 1.7V12"/>',
    play: '<path d="m7 5 8 5-8 5V5Z"/>',
    sparkles: '<path d="m10 2 .8 2.6a5 5 0 0 0 3.3 3.3l2.6.8-2.6.8a5 5 0 0 0-3.3 3.3l-.8 2.6-.8-2.6a5 5 0 0 0-3.3-3.3l-2.6-.8 2.6-.8a5 5 0 0 0 3.3-3.3L10 2Z"/>',
    star: '<path d="m10 2 2.4 5 5.6.7-4.1 3.9L15 17l-5-2.7L5 17l1-5.4-4-3.9L7.6 7 10 2Z"/>',
    website: '<circle cx="10" cy="10" r="8"/><path d="M2 10h16M10 2a12.5 12.5 0 0 1 0 16m0-16a12.5 12.5 0 0 0 0 16"/>',
    x: '<path d="M3 3l14 14M17 3 3 17"/>',
    youtube: '<path d="M18 6.1c-.2-.8-.9-1.5-1.7-1.7C14.8 4 10 4 10 4s-4.8 0-6.3.4c-.8.2-1.5.9-1.7 1.7A16 16 0 0 0 1.6 10c0 1.3.1 2.6.4 3.9.2.8.9 1.5 1.7 1.7 1.5.4 6.3.4 6.3.4s4.8 0 6.3-.4c.8-.2 1.5-.9 1.7-1.7.3-1.3.4-2.6.4-3.9s-.1-2.6-.4-3.9Z"/><path d="m8.4 12.8 4.2-2.8-4.2-2.8v5.6Z"/>',
  };

  const icon = (name, className = "") => `<svg class="${className}" viewBox="0 0 20 20" aria-hidden="true">${icons[name] || icons.arrow}</svg>`;
  const isExternal = (url) => /^https?:\/\//i.test(url || "");
  const safeText = (value) => String(value ?? "");

  function applyMetadata() {
    document.title = site.title || safeText(profile.name).trim() || "Links";
    const description = site.description || profile.bio;
    if (description) {
      document.querySelector('meta[name="description"]').content = description;
      document.querySelector('meta[property="og:description"]').content = description;
    }
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.documentElement.lang = site.language || "en";
  }

  function renderProfile() {
    const profileName = safeText(profile.name).trim();
    const name = document.getElementById("profile-name");
    const section = name.closest(".profile");
    document.getElementById("brand-name").textContent = safeText(site.brand || profileName || "Links");
    name.textContent = profileName;
    name.hidden = !profileName;
    if (profileName) {
      section.setAttribute("aria-labelledby", "profile-name");
      section.removeAttribute("aria-label");
    } else {
      section.removeAttribute("aria-labelledby");
      section.setAttribute("aria-label", "Profile");
    }
    document.getElementById("profile-handle").textContent = safeText(profile.handle || "");
    document.getElementById("profile-handle").hidden = !profile.handle;
    document.getElementById("profile-bio").textContent = safeText(profile.bio || "");
    document.getElementById("profile-bio").hidden = !profile.bio;

    const avatar = document.getElementById("profile-avatar");
    avatar.src = profile.avatar || "assets/technm-logo.png";
    avatar.alt = safeText(profile.avatarAlt || `${profile.name || "Profile"} avatar`);
    avatar.addEventListener("error", () => {
      avatar.hidden = true;
      avatar.parentElement.classList.add("avatar-fallback");
    });
    document.querySelector(".status-dot").hidden = profile.available === false;
  }

  function renderSocials() {
    const container = document.getElementById("socials");
    const socials = Array.isArray(config.socials) ? config.socials : [];
    container.hidden = socials.length === 0;
    socials.forEach((social) => {
      if (!social?.url || !social?.label) return;
      const anchor = document.createElement("a");
      anchor.className = "social-link";
      anchor.href = social.url;
      anchor.setAttribute("aria-label", social.label);
      anchor.title = social.label;
      if (isExternal(social.url)) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }
      anchor.innerHTML = icon(social.icon || "website");
      container.appendChild(anchor);
    });
  }

  function renderLinks() {
    const container = document.getElementById("links");
    const links = (Array.isArray(config.links) ? config.links : []).filter((link) => link?.title && link?.url);
    if (!links.length) {
      container.innerHTML = '<p class="empty-state">Add your first link in config.js</p>';
      return;
    }

    let lastGroup;
    links.forEach((link, index) => {
      const group = link.group || "Links";
      if (group !== lastGroup) {
        const heading = document.createElement("h2");
        heading.className = "group-label";
        heading.textContent = group;
        container.appendChild(heading);
        lastGroup = group;
      }

      const anchor = document.createElement("a");
      const linkStyle = validLinkStyles.includes(link.style) ? link.style : defaultLinkStyle;
      anchor.className = `link-card link-style-${linkStyle}${link.featured ? " featured" : ""}`;
      anchor.href = link.url;
      anchor.style.setProperty("--delay", `${Math.min(index, 8) * 55}ms`);
      if (isExternal(link.url)) {
        anchor.target = "_blank";
        anchor.rel = "noreferrer";
      }

      const iconWrap = document.createElement("span");
      iconWrap.className = "link-icon";
      iconWrap.innerHTML = icon(link.icon || "arrow");
      const copy = document.createElement("span");
      copy.className = "link-copy";
      const titleRow = document.createElement("span");
      titleRow.className = "link-title-row";
      const title = document.createElement("span");
      title.className = "link-title";
      title.textContent = link.title;
      titleRow.appendChild(title);
      if (link.badge) {
        const badge = document.createElement("span");
        badge.className = "link-badge";
        badge.textContent = link.badge;
        titleRow.appendChild(badge);
      }
      copy.appendChild(titleRow);
      if (link.description) {
        const description = document.createElement("span");
        description.className = "link-description";
        description.textContent = link.description;
        copy.appendChild(description);
      }
      const arrow = document.createElement("span");
      arrow.className = "link-arrow";
      arrow.innerHTML = icon("arrow");
      anchor.append(iconWrap, copy, arrow);
      container.appendChild(anchor);
    });
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem("lynktr-theme");
    } catch (_) {
      return null;
    }
  }

  function setTheme(theme, save = true) {
    const nextTheme = themes.includes(theme) ? theme : themes[0];
    document.documentElement.dataset.theme = nextTheme;
    document.getElementById("active-theme").textContent = nextTheme[0].toUpperCase() + nextTheme.slice(1);
    document.querySelector('meta[name="theme-color"]').content = getComputedStyle(document.documentElement).getPropertyValue("--page").trim();
    document.querySelectorAll(".theme-option").forEach((option) => {
      const active = option.dataset.themeValue === nextTheme;
      option.setAttribute("aria-selected", active);
      option.classList.toggle("active", active);
    });
    if (save) {
      try {
        localStorage.setItem("lynktr-theme", nextTheme);
      } catch (_) {
        // Storage can be unavailable in privacy modes; the theme still works.
      }
    }
  }

  function setupThemePicker() {
    const button = document.getElementById("theme-button");
    const menu = document.getElementById("theme-menu");
    const closeMenu = () => {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
    };
    themes.forEach((theme) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "theme-option";
      option.dataset.themeValue = theme;
      option.setAttribute("role", "option");
      option.innerHTML = `<span class="option-swatch ${theme}" aria-hidden="true"></span><span>${theme[0].toUpperCase() + theme.slice(1)}</span>${icon("check", "check-icon")}`;
      option.addEventListener("click", () => {
        setTheme(theme);
        closeMenu();
        button.focus();
      });
      menu.appendChild(option);
    });
    button.addEventListener("click", () => {
      const willOpen = menu.hidden;
      menu.hidden = !willOpen;
      button.setAttribute("aria-expanded", String(willOpen));
      if (willOpen) menu.querySelector('[aria-selected="true"]')?.focus();
    });
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".theme-control")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    setTheme(getStoredTheme() || site.defaultTheme || themes[0], false);
  }

  applyMetadata();
  renderProfile();
  renderSocials();
  renderLinks();
  document.getElementById("footer-text").textContent = safeText(site.footer || "");
  setupThemePicker();
})();
