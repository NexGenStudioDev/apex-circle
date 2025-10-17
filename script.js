// Mobile nav toggle



const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex' || navLinks.style.display === '' && getComputedStyle(navLinks).display === 'flex';
    if (isOpen) {
      navLinks.style.display = 'none';
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      navLinks.style.display = 'flex';
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });
}

// Tabs: Timeline
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const id = tab.getAttribute('data-tab');
    const panel = document.getElementById(id);
    if (panel) panel.classList.add('active');
  });
});

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    // Ignore bare '#'
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Badge Maker
const canvas = document.getElementById('badgeCanvas');
const ctx = canvas?.getContext('2d');
const nameInput = document.getElementById('badgeName');
const photoInput = document.getElementById('badgePhoto');
const clearBtn = document.getElementById('clearBadge');
const downloadBtn = document.getElementById('downloadBadge');

const state = { name: 'YOUR NAME', photo: null };

function drawBadge() {
  if (!ctx || !canvas) return;
  const w = canvas.width, h = canvas.height;

  // Background
  const grd = ctx.createLinearGradient(0, 0, w, h);
  grd.addColorStop(0, '#0b1022');
  grd.addColorStop(1, '#131a36');
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, w, h);

  // Decorative circles
  ctx.fillStyle = 'rgba(124,58,237,0.15)';
  ctx.beginPath(); ctx.arc(520, 120, 90, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = 'rgba(34,211,238,0.18)';
  ctx.beginPath(); ctx.arc(140, 640, 110, 0, Math.PI * 2); ctx.fill();

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 36px "Space Grotesk"';
  ctx.fillText('Calcuta Hacks', 40, 70);
  ctx.font = '600 18px Poppins';
  ctx.fillStyle = '#aab0bf';
  ctx.fillText('APEC Circle · 06–07 September 2025', 40, 98);

  // Photo frame
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  roundRect(ctx, 40, 130, 560, 420, 16, true, true);

  // Draw photo if any (center fit)
  if (state.photo) {
    const img = state.photo;
    const frame = { x: 40, y: 130, w: 560, h: 420 };
    const scale = Math.min(frame.w / img.width, frame.h / img.height);
    const dw = img.width * scale;
    const dh = img.height * scale;
    const dx = frame.x + (frame.w - dw) / 2;
    const dy = frame.y + (frame.h - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);
  } else {
    ctx.fillStyle = '#6b7280';
    ctx.font = '500 16px Poppins';
    ctx.fillText('Upload your photo', 260, 350);
  }

  // Name strip
  ctx.fillStyle = '#111428';
  roundRect(ctx, 40, 580, 560, 80, 12, true, false);
  const gradient = ctx.createLinearGradient(40, 580, 600, 660);
  gradient.addColorStop(0, '#7c3aed');
  gradient.addColorStop(1, '#22d3ee');
  ctx.strokeStyle = gradient;
  ctx.lineWidth = 2;
  roundRect(ctx, 40, 580, 560, 80, 12, false, true);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px Poppins';
  const displayName = (state.name || 'YOUR NAME').toUpperCase();
  ctx.fillText(displayName, 56, 632);

  // Footer info
  ctx.fillStyle = '#aab0bf';
  ctx.font = '500 14px Poppins';
  ctx.fillText('Hackathon · Kolkata · Share with #CalcutaHacks', 40, 730);
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof radius === 'number') { radius = { tl: radius, tr: radius, br: radius, bl: radius }; }
  ctx.beginPath();
  ctx.moveTo(x + radius.tl, y);
  ctx.lineTo(x + width - radius.tr, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
  ctx.lineTo(x + width, y + height - radius.br);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
  ctx.lineTo(x + radius.bl, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
  ctx.lineTo(x, y + radius.tl);
  ctx.quadraticCurveTo(x, y, x + radius.tl, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

// Inputs
if (nameInput) {
  nameInput.addEventListener('input', () => {
    state.name = nameInput.value || 'YOUR NAME';
    drawBadge();
  });
}

if (photoInput) {
  photoInput.addEventListener('change', () => {
    const file = photoInput.files?.[0];
    if (!file) { state.photo = null; drawBadge(); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => { state.photo = img; drawBadge(); };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    state.name = 'YOUR NAME';
    if (nameInput) nameInput.value = '';
    state.photo = null;
    if (photoInput) photoInput.value = '';
    drawBadge();
  });
}

if (downloadBtn && canvas) {
  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'calcuta-hacks-badge.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

// Initial render
drawBadge();


async function fetchTeamData() {
  const response = await fetch('./team.json');
  const teamArray = await response.json();

  let element = document.getElementsByClassName('team-grid')
 
   element[0].innerHTML=`${teamArray.map(member => `
    <div class="team-card">
      <div class="avatar" aria-hidden="true">
      <img src="${member.image}" alt="${member.name}">
      </div>
     <div class="member-info">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
     </div>
    </div>
  `).join('')}
  
  `;

  console.log(teamArray); 
}

fetchTeamData();
