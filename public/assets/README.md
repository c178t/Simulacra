# Local Asset Folders

Place production image assets here. Files in `public` are served from the site root.

Recommended paths:

- Logo: `/assets/logo/simulacra-logo.png`
- Film card cover: `/assets/films/<film-slug>/cover.jpg`
- Film detail wide image: `/assets/films/<film-slug>/hero.jpg`
- Director image: `/assets/films/<film-slug>/director.jpg`

Current film slugs:

- `cortex`
- `quant`
- `aelf`
- `meeton`
- `nexus`
- `solitude-protocol`
- `afterimage-loop`
- `the-ninth-render`

Use `.jpg`, `.png`, or `.webp`.

The app is wired to these exact paths. If a file is missing, the site falls back to the generated placeholder artwork.
