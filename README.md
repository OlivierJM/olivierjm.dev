# nina

**nina** is a minimal static site generator powered by [Eta](https://eta.js.org/) templates and styled with [Pico.css](https://picocss.com/). It converts your Markdown files into clean, responsive HTML pages—perfect for just simple(e) blogs. This is not meant for documentation as there are many features that nina doesnt support.

My initial plan was to keep this dependency free but I didn't want to deal with styling individual elements and I also preferred to use eta to make it easy to customize templates. I plan to add support for external templates or themes. 

---

## Features

- 📝 Converts Markdown to HTML
- 🎨 Supports layout templates using Eta(feel free to add yours in templates/)
- 📁 Auto-discovers nested content, we recursively build children directories & their files
- 🚀 Builds a complete site with an index and individual post pages
- 🌐 Uses Pico.css for beautiful defaults
- 🗂️ Copies static assets to the final build

---

## Project Structure

```bash
nina/  
├── content/      # markdown articles   
├── public/       
├── templates/    # Eta templates check https://eta.js.org/docs  
│   ├── layouts/   
│   │   ├── layout.eta  # The main layout   
│   │   └── post.eta    # post layout   
│   └── partials/   
│       └── header.eta    
├── site.json     # Site config (title, author, baseUrl, etc.)   
├── dist/         # Auto-generated output folder (after we run build)   
├── index.js      
├── package.json   
└── README.md   
```
---

## Configuration

Create a `site.json` file in the root:

```json
{
  "title": "Blog",
  "description": "blog for my thoughts built with nina",
  "author": "John",
  "baseUrl": "/",
  "github": "https://github.com/username_or_repo", // This is not required
  "username": "username" 
}
```

---

## How to Use this repo

1.  **Clone the repo**

> It is better if you first fork this repo 

    ```bash
    git clone [https://github.com/olivierjm/nina](https://github.com/olivierjm/nina)
    cd nina
    ```

2.  **Add content**

    Create Markdown files inside the `content/` directory. Use YAML front matter for metadata:

    ```markdown
    ---
    title: "First article"
    date: "2025-04-25"
    author: "JM" -- If this is not provided then global author from site.json will be used
    ---

    This is my first blog post!
    ```

3.  **Run the build script**

    ```bash
    node index.js
    ```

    This will:

    - Parse markdown content
    - Render each post using `templates/layouts/post.eta`
    - Render the homepage using `templates/layouts/home.eta`
    - Output HTML files to the `dist/` directory

4.  **View your site**

    Open `dist/index.html` in a browser or serve it locally

    ```bash
    npx serve dist
    ```
Note:  
We export the following variables that can currently be in either post or layout, also checkout the partials inside `templates/partials` directory, With the following list, you can go ahead and create your own theme or nina started based on these, You would just need to change how the `layout.eta` and `post.eta` are structured to provide your own custom layout. 

    - `title` ==> This is the main title of the article, if not provided we fallback to the site title from the config,  
    - `siteTitle` ==> This is more of a subtitle for the site, it comes from the config,  
    - `description` ==> Description of the site, also comes from the config,  
    - `year` ==> This is the year that the article was published,   
    - `username` ==> This is the github username, it comes from the config,  
    - `author` ==> This is the article/blog author, it should be provided in the blog article markdown,   
    - `baseUrl` ==> we default to /,   
    - `date` ==> date the article was published,  
    - `content` ==> This is the main content of the article, formatted in markdown but exported in html,   
    - `backLink` ==> This is the link to route back to from each generated post,   
 
Note that some of the variables above may differ based on whether they are used from the home page or an individual post.  



