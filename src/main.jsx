import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Menu, X, Check, MoveUpRight, Compass,
  Network, Users, Target, Sparkles, ShieldCheck, Layers3, Workflow,
  BrainCircuit, MessageCircle, Linkedin, Instagram, Youtube, ChevronDown
} from "lucide-react";
import "./styles.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function Reveal({ children, className = "" }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={fadeUp} initial="hidden"
    whileInView="visible" viewport={{ once: true, amount: 0.16 }}
    transition={reduce ? { duration: 0 } : undefined}>{children}</motion.div>;
}

function Logo({ light = false }) {
  return <a className={`brand ${light ? "brand-light" : ""}`} href="#home" aria-label="Career Shifts home">
    <span className="brand-mark"><span></span><span></span><span></span></span>
    <span className="brand-name">career<span>shifts</span><small>CONSULTING</small></span>
  </a>;
}

function Button({ children, href = "#contact", secondary = false }) {
  return <a className={`button ${secondary ? "button-secondary" : ""}`} href={href}>
    {children}<ArrowUpRight size={17} strokeWidth={2.1}/>
  </a>;
}

const practices = [
  { n: "01", icon: Network, title: "Collective Leadership & Systems", desc: "Align leadership groups, strengthen enterprise thinking and make transformation work across the whole system.", tag: "The most complex work we do" },
  { n: "02", icon: Layers3, title: "Leadership Development Journeys", desc: "Build future-ready capability through focused CXO and high-potential leadership journeys.", tag: "The proven engine" },
  { n: "03", icon: Users, title: "Executive & Team Coaching", desc: "Create space for leaders and teams to navigate transitions, build trust and unlock their next level.", tag: "Individual and collective" },
  { n: "04", icon: Target, title: "Strategy, Culture & Organisation", desc: "Translate vision and values into clear choices, operating rhythms and everyday behaviours.", tag: "Make strategy lived" }
];

const problems = [
  "Strategy is clear. Execution keeps fragmenting.",
  "The leadership group agrees in the room — but behaves differently outside it.",
  "A new CXO needs to build trust and traction quickly.",
  "Values are visible on walls, but not yet in decisions.",
  "Growth has changed the organisation faster than leadership has changed with it."
];

const steps = [
  ["See", "Make the invisible visible.", "Surface the patterns that shape how the system actually operates."],
  ["Sense", "Understand what connects.", "Identify interdependencies, tensions and the real leverage points."],
  ["Shape", "Choose what matters.", "Generate options and align around consequential choices — not comfortable ones."],
  ["Shift", "Turn insight into action.", "Translate shared intent into new conversations, decisions and behaviours."],
  ["Sustain", "Make change hold.", "Build the capability and rhythm for the system to move without us."]
];

const cases = [
  { sector: "AUTOMOTIVE", type: "LEADERSHIP DEVELOPMENT", title: "From capability building to business ownership", body: "Built leadership capability while translating development directly into measurable execution.", outcome: "Greater enterprise thinking, stakeholder ownership and transfer into role." },
  { sector: "SPECIALTY CHEMICALS", type: "STRATEGY · CULTURE · COACHING", title: "A shared direction for the next chapter", body: "Vision 2030 design, values operationalisation and executive coaching through a founder-to-professional transition.", outcome: "Shared strategic direction, values embedded in decisions and greater senior leader autonomy." },
  { sector: "LEADERSHIP TRANSITION", type: "EXECUTIVE COACHING", title: "A new CXO. A decisive first 90 days.", body: "Supported a newly appointed CXO to build trust, establish credibility and create traction.", outcome: "Accelerated stakeholder alignment and an effective operating rhythm within the first quarter." }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["How We Work", "#method"], ["Practices", "#practices"], ["Perspectives", "#evidence"], ["About", "#about"]];
  return <header className="nav-wrap">
    <nav className="nav container">
      <Logo/>
      <div className={`nav-links ${open ? "nav-open" : ""}`}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={15}/></a>
      </div>
      <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={16}/></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-grid container">
      <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
        <motion.div variants={fadeUp} className="eyebrow"><span className="eyebrow-dot"></span> LEADERSHIP & ORGANISATIONAL ADVISORY · INDIA</motion.div>
        <motion.h1 variants={fadeUp}>See what others miss.<br/><em>Shape what comes next.</em></motion.h1>
        <motion.p variants={fadeUp} className="hero-lede">We help CXOs and leadership groups make complex challenges visible, align around consequential choices, and turn shared intent into collective action.</motion.p>
        <motion.div variants={fadeUp} className="hero-actions">
          <Button>Start a conversation</Button><Button secondary href="#method">Explore how we work</Button>
        </motion.div>
        <motion.div variants={fadeUp} className="hero-note"><ShieldCheck size={17}/> Confidential conversations. Clear thinking. Meaningful change.</motion.div>
      </motion.div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: .94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: .25, ease: "easeOut" }}>
        <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
        <div className="art-core"><span className="core-kicker">THE SHIFT</span><span className="core-word">FROM<br/><b>COMPLEXITY</b><br/>TO CLARITY</span><span className="core-line"></span><span className="core-caption">A system in motion</span></div>
        <div className="float-card card-top"><span className="mini-label">LEADERSHIP ALIGNMENT</span><div className="mini-people"><i></i><i></i><i></i><i></i><b>+8</b></div><strong>One direction. Shared ownership.</strong></div>
        <div className="float-card card-bottom"><span className="signal"><span></span> MOMENTUM INDEX</span><strong>+34.8%</strong><div className="signal-bars">{[28,43,36,58,48,72,62,88,76,100].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div></div>
        <div className="art-label label-left">01 / SEE THE SYSTEM</div><div className="art-label label-right">02 / SHIFT THE OUTCOME</div>
      </motion.div>
    </div>
    <div className="hero-bottom container"><span>BUILT FOR THE MOMENTS THAT MATTER</span><span className="scroll-cue">SCROLL TO EXPLORE <ChevronDown size={15}/></span></div>
  </section>;
}

function Metrics() {
  const metrics = [["70%", "of transformations fail to achieve intended goals", "MCKINSEY"], ["77%", "of employees globally are disengaged", "GALLUP · 2024"], ["3.7×", "revenue advantage for strong-culture organisations", "DELOITTE"], ["788%", "average ROI reported from executive coaching", "METRIXGLOBAL"]];
  return <section className="metrics"><div className="container">
    <div className="metrics-heading"><span className="section-kicker">THE CASE FOR CHANGE</span><p>When leadership moves with intent,<br/><b>the whole organisation moves.</b></p></div>
    <div className="metric-grid">{metrics.map(([value,desc,source])=><Reveal key={value} className="metric"><strong>{value}</strong><p>{desc}</p><small>{source}</small></Reveal>)}</div>
    <p className="source-note">Selected external research indicators. Figures are attributed to their respective published sources.</p>
  </div></section>;
}

function Intro() {
  return <section className="intro section-pad" id="about"><div className="container intro-grid">
    <Reveal><span className="section-kicker">A DIFFERENT KIND OF ADVISORY</span><h2>Change rarely fails<br/>for lack of <em>ambition.</em></h2></Reveal>
    <Reveal className="intro-text"><p className="intro-lead">It falters in the space between what leaders intend and what the organisation experiences.</p><p>Career Shifts Consulting works in that space. We bring rigorous diagnosis, deep human understanding and systems thinking to the moments when the next move matters most.</p><p>Founded in India. Built for the world. We help people and organisations move from survival to significance — and from reacting to change to deliberately shaping it.</p><a className="text-link" href="#about-founder">Meet the practice <ArrowUpRight size={17}/></a></Reveal>
  </div></section>;
}

function Problems() {
  return <section className="problems section-pad"><div className="container">
    <div className="section-head"><div><span className="section-kicker">WHAT WE SOLVE</span><h2>The problems rarely<br/><em>arrive neatly labelled.</em></h2></div><p>We look beneath the presenting issue to understand the patterns, relationships and choices shaping the outcome.</p></div>
    <div className="problem-list">{problems.map((p,i)=><Reveal key={p} className="problem-row"><span className="problem-num">0{i+1}</span><p>{p}</p><ArrowUpRight className="problem-arrow" size={20}/></Reveal>)}</div>
  </div></section>;
}

function Practices() {
  return <section className="practices section-pad" id="practices"><div className="container">
    <div className="section-head"><div><span className="section-kicker">OUR WORK</span><h2>Four integrated<br/><em>practices.</em></h2></div><p>Assessments and diagnostics are enabling capabilities across all four — not a separate service tower.</p></div>
    <div className="practice-grid">{practices.map(({n,icon:Icon,title,desc,tag},i)=><Reveal key={n} className={`practice-card practice-${i+1}`}><div className="practice-top"><span>{n}</span><Icon size={25} strokeWidth={1.5}/></div><div><small>{tag}</small><h3>{title}</h3><p>{desc}</p></div><a href="#contact" aria-label={`Explore ${title}`}>Explore <ArrowUpRight size={17}/></a></Reveal>)}</div>
  </div></section>;
}

function Method() {
  const [active, setActive] = useState(0);
  return <section className="method section-pad" id="method"><div className="container">
    <div className="section-head"><div><span className="section-kicker">THE METHODOLOGY</span><h2>See → Sense → Shape<br/><em>→ Shift → Sustain.</em></h2></div><p>Not a framework applied uniformly. A way of working that begins by making the invisible visible — and ends with change that holds.</p></div>
    <div className="method-layout">
      <div className="method-steps">{steps.map(([name,short],i)=><button key={name} onClick={()=>setActive(i)} className={`method-step ${active===i?"active":""}`}><span>0{i+1}</span><b>{name}</b><span className="step-short">{short}</span><ArrowUpRight size={18}/></button>)}</div>
      <motion.div className="method-detail" key={active} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.35}}>
        <div className="detail-index">0{active+1} / THE SHIFT PROCESS</div><div className="detail-symbol">{["◎","⌁","◇","↗","∞"][active]}</div><h3>{steps[active][0]}.</h3><h4>{steps[active][1]}</h4><p>{steps[active][2]}</p>
        <div className="detail-progress">{steps.map((s,i)=><span key={s[0]} className={i<=active?"filled":""}/>)}</div>
      </motion.div>
    </div>
  </div></section>;
}

function Evidence() {
  return <section className="evidence section-pad" id="evidence"><div className="container">
    <div className="section-head"><div><span className="section-kicker">CASE EVIDENCE</span><h2>What the work<br/><em>has produced.</em></h2></div><p>NDA-safe case evidence. Not testimonials. A view of the shifts created at organisational and individual scale.</p></div>
    <div className="case-grid">{cases.map((c,i)=><Reveal key={c.sector} className="case-card"><div className="case-meta"><span>{c.sector}</span><span>0{i+1}</span></div><div className="case-type">{c.type}</div><h3>{c.title}</h3><div className="case-block"><small>THE CHALLENGE</small><p>{c.body}</p></div><div className="case-outcome"><Check size={16}/><p>{c.outcome}</p></div></Reveal>)}</div>
  </div></section>;
}

function Founder() {
  return <section className="founder section-pad" id="about-founder"><div className="container founder-grid">
    <Reveal className="founder-visual"><div className="founder-monogram">GI<span>.</span></div><div className="founder-visual-bottom"><span>THE PRACTICE</span><span>EST. 2022 · INDIA</span></div></Reveal>
    <Reveal className="founder-copy"><span className="section-kicker">THE THINKING BEHIND THE WORK</span><h2>Experience that sees<br/><em>the bigger picture.</em></h2><h3>Gopal A. Iyer</h3><div className="founder-role">FOUNDER & PRINCIPAL ADVISOR</div><p className="founder-quote">“The problem is almost never ability. It is almost always alignment. And alignment, unlike talent, can be deliberately designed.”</p><p>With 22+ years across Goldman Sachs, Deloitte, EY, Target Corporation and IIM Ahmedabad, Gopal works at the intersection of business transformation, leadership agility and career reinvention.</p><p>Career Shifts Consulting was founded to bridge the gap between potential and execution — helping leaders break inertia, build momentum and own their future.</p><a className="text-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={16}/></a></Reveal>
  </div></section>;
}

function Advisory() {
  const people = [
    ["PP","Phani Pattamatta","COO, HYSEA · Fractional Executive","24 years in corporate leadership across technology and ecosystem enablement."],
    ["AM","Achyut Menon","MD, Options Executive Search","34 years inside executive talent markets, working across 60+ countries."],
    ["PI","Dr Prashant Iyer","Founder, Alpha Minds · ICF Coach","Research and practice spanning strategic leadership, startups and innovation."]
  ];
  return <section className="advisory section-pad"><div className="container"><div className="section-head"><div><span className="section-kicker">ADVISORY BOARD</span><h2>Independent thinking.<br/><em>Collective perspective.</em></h2></div><p>The thinking partners behind the practice bring depth across leadership, talent, strategy and organisational change.</p></div>
    <div className="people-grid">{people.map(([initials,name,role,bio])=><Reveal className="person-card" key={name}><div className="person-avatar">{initials}</div><h3>{name}</h3><small>{role}</small><p>{bio}</p></Reveal>)}</div>
  </div></section>;
}

function Contact() {
  return <section className="contact section-pad" id="contact"><div className="container contact-panel"><div className="contact-orbit"></div><div className="contact-content"><span className="section-kicker">A GOOD PLACE TO BEGIN</span><h2>The challenge is rarely<br/>what it first <em>appears to be.</em></h2><p>The first conversation is always confidential. And always valuable — whether or not an engagement follows.</p><Button>Start a conversation</Button><div className="contact-assurance"><ShieldCheck size={16}/> All enquiries responded to personally within 2 business days</div></div><div className="contact-side"><span>HAVE A COMPLEX<br/>CHALLENGE?</span><MessageCircle size={42} strokeWidth={1}/><span>LET'S THINK<br/>IT THROUGH.</span></div></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div className="footer-brand"><Logo light/><p>Leadership and organisational advisory, built on rigorous diagnosis — not off-the-shelf frameworks.</p><span className="footer-origin">FOUNDED IN INDIA. BUILT FOR THE WORLD.</span></div><div className="footer-col"><b>PRACTICES</b><a href="#practices">Collective Leadership</a><a href="#practices">Leadership Development</a><a href="#practices">Executive Coaching</a><a href="#practices">Strategy & Culture</a></div><div className="footer-col"><b>FIRM</b><a href="#method">How We Work</a><a href="#about">About</a><a href="#evidence">Case Evidence</a><a href="#contact">Contact Us</a></div><div className="footer-col footer-connect"><b>CONNECT</b><a href="tel:+917406588111">+91 74065 88111</a><a href="mailto:connect@careershifts.in">connect@careershifts.in</a><div className="socials"><a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin/></a><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram/></a><a href="https://www.youtube.com/" aria-label="YouTube"><Youtube/></a></div></div></div><div className="footer-bottom"><span>© 2026 Career Shifts Consulting. All rights reserved.</span><div><a href="#privacy">Privacy Policy</a><a href="#terms">Terms & Conditions</a></div></div></div></footer>;
}

function App() {
  return <><a className="skip-link" href="#main">Skip to main content</a><Navbar/><main id="main"><Hero/><Metrics/><Intro/><Problems/><Practices/><Method/><Evidence/><Founder/><Advisory/><Contact/></main><Footer/></>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
