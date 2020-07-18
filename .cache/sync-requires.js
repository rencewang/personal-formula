const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Data/Git/formula-update/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/index.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/project.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/using-typescript.tsx")))
}

