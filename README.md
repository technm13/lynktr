# Lynktr

A tiny, modern, themeable links page that can be hosted for free with GitHub Pages.

Lynktr is intentionally built with plain HTML, CSS, and JavaScript. There is no build step, package manager, analytics, tracking, or external font dependency.

## Make it yours

Most changes happen in [`config.js`](config.js). Edit the profile, links, social accounts, and available themes there:

```js
window.LYNKTR_CONFIG = {
  site: {
    linkStyle: "soft",
  },
  profile: {
    name: "Your name",
    handle: "@yourname",
    bio: "A short description.",
    avatar: "assets/avatar.svg",
  },
  links: [
    {
      title: "Project name",
      description: "One sentence about it.",
      url: "https://example.com",
      icon: "sparkles",
      badge: "New",
    },
  ],
};
```

Every field is optional except a link's `title` and `url`. Leave `profile.name` empty (`name: ""`) to hide the profile heading completely. Remove `description`, `badge`, or `icon` when you do not need them. Set `featured: true` to give a link extra emphasis. Links can also be grouped with a `group` value.

### Link-card styles

Set `site.linkStyle` once to style every link card:

| Value | Look |
| --- | --- |
| `soft` | Soft surface, rounded corners, and subtle border (default) |
| `outline` | Transparent card with a crisp border and tighter corners |
| `minimal` | Borderless and background-free until hover |
| `pill` | Fully rounded capsule cards |
| `glass` | Translucent layered surface with extra blur |
| `offset` | Graphic card with square corners and an offset accent shadow |

An individual link can override the global choice:

```js
{
  title: "A special project",
  url: "https://example.com",
  style: "offset",
}
```

### Icon reference

Set a link's `icon` to any name below. Unknown names fall back to `arrow`.

| Name | Appearance / suggested use |
| --- | --- |
| `arrow` | North-east arrow; generic or external link |
| `book` | Open book; articles, docs, or writing |
| `code` | Code brackets; software and repositories |
| `github` | GitHub mark |
| `globe` / `website` | Globe; websites and landing pages |
| `heart` | Heart; support, donations, or favorites |
| `mail` / `email` | Envelope; contact and newsletters |
| `play` | Play button; video and media |
| `sparkles` | Sparkle; new or featured work |
| `star` | Star; highlights and favorites |
| `bluesky` | Bluesky mark |
| `instagram` | Instagram mark |
| `linkedin` | LinkedIn mark |
| `mastodon` | Mastodon mark |
| `x` | X mark |
| `youtube` | YouTube mark |

The same icon names work for both project links and social links.

### Avatar

The current profile uses `assets/technm-logo.png`. Replace that file with your own PNG, or change the `avatar` path in `config.js` to use a JPEG, WebP, or SVG. A square image of at least 256×256 pixels works best, but the layout also handles rectangular marks with built-in padding.

### Themes

Seven themes are included: **Neon**, **Midnight**, **Graphite**, **Ocean**, **Dawn**, **Forest**, and **Paper**. Visitors can switch themes from the button in the upper-right corner, and their choice is saved locally in their browser.

To set the initial theme, change `defaultTheme` in `config.js`. To make fewer themes available, remove names from `enabledThemes`. Theme colors and styling live near the top of [`styles.css`](styles.css).

## Preview locally

You can open `index.html` directly, but a tiny local server gives the most accurate preview:

```sh
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deploy to GitHub Pages

The included workflow deploys the site whenever a commit lands on `main`.

1. Fork this repository, or create a new repository from it.
2. Edit `config.js` and replace the avatar if desired.
3. Commit and push your changes to `main`.
4. In the repository on GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Open the **Actions** tab and wait for the “Deploy to GitHub Pages” workflow to finish.

Your page will be available at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. GitHub Pages can also use a custom domain; configure that under the same Pages settings.

## Project structure

```text
.
├── .github/workflows/deploy-pages.yml  # GitHub Pages deployment
├── assets/technm-logo.png              # Current profile image
├── app.js                              # Rendering and theme behavior
├── config.js                           # Your content and site settings
├── index.html                          # Accessible page structure
└── styles.css                          # Layout and theme definitions
```

## License

[MIT](LICENSE) — use it, change it, and make it your own.
