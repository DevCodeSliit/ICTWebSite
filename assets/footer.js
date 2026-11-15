// Shared site footer: injected on every page so content stays identical.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('footer').forEach((footer) => {
    footer.className = 'site-footer';
    footer.innerHTML = `<div class="container"><div class="footer-main row g-4"><div class="col-lg-4"><a class="footer-brand d-flex align-items-center gap-2" href="index.html"><i class="bi bi-laptop"></i><span>ICT with <strong>Shakila</strong><small>G.C.E. O/L ICT</small></span></a><p class="footer-copy">Learn ICT with confidence through clear lessons, practical knowledge, and friendly support.</p><p class="footer-motto">Learn. Practice. Grow.</p></div><div class="col-6 col-lg-2"><h2 class="footer-heading">Quick Links</h2><nav class="footer-links"><a href="index.html">Home</a><a href="about.html">About</a><a href="class.html">O/L ICT Class</a><a href="resources.html">Resources</a></nav></div><div class="col-6 col-lg-2"><h2 class="footer-heading">Study Hub</h2><nav class="footer-links"><a href="past-papers.html">Past Papers</a><a href="reels.html">Reels</a><a href="contact.html">Contact</a></nav></div><div class="col-lg-4"><h2 class="footer-heading">Get in Touch</h2><div class="footer-contact"><a href="https://wa.me/94765500954" target="_blank" rel="noreferrer"><i class="bi bi-whatsapp"></i>076 550 0954</a><a href="mailto:shakilakoralage@gmail.com"><i class="bi bi-envelope"></i>shakilakoralage@gmail.com</a><span><i class="bi bi-geo-alt"></i>Galle, Sri Lanka</span></div><div class="footer-socials"><a href="https://www.facebook.com/people/OL-ICT-with-Shakila-Koralage/61592380449178/" target="_blank" rel="noreferrer" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="https://www.youtube.com/shorts/Jdyt9KCVfzw" target="_blank" rel="noreferrer" aria-label="YouTube"><i class="bi bi-youtube"></i></a><a href="https://wa.me/94765500954" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a></div></div></div><div class="footer-bottom">© 2026 ICT with Shakila Koralage. All rights reserved.</div></div>`;
  });

  const scheduleCard = document.querySelector('.schedule-card');
  if (scheduleCard && window.location.pathname.endsWith('class.html')) {
    scheduleCard.innerHTML = `<h3><i class="bi bi-calendar-week"></i> Weekly class times</h3><div class="class-time"><i class="bi bi-geo-alt-fill"></i><span><b>Thursday · Galle</b><small>4:00 PM – 6:00 PM</small></span></div><div class="class-time"><i class="bi bi-camera-video-fill"></i><span><b>Saturday · Online</b><small>9:00 AM – 11:00 AM</small></span></div><div class="class-time"><i class="bi bi-arrow-repeat"></i><span><b>Sunday · Revision</b><small>4:00 PM – 5:30 PM</small></span></div><div class="class-time"><i class="bi bi-laptop-fill"></i><span><b>Monthly · Practicals</b><small>Last Saturday · 2:00 PM</small></span></div><small class="schedule-note">Demo times — replace them with your actual class schedule.</small>`;
  }

  if (window.location.pathname.endsWith('about.html')) {
    const aboutHero = document.querySelector('.inner-hero');
    if (aboutHero) {
      aboutHero.className = 'about-new-hero';
      aboutHero.innerHTML = `<div class="container"><div class="row align-items-center about-new-grid"><div class="col-lg-7"><span class="about-new-eyebrow"><i class="bi bi-person-heart"></i> ABOUT ICT WITH SHAKILA</span><h1>A better way to<br><span>learn ICT.</span></h1><p>I’m Shakila Koralage, a Software Engineer and G.C.E. O/L ICT teacher. My classes turn complex ICT concepts into clear, practical learning that students can enjoy.</p><div class="about-new-highlights"><span><i class="bi bi-code-slash"></i> Software Engineer</span><span><i class="bi bi-geo-alt"></i> Galle + Online</span><span><i class="bi bi-journal-check"></i> Full O/L Syllabus</span></div><a class="btn btn-light about-new-cta" href="https://wa.me/94765500954" target="_blank" rel="noreferrer">Join via WhatsApp <i class="bi bi-arrow-right"></i></a></div><div class="col-lg-5 about-new-visual"><div class="about-photo-glow"></div><img src="assets/shakila-cutout.png" alt="Shakila Koralage, Software Engineer and ICT teacher"><div class="about-new-note"><b>Learn. Practice. Grow.</b><span>G.C.E. O/L ICT</span></div></div></div></div>`;
    }
  }

  const subpageHeroes = {
    'class.html': { label: 'G.C.E. O/L ICT CLASS', title: 'Learn ICT with<br><span>confidence.</span>', description: 'A complete, practical learning programme designed to make the O/L ICT syllabus clear, enjoyable, and exam-ready.', asset: 'class-art.png', note: 'Learn. Practice. Grow.', tags: ['Full O/L Syllabus', 'Galle + Online', 'Live Lessons'], action: 'Enrol via WhatsApp' },
    'resources.html': { label: 'FREE STUDY LIBRARY', title: 'Resources for<br><span>every learner.</span>', description: 'Explore free notes, papers, practical files, and study guides designed to help you learn and revise with confidence.', asset: 'resources-art.png', note: 'Free for every student', tags: ['Short Notes', 'Past Papers', 'Practical Files'], action: 'Explore resources' },
    'past-papers.html': { label: 'RESOURCE LIBRARY', title: 'Practise with<br><span>past papers.</span>', description: 'Build confidence for your exam with focused O/L ICT paper practice, clear resources, and practical revision support.', asset: 'resources-art.png', note: 'Prepare with confidence', tags: ['MCQ Practice', 'Theory Papers', 'Exam Revision'], action: 'View papers' },
    'reels.html': { label: 'ICT VIDEO REELS', title: 'Quick lessons.<br><span>Big ideas.</span>', description: 'Watch short, practical ICT videos that make difficult ideas easier to understand and remember.', asset: 'reels-art.png', note: 'Learn in minutes', tags: ['Quick Tips', 'ICT Concepts', 'Study Smarter'], action: 'Watch reels' },
    'contact.html': { label: 'GET IN TOUCH', title: 'Let’s talk<br><span>about ICT.</span>', description: 'Have a question about classes, resources, or learning O/L ICT? I’m always happy to help.', asset: 'contact-art.png', note: 'Friendly support', tags: ['WhatsApp Support', 'Galle + Online', 'Quick Replies'], action: 'Chat on WhatsApp' }
  };
  const currentPage = window.location.pathname.split('/').pop();
  const heroData = subpageHeroes[currentPage];
  if (heroData) {
    const hero = document.querySelector('.inner-hero');
    if (hero) {
      hero.className = 'about-new-hero subpage-new-hero';
      hero.innerHTML = `<div class="container"><div class="row align-items-center about-new-grid"><div class="col-lg-7"><span class="about-new-eyebrow"><i class="bi bi-stars"></i> ${heroData.label}</span><h1>${heroData.title}</h1><p>${heroData.description}</p><div class="about-new-highlights">${heroData.tags.map((tag) => `<span><i class="bi bi-check2-circle"></i> ${tag}</span>`).join('')}</div><a class="btn btn-light about-new-cta" href="https://wa.me/94765500954" target="_blank" rel="noreferrer">${heroData.action} <i class="bi bi-arrow-right"></i></a></div><div class="col-lg-5 about-new-visual"><div class="about-photo-glow"></div><img src="assets/${heroData.asset}" alt="${heroData.label}"><div class="about-new-note"><b>${heroData.note}</b><span>ICT WITH SHAKILA</span></div></div></div></div>`;
    }
  }

  if (currentPage === 'reels.html') {
    const reelsSection = document.querySelector('.page-section');
    if (reelsSection) {
      const shortEmbed = 'https://www.youtube.com/embed/Jdyt9KCVfzw';
      reelsSection.innerHTML = `<div class="container"><div class="reels-heading text-center"><span class="section-tag">WATCH & LEARN</span><h2>Quick ICT lessons in Shorts.</h2><p>Watch practical ICT tips, revision ideas, and simple explanations. These are demo cards — replace each video link later.</p></div><div class="shorts-grid">${Array.from({ length: 5 }, (_, index) => `<article class="short-card"><div class="short-frame"><iframe width="946" height="626" src="${shortEmbed}" title="#olict #education #ictforlife #ictwithshakilakoralage" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div class="short-meta"><span><i class="bi bi-youtube"></i> ICT WITH SHAKILA</span><h3>Quick O/L ICT learning tip</h3><p>Demo YouTube Short ${index + 1}</p></div></article>`).join('')}</div><p class="reels-note"><i class="bi bi-info-circle"></i> Replace the five demo embed links in <code>assets/footer.js</code> whenever you publish new Shorts.</p></div>`;
    }
  }

});
