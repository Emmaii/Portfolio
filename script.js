// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Sample data: titles, excerpts, and full article content (polished versions)
const samples = [
  {
    title: "Why Financial Literacy Matters More Than Ever in 2026",
    excerpt: "Let me ask you something. When was the last time you felt completely confident about a financial decision...",
    content: `
      <h1>Why Financial Literacy Matters More Than Ever in 2026</h1>
      <p>Let me ask you something. When was the last time you felt completely confident about a financial decision—without second-guessing yourself afterward?</p>
      <p>For most people, that feeling is rare. And in 2026, it's getting rarer.</p>
      <p>The financial world isn't what it used to be. Your parents probably had a local bank branch, a pension plan, and maybe a modest stock portfolio. That was it. Today? You've got digital-only banks, crypto exchanges, AI-powered robo-advisors, buy-now-pay-later loans, and about a dozen investing apps on your phone. Each one promises to make you richer. Each one also comes with fine print that could cost you.</p>
      <p>Here's the problem: more access doesn't mean more understanding. Millions of people are earning, spending, and saving—but they're doing it without a clear map...</p>
      <p>[Full article continues — this is a representative excerpt. In a real deployment, include the entire polished piece from our earlier revision.]</p>
      <p><strong>The bottom line:</strong> Financial literacy won't make you rich overnight. But it will stop you from making the mistakes that keep people poor for decades.</p>
    `
  },
  {
    title: "The Silent Wealth Builder: Why Compound Interest Is the Most Powerful Force in Personal Finance",
    excerpt: "Let me tell you about two people. Neither is a genius. Neither got lucky...",
    content: `
      <h1>The Silent Wealth Builder: Why Compound Interest Is the Most Powerful Force in Personal Finance</h1>
      <p>Let me tell you about two people. Neither is a genius. Neither got lucky.</p>
      <p>Meet Maya. She's 22, just landed her first full-time job, and starts investing $150 a month. Nothing fancy—just a basic index fund. She does this for 10 years, then stops completely. Total invested: $18,000.</p>
      <p>Now meet Jake. He doesn't think about investing in his 20s. Too busy. Too broke. At 32, he gets serious and invests $300 a month—double what Maya put in. He keeps going for 30 years, all the way to 62. Total invested: $108,000.</p>
      <p>Who ends up with more money? Maya. At age 62, she has roughly $1.2 million. Jake has about $850,000. She invested less. Stopped earlier. Still won by over $350,000.</p>
      <p>That's not magic. That's compound interest.</p>
      <p>[Full article continues with practical steps, debt warning, and the Maya vs. Jake story fully detailed.]</p>
    `
  },
  {
    title: "How ETFs Changed Investing Forever",
    excerpt: "Here's a confession: I used to think investing was for other people...",
    content: `
      <h1>How ETFs Changed Investing Forever</h1>
      <p>Here's a confession: I used to think investing was for other people. You know the type. Spreadsheets. Wall Street jargon. Enough money to buy a small house before you could even get started.</p>
      <p>Then I discovered ETFs. And everything changed. Not because I got smarter. Because someone finally made investing simple.</p>
      <p>An ETF is stupidly simple. Instead of buying 500 stocks one by one, you buy one thing. That one thing owns all 500. You get the diversification without the headache. You can buy or sell it anytime the market is open—just like a regular stock.</p>
      <p>[Full article explains the old way, cost savings, risks, and why ETFs democratized investing.]</p>
    `
  }
];

// Generate sample cards
const grid = document.getElementById('samplesGrid');
if (grid) {
  samples.forEach((sample, idx) => {
    const card = document.createElement('div');
    card.className = 'sample-card';
    card.innerHTML = `
      <h3>${sample.title}</h3>
      <div class="sample-meta">Sample • Finance writing</div>
      <p>${sample.excerpt.substring(0, 120)}…</p>
      <button class="read-btn" data-idx="${idx}">Read full sample →</button>
    `;
    grid.appendChild(card);
  });

  // Modal logic
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.querySelector('.modal-close');

  function openModal(content) {
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  closeModal.addEventListener('click', closeModalFunc);
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFunc();
  });

  document.querySelectorAll('.read-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = btn.getAttribute('data-idx');
      if (idx !== null && samples[idx]) {
        openModal(samples[idx].content);
      }
    });
  });
}

// Optional: smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});