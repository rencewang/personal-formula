

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": (preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/404.js"))),
  "component---src-pages-blog-js": (preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/blog.js"))),
  "component---src-pages-index-js": (preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/index.js"))),
  "component---src-pages-project-js": (preferDefault(require("/Volumes/Data/Git/formula-update/src/pages/project.js"))),
  "component---src-templates-art-js": (preferDefault(require("/Volumes/Data/Git/formula-update/src/templates/art.js"))),
  "component---src-templates-blog-post-js": (preferDefault(require("/Volumes/Data/Git/formula-update/src/templates/blogPost.js"))),
  "component---src-templates-project-post-js": (preferDefault(require("/Volumes/Data/Git/formula-update/src/templates/projectPost.js")))
}

