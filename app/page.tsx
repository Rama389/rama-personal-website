const experience = [
  {
    company: "ZF Group", role: "Technical Specialist", period: "Oct 2024 – Aug 2026",
    location: "Hyderabad, India",
    detail: "Performed durability analysis across the complete steering portfolio, including control arms, knuckles, Hand Wheel Actuators (HWA), tie rods and related components. Also contributed to the initial design of a convergence troubleshooting tool using the Model Context Protocol (MCP)."
  },
  {
    company: "Mercedes-Benz Research and Development India", role: "CAE Analyst", period: "Jul 2021 – Jul 2024",
    location: "Bengaluru, India",
    detail: "Pre-development analysis of radial- and axial-flux e-motors; structural and modal analysis of rotor, stator, shaft and spline; stator optimization using OptiStruct; Python automation of e-motor simulation analysis; press-fit analysis and torque-retention calculations."
  },
  {
    company: "Tata Consultancy Services", role: "System Engineer", period: "Oct 2019 – Jul 2021",
    location: "India",
    detail: "FEA-based structural sealing analysis of transmission components, including valve-body structures, O-ring cross-sections and PIP sealing with gasket modelling. Evaluated contact pressure, maximum pressure and nominal strain against BoD criteria."
  },
  {
    company: "General Motors", role: "Senior Engineer – Transmission External Structures", period: "Sep 2019 – Oct 2019",
    location: "Bengaluru, India",
    detail: "Worked on transmission external components, including mount-load analysis across AWD and 2WD transmissions; evaluated stress and displacement."
  },
  {
    company: "General Motors", role: "Senior Engineer – Transmission Sub-Systems", period: "Feb 2018 – Aug 2019",
    location: "Bengaluru, India",
    detail: "Worked on automatic-transmission sub-systems including 3D clutch-pack structural analysis, dam analysis, snap-ring designs and one-way clutch components; evaluated results against BoD criteria."
  },
  {
    company: "General Motors", role: "Project Trainee", period: "Aug 2017 – Jan 2018",
    location: "Bengaluru, India",
    detail: "Trained in HyperMesh, SimLab and Abaqus pre- and post-processing, including Abaqus fundamentals and convergence."
  },
 ];

const internships = [
  {
    company: "KLVIN", role: "Industrial IoT Intern", period: "Mar 2026 – May 2026", location: "Hyderabad, India", logo: "/logos/klvin.png", logoAlt: "KLVIN logo",
    detail: "Analysed multivariate time-series sensor data from operating motors under varying loads using applied machine learning and time-series analytics. Detected early degradation patterns in motors and calculated Remaining Useful Life (RUL), delivering interpretable insights for maintenance teams."
  },
  {
    company: "Nuclear Fuel Complex (NFC), Department of Atomic Energy", role: "Project Intern", period: "Nov 2013 – Apr 2014",
    location: "Hyderabad, India", logo: "/logos/nfc.jpg", logoAlt: "Nuclear Fuel Complex logo",
    detail: "Studied the effect of coolant tubes in a zirconium-alloy furnace, including heat absorption, flow rate, temperature change and temperature distribution."
  }
];

const projects = [
  {
    no: "01", type: "E-MOBILITY · CAE",
    title: "E-motor structural and modal analysis",
    text: "Pre-development simulation work on radial- and axial-flux motors, including rotor, stator, shaft and spline considerations, modal characteristics and structural response.",
    tags: ["Abaqus", "OptiStruct", "Modal Analysis"]
  },
  {
    no: "02", type: "ENGINEERING AUTOMATION",
    title: "Python automation for e-motor simulations",
    text: "Automation of e-motor simulation analysis using Python scripting, as described in the Mercedes-Benz R&D experience section.",
    tags: ["Python", "CAE Automation", "Simulation"]
  },
  {
    no: "03", type: "TRANSMISSION ENGINEERING",
    title: "Structural sealing and clutch-pack analysis",
    text: "FEA work across valve-body structures, O-rings, PIP sealing, gasket modelling and automatic-transmission sub-systems.",
    tags: ["FEA", "Sealing", "Transmission"]
  }
];

const skills = ["CAE Simulation", "Structural Analysis", "Modal Analysis", "Abaqus", "HyperMesh", "SimLab", "OptiStruct", "Python Scripting", "Forecasting", "Statistical Modelling", "Supervised Learning", "Agentic AI", "LLMs", "MLOps", "Digital Transformation"];

const featuredIsbProjects = [
  {
    "category": "DIGITAL TWIN",
    "title": "Digital Twin for Automotive Systems using Knowledge Graphs",
    "description": "Designed a conceptual digital twin prototype for a mid-sized vehicle, modeling mechanical, electrical, electronic and software systems as a knowledge graph. Connected components and interactions to explore system-level behavior and performance metrics."
  },
  {
    "category": "MCP · ENGINEERING AI",
    "title": "AI-Powered FEA Convergence Troubleshooting Tool using LLM & MCP",
    "description": "Developed an intelligent Abaqus convergence troubleshooting workflow using a Hugging Face LLM and MCP-based knowledge retrieval. Includes a Streamlit interface for .inp, .msg and .sta files, parsing of simulation diagnostics, and contextual recommendations."
  },
  {
    "category": "MLOps · DEPLOYMENT",
    "title": "End-to-End MLOps Pipeline for Targeted Bank Marketing",
    "description": "Built a customer-conversion prediction workflow spanning EDA, model training, Docker containerization, REST API development with FastAPI/Flask, and AWS EC2 deployment."
  },
  {
    "category": "NLP · LLM",
    "title": "AI-Powered Knowledge Retrieval System using RAG (LLaMA 3)",
    "description": "Created a domain-specific question-answering system using LLaMA 3 and LlamaIndex, with Top-K retrieval experiments, Jaccard similarity evaluation and traceability to retrieved source documents."
  },
  {
    "category": "NLP · TEXT-TO-SQL",
    "title": "AI-Driven Sports Analytics using Text-to-SQL (LLaMA 3)",
    "description": "Built a natural-language query workflow for structured cricket data, automating web scraping, database creation, SQL generation and match-insight extraction."
  },
  {
    "category": "COMPUTER VISION",
    "title": "Image Classification using Transfer Learning (ResNet, DenseNet, VGG)",
    "description": "Built a 15-class image classifier using transfer learning across ResNet, DenseNet and VGG architectures; the document reports up to 97% accuracy."
  },
  {
    "category": "DEEP LEARNING · MEDICAL AI",
    "title": "AI-Based Medical Image Segmentation with Performance Evaluation",
    "description": "Designed a U-Net segmentation solution with a residual backbone, including preprocessing, tiling, training and evaluation using precision, recall and IoU."
  },
  {
    "category": "PREDICTIVE ANALYTICS",
    "title": "Customer Churn & Survival Analysis using Advanced Statistical Modeling",
    "description": "Combined churn modeling with Logistic Regression and Discriminant Analysis, value-based segmentation, Kaplan–Meier analysis, Cox hazard modeling and Poisson regression."
  },
  {
    "category": "FORECASTING",
    "title": "Time Series Forecasting of NIFTY 50 Index using ARIMA & Smoothing Models",
    "description": "Compared moving average, exponential smoothing, Holt trend and ARIMA models on five years of NIFTY 50 data. The project document reports ARIMA as the best-performing model, with MAPE 0.442."
  },
  {
    "category": "RECOMMENDER SYSTEMS",
    "title": "Building Movie Recommendation System based on user ratings",
    "description": "Used the MovieLens 100K dataset and PySpark to generate recommendations through co-rated movie pairs, similarity computation, filtering and ranking."
  }
];

const projectArchive = [
  {
    "term": "Foundation Term",
    "items": [
      "Web Scraping of .html page",
      "Text Processing & Word cloud visualization",
      "Sentiment Analysis on 1000 quotes & Visualization",
      "Sentiment Analysis on Online Reviews",
      "Exploratory Data Analysis of IoT Sensor Data for Occupancy Insights",
      "Project on Airlines",
      "Data Visualization of Avacado dataset",
      "Probabilities theory"
    ]
  },
  {
    "term": "Term - 1",
    "items": [
      "Data Layer Strategy for Duolingo",
      "Classification of an ecommerce data using Spark Core",
      "Classification of Large Olympics Data using Spark SQL",
      "Building Movie Recommendation System based on user ratings",
      "Statistical Analysis on performance of SSSBE and SSI Electricity Board data",
      "Strategic Decision-Making Under Uncertainty – Merton Truck Company",
      "Optimization of Operating time for an product mix company",
      "Optimization of number of Hub Locations for a Packers & Movers company",
      "Customer Behavior Segmentation for Mall of Asia using machine learning techniques",
      "Sectorial Segmentation for a 40 pharm companies based on Financial Balance sheet using Clustering Techniques"
    ]
  },
  {
    "term": "Term - 2",
    "items": [
      "End-to-End MLOps Pipeline for Targeted Bank Marketing (Docker & AWS Deployment)",
      "Econometric Analysis of the Impact of IQ on Employee Wages",
      "Detecting Anomalies in Sectoral Stock Price Movements (NSE)",
      "Genre-Specific Movie Ranking using PageRank Algorithm",
      "Did you forget recommendation system",
      "Multi-Class Dimensionality Reduction & Separability Analysis using PCA, Fisher LDA, and MDS",
      "Hyperparameter Tuning of KNN and Parzen Classifiers using Fisher LDA",
      "Comparative Analysis of Perceptron and Logistic Regression",
      "Decision Tree Hyperparameter Tuning & Rule Extraction"
    ]
  },
  {
    "term": "Term-3",
    "items": [
      "Customer Churn & Survival Analysis using Advanced Statistical Modeling",
      "Digital Twin: Automotive",
      "Time Series Forecasting of NIFTY 50 Index using ARIMA & Smoothing Models",
      "Random Forest Hyperparameter Exploration for Binary Classification",
      "SVM Hyperparameter Analysis & Model Performance Optimization",
      "Neural Network Architecture Optimization for Multi-Class Classification",
      "End-to-End Neural Network Training Using Gradient Descent",
      "Customer Churn Prediction Using Deep Neural Networks",
      "Spam Detection Using Recurrent Neural Networks (RNN/LSTM) for NLP",
      "Image Classification Using Transfer Learning with CNN Architectures (VGG16/ResNet)"
    ]
  },
  {
    "term": "Term - 4",
    "items": [
      "Sentiment Intelligence using Fine-Tuned BERT (5-Class Classification)",
      "AI-Powered Knowledge Retrieval System using RAG (LLaMA 3)",
      "AI-Driven Sports Analytics using Text-to-SQL (LLaMA 3)",
      "FunFlix: Go-to-Market Strategy for a Kids EdTech OTT Platform",
      "Image Classification using Transfer Learning (ResNet, DenseNet, VGG)",
      "AI-Based Medical Image Segmentation with Performance Evaluation",
      "AI-Based Object Detection System using Faster R-CNN"
    ]
  },
  {
    "term": "Digital Twin",
    "items": [
      "Digital Twin for Automotive Systems using Knowledge Graphs"
    ]
  },
  {
    "term": "MCP Project",
    "items": [
      "AI-Powered FEA Convergence Troubleshooting Tool using LLM & MCP"
    ]
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#home">RC<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#projects">Projects</a><a href="/articles">Articles</a><a href="#contact">Contact</a><a href="/resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
        </div>
        <a className="navbutton" href="/resume.pdf" download="Rama_Chiranjeevi_Resume.pdf">Resume ↓</a>
      </nav>

      <section className="hero shell" id="home">
        <div className="kicker"><i /> ENGINEERING R&amp;D / APPLIED AI / DIGITAL TRANSFORMATION</div>
        <div className="hero-grid">
          <div>
            <p className="overline">PERSONAL PORTFOLIO</p>
            <h1>Engineering insight.<br /><em>Intelligent</em> possibilities.</h1>
            <p className="lead">I&apos;m Rama Chiranjeevi — an engineering R&amp;D professional with 9 years of experience across automotive product development, CAE simulation, durability analysis and engineering automation, now building on that foundation through applied AI and digital transformation.</p>
            <div className="actions"><a className="primary" href="/resume.pdf" download="Rama_Chiranjeevi_Resume.pdf">Download Resume <b>↓</b></a><a className="secondary" href="#projects">Explore selected work ↗</a></div>
          </div>
          <div className="hero-art" aria-label="Professional profile photograph">
            <div className="portrait-frame">
              <img src="/profile-photo.jpg" alt="Rama Chiranjeevi" className="profile-photo" />
            </div>
            <div className="portrait-caption">ENGINEERING × AI</div>
          </div>
        </div>
        <div className="hero-foot"><span>BASED IN INDIA</span><span>MECHANICAL ENGINEERING → ENERGY ENGINEERING → APPLIED AI</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="section shell" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="two-col">
          <h2>Grounded in engineering.<br /><span>Curious about what&apos;s next.</span></h2>
          <div className="body-copy">
            <p>I enjoy working at the intersection of engineering problem-solving, analytical thinking and technology. My 9 years of professional experience span automotive CAE and product development, including steering durability, transmission components, structural sealing systems and e-motor analysis.</p>
            <p>Alongside this engineering foundation, I have pursued learning in artificial intelligence, machine learning and digital transformation. I&apos;m particularly interested in how emerging AI capabilities can support engineering workflows, automation and industrial innovation.</p>
            <p>This website is a working record of my professional journey, selected projects and ideas I want to share.</p>
          </div>
        </div>
        <div className="facts">
          <div><strong>9 Years</strong><span>Automotive product development &amp; R&amp;D</span></div>
          <div><strong>Simulation</strong><span>Structural, modal &amp; sealing analysis</span></div>
          <div><strong>Applied AI</strong><span>ML, LLMs &amp; automation interests</span></div>
        </div>
      </section>

      <section className="dark-band">
        <div className="section shell" id="experience">
          <div className="section-label">02 / PROFESSIONAL JOURNEY</div>
          <div className="section-head"><h2>Experience that<br /><span>builds perspective.</span></h2><p>Roles and responsibilities transcribed and condensed from the LinkedIn profile PDF.</p></div>
          <div className="timeline">
            {experience.map((item, i) => <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div className="timeline-index">{String(i + 1).padStart(2, "0")}</div>
              <div className="timeline-main"><div className="timeline-top"><span>{item.period}</span><span>{item.location}</span></div><div className="company-heading">{item.company.includes("ZF") ? <img className="company-logo zf-logo" src="/logos/zf.png" alt="ZF logo" /> : item.company.includes("Mercedes") ? <img className="company-logo mercedes-logo" src="/logos/mercedes.jpg" alt="Mercedes-Benz logo" /> : item.company.includes("General Motors") ? <img className="company-logo gm-logo" src="/logos/gm.jpg" alt="General Motors logo" /> : item.company.includes("Tata") ? <img className="company-logo tcs-logo" src="/logos/tcs.jpg" alt="Tata Consultancy Services logo" /> : <span className="company-no-logo" aria-hidden="true">NFC</span>}<div><h3>{item.role}</h3><h4>{item.company}</h4></div></div><p>{item.detail}</p></div>
            </article>)}
          </div>
          <div className="internships-block">
            <div className="internships-heading"><span className="section-label">INTERNSHIPS</span><p>Applied industry experience through internship assignments.</p></div>
            <div className="timeline internship-timeline">
              {internships.map((item, i) => <article className="timeline-item" key={item.company}>
                <div className="timeline-index">I{i + 1}</div>
                <div className="timeline-main">
                  {(item.period || item.location) && <div className="timeline-top"><span>{item.period}</span><span>{item.location}</span></div>}
                  <div className="company-heading"><img className="company-logo internship-logo" src={item.logo} alt={item.logoAlt} /><div><h3>{item.role}</h3><h4>{item.company}</h4></div></div>
                  <p>{item.detail}</p>
                </div>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-label">03 / SELECTED PROJECT PORTFOLIO</div>
        <div className="section-head"><h2>Applied learning.<br /><span>Built through projects.</span></h2><p>A curated selection of 10 projects spanning automotive engineering, applied AI, machine learning, computer vision, forecasting and MLOps. Each project links to the GitHub project repository.</p></div>
        <div className="project-grid">
          {featuredIsbProjects.map((project, index) => <article className="project" key={project.title}>
            <div className="project-head"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div>
            <div className="project-symbol">{["◉","⌘","⌁","⌕","▤","▧","◌","⌬","↗","◎"][index]}</div>
            <h3>{project.title}</h3><p>{project.description}</p>
            <a className="project-link" href={project.github} target="_blank" rel="noreferrer">View on GitHub ↗</a>
          </article>)}
        </div>
        <div className="github-callout"><div><span className="section-label">FULL PROJECT REPOSITORY</span><h3>Want to explore beyond these featured projects?</h3><p>Browse the complete collection of public code and experiments on GitHub.</p></div><a href="https://github.com/Rama389/AI-Projects" target="_blank" rel="noreferrer">Explore all GitHub projects ↗</a></div>
        <div className="project-archive">
          {projectArchive.map((group) => <details className="archive-group" key={group.term}>
            <summary><span>{group.term}</span><span>{group.items.length} projects</span></summary>
            <ol>{group.items.map((title) => <li key={title}>{title}</li>)}</ol>
          </details>)}
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="section shell">
          <div className="section-label">04 / EDUCATION &amp; RECOGNITION</div>
          <div className="education-list">
            <article className="education-card"><img className="institution-logo isb-logo" src="/logos/isb.png" alt="Indian School of Business logo" /><div><span className="edu-year">2024 – 2026</span><h3>Advanced Management Program, Artificial Intelligence</h3><p>Indian School of Business</p></div></article>
            <article className="education-card"><img className="institution-logo nit-logo" src="/logos/nit-trichy.png" alt="National Institute of Technology Tiruchirappalli official emblem" /><div><span className="edu-year">2015 – 2017</span><h3>M.Tech, Energy Engineering</h3><p>National Institute of Technology, Tiruchirappalli</p></div></article>
            <article className="education-card"><img className="institution-logo gprec-logo" src="/logos/gprec.jpg" alt="G. Pulla Reddy Engineering College logo" /><div><span className="edu-year">2010 – 2014</span><h3>B.Tech, Mechanical Engineering</h3><p>G. Pulla Reddy Engineering College, Kurnool</p></div></article>
          </div>
          <div className="awards-block">
            <div className="section-label">HONORS &amp; AWARDS</div>
            <div className="awards-list">
              <article className="award-card"><strong>Bronze Star — Department Award</strong><p>Mercedes-Benz R&amp;D Centre India · Recognition for digitalization of eMotor systems using automation techniques.</p></article>
              <article className="award-card"><strong>Startup India Award — GGI MBA Scholar</strong><p>Recognition associated with the GGI MBA Scholar program.</p></article>
              <article className="award-card"><strong>Gold Medalist — Graduation, 2014</strong><p>Jawaharlal Nehru Technological University, Anantapur (JNTUA) · B.Tech in Mechanical Engineering.</p></article>
              <article className="award-card"><strong>Merit Student Recognition, 2013</strong><p>AVOPA Educational Society.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="expertise">
        <div className="section-label">05 / AREAS OF INTEREST &amp; SKILLS</div>
        <div className="section-head"><h2>A multidisciplinary<br /><span>toolkit.</span></h2><p>Topics and tools surfaced in the profile headline, skills and experience sections.</p></div>
        <div className="learning-layout"><div className="learning-column"><h3>Core skills &amp; tools</h3><div className="skill-list">{skills.map(s => <div className="skill-row" key={s}>{s}</div>)}</div></div><div className="learning-column certs"><h3>Certifications &amp; learning</h3><div className="cert-list">{["Complete Python Scripting for Automation", "Artificial Intelligence Foundations: Machine Learning", "Digital Transformation and Industry 4.0 Masterclass", "GD&T and Stack-Up", "Electric Vehicle Development"].map(c => <div className="cert-row" key={c}>{c}</div>)}</div></div></div>
      </section>

      <section className="writing">
        <div className="section shell">
          <div className="section-label">06 / WRITING &amp; IDEAS</div>
          <div className="writing-row"><div><h2>Beyond the<br /><span>job title.</span></h2><p>Thoughts on engineering, learning, technology, career and the compounding effect of small ideas.</p></div><div className="writing-card"><span>PERSONAL PUBLICATION</span><h3>How does “Compound Effect” work in our Life?</h3><p>A publication listed on the LinkedIn profile. We can add the full article and more posts in the next iteration.</p><a href="https://medium.com/@ramachiranjeevi123" target="_blank" rel="noreferrer">Read on Medium ↗</a></div></div>
          <a className="blog-link" href="/blog">Explore the blog space <span>↗</span></a>
        </div>
      </section>

      <section className="contact section shell" id="contact">
        <div className="section-label">07 / CONTACT</div>
        <h2>Let&apos;s connect<br /><span>and exchange ideas.</span></h2>
        <p>For conversations around engineering, applied AI, digital transformation and collaboration.</p>
        <div className="contact-links"><a href="https://www.linkedin.com/in/ramachiranjeevi" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Rama389/AI-Projects" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://medium.com/@ramachiranjeevi123" target="_blank" rel="noreferrer">Medium ↗</a></div>
        <small>Contact details are intentionally not displayed publicly in this draft. Add a preferred professional email before launch.</small>
      </section>

      <footer className="footer shell"><a className="brand" href="#home">RC<span>.</span></a><span>© {new Date().getFullYear()} Rama Chiranjeevi</span><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
