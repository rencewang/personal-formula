// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-js": () => import("./../src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-project-js": () => import("./../src/pages/project.js" /* webpackChunkName: "component---src-pages-project-js" */),
  "component---src-templates-art-js": () => import("./../src/templates/art.js" /* webpackChunkName: "component---src-templates-art-js" */),
  "component---src-templates-blog-post-js": () => import("./../src/templates/blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-project-post-js": () => import("./../src/templates/projectPost.js" /* webpackChunkName: "component---src-templates-project-post-js" */)
}

