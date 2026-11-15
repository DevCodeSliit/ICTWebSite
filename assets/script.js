// The home page is a visual gateway; detailed information lives on dedicated pages.
const homeHero = document.querySelector('.hero');
if (homeHero) {
  ['#about', '#class', '#resources', '#quiz', '#reels', '#contact'].forEach((selector) => document.querySelector(selector)?.remove());
  document.querySelector('.quick-info').insertAdjacentHTML('afterend', `
    <section class="home-overview"><div class="container"><div class="text-center section-heading"><span class="section-tag">EXPLORE THE LEARNING HUB</span><h2>Everything has its place.</h2><p>Choose where you would like to go — every page is designed to help you learn faster.</p></div><div class="row g-4"><div class="col-md-6 col-lg-4"><a class="home-overview-card" href="about.html"><img src="assets/about-art.png" alt="Modern ICT learning desk"><h3>About Shakila</h3><p>Meet your teacher and discover the learning approach.</p><span class="go">Meet your teacher <i class="bi bi-arrow-right"></i></span></a></div><div class="col-md-6 col-lg-4"><a class="home-overview-card" href="class.html"><img src="assets/class-art.png" alt="Online ICT class setup"><h3>O/L ICT Class</h3><p>View the class format, schedule, and enrolment details.</p><span class="go">Explore the class <i class="bi bi-arrow-right"></i></span></a></div><div class="col-md-6 col-lg-4"><a class="home-overview-card" href="resources.html"><img src="assets/resources-art.png" alt="ICT study resources"><h3>Free Resources</h3><p>Find notes, practice papers, files, and study guides.</p><span class="go">Open resources <i class="bi bi-arrow-right"></i></span></a></div><div class="col-md-6 col-lg-4"><a class="home-overview-card" href="past-papers.html"><i class="bi bi-file-earmark-check"></i><h3>Past Papers</h3><p>Build exam confidence through focused paper practice.</p><span class="go">View past papers <i class="bi bi-arrow-right"></i></span></a></div><div class="col-md-6 col-lg-4"><a class="home-overview-card" href="reels.html"><img src="assets/reels-art.png" alt="ICT video reels"><h3>ICT Video Reels</h3><p>Watch quick explanations and practical technology tips.</p><span class="go">Watch videos <i class="bi bi-arrow-right"></i></span></a></div><div class="col-md-6 col-lg-4"><a class="home-overview-card" href="contact.html"><img src="assets/contact-art.png" alt="Contact ICT with Shakila"><h3>Contact Shakila</h3><p>Ask questions or join the class through WhatsApp.</p><span class="go">Get in touch <i class="bi bi-arrow-right"></i></span></a></div></div></div></section>`);
}

// Quiz: add more questions here later if you would like to expand it.
document.querySelectorAll('.quiz-option').forEach((button) => {
  button.addEventListener('click', () => {
    const isCorrect = button.dataset.answer === 'true';
    const feedback = document.querySelector('#quizFeedback');
    feedback.textContent = isCorrect ? 'Correct! A keyboard is used to input text and commands.' : 'Not quite — try again! Think about the device used for typing.';
    feedback.style.color = isCorrect ? '#07873b' : '#cc2f35';
  });
});

// Contact form: opens a pre-filled WhatsApp message instead of saving data online.
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = event.currentTarget.elements;
    const message = `Hello Shakila, my name is ${fields[0].value}. ${fields[2].value} (Email: ${fields[1].value})`;
    window.open(`https://wa.me/94765500954?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}
