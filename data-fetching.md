The main feature of Next regards data fetching. 

Next allow fetching data and rendering HTML on the server. The benefit: end user gets rendered content quickly, and it can be searched reliably crawled by search bots and social media link bots.

There are 2 main options:

Static Generation (SSG) and Server Side Rendering (SSR)

Static generation, aka pre-rendering: render all pages at build time. High performance delivery from CDN.

Drawbacks: data may become stale, and it is hard to scale to many pages. So ideal use would be an app with no so many pages and not updated super often. eg: a blog.