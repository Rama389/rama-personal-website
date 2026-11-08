export default function BlogPage() {
  return (
    <main className="blog-page">
      <nav className="nav shell"><a className="brand" href="/">RC<span>.</span></a><div className="navlinks"><a href="/#about">About</a><a href="/#projects">Projects</a><a href="/blog">Blog</a><a href="/#contact">Contact</a></div><a className="navbutton" href="/">Back to portfolio ↗</a></nav>
      <section className="section shell blog-hero">
        <div className="section-label">WRITING / NOTES / PERSPECTIVES</div>
        <h1>Ideas in progress<span>.</span></h1>
        <p>This is the home for articles on engineering, applied AI, automotive technology, career reflections and continuous learning. The blog structure is ready; posts will be added after the portfolio draft is reviewed.</p>
        <div className="blog-placeholder"><span>FIRST ARTICLE</span><h2>Coming soon</h2><p>We can bring your existing Medium articles here and create new posts directly on this website.</p><a href="https://medium.com/@ramachiranjeevi123" target="_blank" rel="noreferrer">Visit Medium ↗</a></div>
      </section>
      <footer className="footer shell"><a className="brand" href="/">RC<span>.</span></a><span>© {new Date().getFullYear()} Rama Chiranjeevi</span><a href="/">PORTFOLIO HOME ↑</a></footer>
    </main>
  );
}
