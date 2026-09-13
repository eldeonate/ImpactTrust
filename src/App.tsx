import {
  ArrowUpRight,
  ChevronDown,
  CircleCheck,
  Globe2,
  HeartPulse,
  Leaf,
  Mail,
  Menu,
  Phone,
  Shield,
  Sprout,
  Users,
  Wheat,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

const focusAreas = [
  {
    number: '01',
    title: 'Resilience building in fragile areas',
    text: 'Support restoration of livelihoods, food security and nutrition, and climate solutions in areas affected by drought, conflicts or terrorism-induced displacements and floods.',
    icon: Sprout,
  },
  {
    number: '02',
    title: 'Emergency response',
    text: 'Respond to emergency situations of conflicts and disasters with health education, protection, shelter, water and support services.',
    icon: Shield,
  },
  {
    number: '03',
    title: 'Countering violent extremism advocacy',
    text: 'Change the dialogue from violent extremism and hate to peace, social justice, security, reconciliation, and sustainable community rebuilding through inclusive governance, equity and resource sharing.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Climate actions for peace',
    text: 'Build climate resilience from the ground up where climate-smart solutions reverse ecological degradation, boost green livelihoods, nurture thriving peace, and support economic recovery.',
    icon: Leaf,
  },
];

const missionStatements = [
  ['Resilient Futures', 'Empowering communities scarred by violence, conflict, and disaster to rebuild livelihoods, foster peace, and counter extremism through climate-smart solutions and humanitarian care.', HeartPulse],
  ['Peace Through Climate Action', 'Harnessing the power of climate action to heal communities, restore dignity, and create pathways to peace for victims.', Leaf],
  ['Humanity & Harmony', 'Supporting survivors of violence and disaster with MPSS, Health and Education.', Users],
  ['Hope Restored', 'Transforming trauma into strength by supporting victims of conflict and disaster through climate resilience, humanitarian services, and peace building.', Shield],
];

const interventionAreas = [
  { title: 'Peace-building', items: ['People’s safety, dignity, and basic needs', 'Countering Violent Extremism (CVE)', 'Building an informed community', 'Promoting social justice'], icon: Shield },
  { title: 'Civic enlightenment and engagement', items: ['Participatory Democracy', 'Anti-Corruption Campaigns', 'Citizens vigilance'], icon: Users },
  { title: 'Climate action, livelihoods & food security', items: ['Schools and community tree planting', 'Renewable energy projects', 'Climate-smart agriculture', 'Disaster risk reduction', 'Water conservation initiatives', 'Waste management and recycling', 'Climate education and civic enlightenment', 'Livelihood diversification', 'Peace-building through climate projects', 'Humanitarian relief with green solutions', 'Climate-Smart Agriculture', 'Enterprise Development'], icon: Wheat },
  { title: 'Youth digital empowerment & ICT innovation', items: ['Future of Work Readiness', 'Digital Ethics & Information Integrity', 'Data Driven Advocacy'], icon: Globe2 },
  { title: 'Gender-responsive education & protection', items: ['Facilitating school access, enrollment, retention, and completion for young girls in conflict-affected zones', 'Work space ethics and awareness'], icon: HeartPulse },
  { title: 'Evidence-based research & humanitarian support', items: ['Baseline studies, needs assessments, impact assessment, and legislative advocacy', 'WASH, shelter, food, and non-food items', 'Evidence-based policies and interventions', 'Transformational leadership training'], icon: Shield },
];

const programs = [
  {
    title: 'Climate action solutions for sustainable communities',
    text: 'Strengthen climate resilience through livelihood, food security, water and sanitation, education, and community participation initiatives.',
  },
  {
    title: 'Center for Transformational Dialogue',
    text: 'Promote honest conversation between stakeholders and citizens, supported by credible data and active citizenship.',
  },
  {
    title: 'Start-Up Youth & Women Enterprise Initiative',
    text: 'Focus on micro-business incubation and capacity building for women-headed households in high-vulnerability zones.',
  },
  {
    title: 'Children in ICT, Girls & Boys Coding',
    text: 'Establish early coding and digital literacy programs to prepare rural children for future technological opportunities.',
  },
  {
    title: 'Green-Thrust Project',
    text: 'Establish “Climate Ambassadors” in primary and secondary schools who plant and care for trees.',
  },
  {
    title: "Citizen's Vigilance & Public Information Integrity",
    text: 'Train influencers, media groups, and political aides on ethical communication to eliminate hate speech and deepfakes.',
  },
];

const achievements = [
  ['15,000', 'IDPs reached with livelihood support, training, and farmland acquisition'],
  ['12,800', 'IDPs supplied with sweaters, blankets, shoes, blankets, dignity kits, and personal care kits'],
  ['8,000', 'displaced families supported with emergency food'],
  ['2,300', 'youth capacity-built across communities in Borno, Adamawa, Abuja, and Plateau'],
  ['50+', 'hectares of arable farmland secured and cultivated'],
  ['222', 'families benefited from farmland support'],
  ['420', 'young people trained in agribusiness and ICT skills'],
  ['12,000', 'exercise books and stationery distributed'],
];

const impactProjects = [
  ['Sep 2015 – Apr 2026', 'Nasarawa, Adamawa, Plateau State and Cameroon Republic', 'Direct food and non-food items (NFI) relief across Luvu, Masaka, Waru, and Nasarawa; emergency stabilization during ongoing climate impact studies; PSS for victims of mining site disaster and attack; government support advocacy; needs assessment reports.'],
  ['Gwoza LGA, Borno / Damaturu, Yobe', 'NFI distribution to 27 IDP communities in Abuja, Nasarawa, Borno, Adamawa and Yobe states', '143 widows provided with grants and equipment; training in tailoring, backyard animal husbandry, and food processing and sales.'],
  ['Harmattan Season Maiduguri', 'Project Warm-Hearts / Global Arab Teachers College IDP Camp', '12,800 IDPs supplied with sweaters, blankets, shoes, hygiene kits, dignity kits, and personal care kits.'],
  ['Citizen Vigilance Drive', 'Youth training on participatory democracy, vigilance, and demanding leadership accountability', '2,300 youths capacity-built across communities in Borno, Adamawa, Abuja, and Plateau.'],
  ['Poultry Agribusiness – Training and support', '“Back-Yard” poultry production program providing starter packs', '73 widows launched as poultry micro-entrepreneurs; family economy recovery and food security.'],
  ['Crop production intervention', 'Land access negotiation with traditional rulers for Northeast IDPs; seeds, knapsacks, and agro-chemicals', '50+ hectares of arable farmland secured and cultivated; 222 families benefited; food security and family economy recovery in resettlement communities.'],
  ['Chibok IDP Relief (2016–2017)', 'Foodstuff and cooking material distribution at Red Bricks Housing Camp', '8,000 displaced families supported with emergency food in collaboration with Victims of Violence.'],
  ['ICT & Agribusiness Training', 'Capacity building for youth in modern agricultural techniques and practical ICT skills', '420 young people trained and empowered.'],
  ['Education Support', 'School material drive across target Local Government Areas in three states of Borno, FCT, and Plateau', '12,000 exercise books and stationery distributed; “500 School in a bag materials” distributed in Chibok; access facilitated to 10 brand new laptops and 3 printers for the Chibok school.'],
];

const team = [
  ['Lindii Lydia Adams', 'Executive Director / COO'],
  ['Thlala Kolo', 'Board Chairman'],
  ['Dr. Emmanuel Bassi, PhD', 'Board Secretary'],
  ['Zachary Medugu', 'Board Member'],
  ['Mrs. Comfort Iliya', 'Board Member'],
  ['Mr. Kudla M. Sumatari', 'Board Member'],
  ['Mr. Allen Manasseh', 'Founder / Director Operations'],
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <Link to="/" className="brand" onClick={closeMenu} aria-label="Impact Trust International home">
            <span className="brand-mark"><span /></span>
            <span className="brand-name">Impact<span>Trust</span></span>
            <span className="brand-country">International</span>
          </Link>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#focus" onClick={closeMenu}>Our focus</a>
            <a href="#interventions" onClick={closeMenu}>Interventions</a>
            <a href="#impact" onClick={closeMenu}>Our impact</a>
            <a href="#team" onClick={closeMenu}>Leadership</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>Work with us <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grid" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow light">Independent · Non-governmental · Non-profit</p>
              <h1>Building peace<br /><em>from the ground up.</em></h1>
              <p className="hero-lede">Rebuilding lives · Restoring lands · Securing peace across Nigeria and the Sahel Region through climate action, livelihood support, peace advocacy, resilience building, and humanitarian services.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#focus">Explore our work <ArrowUpRight size={17} /></a>
                <a className="text-link light-link" href="#contact">Start a conversation <span>→</span></a>
              </div>
            </div>
            <div className="hero-aside">
              <div className="hero-seal"><Globe2 size={22} /><span>Founded<br /><strong>2014</strong></span></div>
              <div className="hero-rule" />
              <p>Restoring lives<br />Restoring lands<br /><strong>Securing peace</strong></p>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to discover</span><ChevronDown size={16} /></a>
        </section>

        <section className="intro-section" id="about">
          <div className="container split-layout">
            <div className="section-label"><span>01</span><span className="label-line" />About Impact Trust</div>
            <div className="intro-content">
              <p className="eyebrow">Our foundation</p>
              <h2>For people. For planet.<br /><em>For lasting peace.</em></h2>
              <p className="body-copy">Impact Trust International (ITI) is an independent, non-governmental, non-profit, non-political, and non-religious organization dedicated to delivering a holistic approach to climate action, peace building and protection, humanitarian relief, livelihood revitalization, environmental promotion, and governance accountability.</p>
              <p className="body-copy">Founded in 2014 as a corporate social responsibility initiative and formally registered in 2019 as an independent entity, ITI scales structured humanitarian and development interventions across Africa. The organization prioritizes vulnerable populations specifically communities affected by violent extremism resulting in internally displaced persons (IDPs), victims of natural disasters, and people facing extreme poverty.</p>
              <div className="about-facts"><div className="inline-fact"><CircleCheck size={18} /><span>Registered with Reg. No: CAC/IT/NO/153175</span></div><div className="location-fact"><strong>Primary operational focus</strong><span>Nigeria &amp; Sahel Region</span></div></div>
            </div>
          </div>
        </section>

        <section className="focus-section" id="focus">
          <div className="container">
            <div className="section-heading-row">
              <div><p className="eyebrow light">02 / Our strategic mandate</p><h2>Where action meets<br /><em>possibility.</em></h2></div>
              <p className="heading-note">We work across the spaces where climate, conflict, and community resilience intersect.</p>
            </div>
            <div className="focus-grid">
              {focusAreas.map(({ number, title, text, icon: Icon }) => (
                <article className="focus-card" key={number}>
                  <div className="focus-card-top"><span>{number}</span><Icon size={23} /></div>
                  <h3>{title}</h3><p>{text}</p><span className="card-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="vision-section">
          <div className="container vision-grid">
            <div className="section-label"><span>03</span><span className="label-line" />Vision, mission &amp; values</div>
            <div className="vision-main">
              <p className="eyebrow">Our vision</p>
              <blockquote>“A world where climate action drives peace, turning fragile landscapes into sustainable communities for all.”</blockquote>
              <div className="vision-statements"><p>Working for a future where climate-smart solutions reverse ecological degradation, boost green livelihoods for economic recovery, nurture peace, and achieve thriving, peaceful, and dignified lives.</p><p>A world where communities rise above violence, conflict, and disaster by embracing climate action, resilience, and civic enlightenment — building lasting peace and hope for generations to come.</p></div>
              <div className="vision-columns">
                <div><h3>Our mission</h3><p>To support communities become rooted in peace, resilient to climate change, restored in dignity, accountable leadership, and empowered and engaged properly.</p></div>
                <div><h3>Core pillars</h3><p className="pillar-list">Climate smart solutions<br />Resilience<br />Peace-building<br />Economic Recovery</p></div>
              </div>
              <div className="mission-grid">{missionStatements.map(([title, text, Icon]) => <article className="mission-card" key={title}><Icon size={19} /><h3>{title}</h3><p>{text}</p></article>)}</div>
            </div>
          </div>
        </section>

        <section className="interventions-section" id="interventions">
          <div className="container">
            <div className="section-heading-row dark-heading"><div><p className="eyebrow">04 / Intervention areas</p><h2>Connected work.<br /><em>Community scale.</em></h2></div><p className="heading-note">ITI brings peacebuilding, climate action, livelihoods, digital empowerment, protection, and evidence-based support into one operating model.</p></div>
            <div className="intervention-grid">{interventionAreas.map(({ title, items, icon: Icon }) => <article className="intervention-card" key={title}><Icon size={22} /><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
          </div>
        </section>

        <section className="program-section" id="programs">
          <div className="container">
            <div className="section-heading-row dark-heading"><div><p className="eyebrow">05 / Flagship programs</p><h2>Practical work.<br /><em>Lasting change.</em></h2></div><p className="heading-note">From climate-smart agriculture to digital empowerment, our programs turn community insight into durable progress.</p></div>
            <div className="program-list">
              {programs.map((program, index) => <article className="program-item" key={program.title}><span className="program-number">0{index + 1}</span><h3>{program.title}</h3><p>{program.text}</p><ArrowUpRight size={18} /></article>)}
            </div>
          </div>
        </section>

        <section className="impact-section" id="impact">
          <div className="container">
            <div className="impact-heading"><div className="section-label"><span>06</span><span className="label-line" />Proven track record</div><div><p className="eyebrow light">Historical impact</p><h2>Numbers with<br /><em>people behind them.</em></h2></div></div>
            <div className="stats-grid">{achievements.map(([value, label]) => <div className="stat" key={value + label}><strong>{value}</strong><span>{label}</span></div>)}</div>
            <div className="impact-footer"><span>Selected outcomes from ITI interventions</span><span>Across Borno · Adamawa · Plateau · Nasarawa · Cameroon</span></div>
            <div className="impact-projects">{impactProjects.map(([period, scope, result]) => <article className="impact-project" key={period + scope}><div><strong>{period}</strong><span>{scope}</span></div><p>{result}</p></article>)}</div>
          </div>
        </section>

        <section className="team-section" id="team">
          <div className="container split-layout">
            <div className="section-label"><span>06</span><span className="label-line" />Leadership & governance</div>
            <div className="team-content"><p className="eyebrow">The people behind the work</p><h2>Grounded leadership.<br /><em>Shared responsibility.</em></h2><p className="body-copy">Impact Trust International is governed by an experienced Board of Trustees providing strategic oversight, regulatory compliance, and fiduciary responsibility at every stage of operations and interventions.</p><div className="team-grid">{team.map(([name, role]) => <div className="team-member" key={name}><span className="avatar">{name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span><div><strong>{name}</strong><span>{role}</span></div></div>)}</div></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid"><div><p className="eyebrow light">08 / Begin a conversation</p><h2>Peace is built<br /><em>together.</em></h2><p className="contact-copy">Whether you are a community, partner, funder, or fellow changemaker, we welcome conversations that move people and the planet forward.</p></div><div className="contact-card"><p className="eyebrow">Contact Impact Trust</p><a href="mailto:impacttrustinternational@gmail.com" className="contact-line"><Mail size={18} />impacttrustinternational@gmail.com</a><a href="tel:+2347019491420" className="contact-line"><Phone size={18} />+234 701 949 1420</a><a href="tel:+2348032869195" className="contact-line"><Phone size={18} />+234 803 286 9195</a><div className="social-line"><span>Follow our work</span><span>Twitter: @TrustIntl</span><span>LinkedIn: Impactstrust International</span><span>Facebook: Impact Trust Intl.</span></div><a className="button button-dark" href="mailto:impacttrustinternational@gmail.com">Send an email <ArrowUpRight size={17} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><Link to="/" className="brand footer-brand"><span className="brand-mark"><span /></span><span className="brand-name">Impact<span>Trust</span></span><span className="brand-country">International</span></Link><p>Rebuilding lives / Restoring lands / Securing peace</p><span>© Impact Trust International</span></div></footer>
    </div>
  );
}

export default App;
