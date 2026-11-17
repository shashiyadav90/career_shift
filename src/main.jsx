import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const imageFiles = import.meta.glob("./images/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const getImage = (filename) => imageFiles[`./images/${filename}`] || "";

const images = {
  hero: getImage("careers baclground.avif"),
  founder: getImage("gopal.avif") || getImage("p1.avif"),
  founder2: getImage("p8.avif"),
  corridor: getImage("corridor.avif"),
  podcast: getImage("podcast baclground.avif"),
  offer1: getImage("whatweoffer1.avif"),
  offer2: getImage("whatweoffer2.avif"),
  offer3: getImage("whatweoffer3.avif"),
  future1: getImage("future ready solution 1.avif"),
  future2: getImage("future ready solution 2.avif"),
  future3: getImage("future ready solution 3.avif"),
};

const practices = [
  ["01", "FLAGSHIP PRACTICE", "Collective Leadership & Systems", "Align leadership groups, strengthen enterprise thinking and make transformation work across the whole system.", images.offer1, "#leadership-systems"],
  ["02", "THE PROVEN ENGINE", "Leadership Development Journeys", "Build future-ready capability through journeys connected to live business challenges — not one-off training events.", images.offer2, "#development"],
  ["03", "INDIVIDUAL & COLLECTIVE", "Executive Coaching", "Support leaders through transitions, build self-awareness and turn potential into purposeful action.", images.offer3, "#coaching"],
  ["04", "SYSTEMIC CHALLENGES", "Strategy, Culture & Organisation", "Translate vision and values into choices, operating rhythms and everyday behaviours.", images.future1, "#strategy-culture"],
];

const people = [
  ["Dr Prashant Iyer", "Strategic Leadership Coach · Executive Advisor", "prashant.avif"],
  ["Rezina Denis", "Executive Coach · Leadership Advisor", "rezina.avif"],
  ["Sangeeta Sumesh", "Executive Coach · Leadership Specialist · Author", "sangeeta.avif"],
  ["Ramesh B Nair", "Executive Coach · Strategy & Transformation", "ramesh.avif"],
  ["Namita Kutty", "Chief Career Strategist · Senior Executive Coach", "namita.avif"],
  ["Rushabh Mota", "HR Transformation · Policy & Process Architect", "rushab.avif"],
  ["Lochan Narayanan", "Career Transitions Coach · Leadership Consultant", "lochan.avif"],
  ["Nadia Al Farah", "Executive Coach · Talent Development Strategist", "nadia.avif"],
];
const board = [
  ["Phani Pattamatta", "COO, HYSEA · Fractional Executive", "phani.avif"],
  ["Achyut K Menon", "MD, Options Executive Search", "achyut.avif"],
  ["Dr Prashant Iyer", "Strategic Leadership Coach · Founder, Alpha Minds", "prashant.avif"],
  ["Jon Younger", "Co-founder and CEO, Mensch.work", "jon.avif"],
  ["Shreya Krishnan", "MD, AnitaB.org", "shreya.avif"],
];
const problems = [
  "Strategy is clear. Execution keeps fragmenting.",
  "The leadership group agrees in the room — but behaves differently outside it.",
  "A new CXO needs to build trust and traction quickly.",
  "Values are visible on walls, but not yet in decisions.",
  "Growth has changed the organisation faster than leadership has changed with it."
];
const journey = [
  ["SEE", "Make the invisible visible.", "Surface the patterns that shape how the system actually operates."],
  ["SENSE", "Understand what connects.", "Understand interdependencies, tensions and identify the real leverage points."],
  ["SHAPE", "Choose what matters.", "Generate options and align around consequential choices — not comfortable ones."],
  ["SHIFT", "Turn insight into action.", "Translate shared intent into new conversations, decisions and behaviours."],
  ["SUSTAIN", "Make change hold.", "Build the capability and rhythm for the system to move without us."]
];

function ContactForm({ compact = false }) {
  return <form className={`contact-form ${compact ? "compact" : ""}`} action="https://formsubmit.co/connect@careershifts.in" method="POST">
    <input type="hidden" name="_subject" value="New enquiry — Career Shifts Consulting" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_captcha" value="true" />
    <input type="hidden" name="_next" value={typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}?submitted=true#contact` : ""} />
    <div className="form-grid">
      <label>Your name *<input name="name" placeholder="First and last name" required /></label>
      <label>Your organisation<input name="organisation" placeholder="Organisation name" /></label>
      <label>Email address *<input name="email" type="email" placeholder="you@company.com" required /></label>
      <label>Phone number<input name="phone" type="tel" placeholder="+91" /></label>
      <label className="full">What are you working on? *<textarea name="challenge" rows="4" placeholder="Describe the situation in your own words..." required /></label>
    </div>
    <label className="consent"><input type="checkbox" required /> I agree to be contacted by Career Shifts Consulting about this enquiry.</label>
    <button className="button button-red" type="submit">Send enquiry <span>↗</span></button>
    <p className="form-note">Your enquiry is confidential. We aim to respond personally within 2 business days.</p>
  </form>;
}

function Header({ onContact }) {
  const [open, setOpen] = useState(false);
  const nav = [["How We Work", "#method"], ["Executive Coaching", "#coaching"], ["Leadership Systems", "#leadership-systems"], ["Leadership Development", "#development"], ["Strategy & Culture", "#strategy-culture"], ["Perspectives", "#perspectives"], ["About", "#about"]];
  return <header className="site-header">
    <a className="wordmark" href="#home"><span>career<span className="pink">shifts</span></span><small>CONSULTING</small></a>
    <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "×" : "☰"}</button>
    <nav className={open ? "nav-links open" : "nav-links"}>
      {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <button className="nav-cta" onClick={() => { setOpen(false); onContact(); }}>Start a conversation ↗</button>
    </nav>
  </header>;
}
function Footer({ onContact }) {
  return <footer className="footer"><div className="footer-top">
    <div><a className="wordmark footer-mark" href="#home"><span>career<span className="pink">shifts</span></span><small>CONSULTING</small></a><p>Leadership and organisational advisory, built on rigorous diagnosis — not off-the-shelf frameworks.</p><small className="footer-motto">FOUNDED IN INDIA. BUILT FOR THE WORLD.</small><div className="footer-socials"><a href="https://www.instagram.com/career.shifts" target="_blank" rel="noreferrer">◎</a><a href="https://x.com/goiyerthecoach" target="_blank" rel="noreferrer">𝕏</a><a href="https://www.linkedin.com/company/career-shifts-consulting/home/" target="_blank" rel="noreferrer">in</a><a href="https://www.youtube.com/@careershifts" target="_blank" rel="noreferrer">▶</a></div></div>
    <div><b>PRACTICES</b><a href="#leadership-systems">Collective Leadership</a><a href="#development">Leadership Development</a><a href="#coaching">Executive Coaching</a><a href="#strategy-culture">Strategy & Culture</a></div>
    <div><b>FIRM</b><a href="#method">How We Work</a><a href="#about">About</a><a href="#perspectives">Perspectives</a><a href="#team">Our Network</a></div>
    <div><b>CONNECT</b><a href="tel:+917406588111">+91 74065 88111</a><a href="mailto:connect@careershifts.in">connect@careershifts.in</a><a href="https://www.linkedin.com/company/career-shifts-consulting/home/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.youtube.com/@careershifts" target="_blank" rel="noreferrer">YouTube ↗</a><button onClick={onContact}>Start a Conversation ↗</button></div>
  </div><div className="footer-bottom"><span>© 2026 Career Shifts Consulting. All rights reserved.</span><span>Leadership · Systems · Organisation</span></div></footer>;
}
function Title({ eyebrow, children, text }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{children}</h2>{text && <p>{text}</p>}</div>;
}

export default function App() {
  const [modal, setModal] = useState(false), [active, setActive] = useState(0), [faq, setFaq] = useState(0);
  const [submitted, setSubmitted] = useState(typeof window !== "undefined" && new URLSearchParams(window.location.search).get("submitted") === "true");
  const faqs = [
    ["How long does an engagement take?", "A full coaching engagement runs 6–9 months across three phases, with a call every 3–4 weeks and a follow-up advisory session included at the close. Shorter 3–5 session engagements are available for specific challenges."],
    ["Is the Hogan Assessment mandatory?", "For full engagements, it is included and forms an important data foundation. The assessment approach is discussed and agreed during the discovery conversation."],
    ["Is this confidential?", "Yes. Coaching is conducted under professional coaching ethics and strict confidentiality terms. For organisation-sponsored coaching, boundaries are agreed explicitly before the engagement begins."],
    ["What does the first call look like?", "A 60-minute discovery conversation. No proposal on the table — just genuine inquiry into your situation. The first conversation is valuable in itself."]
  ];
  return <>
    <a className="skip-link" href="#main">Skip to Main Content</a>
    <Header onContact={() => setModal(true)} />
    <main id="main">
      <section className="hero" id="home"><div className="hero-image" style={{ backgroundImage: `linear-gradient(90deg,rgba(0,20,71,.95),rgba(0,20,71,.68) 55%,rgba(0,20,71,.12)),url("${images.hero}")` }} /><div className="wrap hero-content">
        <span className="eyebrow light">LEADERSHIP · SYSTEMS · ORGANISATION</span>
        <h1>The challenge is rarely<br />what it first <em>appears to be.</em></h1>
        <p>We help leaders and organisations see clearly, choose deliberately, and act as one system — turning complexity into meaningful momentum.</p>
        <div className="hero-actions"><button className="button button-red" onClick={() => setModal(true)}>Start a conversation ↗</button><a className="button button-outline" href="#method">How we work ↓</a></div>
        <div className="hero-caption">CONFIDENTIAL CONVERSATIONS. CLEAR THINKING. MEANINGFUL CHANGE.</div>
      </div><div className="hero-index">01 / 04 <i /></div></section>

      <div className="trust-strip wrap"><span>BUILT FOR THE MOMENTS THAT MATTER</span><div><b>LEADERSHIP</b><b>SYSTEMS</b><b>ORGANISATION</b><b>TRANSFORMATION</b></div></div>

      <section className="section-pad wrap intro-section" id="about"><div><span className="eyebrow">A DIFFERENT KIND OF ADVISORY</span><h2>See what others miss.<br /><em>Shape what comes next.</em></h2></div><div className="intro-copy"><p className="large-copy">Most organisations don't have a strategy problem. They have a leadership system that cannot execute the strategy they have.</p><p>Career Shifts works in the space between what leaders intend and what the organisation experiences. We bring rigorous diagnosis, deep human understanding and systems thinking to the moments when the next move matters most.</p><a className="text-link" href="#method">Explore our approach ↗</a></div></section>

      <section className="metrics-band"><div className="wrap metrics-grid"><div><span className="eyebrow light">THE CASE FOR CHANGE</span><h2>When leadership moves with intent,<br /><em>the whole organisation moves.</em></h2></div><div className="metric"><strong>70%</strong><span>of transformations fail to achieve intended goals</span><small>MCKINSEY</small></div><div className="metric"><strong>3.7×</strong><span>revenue advantage for strong-culture organisations</span><small>DELOITTE</small></div><div className="metric"><strong>788%</strong><span>average ROI reported from executive coaching</span><small>METRIXGLOBAL</small></div></div><div className="wrap metric-disclaimer">Indicative research references. Verify original reports and publication dates before external publication.</div></section>

      <section className="section-pad wrap" id="method"><Title eyebrow="THE WAY WE WORK" text="A disciplined process that begins by making the invisible visible — and ends with change that holds.">See → Sense → Shape<br /><em>→ Shift → Sustain.</em></Title><div className="method-layout"><div className="method-list">{journey.map((x, i) => <button key={x[0]} className={active === i ? "method-row active" : "method-row"} onClick={() => setActive(i)}><span>0{i + 1}</span><b>{x[0]}</b><small>{x[1]}</small><i>↗</i></button>)}</div><div className="method-detail"><span className="eyebrow">THE CAREER SHIFTS METHOD / 0{active + 1}</span><div className="method-glyph">{["◎", "⌁", "◇", "↗", "∞"][active]}</div><h3>{journey[active][0][0] + journey[active][0].slice(1).toLowerCase()}.</h3><p>{journey[active][2]}</p><div className="method-progress">{journey.map((_, i) => <i key={i} className={i <= active ? "on" : ""} />)}</div></div></div></section>

      <section className="section-pad practice-section" id="practices"><div className="wrap"><Title eyebrow="OUR PRACTICES" text="Every engagement begins with diagnosis. We design the right intervention for the challenge — never a programme pulled from a catalogue.">Four integrated<br /><em>practices.</em></Title><div className="practice-grid">{practices.map(p => <article className="practice-card" key={p[0]}><div className="practice-photo"><img src={p[4]} alt="" loading="lazy" /><span>{p[0]}</span></div><div className="practice-body"><small>{p[1]}</small><h3>{p[2]}</h3><p>{p[3]}</p><a href={p[5]}>Explore practice <b>↗</b></a></div></article>)}</div></div></section>

      <section className="section-pad problem-section"><div className="wrap problem-layout"><div><span className="eyebrow light">WHAT WE SOLVE</span><h2>The problems rarely<br />arrive <em>neatly labelled.</em></h2><p>We look beneath the presenting issue to understand the patterns, relationships and choices shaping the outcome.</p><button className="button button-outline" onClick={() => setModal(true)}>Talk through your challenge ↗</button></div><div className="problem-list">{problems.map((p, i) => <div className="problem-row" key={p}><span>0{i + 1}</span><p>{p}</p><b>↗</b></div>)}</div></div></section>

      <section className="section-pad wrap feature-section" id="coaching"><div className="feature-image"><img src={images.founder2} alt="Gopal A. Iyer" loading="lazy" /><span>EXECUTIVE COACHING</span></div><div className="feature-copy"><span className="eyebrow">FOR INDIVIDUALS</span><h2>Your next chapter<br />isn't found. It's <em>created.</em></h2><p>Most high performers who come to Career Shifts have already diagnosed the problem. What they need is a more rigorous conversation about whether that diagnosis is correct.</p><ul><li>The high performer who has become invisible in their organisation.</li><li>The professional at a genuine crossroads.</li><li>The first-time CXO navigating a new level of leadership.</li><li>The leader returning from a break, rebuilding confidence and momentum.</li></ul><button className="text-link button-link" onClick={() => setModal(true)}>Book a discovery call ↗</button></div></section>

      <section className="section-pad coaching-journey"><div className="wrap"><Title eyebrow="EXECUTIVE COACHING" text="Three phases. One practitioner throughout. A focused 6–9 month journey, with a call every 3–4 weeks.">Dream. Dare. <em>Do.</em></Title><div className="journey-cards">{[["01", "DREAM", "Surface what is actually happening.", "Hogan Assessment (HPI, HDS, MVPI), debrief and 360° perception interviews."], ["02", "DARE", "Design what comes next.", "Future-State Blueprint, career roadmap and positioning strategy."], ["03", "DO", "Execute and make it hold.", "Coaching calls every 3–4 weeks across 6–9 months, plus a follow-up advisory session."]].map(x => <article key={x[1]}><span>PHASE {x[0]}</span><h3>{x[1]}</h3><h4>{x[2]}</h4><p>{x[3]}</p></article>)}</div><div className="hogan-note"><div><span className="eyebrow">DIAGNOSTIC FOUNDATION</span><h3>Why Hogan first.</h3></div><p>The most important things about a leader rarely surface in a conversation. They surface in the data. Hogan tools explore leadership style, potential derailers under pressure, and the values that shape motivation.</p></div></div></section>

      <section className="section-pad wrap" id="leadership-systems"><div className="split-heading"><div><span className="eyebrow">FLAGSHIP PRACTICE</span><h2>Collective Leadership<br /><em>and Systems.</em></h2></div><div><p>Most organisations don't have a strategy problem. They have a leadership system that cannot execute the strategy they have. This practice works at that intersection.</p><button className="text-link button-link" onClick={() => setModal(true)}>Start a conversation ↗</button></div></div><div className="six-grid">{[["Strategy alignment and facilitation", "Offsite design, facilitation and the difficult conversations alignment requires."], ["Leadership group effectiveness", "Diagnostic, team coaching and structural interventions."], ["Complex stakeholder systems", "Systems mapping, facilitation and alignment design."], ["Transformation and culture", "Fundamental change in how the organisation operates and leads."], ["Futures thinking", "Scenario planning and futures methodology."], ["Ways of working", "Redesigning rituals, structures and norms."]].map((x, i) => <article key={x[0]}><span>0{i + 1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div><div className="signature-method"><img src={images.corridor} alt="Career Shifts facilitation" loading="lazy" /><div><span className="eyebrow">SIGNATURE METHOD</span><h3>Make the invisible tangible.</h3><p>LEGO® Serious Play® is a structured methodology for making complex, systemic challenges visible and discussable in ways conversation alone cannot achieve.</p><p>Career Shifts holds SeriousWork System Level certification.</p></div></div></section>

      <section className="section-pad development-section" id="development"><div className="wrap"><Title eyebrow="PRACTICE 02 · THE PROVEN ENGINE" text="Not a programme. A journey. The difference between an event that is attended and a shift that is made.">Leadership Development<br /><em>Journeys.</em></Title><div className="development-grid">{[["01", "Design sprint", "Diagnose the specific challenge and define outcomes."], ["02", "Cohort launch", "An immersive opening session, with diagnostics where relevant."], ["03", "Application modules", "Monthly workshops connecting learning to live work."], ["04", "Transfer & measure", "Measure outcomes and provide 90-day post-programme advisory."]].map(x => <article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>

      <section className="section-pad wrap" id="strategy-culture"><div className="split-heading"><div><span className="eyebrow">PRACTICE 04 · SYSTEMIC CHALLENGES</span><h2>Strategy, Culture<br /><em>and Organisation.</em></h2></div><div><p>When the challenge is not a person or a team — it is the system itself. Vision, values, culture, structure and succession: the architecture of how the organisation leads itself.</p><button className="text-link button-link" onClick={() => setModal(true)}>Start a conversation ↗</button></div></div><div className="strategy-list">{["Vision and values design", "Culture diagnostics and change", "Organisation development", "Change advisory", "Succession and readiness"].map((x, i) => <div key={x}><span>0{i + 1}</span><h3>{x}</h3><p>{["A vision that is genuinely navigable and values that become decision-making filters.", "Understand the gap between the culture described and the culture actually operating.", "OD diagnostic, redesign and implementation advisory.", "Advisory on the leadership of change, not just the management of it.", "Assess whether the organisation has the leadership capability its next chapter requires."][i]}</p></div>)}</div></section>

      <section className="testimonial-band"><div className="wrap"><span className="eyebrow light">THE THINKING BEHIND THE WORK</span><blockquote>“The problem is almost never ability. It is almost always alignment.”</blockquote><small>GOPAL A. IYER · FOUNDER & PRINCIPAL ADVISOR</small></div></section>

      <section className="section-pad wrap founder-layout" id="founder"><div className="founder-photo"><img src={images.founder} alt="Gopal A. Iyer" loading="lazy" /></div><div><span className="eyebrow">ABOUT THE FOUNDER</span><h2>Built from two decades<br />inside the <em>problem.</em></h2><h3>Gopal A. Iyer</h3><small>FOUNDER & PRINCIPAL ADVISOR · BENGALURU</small><p>For 22+ years, Gopal has worked at the intersection of business transformation, leadership agility and career reinvention. Across Goldman Sachs, Target, Deloitte, EY and IIM Ahmedabad, he partnered with senior leaders to align leadership with strategy, drive cultural transformation and navigate complex change.</p><p>Career Shifts was founded to bridge the gap between potential and execution — helping individuals and businesses break inertia, build momentum and own their future.</p><div className="credentials">ICF PCC · ACTC · EMCC SENIOR PRACTITIONER · HOGAN CERTIFIED · LSP FACILITATOR · PROSCI</div><a className="text-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div></section>

      <section className="section-pad network-section" id="team"><div className="wrap"><Title eyebrow="OUR EXTENDED NETWORK" text="A lean core team, supported by a trusted circle of executive coaches, organisational consultants, leadership facilitators and domain experts. We curate purpose-built teams for every engagement.">The people behind<br /><em>the practice.</em></Title><div className="people-grid">{people.map(([name, role, img]) => <article key={name}><div className="person-photo"><img src={getImage(img)} alt={name} loading="lazy" /></div><h3>{name}</h3><p>{role}</p></article>)}</div></div></section>

      <section className="section-pad wrap" id="advisory"><Title eyebrow="ADVISORY BOARD" text="Experienced leaders who bring strategic guidance and critical perspective across technology, talent, leadership and organisational change.">Independent thinking.<br /><em>Collective perspective.</em></Title><div className="people-grid board-grid">{board.map(([name, role, img]) => <article key={name}><div className="person-photo"><img src={getImage(img)} alt={name} loading="lazy" /></div><h3>{name}</h3><p>{role}</p></article>)}</div></section>

      <section className="section-pad podcast-section" id="podcast"><div className="wrap podcast-layout"><div><span className="eyebrow light">CAREER SHIFTS PODCAST</span><h2>The stories you don't hear in boardrooms. <em>But the ones that shape them.</em></h2><p>Conversations with leaders, misfits, change-makers and everyday professionals who chose to rewrite their careers — and sometimes, their lives.</p><a className="button button-outline" href="https://www.youtube.com/" target="_blank" rel="noreferrer">Watch episodes ↗</a></div><img src={images.podcast} alt="Career Shifts Podcast" loading="lazy" /></div></section>

      <section className="section-pad wrap tedx-section"><div><span className="eyebrow">IDEAS WORTH SHARING</span><h2>Gopal Iyer on <em>TEDx.</em></h2><p>A perspective on leadership, change and the choices that shape our next chapter.</p><a className="text-link" href="https://www.youtube.com/watch?v=iqOHW2iINh0" target="_blank" rel="noreferrer">Watch the TEDx talk ↗</a></div><a className="video-card" href="https://www.youtube.com/watch?v=iqOHW2iINh0" target="_blank" rel="noreferrer"><img src="https://img.youtube.com/vi/iqOHW2iINh0/hqdefault.jpg" alt="Watch Gopal Iyer's TEDx talk" /><span>▶</span></a></section>

      <section className="section-pad perspective-section" id="perspectives"><div className="wrap"><Title eyebrow="PERSPECTIVES" text="Writing, conversations and ideas on leadership, systems, culture and career reinvention.">The intellectual capital<br /><em>behind the practice.</em></Title><div className="article-grid"><article><img src={images.corridor} alt="" loading="lazy" /><small>SYSTEMS · 2 MIN READ</small><h3>The Corridor Knows the Truth</h3><p>Meetings are where people talk. Corridors are where people tell the truth.</p></article><article><img src={images.future2} alt="" loading="lazy" /><small>LEADERSHIP · PERSPECTIVE</small><h3>When alignment stops at the meeting room</h3><p>Agreement is not the same as alignment. The distinction changes everything.</p></article><article><img src={images.future3} alt="" loading="lazy" /><small>CAREERS · REINVENTION</small><h3>The career problem is an identity question</h3><p>High performers often diagnose feeling stuck as a skills gap. It may be something deeper.</p></article></div></div></section>

      <section className="section-pad wrap faq-section"><div><span className="eyebrow">A FEW USEFUL ANSWERS</span><h2>Before you <em>begin.</em></h2></div><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? -1 : i)}><span>0{i + 1}</span>{q}<b>{faq === i ? "−" : "+"}</b></button>{faq === i && <p>{a}</p>}</div>)}</div></section>

      <section className="contact-cta" id="contact"><div className="wrap"><span className="eyebrow light">A GOOD PLACE TO BEGIN</span><h2>The first conversation<br />is always <em>confidential.</em></h2><p>60 minutes for organisations. 30 minutes for individuals. No proposal on the table — just a genuine conversation about your situation.</p><button className="button button-red" onClick={() => setModal(true)}>Start a conversation ↗</button><small>Every enquiry is reviewed personally. We aim to respond within 2 business days.</small></div></section>
    </main>
    <Footer onContact={() => setModal(true)} />
    {modal && <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) setModal(false) }}><div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><button className="modal-close" onClick={() => setModal(false)} aria-label="Close">×</button><span className="eyebrow light">START A CONVERSATION</span><h2 id="contact-title">Tell us about<br /><em>your situation.</em></h2><p>All conversations are confidential and reviewed personally.</p><ContactForm compact /></div></div>}
    {submitted && <div className="toast" role="status">Thank you — your enquiry has been submitted.<button onClick={() => { setSubmitted(false); window.history.replaceState({}, "", window.location.pathname) }}>×</button></div>}
  </>;
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
