import React, { useEffect, useState } from "react";

import { createRoot } from "react-dom/client";

import "./styles.css";
import "./premium.css";



const imageFiles = import.meta.glob("./images/*", {

  eager: true,

  query: "?url",

  import: "default",

});



const getImage = (filename) => imageFiles[`./images/${filename}`] || "";



const images = {

  hero: getImage("careers building.avif"),

  founder: getImage("gopal.avif") || getImage("p1.avif"),

  founder2: getImage("p8.avif"),

  corridor: getImage("corridor.avif"),

  signature: getImage("signature.avif"),

  podcast: getImage("podcast baclground.avif"),

  offer1: getImage("whatweoffer1.avif"),

  offer2: getImage("whatweoffer2.avif"),

  offer3: getImage("whatweoffer3.avif"),

  future1: getImage("future ready solution 1.avif"),

  future2: getImage("future ready solution 2.avif"),

  future3: getImage("future ready solution 3.avif"),

};



const practices = [

  ["", "FLAGSHIP PRACTICE", "Collective Leadership & Systems", "Align leadership groups, strengthen enterprise thinking and make transformation work across the whole system.", images.offer1, "#leadership-systems"],

  ["", "THE PROVEN ENGINE", "Leadership Development Journeys", "Build future-ready capability through journeys connected to live business challenges — not one-off training events.", images.offer2, "#development"],

  ["", "INDIVIDUAL & COLLECTIVE", "Executive Coaching", "Support leaders through transitions, build self-awareness and turn potential into purposeful action.", images.offer3, "#coaching"],

  ["", "SYSTEMIC CHALLENGES", "Strategy, Culture & Organisation", "Translate vision and values into choices, operating rhythms and everyday behaviours.", images.future1, "#strategy-culture"],

];



const people = [
  {
    name: "Gopal A. Iyer",
    role: "Founder & Principal Advisor",
    img: "gopal.avif",
    bio: "More than 22 years across Goldman Sachs, Deloitte, EY and Target. Leadership roles at IIM Ahmedabad, including founding Vice President while building the JSW School of Public Policy; and at Noble House Consulting and Gladwell Academy India.",
    credentials: "IIM Kozhikode · ICF PCC · ACTC · Prosci · Hogan · GPHR · ODCP · EMCC EIA · SeriousWork-certified System Level LEGO® Serious Play® facilitator",
    extra: "TEDx speaker, author and podcast host."
  },
  {
    name: "Sreelekha Namboodiri",
    role: "Director of Operations, Career Shifts Consulting",
    img: "sreelekha.avif",
    bio: "Runs operations from the first enquiry through scheduling and delivery, helping every engagement move with care, clarity and consistency."
  }
];

const collaborators = [
  { name: "Deepa Mahesh", role: "Chief Collaborator", img: "deepa.avif" },
  { name: "Dr Prashant Iyer", role: "CEO, Alpha Minds Consulting", img: "prashant.avif" },
  { name: "Rushabh Mota", role: "HR Transformation · Policy & Process Architect", img: "rushab.avif" },
  { name: "Lochan Narayanan", role: "Career Transitions Coach · Leadership Consultant", img: "lochan.avif" }
];

const board = [
  { name: "Phani Pattamatta", role: "COO, HYSEA · Fractional Executive", img: "phani.avif", bio: "Supports B2B relationships and growth." },
  { name: "Achyut K Menon", role: "MD, Options Executive Search", img: "achyut.avif", bio: "Brings executive talent, NRI and individual-client perspectives." },
  { name: "Dr Prashant Iyer", role: "CEO, Alpha Minds Consulting", img: "prashant.avif", bio: "Contributes to individual programmes, D3 and SMB work." },
  { name: "Deepa Mahesh", role: "Chief Collaborator", img: "deepa.avif", bio: "Brings a systemic coaching perspective." }
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

      <label>Phone number<CountryPhoneField /></label>

      <label className="full">What are you working on? *<textarea name="challenge" rows="4" placeholder="Describe the situation in your own words..." required /></label>

    </div>

    <label className="consent"><input type="checkbox" required /> I agree to be contacted by Career Shifts Consulting about this enquiry.</label>

    <button className="button button-red" type="submit">Send enquiry <span>↗</span></button>

    <p className="form-note">Your enquiry is confidential. We aim to respond personally within 2 business days.</p>

  </form>;

}



const COLLABORATION_ROLES = ["Facilitator", "HR Consultant", "Fractional CXO"];

const EXPERTISE_AREAS = [

  "Leadership development", "Executive and team coaching", "Strategy and culture",

  "Organisation design and OD", "Talent, performance and capability",

  "Change and transformation", "HR strategy and operating model",

  "Futures and design thinking", "Other"

];

const LAUNCHPAD_AREAS = [

  "Learning Experiences & Leadership",

  "Podcasting, Writing & Storytelling",

  "Brand, Digital Marketing & Community Growth",

  "Business, Client Work & New Ideas"

];



function FormField({ label, required = false, hint, children, className = "" }) {

  return (

    <div className={`application-field ${className}`}>

      <span>{label}{required && <b> *</b>}</span>

      {children}

      {hint && <small>{hint}</small>}

    </div>

  );

}



function FormSection({ eyebrow, title, description, children }) {

  return (

    <section className="application-section">

      <div className="application-section-heading">

        <span>{eyebrow}</span>

        <h2>{title}</h2>

        {description && <p>{description}</p>}

      </div>

      <div className="application-fields">{children}</div>

    </section>

  );

}



function WordCountField({ name, label, required = false, hint, minWords = 0, maxWords = 1000, rows = 5 }) {

  const [value, setValue] = useState("");

  const count = value.trim() ? value.trim().split(/\s+/).length : 0;

  return (

    <FormField label={label} required={required} hint={hint} className="field-full">

      <textarea

        name={name}

        rows={rows}

        value={value}

        onChange={(event) => setValue(event.target.value)}

        required={required}

        maxLength={maxWords * 12}

        placeholder="Write your response here..."

      />

      <small className={count > maxWords ? "word-count over-limit" : "word-count"}>

        {count} words{minWords ? ` · aim for ${minWords}–${maxWords}` : ""}

      </small>

    </FormField>

  );

}



function ChoiceGroup({ name, options, max = 4, required = false, firstChoice = false }) {

  const [selected, setSelected] = useState([]);

  const [first, setFirst] = useState("");

  const toggle = (option) => {

    setSelected((current) => {

      if (current.includes(option)) {

        if (first === option) setFirst("");

        return current.filter((item) => item !== option);

      }

      if (current.length >= max) return current;

      return [...current, option];

    });

  };



  return (

    <div className="choice-group">

      <div className="choice-grid">

        {options.map((option) => (

          <div className={`choice-card ${selected.includes(option) ? "selected" : ""}`} key={option}>

            <label>

              <input

                type="checkbox"

                name={name}

                value={option}

                checked={selected.includes(option)}

                onChange={() => toggle(option)}

                required={required && selected.length === 0 && option === options[0]}

              />

              <span>{option}</span>

            </label>

          </div>

        ))}

      </div>

      <small className="choice-limit">Choose up to {max}. {selected.length}/{max} selected.</small>

    </div>

  );

}



function UploadField({ name, label, required = false, optional = false }) {

  const [fileName, setFileName] = useState("");

  const [error, setError] = useState("");

  const handleFile = (event) => {

    const file = event.target.files?.[0];

    setError("");

    if (!file) {

      setFileName("");

      return;

    }

    const allowed = /\.(pdf|doc|docx)$/i.test(file.name);

    if (!allowed) {

      setError("Please upload a PDF or Word document.");

      event.target.value = "";

      setFileName("");

      return;

    }

    if (file.size > 5 * 1024 * 1024) {

      setError("The file must be 5 MB or smaller.");

      event.target.value = "";

      setFileName("");

      return;

    }

    setFileName(file.name);

  };



  return (

    <FormField label={label} required={required} hint="PDF or Word, up to 5 MB." className="field-full">

      <input

        className="file-input"

        type="file"

        name={name}

        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"

        required={required}

        onChange={handleFile}

      />

      {fileName && <small className="file-selected">Selected: {fileName}</small>}

      {optional && <small>Optional</small>}

      {error && <small className="field-error">{error}</small>}

    </FormField>

  );

}




const PREFERRED_ENGAGEMENTS = [
  "Leadership team alignment and facilitation",
  "Executive and team coaching",
  "Leadership development journeys",
  "Strategy, culture and organisation development",
  "Change and transformation",
  "HR strategy and operating model",
  "Talent, performance and capability",
  "Futures thinking and design",
  "Fractional leadership / advisory",
  "Other"
];

function CountryPhoneField({ name = "phone", required = false }) {
  const [country, setCountry] = useState("+91");

return (
  <div className="country-phone">
    <select
      aria-label="Country calling code"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      {[
        ["India", "+91"],
        ["United States", "+1"],
        ["United Kingdom", "+44"],
        ["Singapore", "+65"],
        ["United Arab Emirates", "+971"],
        ["Australia", "+61"],
        ["Canada", "+1"],
        ["Germany", "+49"],
        ["France", "+33"],
        ["Other", ""],
      ].map(([label, value]) => (
        <option key={`${label}-${value}`} value={value}>
          {value || "Other"}
        </option>
      ))}
    </select>

    <input type="hidden" name="countryCode" value={country} />

    <input
      name={name}
      type="tel"
      autoComplete="tel-national"
      placeholder="Phone number"
      required={required}
    />
  </div>
);
}

function IndustryField() {
  const [industry, setIndustry] = useState("");
  return (
    <>
      <select name="industry" value={industry} onChange={(e) => setIndustry(e.target.value)}>
        <option value="">Select an industry</option>
        {["IT / Technology", "Banking & Financial Services", "Consulting", "Healthcare", "Education", "Manufacturing", "Retail", "Telecom", "Automotive", "Pharma", "Government", "Media", "Real Estate", "FMCG", "Other"].map((x) => <option key={x}>{x}</option>)}
      </select>
      {industry === "Other" && <input name="industryOther" placeholder="Please specify your industry" />}
    </>
  );
}

function DiscoveryButton({ onClick, children = "Book a discovery call" }) {
  return <button className="button button-red discovery-button" type="button" onClick={onClick}>{children} <span>↗</span></button>;
}

function ApplicationPage({ type }) {

  const isCollaborate = type === "collaborate";



  return (

    <div className="application-page">

      <Header onContact={() => { window.location.href = "/#contact"; }} />

      <main>

        <section className="application-hero">

          <div className="application-hero-inner">

            <span className="eyebrow light">

              {isCollaborate ? "COLLABORATE WITH CAREER SHIFTS · EXPRESSION OF INTEREST" : "CAREER SHIFTS LAUNCHPAD · APPLICATION"}

            </span>

            <h1>{isCollaborate ? <>Tell Us Where<br /><em>You Add The Most.</em></> : <>Start Here.<br /><em>Tell Us How You Think.</em></>}</h1>

            <p>

              {isCollaborate

                ? "Career Shifts works with a small network of experienced facilitators, HR consultants and fractional CXOs on client projects in leadership, culture and organisation. This takes about ten minutes. Every response is read personally and answered within 2 business days."

                : "A chance to learn by doing, take ownership of real work and make a contribution people can see. We value clear thinking, curiosity and follow-through over a perfectly polished résumé."}

            </p>

            {isCollaborate ? (

              <div className="application-good-to-know">

                <b>GOOD TO KNOW</b>

                <p>Joining the network is not an exclusivity arrangement. You stay independent. Scope and commercial terms are agreed in writing for each engagement, before any work begins.</p>

              </div>

            ) : (

              <div className="application-good-to-know">

                <b>THE OPPORTUNITY</b>

                <p>12 weeks. Full-time. Bengaluru hybrid. Attractive stipend. Real projects across learning, content, podcasting, marketing and business growth. A longer-term role may be considered based on contribution, mutual fit and business needs. It is not guaranteed.</p>

              </div>

            )}

          </div>

        </section>



        <div className="application-container">

          {typeof window !== "undefined" && new URLSearchParams(window.location.search).get("submitted") === "true" && (

            <div className="application-success" role="status">

              Thank you. Your application has been submitted to Career Shifts.

            </div>

          )}

          <form

              className="long-application-form"

              action="https://formsubmit.co/connect@careershifts.in"

              method="POST"

              encType="multipart/form-data"

            >

              <input type="hidden" name="_subject" value={isCollaborate ? "New Collaborate Expression of Interest — Career Shifts" : "New Launchpad Application — Career Shifts"} />

              <input type="hidden" name="_template" value="table" />

              <input type="hidden" name="_captcha" value="true" />

              <input

                type="hidden"

                name="_next"

                value={typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}?submitted=true` : ""}

              />

              <input type="hidden" name="applicationType" value={isCollaborate ? "Collaborate Expression of Interest" : "Launchpad Application"} />

              <div className="application-required-note">Fields marked <b>*</b> are required.</div>



              <FormSection eyebrow="ABOUT YOU" title="Let’s begin with the basics.">

                <FormField label="Full Name" required><input name="fullName" autoComplete="name" required /></FormField>

                <FormField label="Email Address" required><input name="email" type="email" autoComplete="email" required /></FormField>

                <FormField label="Phone number" required><CountryPhoneField required /></FormField>

                <FormField label="Current City" required><input name="currentCity" required /></FormField>

                <FormField label={isCollaborate ? "LinkedIn Profile" : "LinkedIn Profile Or Portfolio URL"}><input name="linkedinOrPortfolio" type="url" placeholder="https://" /></FormField>

                {isCollaborate && <FormField label="Website Or Portfolio"><input name="website" type="url" placeholder="https://" /></FormField>}

                <UploadField name="cv" label={isCollaborate ? "Profile Or CV" : "CV / Résumé"} required />

              </FormSection>



              {isCollaborate ? (

                <>

                  <FormSection eyebrow="HOW YOU WOULD COLLABORATE" title="Where do you sit in the network?" description="Choose up to two.">

                    <FormField label="I Am A" required className="field-full">

                      <ChoiceGroup name="collaborationRoles" options={COLLABORATION_ROLES} max={2} required />

                    </FormField>

                    <FormField label="Your current role and organisation" required hint="Write “Independent” if you work on your own."><input name="currentRoleOrganisation" required /></FormField>

                    <FormField label="Years of relevant experience" required><input name="yearsExperience" type="number" min="0" max="60" required /></FormField>

                    <FormField label="Where are you based, and where can you deliver?" required hint="Cities, remote, or willingness to travel." className="field-full"><textarea name="deliveryLocations" rows="3" required /></FormField>

                  </FormSection>



                  <FormSection eyebrow="YOUR EXPERTISE" title="What are you known for?">

                    <FormField label="Areas Of Strength" required hint="Choose up to four." className="field-full">

                      <ChoiceGroup name="expertiseAreas" options={EXPERTISE_AREAS} max={4} required />

                    </FormField>

                    <FormField label="Industries you know best"><IndustryField /></FormField>

                    <FormField label="Certifications and tools" hint="For example ICF, Hogan, LEGO® Serious Play®, Prosci, ODCP."><input name="certificationsTools" /></FormField>

                    <WordCountField name="strongestWork" label="Describe your strongest area of work and what makes you different." required minWords={100} maxWords={150} />

                  </FormSection>



                  <FormSection eyebrow="WORKING TOGETHER" title="What would good look like?">

                    <FormField label="What kinds of engagements do you want to work on?" required hint="Choose up to five." className="field-full"><ChoiceGroup name="preferredEngagements" options={PREFERRED_ENGAGEMENTS} max={5} required /></FormField>

                    <FormField label="Typical engagement length you prefer"><select name="engagementLength" defaultValue=""><option value="" disabled>Select an option</option><option>Days</option><option>Weeks</option><option>Months</option><option>Fractional retainer</option></select></FormField>

                    <FormField label="Availability over the next six months" required><select name="availability" defaultValue="" required><option value="" disabled>Select an option</option><option>Immediate</option><option>Within 1–3 months</option><option>Limited</option></select></FormField>

                    <FormField label="Engagement model you prefer"><select name="engagementModel" defaultValue=""><option value="" disabled>Select an option</option><option>Fixed fee</option><option>Revenue share</option><option>Open to either</option></select></FormField>

                    <FormField label="How did you hear about Career Shifts?"><input name="referralSource" /></FormField>

                    <FormField label="Anything else you would like us to know?" className="field-full"><textarea name="additionalInformation" rows="4" /></FormField>

                  </FormSection>

                  <div className="application-before-submit"><b>BEFORE YOU SUBMIT</b><p>Make sure every link you share can be opened. Client information you may discuss with us stays confidential, in both directions.</p></div>

                  <label className="application-consent"><input type="checkbox" name="confidentialityConfirmation" value="yes" required /> I confirm that my answers are my own and that I will treat all client information with complete confidentiality. <b>*</b></label>

                </>

              ) : (

                <>

                  <FormSection eyebrow="COMMITMENT & LOGISTICS" title="Can we plan around you?" description="Launchpad is full-time for twelve weeks. A short, honest answer helps us plan.">

                    <FormField label="Can you commit to a full-time, 12-week programme?" required className="field-full">

                      <div className="radio-options">

                        <label><input type="radio" name="fullTimeCommitment" value="Yes" required /> Yes</label>

                        <label><input type="radio" name="fullTimeCommitment" value="No" /> No</label>

                      </div>

                    </FormField>

                    <FormField label="Any Constraint We Should Know About?" className="field-full"><textarea name="constraints" rows="3" /></FormField>

                    <FormField label="Where are you based, and can you participate in a Bengaluru hybrid arrangement?" required className="field-full"><textarea name="bengaluruHybrid" rows="3" required /></FormField>

                    <FormField label="When could you start?"><input name="startDate" type="date" min={new Date().toISOString().split("T")[0]} /></FormField>

                  </FormSection>



                  <FormSection eyebrow="YOUR POINT OF VIEW" title="What would you build?" description="There is no single “right” background for Launchpad. Choose the work that genuinely interests you, then tell us how you would approach it.">

                    <FormField label="Where do you want to contribute?" required hint="Choose up to two areas, and mark your first choice." className="field-full">

                      <ChoiceGroup name="contributionAreas" options={LAUNCHPAD_AREAS} max={2} required firstChoice />

                    </FormField>

                    <WordCountField name="whyLaunchpad" label="Why does this opportunity interest you now? What would make these 12 weeks meaningful for you?" required minWords={100} maxWords={150} />

                    <WordCountField name="problemToSolve" label="What is one problem in learning, careers, content or growth that you would be excited to help solve? What would you do first?" required minWords={100} maxWords={150} />

                    <WordCountField name="dayOneContribution" label="What could you contribute from day one, even while you are still learning?" required />

                  </FormSection>



                  <FormSection eyebrow="VIDENCE OF OWNERSHIP" title="Show us your thinking." description="Strong applications use real examples. Tell us what you did personally, what changed, and what you learned. Short, honest answers are welcome.">

                    <WordCountField name="ownershipExample" label="Tell us about something you took from an idea or brief to a finished result. What was your role, what did you do, and what happened?" required />

                    <WordCountField name="feedbackExample" label="Tell us about feedback that changed how you approached a piece of work. What did you change?" required />

                  </FormSection>



                  <FormSection eyebrow="A PRACTICAL SITUATION" title="One busy day.">

                    <WordCountField name="prioritisationScenario" label="You have two important tasks due today. A new urgent request arrives, and you can’t do everything at once. How would you decide what to do, and what would you communicate to the people involved?" required />

                  </FormSection>



                  <FormSection eyebrow="WORK SAMPLE" title="Make it tangible." description="A sample does not need to be polished or professional work. We want to understand the choices you made, what you learned and how you would make it better.">

                    <FormField label="Share one work sample that shows how you think or make things." required hint="Paste a link, or write “Attached” and send the file with your application. Make sure every link can be opened." className="field-full"><input name="workSampleLink" required placeholder="https:// or Attached" /></FormField>

                    <UploadField name="workSampleFile" label="Attach A Work Sample (Optional)" optional />

                    <WordCountField name="workSampleReflection" label="What was the brief or goal? What part was yours? What would you improve if you had another chance?" required />

                  </FormSection>



                  <FormSection eyebrow="WHAT COMES NEXT" title="Where do you want to grow?">

                    <WordCountField name="growthArea" label="What is one skill or area you most want to stretch during Launchpad?" required />

                    <FormField label="Anything else you would like us to know?" className="field-full"><textarea name="additionalInformation" rows="4" /></FormField>

                  </FormSection>

                  <div className="application-before-submit"><b>BEFORE YOU SUBMIT</b><p>Include your CV and make sure every link you share can be opened. Your answers should be your own.</p></div>

                  <label className="application-consent"><input type="checkbox" name="answersConfirmation" value="yes" required /> I confirm that my answers are my own and that the links I have shared can be opened. <b>*</b></label>

                </>

              )}



              <div className="application-submit-row">

                <button className="button button-red application-submit" type="submit">

                  {isCollaborate ? "Submit Interest" : "Submit Application"} <span>↗</span>

                </button>

                <p>{isCollaborate

                  ? "Every response is read by a person and answered within 2 business days. Your details are used only for this purpose."

                  : "Every application is read by a person and every applicant hears back. Your details are used only for Launchpad."}</p>

              </div>

            </form>

        </div>

      </main>

      <Footer onContact={() => { window.location.href = "/#contact"; }} />

    </div>

  );

}



function Header({ onContact }) {

  const [open, setOpen] = useState(false);

  const nav = [["How We Work", "/#method"], ["Our Practices", "/#practices"], ["Case Stories", "/#perspectives"],   ["Launchpad", "/launchpad"],
  ["Collaborate", "/collaborate"], ["Book", "/book"], ["Podcast", "/podcast"], ["Our Team", "/team"]];

  return <header className="site-header">

    <a className="wordmark" href="/"><span>career<span className="pink">shifts</span></span><small>CONSULTING</small></a>

    <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "×" : "☰"}</button>

    <nav className={open ? "nav-links open" : "nav-links"}>

      {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}

      <button className="nav-cta" onClick={() => { setOpen(false); onContact(); }}>Start a conversation ↗</button>

    </nav>

  </header>;

}

function Footer({ onContact }) {

  return <footer className="footer"><div className="footer-top">

    <div><a className="wordmark footer-mark" href="/"><span>career<span className="pink">shifts</span></span><small>CONSULTING</small></a><p>Leadership and organisational advisory, built on rigorous diagnosis — not off-the-shelf frameworks.</p><small className="footer-motto">FOUNDED IN INDIA. BUILT FOR THE WORLD.</small>
   <div className="footer-socials">
  <a href="https://www.instagram.com/career.shifts" target="_blank" rel="noreferrer">
    <img src={getImage("instagram.png")} alt="Instagram" />
  </a>

  <a href="https://x.com/goiyerthecoach" target="_blank" rel="noreferrer">
    <img src={getImage("x.png")} alt="X" />
  </a>

  <a href="https://www.linkedin.com/company/career-shifts-consulting/home/" target="_blank" rel="noreferrer">
    <img src={getImage("linkedin.png")} alt="LinkedIn" />
  </a>

  <a href="https://www.youtube.com/@careershifts" target="_blank" rel="noreferrer">
    <img src={getImage("youtube.png")} alt="YouTube" />
  </a>
</div>
    </div>

    <div><b>PRACTICES</b><a href="#leadership-systems">Collective Leadership</a><a href="#development">Leadership Development</a><a href="#coaching">Executive Coaching</a><a href="#strategy-culture">Strategy & Culture</a></div>

    <div><b>FIRM</b><a href="/#method">How We Work</a><a href="/#practices">Our Practices</a><a href="/#perspectives">Case Stories</a><a href="/book">Book</a><a href="/podcast">Podcast</a><a href="/team">Our Team</a><a href="/launchpad">Launchpad</a><a href="/collaborate">Collaborate</a></div>

    <div><b>CONNECT</b><a href="tel:+917406588111">+91 74065 88111</a><a href="mailto:connect@careershifts.in">connect@careershifts.in</a><a href="https://www.linkedin.com/company/career-shifts-consulting/home/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.youtube.com/@careershifts" target="_blank" rel="noreferrer">YouTube ↗</a><button onClick={onContact}>Start a Conversation ↗</button></div>

  </div><div className="footer-bottom"><span>© 2026 Career Shifts Consulting. All rights reserved.</span><span>Leadership · Systems · Organisation</span></div></footer>;

}

function Title({ eyebrow, children, text }) {

  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{children}</h2>{text && <p>{text}</p>}</div>;

}



function Methodology({ onBook }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % journey.length), 10000);
    return () => window.clearInterval(timer);
  }, []);
  const glyphs = ["◎", "⌁", "◇", "↗", "∞"];
  return <div className="method-layout method-layout-premium">
    <div className="method-list">{journey.map((item, i) => <button key={item[0]} className={active === i ? "method-row active" : "method-row"} onClick={() => setActive(i)} aria-pressed={active === i}>
      <b>{item[0]}</b><small>{item[1]}</small><i>↗</i>
    </button>)}</div>
    <div className="method-detail" key={active}>
      <span className="eyebrow">THE CAREER SHIFTS METHOD</span><div className="method-glyph">{glyphs[active]}</div>
      <h3>{journey[active][0][0] + journey[active][0].slice(1).toLowerCase()}.</h3>
      <p>{journey[active][2]}</p>
      <div className="method-progress">{journey.map((_, i) => <button key={i} aria-label={`Show ${journey[i][0]}`} className={i === active ? "on" : ""} onClick={() => setActive(i)} />)}</div>
      <DiscoveryButton onClick={onBook} />
    </div>
  </div>;
}

export default function App() {

  const [modal, setModal] = useState(false), [faq, setFaq] = useState(0);

  const [submitted, setSubmitted] = useState(typeof window !== "undefined" && new URLSearchParams(window.location.search).get("submitted") === "true");

  const faqs = [

    ["How long does an engagement take?", "A full coaching engagement runs 6–9 months across three phases, with a call every 3–4 weeks and a follow-up advisory session included at the close. Shorter 3–5 session engagements are available for specific challenges."],

    ["Is the Hogan Assessment mandatory?", "For full engagements, it is included and forms an important data foundation. The assessment approach is discussed and agreed during the discovery conversation."],

    ["Is this confidential?", "Yes. Coaching is conducted under professional coaching ethics and strict confidentiality terms. For organisation-sponsored coaching, boundaries are agreed explicitly before the engagement begins."],

    ["What does the first call look like?", "A 60-minute discovery conversation. No proposal on the table — just genuine inquiry into your situation. The first conversation is valuable in itself."]

  ];

if (typeof window !== "undefined" && window.location.pathname.replace(/\/+$/, "") === "/launchpad") return <ApplicationPage type="launchpad" />;

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

      </div><div className="hero-index"></div></section>



      <div className="trust-strip wrap"><span>BUILT FOR THE MOMENTS THAT MATTER</span><div><b>LEADERSHIP</b><b>SYSTEMS</b><b>ORGANISATION</b><b>TRANSFORMATION</b></div></div>



      <section className="section-pad wrap intro-section" id="about"><div><span className="eyebrow">A DIFFERENT KIND OF ADVISORY</span><h2>See what others miss.<br /><em>Shape what comes next.</em></h2></div><div className="intro-copy"><p className="large-copy">Most organisations don't have a strategy problem. They have a leadership system that cannot execute the strategy they have.</p><p>Career Shifts works in the space between what leaders intend and what the organisation experiences. We bring rigorous diagnosis, deep human understanding and systems thinking to the moments when the next move matters most.</p><a className="text-link" href="#method">Explore our approach ↗</a></div></section>



      <section className="metrics-band"><div className="wrap metrics-grid"><div><span className="eyebrow light">THE CASE FOR CHANGE</span><h2>When leadership moves with intent,<br /><em>the whole organisation moves.</em></h2></div><div className="metric"><strong>70%</strong><span>of transformations fail to achieve intended goals</span><small>MCKINSEY</small></div><div className="metric"><strong>3.7×</strong><span>revenue advantage for strong-culture organisations</span><small>DELOITTE</small></div><div className="metric"><strong>788%</strong><span>average ROI reported from executive coaching</span><small>METRIXGLOBAL</small></div></div><div className="wrap metric-disclaimer">Indicative research references. Verify original reports and publication dates before external publication.</div></section>



      <section className="section-pad wrap" id="method"><Title eyebrow="THE WAY WE WORK" text="A disciplined process that begins by making the invisible visible — and ends with change that holds.">See → Sense → Shape<br /><em>→ Shift → Sustain.</em></Title><Methodology onBook={() => setModal(true)} /></section>



      <section className="section-pad practice-section" id="practices"><div className="wrap"><Title eyebrow="OUR PRACTICES" text="Every engagement begins with diagnosis. We design the right intervention for the challenge — never a programme pulled from a catalogue.">Four integrated<br /><em>practices.</em></Title><div className="practice-grid">{practices.map(p => <article className="practice-card" key={p[0]}><div className="practice-photo"><img src={p[4]} alt="" loading="lazy" /><span>{p[0]}</span></div><div className="practice-body"><small>{p[1]}</small><h3>{p[2]}</h3><p>{p[3]}</p><a href={p[5]}>Explore practice <b>↗</b></a></div></article>)}</div></div></section>



      <section className="section-pad problem-section"><div className="wrap problem-layout"><div><span className="eyebrow light">WHAT WE SOLVE</span><h2>The problems rarely<br />arrive <em>neatly labelled.</em></h2><p>We look beneath the presenting issue to understand the patterns, relationships and choices shaping the outcome.</p><button className="button button-outline" onClick={() => setModal(true)}>Talk through your challenge ↗</button></div><div className="problem-list">{problems.map((p, i) => <div className="problem-row" key={p}><span>0{i + 1}</span><p>{p}</p><b>↗</b></div>)}</div></div></section>



      <section className="section-pad wrap feature-section" id="coaching"><div className="feature-image"><img src={images.founder2} alt="Gopal A. Iyer" loading="lazy" /></div><div className="feature-copy"><span className="eyebrow">FOR INDIVIDUALS</span><h2>Your next chapter<br />isn't found. It's <em>created.</em></h2><p>Most high performers who come to Career Shifts have already diagnosed the problem. What they need is a more rigorous conversation about whether that diagnosis is correct.</p><ul><li>The high performer who has become invisible in their organisation.</li><li>The professional at a genuine crossroads.</li><li>The first-time CXO navigating a new level of leadership.</li><li>The leader returning from a break, rebuilding confidence and momentum.</li></ul><button className="text-link button-link" onClick={() => setModal(true)}>Book a discovery call ↗</button></div></section>



      <section className="section-pad coaching-journey"><div className="wrap"><Title eyebrow="EXECUTIVE COACHING" text="Three phases. One practitioner throughout. A focused 6–9 month journey, with a call every 3–4 weeks.">Dream. Dare. <em>Do.</em></Title><div className="journey-cards">{[["", "DREAM", "Surface what is actually happening.", "Hogan Assessment (HPI, HDS, MVPI), debrief and 360° perception interviews."], ["", "DARE", "Design what comes next.", "Future-State Blueprint, career roadmap and positioning strategy."], ["", "DO", "Execute and make it hold.", "Coaching calls every 3–4 weeks across 6–9 months, plus advisory session."]].map(x => <article key={x[1]}><span>PHASE {x[0]}</span><h3>{x[1]}</h3><h4>{x[2]}</h4><p>{x[3]}</p></article>)}</div><div className="hogan-note"><div><span className="eyebrow">DIAGNOSTIC FOUNDATION</span><h3>Why Hogan first.</h3></div><p>The most important things about a leader rarely surface in a conversation. They surface in the data. Hogan tools explore leadership style, potential derailers under pressure, and the values that shape motivation.</p></div></div></section>



      <section className="section-pad wrap" id="leadership-systems"><div className="split-heading"><div><span className="eyebrow">FLAGSHIP PRACTICE</span><h2>Collective Leadership<br /><em>and Systems.</em></h2></div><div><p>Most organisations don't have a strategy problem. They have a leadership system that cannot execute the strategy they have. This practice works at that intersection.</p><DiscoveryButton onClick={() => setModal(true)} /></div></div>
      <div className="six-grid">
  {[
    ["Strategy alignment and facilitation", "Offsite design, facilitation and the difficult conversations alignment requires."],
    ["Leadership group effectiveness", "Diagnostic, team coaching and structural interventions."],
    ["Complex stakeholder systems", "Systems mapping, facilitation and alignment design."],
    ["Transformation and culture", "Fundamental change in how the organisation operates and leads."],
    ["Futures thinking", "Scenario planning and futures methodology."],
    ["Ways of working", "Redesigning rituals, structures and norms."]
  ].map((x) => (
    <article key={x[0]}>
      <h3>{x[0]}</h3>
      <p>{x[1]}</p>
    </article>
  ))}
</div> <div className="signature-method"><img src={images.signature} alt="Career Shifts facilitation" loading="lazy" /><div><span className="eyebrow">SIGNATURE METHOD</span><h3>Make the invisible tangible.</h3><p>LEGO® Serious Play® is a structured methodology for making complex, systemic challenges visible and discussable in ways conversation alone cannot achieve.</p><p>Career Shifts holds SeriousWork System Level certification.</p></div></div></section>



      <section className="section-pad development-section" id="development"><div className="wrap"><Title eyebrow="PRACTICE · THE PROVEN ENGINE" text="Not a programme. A journey. The difference between an event that is attended and a shift that is made.">Leadership Development<br /><em>Journeys.</em></Title><div className="development-grid">{[["", "Design sprint", "Diagnose the specific challenge and define outcomes."], ["", "Cohort launch", "An immersive opening session, with diagnostics where relevant."], ["", "Application modules", "Monthly workshops connecting learning to live work."], ["", "Transfer & measure", "Measure outcomes and provide 90-day post-programme advisory."]].map(x => <article key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></div></section>



      <section className="section-pad wrap" id="strategy-culture"><div className="split-heading"><div><span className="eyebrow">PRACTICE · SYSTEMIC CHALLENGES</span><h2>Strategy, Culture<br /><em>and Organisation.</em></h2></div><div><p>When the challenge is not a person or a team — it is the system itself. Vision, values, culture, structure and succession: the architecture of how the organisation leads itself.</p><DiscoveryButton onClick={() => setModal(true)} /></div></div><div className="strategy-list">{["Vision and values design", "Culture diagnostics and change", "Organisation development", "Change advisory", "Succession and readiness"].map((x, i) => <div key={x}><span>0{i + 1}</span><h3>{x}</h3><p>{["A vision that is genuinely navigable and values that become decision-making filters.", "Understand the gap between the culture described and the culture actually operating.", "OD diagnostic, redesign and implementation advisory.", "Advisory on the leadership of change, not just the management of it.", "Assess whether the organisation has the leadership capability its next chapter requires."][i]}</p></div>)}</div></section>



      <section className="testimonial-band"><div className="wrap"><span className="eyebrow light">THE THINKING BEHIND THE WORK</span><blockquote>“The problem is almost never ability. It is almost always alignment.”</blockquote><small>GOPAL A. IYER · FOUNDER & PRINCIPAL ADVISOR</small></div></section>



      <section className="section-pad wrap founder-layout" id="founder"><div className="founder-photo"><img src={images.founder} alt="Gopal A. Iyer" loading="lazy" /></div><div><span className="eyebrow">ABOUT THE FOUNDER</span><h2>Built from two decades<br />inside the <em>problem.</em></h2><h3>Gopal A. Iyer</h3><small>FOUNDER & PRINCIPAL ADVISOR · BENGALURU</small><p>For 22+ years, Gopal has worked at the intersection of business transformation, leadership agility and career reinvention. Across Goldman Sachs, Target, Deloitte, EY and IIM Ahmedabad, he partnered with senior leaders to align leadership with strategy, drive cultural transformation and navigate complex change.</p><p>Career Shifts was founded to bridge the gap between potential and execution — helping individuals and businesses break inertia, build momentum and own their future.</p><div className="credentials">ICF PCC · ACTC · EMCC SENIOR PRACTITIONER · HOGAN CERTIFIED · LSP FACILITATOR · PROSCI</div><a className="text-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div></section>



      <section className="section-pad network-section" id="team">
        <div className="wrap">
          <Title eyebrow="CORE TEAM" text="A lean core team bringing leadership perspective, operational discipline and deep experience to every engagement.">The people behind<br /><em>the practice.</em></Title>
          <div className="people-grid core-team-grid">
            {people.map((person) => <article className="person-card" key={person.name}>
              <div className="person-photo"><img src={getImage(person.img)} alt={person.name} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} /><span className="person-initials">{person.name.split(" ").map((x) => x[0]).slice(0, 2).join("")}</span></div>
              <h3>{person.name}</h3><p className="person-role">{person.role}</p><p>{person.bio}</p>
              {person.credentials && <small className="person-credentials">{person.credentials}</small>}
              {person.extra && <small>{person.extra}</small>}
            </article>)}
          </div>
          <div className="team-subheading"><span className="eyebrow">COLLABORATORS</span><h3>Specialists who strengthen the work.</h3></div>
          <div className="people-grid collaborator-grid">
            {collaborators.map((person) => <article className="person-card" key={person.name}>
              <div className="person-photo"><img src={getImage(person.img)} alt={person.name} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} /><span className="person-initials">{person.name.split(" ").map((x) => x[0]).slice(0, 2).join("")}</span></div>
              <h3>{person.name}</h3><p>{person.role}</p>
            </article>)}
          </div>
        </div>
      </section>
      <section className="section-pad wrap" id="advisory">
        <Title eyebrow="ADVISORY BOARD" text="Experienced leaders bringing strategic guidance and critical perspective across growth, executive talent and systemic coaching.">Independent thinking.<br /><em>Collective perspective.</em></Title>
        <div className="people-grid board-grid">
          {board.map((person) => <article className="person-card" key={person.name}>
            <div className="person-photo"><img src={getImage(person.img)} alt={person.name} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} /><span className="person-initials">{person.name.split(" ").map((x) => x[0]).slice(0, 2).join("")}</span></div>
            <h3>{person.name}</h3><p>{person.role}</p><small>{person.bio}</small>
          </article>)}
        </div>
      </section>

      <section className="section-pad podcast-section" id="podcast"><div className="wrap podcast-layout"><div><span className="eyebrow light">CAREER SHIFTS PODCAST</span><h2>The stories you don't hear in boardrooms. <em>But the ones that shape them.</em></h2><p>Conversations with leaders, misfits, change-makers and everyday professionals who chose to rewrite their careers — and sometimes, their lives.</p><a className="button button-outline" href="https://www.youtube.com/" target="_blank" rel="noreferrer">Watch episodes ↗</a></div><img src={images.podcast} alt="Career Shifts Podcast" loading="lazy" /></div></section>



      <section className="section-pad wrap tedx-section"><div><span className="eyebrow">IDEAS WORTH SHARING</span><h2>Gopal Iyer on <em>TEDx.</em></h2><p>A perspective on leadership, change and the choices that shape our next chapter.</p><a className="text-link" href="https://www.youtube.com/watch?v=iqOHW2iINh0" target="_blank" rel="noreferrer">Watch the TEDx talk ↗</a></div><a className="video-card" href="https://www.youtube.com/watch?v=iqOHW2iINh0" target="_blank" rel="noreferrer"><img src="https://img.youtube.com/vi/iqOHW2iINh0/hqdefault.jpg" alt="Watch Gopal Iyer's TEDx talk" /><span>▶</span></a></section>



      <section className="section-pad perspective-section" id="perspectives"><div className="wrap"><Title eyebrow="PERSPECTIVES" text="Writing, conversations and ideas on leadership, systems, culture and career reinvention.">The intellectual capital<br /><em>behind the practice.</em></Title><div className="article-grid"><article><img src={images.corridor} alt="" loading="lazy" /><small>SYSTEMS · 2 MIN READ</small><h3>The Corridor Knows the Truth</h3><p>Meetings are where people talk. Corridors are where people tell the truth.</p></article><article><img src={images.future2} alt="" loading="lazy" /><small>LEADERSHIP · PERSPECTIVE</small><h3>When alignment stops at the meeting room</h3><p>Agreement is not the same as alignment. The distinction changes everything.</p></article><article><img src={images.future3} alt="" loading="lazy" /><small>CAREERS · REINVENTION</small><h3>The career problem is an identity question</h3><p>High performers often diagnose feeling stuck as a skills gap. It may be something deeper.</p></article></div></div></section>



      <section className="section-pad wrap faq-section"><div><span className="eyebrow">A FEW USEFUL ANSWERS</span><h2>Before you <em>begin.</em></h2></div><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? -1 : i)}>{q}<b>{faq === i ? "−" : "+"}</b></button>{faq === i && <p>{a}</p>}</div>)}</div></section>



      <section className="contact-cta" id="contact"><div className="wrap"><span className="eyebrow light">A GOOD PLACE TO BEGIN</span><h2>The first conversation<br />is always <em>confidential.</em></h2><p>60 minutes for organisations. 30 minutes for individuals. No proposal on the table — just a genuine conversation about your situation.</p><button className="button button-red" onClick={() => setModal(true)}>Start a conversation ↗</button><small>Every enquiry is reviewed personally. We aim to respond within 2 business days.</small></div></section>

    </main>

    <Footer onContact={() => setModal(true)} />

    {modal && <div className="modal-backdrop" onClick={e => { if (e.target === e.currentTarget) setModal(false) }}><div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><button className="modal-close" onClick={() => setModal(false)} aria-label="Close">×</button><span className="eyebrow light">START A CONVERSATION</span><h2 id="contact-title">Tell us about<br /><em>your situation.</em></h2><p>All conversations are confidential and reviewed personally.</p><ContactForm compact /></div></div>}

    {submitted && <div className="toast" role="status">Thank you — your enquiry has been submitted.<button onClick={() => { setSubmitted(false); window.history.replaceState({}, "", window.location.pathname) }}>×</button></div>}

  </>;

}




function BookPage() {
  const movements = [
    ["", "The Inner Shift", "Understand the beliefs, identity and assumptions shaping your choices."],
    ["", "The Courage to Choose", "Move from familiar success to deliberate choices about what matters next."],
    ["", "The Work of Reinvention", "Translate insight into experiments, action and a new direction."],
    ["", "The People Around You", "Recognise the relationships and systems that influence a transition."],
    ["", "A Different Measure of Success", "Build a definition of success that is meaningful and sustainable."]
  ];
  return <div className="inner-page"><Header onContact={() => { window.location.href = "/#contact"; }} />
    <main>
      <section className="inner-hero book-hero"><div className="wrap inner-hero-grid">
        <div><span className="eyebrow light">A BOOK BY GOPAL A. IYER</span><h1>The Other Half<br /><em>of Success.</em></h1>
          <p>Success is not only what you achieve. It is also what you become, what you choose and what gives the achievement meaning.</p>
          <div className="hero-actions"><a className="button button-red" href="https://amzn.in/d/01vCfqbW" target="_blank" rel="noreferrer">Buy the book on Amazon ↗</a><a className="button button-outline" href="#chapter-one">Request Chapter 1</a></div>
        </div>
        <div className="book-cover-wrap"><div className="book-cover"><small>GOPAL A. IYER</small><strong>The Other<br />Half of<br /><em>Success</em></strong><span>Rethinking the journey beyond achievement</span></div></div>
      </div></section>
     {/*<section className="section-pad wrap book-intro"><span className="eyebrow">BEYOND THE CHECKLIST</span><h2>What if success has<br /><em>another half?</em></h2><p>In <strong>The Other Half of Success</strong>, Gopal A. Iyer invites readers to look beyond conventional markers of achievement and consider the inner shifts, choices and relationships that make success whole.</p></section> */}
      <section className="section-pad book-movements"><div className="wrap"><Title eyebrow="FIVE MOVEMENTS" text="A journey of reflection, choice and purposeful action.">The journey through<br /><em>the book.</em></Title><div className="movement-grid">{movements.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
      <section className="section-pad wrap chapter-request" id="chapter-one"><div><span className="eyebrow">READ THE OPENING CHAPTER</span><h2>Start with<br /><em>Chapter 1.</em></h2><p>Share your details and we’ll send you the opening chapter by email.</p></div>
        <form className="chapter-form" action="https://formsubmit.co/connect@careershifts.in" method="POST">
          <input type="hidden" name="_subject" value="Request for Chapter 1 — The Other Half of Success" /><input type="hidden" name="_template" value="table" /><input type="hidden" name="request" value="Chapter 1 email request" />
          <label>Your name<input name="name" required placeholder="Your name" /></label><label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label>
          <label className="consent"><input type="checkbox" name="chapterConsent" value="yes" required /> Please email me Chapter 1 of The Other Half of Success.</label>
          <label className="consent"><input type="checkbox" name="updatesConsent" value="yes" /> I’d also like occasional updates from Career Shifts.</label>
          <button className="button button-red" type="submit">Email me Chapter 1 ↗</button>
        </form>
      </section>
    </main><Footer onContact={() => { window.location.href = "/#contact"; }} /></div>;
}

function PodcastPage() {
  return <div className="inner-page"><Header onContact={() => { window.location.href = "/#contact"; }} />
    <main>
      <section className="inner-hero podcast-hero-page"><div className="wrap inner-hero-grid">
        <div><span className="eyebrow light">CAREER SHIFTS PODCAST</span><h1>Conversations that<br /><em>move thinking.</em></h1>
          <p>60+ episodes hosted by Gopal A. Iyer, exploring leadership, careers, identity, change and the moments that shape the way we work and live.</p>
          <a className="button button-red" href="https://www.youtube.com/@careershifts" target="_blank" rel="noreferrer">Watch on YouTube ↗</a>
        </div><div className="podcast-art">{images.podcast ? <img src={images.podcast} alt="Career Shifts Podcast" /> : <div className="podcast-art-fallback"><span>CAREER SHIFTS</span><strong>The Podcast</strong><small>IDEAS · PEOPLE · POSSIBILITY</small></div>}</div>
      </div></section>
      <section className="section-pad wrap podcast-details"><span className="eyebrow">60+ EPISODES · HOSTED BY GOPAL A. IYER</span><h2>Listen for a different<br /><em>point of view.</em></h2><p>Thoughtful conversations with leaders, practitioners and people who have navigated meaningful shifts. Explore the full episode library on our YouTube channel.</p><a className="button button-red" href="https://www.youtube.com/@careershifts" target="_blank" rel="noreferrer">Explore all episodes ↗</a></section>
      <section className="book-podcast-promo"><div className="wrap"><div><span className="eyebrow light">KEEP THE CONVERSATION GOING</span><h2>Explore <em>The Other Half of Success.</em></h2><p>Continue the conversation with Gopal A. Iyer’s book.</p></div><a className="button button-red" href="/book">Discover the book ↗</a></div></section>
    </main><Footer onContact={() => { window.location.href = "/#contact"; }} /></div>;
}

function TeamPage() {
  const renderPerson = (person) => <article className="person-card" key={person.name}>
    <div className="person-photo"><img src={getImage(person.img)} alt={person.name} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} /><span className="person-initials">{person.name.split(" ").map((x) => x[0]).slice(0,2).join("")}</span></div>
    <h3>{person.name}</h3><p>{person.role}</p>{person.bio && <p>{person.bio}</p>}{person.credentials && <small className="person-credentials">{person.credentials}</small>}{person.extra && <small>{person.extra}</small>}
  </article>;
  return <div className="inner-page"><Header onContact={() => { window.location.href = "/#contact"; }} />
    <main><section className="inner-hero team-hero"><div className="wrap"><span className="eyebrow light">OUR TEAM</span><h1>People who make<br /><em>the work matter.</em></h1><p>A focused core team, trusted collaborators and independent advisors — brought together around the needs of each engagement.</p></div></section>
      <section className="section-pad wrap"><Title eyebrow="CORE TEAM" text="The people who lead and deliver the Career Shifts practice.">The core team.</Title><div className="people-grid core-team-grid">{people.map(renderPerson)}</div></section>
      <section className="section-pad team-soft"><div className="wrap"><Title eyebrow="COLLABORATORS" text="Specialists who bring additional depth to client work.">A trusted circle.</Title><div className="people-grid collaborator-grid">{collaborators.map(renderPerson)}</div></div></section>
      <section className="section-pad wrap"><Title eyebrow="ADVISORY BOARD" text="Independent perspective across business growth, executive talent and systemic coaching.">Guidance that broadens<br /><em>the perspective.</em></Title><div className="people-grid board-grid">{board.map(renderPerson)}</div></section>
      <section className="contact-cta"><div className="wrap"><span className="eyebrow light">WORK WITH US</span><h2>Bring us the challenge<br />you’re <em>working through.</em></h2><a className="button button-red" href="/#contact">Start a conversation ↗</a></div></section>
    </main><Footer onContact={() => { window.location.href = "/#contact"; }} /></div>;
}

function AppRouter() {
  const path = typeof window !== "undefined" ? window.location.pathname.replace(/\/+$/, "") || "/" : "/";
  if (path === "/collaborate") return <ApplicationPage type="collaborate" />;
  if (path === "/launchpad") return <ApplicationPage type="launchpad" />;
  if (path === "/book") return <BookPage />;
  if (path === "/podcast") return <PodcastPage />;
  if (path === "/team") return <TeamPage />;
  return <App />;
}

const rootElement = document.getElementById("root");



if (rootElement) {

  createRoot(rootElement).render(

    <React.StrictMode>

      <AppRouter />

    </React.StrictMode>

  );

}
