const mediumUrl = "https://medium.com/@ramachiranjeevi123";

export default function ArticlesPage() {
  return (
    <main className="blog-page">
      <nav className="nav shell">
        <a className="brand" href="/">RC<span>.</span></a>
        <div className="navlinks">
          <a href="/#about">About</a><a href="/#experience">Experience</a><a href="/#education">Education</a>
          <a href="/#projects">Projects</a><a href="/articles">Articles</a>
          <a href="/#contact">Contact</a><a href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
        </div>
        <a className="navbutton" href={mediumUrl} target="_blank" rel="noreferrer">Medium ↗</a>
      </nav>
      <section className="section shell blog-hero">
        <div className="section-label">ARTICLES / WRITING / PERSPECTIVES</div>
        <h1>Ideas worth <span>sharing.</span></h1>
        <p>Articles and reflections by Rama Chiranjeevi on engineering, automotive technology, applied AI, digital transformation, learning and career growth.</p>
        <div className="blog-placeholder">
          <span>MY MEDIUM PUBLICATION</span>
          <h2>Read my articles on Medium.</h2>
          <p>This page connects your personal website to your Medium publication. Visitors can open your Medium profile and read the latest articles there.</p>
          <a href={mediumUrl} target="_blank" rel="noreferrer">Visit Medium profile ↗</a>
        </div>
        <div className="blog-placeholder">
          <span>FEATURED PUBLICATION</span>
          <h2>How does “Compound Effect” work in our Life?</h2>
          <p>This article is listed in the LinkedIn profile PDF you shared. Open your Medium profile to locate the publication.</p>
          <a href={mediumUrl} target="_blank" rel="noreferrer">Find this article on Medium ↗</a>
        </div>
        <p className="article-note">This first version links directly to Medium. Automatic article synchronization and embedded previews can be added in a later iteration.</p>
      </section>
      <footer className="footer shell"><a className="brand" href="/">RC<span>.</span></a><span>© {new Date().getFullYear()} Rama Chiranjeevi</span><a href="/">PORTFOLIO HOME ↑</a></footer>
    </main>
  );
}
