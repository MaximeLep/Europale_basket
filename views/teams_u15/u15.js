// === SLIDER 1 ===
let xPos1 = 0;
let rotation1 = 0;
const angleStep1 = 40;

const images1 = [
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg'
];

const names1 = [
  "Antonin Mafille",
  "Mathis Ledez",
  "Maxime Robin",
  "Sacha Lefebvre",
  "Thibault Rochoy",
  "Tom Dagneaux",
  "Tom Delpierre",
  "Victor Vasseur",
  "Yann Tettart",
  "Joueur 10"
];

const stage1 = document.querySelector('.stage');
const ring1 = document.querySelector('.ring');
const imgs1 = document.querySelectorAll('.img');

gsap.timeline()
  .set(ring1, { rotationY: 180, cursor: "grab" })
  .set(imgs1, {
    rotateY: (i) => i * -angleStep1,
    transformOrigin: "50% 50% 500px",
    z: -500,
    backgroundPosition: 'center',
    backfaceVisibility: "hidden",
    backgroundImage: (i) => `url(${images1[i]})`,
  })
  .add(() => {
    imgs1.forEach((img, i) => {
      img.innerHTML = ''; // vide le contenu précédent
      
      const nameDiv = document.createElement('div');
      nameDiv.className = 'player-name';
      nameDiv.textContent = names1[i] || "";
      img.appendChild(nameDiv);

      img.addEventListener("mouseenter", (e) => {
        let current = e.currentTarget;
        gsap.to(imgs1, {
          opacity: (index, target) => (target === current ? 1 : 0.5),
          ease: "power3",
        });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(imgs1, { opacity: 1, ease: "power2.inOut" });
      });
    });
  })
  .from(imgs1, {
    duration: 1.5,
    y: 200,
    opacity: 0,
    stagger: 0.1,
    ease: "expo",
  });

// Gestion du drag pour slider 1
stage1.addEventListener('mousedown', dragStart1);
stage1.addEventListener('touchstart', dragStart1);

function dragStart1(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos1 = e.clientX;
  gsap.set(ring1, { cursor: "grabbing" });
  stage1.addEventListener('mousemove', drag1);
  stage1.addEventListener('touchmove', drag1);
  stage1.addEventListener('mouseup', dragEnd1);
  stage1.addEventListener('touchend', dragEnd1);
  stage1.addEventListener('mouseleave', dragEnd1);
}

function drag1(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  const delta = e.clientX - xPos1;
  const speedFactor = 0.1;
  rotation1 -= delta * speedFactor;
  updateRotation1();
  xPos1 = e.clientX;
}

function updateRotation1() {
  gsap.set(imgs1, {
    rotationY: (i) => rotation1 + i * angleStep1,
    transformOrigin: "50% 50% 500px",
    backfaceVisibility: "hidden",
  });
}

function dragEnd1() {
  stage1.removeEventListener('mousemove', drag1);
  stage1.removeEventListener('touchmove', drag1);
  stage1.removeEventListener('mouseup', dragEnd1);
  stage1.removeEventListener('touchend', dragEnd1);
  stage1.removeEventListener('mouseleave', dragEnd1);
  gsap.set(ring1, { cursor: "grab" });
}


// === SLIDER 2 ===
let xPos2 = 0;
let rotation2 = 0;
const angleStep2 = 40;

const images2 = [
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg',
  '/assets/img/logoeuropale.jpg'
];

const names2 = [
  "Antonin Mafille 2",
  "Mathis Ledez 2",
  "Maxime Robin 2",
  "Sacha Lefebvre 2",
  "Thibault Rochoy 2",
  "Tom Dagneaux 2",
  "Tom Delpierre 2",
  "Victor Vasseur 2",
  "Yann Tettart 2",
  "Joueur 20"
];

const stage2 = document.querySelector('.stage2');
const ring2 = document.querySelector('.ring2');
const imgs2 = document.querySelectorAll('.img2');

gsap.timeline()
  .set(ring2, { rotationY: 180, cursor: "grab" })
  .set(imgs2, {
    rotateY: (i) => i * -angleStep2,
    transformOrigin: "50% 50% 500px",
    z: -500,
    backgroundPosition: 'center',
    backfaceVisibility: "hidden",
    backgroundImage: (i) => `url(${images2[i]})`,
  })
  .add(() => {
    imgs2.forEach((img, i) => {
      img.innerHTML = ''; // vide le contenu précédent
      
      const nameDiv = document.createElement('div');
      nameDiv.className = 'player-name';
      nameDiv.textContent = names2[i] || "";
      img.appendChild(nameDiv);

      img.addEventListener("mouseenter", (e) => {
        let current = e.currentTarget;
        gsap.to(imgs2, {
          opacity: (index, target) => (target === current ? 1 : 0.5),
          ease: "power3",
        });
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(imgs2, { opacity: 1, ease: "power2.inOut" });
      });
    });
  })
  .from(imgs2, {
    duration: 1.5,
    y: 200,
    opacity: 0,
    stagger: 0.1,
    ease: "expo",
  });

// Gestion du drag pour slider 2
stage2.addEventListener('mousedown', dragStart2);
stage2.addEventListener('touchstart', dragStart2);

function dragStart2(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  xPos2 = e.clientX;
  gsap.set(ring2, { cursor: "grabbing" });
  stage2.addEventListener('mousemove', drag2);
  stage2.addEventListener('touchmove', drag2);
  stage2.addEventListener('mouseup', dragEnd2);
  stage2.addEventListener('touchend', dragEnd2);
  stage2.addEventListener('mouseleave', dragEnd2);
}

function drag2(e) {
  if (e.touches) e.clientX = e.touches[0].clientX;
  const delta = e.clientX - xPos2;
  const speedFactor = 0.1;
  rotation2 -= delta * speedFactor;
  updateRotation2();
  xPos2 = e.clientX;
}

function updateRotation2() {
  gsap.set(imgs2, {
    rotationY: (i) => rotation2 + i * angleStep2,
    transformOrigin: "50% 50% 500px",
    backfaceVisibility: "hidden",
  });
}

function dragEnd2() {
  stage2.removeEventListener('mousemove', drag2);
  stage2.removeEventListener('touchmove', drag2);
  stage2.removeEventListener('mouseup', dragEnd2);
  stage2.removeEventListener('touchend', dragEnd2);
  stage2.removeEventListener('mouseleave', dragEnd2);
  gsap.set(ring2, { cursor: "grab" });
}


const matchesByMonth = {
  "2024-09": [
    { date: "07 septembre 16:00", teamLeft: "Cominoise LL", teamLeftLogo: "/assets/img/logo_cominoise.png", teamRight: "Team A", teamRightLogo: "/assets/img/logo_team_a.png", result: "25:22", location: "Salle A", link: "#" },
    { date: "14 septembre 15:30", teamLeft: "Team B", teamLeftLogo: "/assets/img/logo_team_b.png", teamRight: "Team C", teamRightLogo: "/assets/img/logo_team_c.png", result: "30:28", location: "Stade B", link: "#" },
    { date: "21 septembre 17:00", teamLeft: "Team D", teamLeftLogo: "/assets/img/logo_team_d.png", teamRight: "Team E", teamRightLogo: "/assets/img/logo_team_e.png", result: "22:24", location: "Gymnase D", link: "#" },
    { date: "28 septembre 18:00", teamLeft: "Team F", teamLeftLogo: "/assets/img/logo_team_f.png", teamRight: "Team G", teamRightLogo: "/assets/img/logo_team_g.png", result: "31:30", location: "Centre F", link: "#" }
  ],
  "2024-10": [
    { date: "05 octobre 16:00", teamLeft: "Team H", teamLeftLogo: "/assets/img/logo_team_h.png", teamRight: "Team I", teamRightLogo: "/assets/img/logo_team_i.png", result: "29:27", location: "Salle H", link: "#" },
    { date: "12 octobre 14:30", teamLeft: "Team J", teamLeftLogo: "/assets/img/logo_team_j.png", teamRight: "Team K", teamRightLogo: "/assets/img/logo_team_k.png", result: "28:28", location: "Stade J", link: "#" },
    { date: "19 octobre 16:45", teamLeft: "Team L", teamLeftLogo: "/assets/img/logo_team_l.png", teamRight: "Team M", teamRightLogo: "/assets/img/logo_team_m.png", result: "26:29", location: "Gymnase L", link: "#" },
    { date: "26 octobre 17:30", teamLeft: "Team N", teamLeftLogo: "/assets/img/logo_team_n.png", teamRight: "Team O", teamRightLogo: "/assets/img/logo_team_o.png", result: "32:30", location: "Centre N", link: "#" }
  ],
  "2024-11": [
    { date: "02 novembre 16:00", teamLeft: "Team P", teamLeftLogo: "/assets/img/logo_team_p.png", teamRight: "Team Q", teamRightLogo: "/assets/img/logo_team_q.png", result: "27:25", location: "Salle P", link: "#" },
    { date: "09 novembre 15:00", teamLeft: "Team R", teamLeftLogo: "/assets/img/logo_team_r.png", teamRight: "Team S", teamRightLogo: "/assets/img/logo_team_s.png", result: "24:24", location: "Stade R", link: "#" },
    { date: "16 novembre 17:00", teamLeft: "Team T", teamLeftLogo: "/assets/img/logo_team_t.png", teamRight: "Team U", teamRightLogo: "/assets/img/logo_team_u.png", result: "29:27", location: "Gymnase T", link: "#" },
    { date: "23 novembre 18:30", teamLeft: "Team V", teamLeftLogo: "/assets/img/logo_team_v.png", teamRight: "Team W", teamRightLogo: "/assets/img/logo_team_w.png", result: "33:31", location: "Centre V", link: "#" }
  ],
  "2024-12": [
    { date: "01 décembre 14:00", teamLeft: "Team X", teamLeftLogo: "/assets/img/logo_team_x.png", teamRight: "Team Y", teamRightLogo: "/assets/img/logo_team_y.png", result: "22:20", location: "Salle X", link: "#" },
    { date: "08 décembre 16:00", teamLeft: "Team Z", teamLeftLogo: "/assets/img/logo_team_z.png", teamRight: "Team AA", teamRightLogo: "/assets/img/logo_team_aa.png", result: "27:29", location: "Stade Z", link: "#" },
    { date: "15 décembre 17:30", teamLeft: "Team AB", teamLeftLogo: "/assets/img/logo_team_ab.png", teamRight: "Team AC", teamRightLogo: "/assets/img/logo_team_ac.png", result: "30:30", location: "Gymnase AB", link: "#" },
    { date: "22 décembre 18:00", teamLeft: "Team AD", teamLeftLogo: "/assets/img/logo_team_ad.png", teamRight: "Team AE", teamRightLogo: "/assets/img/logo_team_ae.png", result: "31:28", location: "Centre AD", link: "#" }
  ],
  "2025-01": [
    { date: "05 janvier 15:00", teamLeft: "Team AF", teamLeftLogo: "/assets/img/logo_team_af.png", teamRight: "Team AG", teamRightLogo: "/assets/img/logo_team_ag.png", result: "23:25", location: "Salle AF", link: "#" },
    { date: "12 janvier 16:00", teamLeft: "Team AH", teamLeftLogo: "/assets/img/logo_team_ah.png", teamRight: "Team AI", teamRightLogo: "/assets/img/logo_team_ai.png", result: "28:28", location: "Stade AH", link: "#" },
    { date: "19 janvier 17:30", teamLeft: "Team AJ", teamLeftLogo: "/assets/img/logo_team_aj.png", teamRight: "Team AK", teamRightLogo: "/assets/img/logo_team_ak.png", result: "29:26", location: "Gymnase AJ", link: "#" },
    { date: "26 janvier 18:00", teamLeft: "Team AL", teamLeftLogo: "/assets/img/logo_team_al.png", teamRight: "Team AM", teamRightLogo: "/assets/img/logo_team_am.png", result: "33:32", location: "Centre AL", link: "#" }
  ],
  "2025-02": [
    { date: "02 février 14:00", teamLeft: "Team AN", teamLeftLogo: "/assets/img/logo_team_an.png", teamRight: "Team AO", teamRightLogo: "/assets/img/logo_team_ao.png", result: "26:24", location: "Salle AN", link: "#" },
    { date: "09 février 16:00", teamLeft: "Team AP", teamLeftLogo: "/assets/img/logo_team_ap.png", teamRight: "Team AQ", teamRightLogo: "/assets/img/logo_team_aq.png", result: "29:30", location: "Stade AP", link: "#" },
    { date: "16 février 17:30", teamLeft: "Team AR", teamLeftLogo: "/assets/img/logo_team_ar.png", teamRight: "Team AS", teamRightLogo: "/assets/img/logo_team_as.png", result: "25:25", location: "Gymnase AR", link: "#" },
    { date: "23 février 18:00", teamLeft: "Team AT", teamLeftLogo: "/assets/img/logo_team_at.png", teamRight: "Team AU", teamRightLogo: "/assets/img/logo_team_au.png", result: "31:30", location: "Centre AT", link: "#" }
  ],
  "2025-03": [
    { date: "01 mars 15:00", teamLeft: "Team AV", teamLeftLogo: "/assets/img/logo_team_av.png", teamRight: "Team AW", teamRightLogo: "/assets/img/logo_team_aw.png", result: "28:27", location: "Salle AV", link: "#" },
    { date: "08 mars 16:00", teamLeft: "Team AX", teamLeftLogo: "/assets/img/logo_team_ax.png", teamRight: "Team AY", teamRightLogo: "/assets/img/logo_team_ay.png", result: "30:30", location: "Stade AX", link: "#" },
    { date: "15 mars 17:30", teamLeft: "Team AZ", teamLeftLogo: "/assets/img/logo_team_az.png", teamRight: "Team BA", teamRightLogo: "/assets/img/logo_team_ba.png", result: "27:25", location: "Gymnase AZ", link: "#" },
    { date: "22 mars 18:00", teamLeft: "Team BB", teamLeftLogo: "/assets/img/logo_team_bb.png", teamRight: "Team BC", teamRightLogo: "/assets/img/logo_team_bc.png", result: "32:31", location: "Centre BB", link: "#" }
  ],
  "2025-04": [
    { date: "02 avril 14:00", teamLeft: "Cominoise LL", teamLeftLogo: "/assets/img/logo_cominoise.png", teamRight: "Europale", teamRightLogo: "/assets/img/logo_europale.png", result: "44:34", location: "Rue du Vieil Dieu", link: "#" },
    { date: "09 avril 15:00", teamLeft: "Team BD", teamLeftLogo: "/assets/img/logo_team_bd.png", teamRight: "Team BE", teamRightLogo: "/assets/img/logo_team_be.png", result: "28:29", location: "Stade BD", link: "#" },
    { date: "16 avril 17:00", teamLeft: "Team BF", teamLeftLogo: "/assets/img/logo_team_bf.png", teamRight: "Team BG", teamRightLogo: "/assets/img/logo_team_bg.png", result: "26:26", location: "Gymnase BF", link: "#" },
    { date: "23 avril 18:00", teamLeft: "Team BH", teamLeftLogo: "/assets/img/logo_team_bh.png", teamRight: "Team BI", teamRightLogo: "/assets/img/logo_team_bi.png", result: "30:28", location: "Centre BH", link: "#" }
  ],
  "2025-05": [
    { date: "02 mai 14:00", teamLeft: "Cominoise LL", teamLeftLogo: "/assets/img/logo_cominoise.png", teamRight: "Europale", teamRightLogo: "/assets/img/logo_europale.png", result: "44:34", location: "Rue du Vieil Dieu", link: "#" },
    { date: "09 mai 16:00", teamLeft: "Team BJ", teamLeftLogo: "/assets/img/logo_team_bj.png", teamRight: "Team BK", teamRightLogo: "/assets/img/logo_team_bk.png", result: "30:28", location: "Stade BJ", link: "#" },
    { date: "16 mai 17:00", teamLeft: "Team BL", teamLeftLogo: "/assets/img/logo_team_bl.png", teamRight: "Team BM", teamRightLogo: "/assets/img/logo_team_bm.png", result: "29:29", location: "Gymnase BL", link: "#" },
    { date: "23 mai 18:00", teamLeft: "Team BN", teamLeftLogo: "/assets/img/logo_team_bn.png", teamRight: "Team BO", teamRightLogo: "/assets/img/logo_team_bo.png", result: "32:31", location: "Centre BN", link: "#" }
  ]
};

// Le reste du script (fonctions, navigation, etc.) reste inchangé et continue de fonctionner avec ces données.


// Mois en cours et limites de saison
let currentMonth = "2025-05";
const seasonStart = "2024-09";
const seasonEnd = "2025-05";

// Format d’affichage
function formatMonthYear(ym) {
  const [year, month] = ym.split("-");
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
}

// Affiche les matchs du mois
function displayMatches(monthKey) {
  const container = document.getElementById("matchesContainer");
  container.innerHTML = "";

  const matches = matchesByMonth[monthKey] || [];

  if (matches.length === 0) {
    container.innerHTML = "<p>Aucun match ce mois-ci.</p>";
    return;
  }

  matches.forEach(match => {
    const matchDiv = document.createElement("div");
    matchDiv.className = "row matches-row";
    matchDiv.innerHTML = `
      <div class="col-md-2 calendar-date-match col-12">
        <p>${match.date}</p>
      </div>
      <div class="col-md-3 calendar-team-left col-4">
        <img src="${match.teamLeftLogo}" alt="${match.teamLeft}">
        <p>${match.teamLeft}</p>
      </div>
      <div class="col-md-2 calendar-result text-center col-4">
        <p>${match.result} <span>${match.location}</span></p>
      </div>
      <div class="col-md-3 calendar-team-right col-4">
        <img src="${match.teamRightLogo}" alt="${match.teamRight}">
        <p>${match.teamRight}</p>
      </div>
      <div class="col-md-2 calendar-banner col-4 offset-4 offset-md-0">
        <a href="${match.link}" class="banner-rel statistics-rel">STATISTIQUES</a>
      </div>
    `;
    container.appendChild(matchDiv);
  });
}

// Change de mois
function updateMonth(newMonth) {
  if (newMonth < seasonStart || newMonth > seasonEnd) return;

  currentMonth = newMonth;
  document.getElementById("monthYear").textContent = formatMonthYear(newMonth);
  displayMatches(newMonth);
  updateNavButtons();
}

// Empêche navigation hors saison
function getPrevMonth(monthStr) {
  let [year, month] = monthStr.split("-");
  month = parseInt(month, 10);
  year = parseInt(year, 10);
  month--;
  if (month < 1) {
    month = 12;
    year--;
  }
  return `${year}-${month.toString().padStart(2, '0')}`;
}

function getNextMonth(monthStr) {
  let [year, month] = monthStr.split("-");
  month = parseInt(month, 10);
  year = parseInt(year, 10);
  month++;
  if (month > 12) {
    month = 1;
    year++;
  }
  return `${year}-${month.toString().padStart(2, '0')}`;
}

// Active/désactive les flèches
function updateNavButtons() {
  document.getElementById("prevMonth").disabled = (currentMonth === seasonStart);
  document.getElementById("nextMonth").disabled = (currentMonth === seasonEnd);
}

// Événements
document.getElementById("prevMonth").addEventListener("click", () => {
  const prev = getPrevMonth(currentMonth);
  updateMonth(prev);
});

document.getElementById("nextMonth").addEventListener("click", () => {
  const next = getNextMonth(currentMonth);
  updateMonth(next);
});

// Initialisation
updateMonth(currentMonth);



const calendarTeamsMatchesByMonth = {
  "2024-09": [
    { date: "07 septembre 16:00", teamLeft: "Cominoise LL", teamLeftLogo: "/assets/img/logo_cominoise.png", teamRight: "Team A", teamRightLogo: "/assets/img/logo_team_a.png", result: "25:22", location: "Salle A", link: "#" },
    { date: "14 septembre 15:30", teamLeft: "Team B", teamLeftLogo: "/assets/img/logo_team_b.png", teamRight: "Team C", teamRightLogo: "/assets/img/logo_team_c.png", result: "30:28", location: "Stade B", link: "#" },
    { date: "21 septembre 17:00", teamLeft: "Team D", teamLeftLogo: "/assets/img/logo_team_d.png", teamRight: "Team E", teamRightLogo: "/assets/img/logo_team_e.png", result: "22:24", location: "Gymnase D", link: "#" },
    { date: "28 septembre 18:00", teamLeft: "Team F", teamLeftLogo: "/assets/img/logo_team_f.png", teamRight: "Team G", teamRightLogo: "/assets/img/logo_team_g.png", result: "31:30", location: "Centre F", link: "#" }
  ],
  "2024-10": [
    { date: "05 octobre 16:00", teamLeft: "Team H", teamLeftLogo: "/assets/img/logo_team_h.png", teamRight: "Team I", teamRightLogo: "/assets/img/logo_team_i.png", result: "29:27", location: "Salle H", link: "#" },
    { date: "12 octobre 14:30", teamLeft: "Team J", teamLeftLogo: "/assets/img/logo_team_j.png", teamRight: "Team K", teamRightLogo: "/assets/img/logo_team_k.png", result: "28:28", location: "Stade J", link: "#" },
    { date: "19 octobre 16:45", teamLeft: "Team L", teamLeftLogo: "/assets/img/logo_team_l.png", teamRight: "Team M", teamRightLogo: "/assets/img/logo_team_m.png", result: "26:29", location: "Gymnase L", link: "#" },
    { date: "26 octobre 17:30", teamLeft: "Team N", teamLeftLogo: "/assets/img/logo_team_n.png", teamRight: "Team O", teamRightLogo: "/assets/img/logo_team_o.png", result: "32:30", location: "Centre N", link: "#" }
  ],
  "2024-11": [
    { date: "02 novembre 16:00", teamLeft: "Team P", teamLeftLogo: "/assets/img/logo_team_p.png", teamRight: "Team Q", teamRightLogo: "/assets/img/logo_team_q.png", result: "27:25", location: "Salle P", link: "#" },
    { date: "09 novembre 15:00", teamLeft: "Team R", teamLeftLogo: "/assets/img/logo_team_r.png", teamRight: "Team S", teamRightLogo: "/assets/img/logo_team_s.png", result: "24:24", location: "Stade R", link: "#" },
    { date: "16 novembre 17:00", teamLeft: "Team T", teamLeftLogo: "/assets/img/logo_team_t.png", teamRight: "Team U", teamRightLogo: "/assets/img/logo_team_u.png", result: "29:27", location: "Gymnase T", link: "#" },
    { date: "23 novembre 18:30", teamLeft: "Team V", teamLeftLogo: "/assets/img/logo_team_v.png", teamRight: "Team W", teamRightLogo: "/assets/img/logo_team_w.png", result: "33:31", location: "Centre V", link: "#" }
  ],
  "2024-12": [
    { date: "01 décembre 14:00", teamLeft: "Team X", teamLeftLogo: "/assets/img/logo_team_x.png", teamRight: "Team Y", teamRightLogo: "/assets/img/logo_team_y.png", result: "22:20", location: "Salle X", link: "#" },
    { date: "08 décembre 16:00", teamLeft: "Team Z", teamLeftLogo: "/assets/img/logo_team_z.png", teamRight: "Team AA", teamRightLogo: "/assets/img/logo_team_aa.png", result: "27:29", location: "Stade Z", link: "#" },
    { date: "15 décembre 17:30", teamLeft: "Team AB", teamLeftLogo: "/assets/img/logo_team_ab.png", teamRight: "Team AC", teamRightLogo: "/assets/img/logo_team_ac.png", result: "30:30", location: "Gymnase AB", link: "#" },
    { date: "22 décembre 18:00", teamLeft: "Team AD", teamLeftLogo: "/assets/img/logo_team_ad.png", teamRight: "Team AE", teamRightLogo: "/assets/img/logo_team_ae.png", result: "31:28", location: "Centre AD", link: "#" }
  ],
  "2025-01": [
    { date: "05 janvier 15:00", teamLeft: "Team AF", teamLeftLogo: "/assets/img/logo_team_af.png", teamRight: "Team AG", teamRightLogo: "/assets/img/logo_team_ag.png", result: "23:25", location: "Salle AF", link: "#" },
    { date: "12 janvier 16:00", teamLeft: "Team AH", teamLeftLogo: "/assets/img/logo_team_ah.png", teamRight: "Team AI", teamRightLogo: "/assets/img/logo_team_ai.png", result: "28:28", location: "Stade AH", link: "#" },
    { date: "19 janvier 17:30", teamLeft: "Team AJ", teamLeftLogo: "/assets/img/logo_team_aj.png", teamRight: "Team AK", teamRightLogo: "/assets/img/logo_team_ak.png", result: "29:26", location: "Gymnase AJ", link: "#" },
    { date: "26 janvier 18:00", teamLeft: "Team AL", teamLeftLogo: "/assets/img/logo_team_al.png", teamRight: "Team AM", teamRightLogo: "/assets/img/logo_team_am.png", result: "33:32", location: "Centre AL", link: "#" }
  ],
  "2025-02": [
    { date: "02 février 14:00", teamLeft: "Team AN", teamLeftLogo: "/assets/img/logo_team_an.png", teamRight: "Team AO", teamRightLogo: "/assets/img/logo_team_ao.png", result: "26:24", location: "Salle AN", link: "#" },
    { date: "09 février 16:00", teamLeft: "Team AP", teamLeftLogo: "/assets/img/logo_team_ap.png", teamRight: "Team AQ", teamRightLogo: "/assets/img/logo_team_aq.png", result: "29:30", location: "Stade AP", link: "#" },
    { date: "16 février 17:30", teamLeft: "Team AR", teamLeftLogo: "/assets/img/logo_team_ar.png", teamRight: "Team AS", teamRightLogo: "/assets/img/logo_team_as.png", result: "25:25", location: "Gymnase AR", link: "#" },
    { date: "23 février 18:00", teamLeft: "Team AT", teamLeftLogo: "/assets/img/logo_team_at.png", teamRight: "Team AU", teamRightLogo: "/assets/img/logo_team_au.png", result: "31:30", location: "Centre AT", link: "#" }
  ],
  "2025-03": [
    { date: "01 mars 15:00", teamLeft: "Team AV", teamLeftLogo: "/assets/img/logo_team_av.png", teamRight: "Team AW", teamRightLogo: "/assets/img/logo_team_aw.png", result: "28:27", location: "Salle AV", link: "#" },
    { date: "08 mars 16:00", teamLeft: "Team AX", teamLeftLogo: "/assets/img/logo_team_ax.png", teamRight: "Team AY", teamRightLogo: "/assets/img/logo_team_ay.png", result: "30:30", location: "Stade AX", link: "#" },
    { date: "15 mars 17:30", teamLeft: "Team AZ", teamLeftLogo: "/assets/img/logo_team_az.png", teamRight: "Team BA", teamRightLogo: "/assets/img/logo_team_ba.png", result: "27:25", location: "Gymnase AZ", link: "#" },
    { date: "22 mars 18:00", teamLeft: "Team BB", teamLeftLogo: "/assets/img/logo_team_bb.png", teamRight: "Team BC", teamRightLogo: "/assets/img/logo_team_bc.png", result: "32:31", location: "Centre BB", link: "#" }
  ],
  "2025-04": [
    { date: "02 avril 14:00", teamLeft: "Cominoise LL", teamLeftLogo: "/assets/img/logo_cominoise.png", teamRight: "Europale", teamRightLogo: "/assets/img/logo_europale.png", result: "44:34", location: "Rue du Vieil Dieu", link: "#" },
    { date: "09 avril 15:00", teamLeft: "Team BD", teamLeftLogo: "/assets/img/logo_team_bd.png", teamRight: "Team BE", teamRightLogo: "/assets/img/logo_team_be.png", result: "28:29", location: "Stade BD", link: "#" },
    { date: "16 avril 17:00", teamLeft: "Team BF", teamLeftLogo: "/assets/img/logo_team_bf.png", teamRight: "Team BG", teamRightLogo: "/assets/img/logo_team_bg.png", result: "26:26", location: "Gymnase BF", link: "#" },
    { date: "23 avril 18:00", teamLeft: "Team BH", teamLeftLogo: "/assets/img/logo_team_bh.png", teamRight: "Team BI", teamRightLogo: "/assets/img/logo_team_bi.png", result: "30:28", location: "Centre BH", link: "#" }
  ],
  "2025-05": [
    { date: "02 mai 14:00", teamLeft: "Cominoise LL", teamLeftLogo: "/assets/img/logo_cominoise.png", teamRight: "Europale", teamRightLogo: "/assets/img/logo_europale.png", result: "44:34", location: "Rue du Vieil Dieu", link: "#" },
    { date: "09 mai 16:00", teamLeft: "Team BJ", teamLeftLogo: "/assets/img/logo_team_bj.png", teamRight: "Team BK", teamRightLogo: "/assets/img/logo_team_bk.png", result: "30:28", location: "Stade BJ", link: "#" },
    { date: "16 mai 17:00", teamLeft: "Team BL", teamLeftLogo: "/assets/img/logo_team_bl.png", teamRight: "Team BM", teamRightLogo: "/assets/img/logo_team_bm.png", result: "29:29", location: "Gymnase BL", link: "#" },
    { date: "23 mai 18:00", teamLeft: "Team BN", teamLeftLogo: "/assets/img/logo_team_bn.png", teamRight: "Team BO", teamRightLogo: "/assets/img/logo_team_bo.png", result: "32:31", location: "Centre BN", link: "#" }
  ]
};

// Mois en cours et limites de saison
let calendarTeamsCurrentMonth = "2025-05";
const calendarTeamsSeasonStart = "2024-09";
const calendarTeamsSeasonEnd = "2025-05";

// Format du mois (ex: "mai 2025")
function formatCalendarTeamsMonthYear(ym) {
  const [year, month] = ym.split("-");
  const date = new Date(year, month - 1);
  return date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
}

// Affiche les matchs pour le mois donné
function displayCalendarTeamsMatches(monthKey) {
  const container = document.getElementById("calendarTeamsMatchesContainer");
  container.innerHTML = "";

  const matches = calendarTeamsMatchesByMonth[monthKey] || [];

  if (matches.length === 0) {
    container.innerHTML = "<p>Aucun match ce mois-ci.</p>";
    return;
  }

  matches.forEach(match => {
    const matchDiv = document.createElement("div");
    matchDiv.className = "row matches-row";
    matchDiv.innerHTML = `
      <div class="col-md-2 calendar-date-match col-12">
        <p>${match.date}</p>
      </div>
      <div class="col-md-3 calendar-team-left col-4">
        <img src="${match.teamLeftLogo}" alt="${match.teamLeft}">
        <p>${match.teamLeft}</p>
      </div>
      <div class="col-md-2 calendar-result text-center col-4">
        <p>${match.result} <span>${match.location}</span></p>
      </div>
      <div class="col-md-3 calendar-team-right col-4">
        <img src="${match.teamRightLogo}" alt="${match.teamRight}">
        <p>${match.teamRight}</p>
      </div>
      <div class="col-md-2 calendar-banner col-4 offset-4 offset-md-0">
        <a href="${match.link}" class="banner-rel statistics-rel">STATISTIQUES</a>
      </div>
    `;
    container.appendChild(matchDiv);
  });
}

// Calcule le mois précédent
function getCalendarTeamsPrevMonth(monthStr) {
  let [year, month] = monthStr.split("-");
  month = parseInt(month, 10) - 1;
  if (month < 1) {
    month = 12;
    year--;
  }
  return `${year}-${month.toString().padStart(2, "0")}`;
}

// Calcule le mois suivant
function getCalendarTeamsNextMonth(monthStr) {
  let [year, month] = monthStr.split("-");
  month = parseInt(month, 10) + 1;
  if (month > 12) {
    month = 1;
    year++;
  }
  return `${year}-${month.toString().padStart(2, "0")}`;
}

// Active/désactive les boutons navigation
function updateCalendarTeamsNavButtons() {
  document.getElementById("calendarTeamsPrevBtn").disabled = (calendarTeamsCurrentMonth === calendarTeamsSeasonStart);
  document.getElementById("calendarTeamsNextBtn").disabled = (calendarTeamsCurrentMonth === calendarTeamsSeasonEnd);
}

// Met à jour le mois affiché
function updateCalendarTeamsMonth(newMonth) {
  if (newMonth < calendarTeamsSeasonStart || newMonth > calendarTeamsSeasonEnd) return;

  calendarTeamsCurrentMonth = newMonth;
  document.getElementById("calendarTeamsMonthYear").textContent = formatCalendarTeamsMonthYear(newMonth);
  displayCalendarTeamsMatches(newMonth);
  updateCalendarTeamsNavButtons();
}

// Événements
document.getElementById("calendarTeamsPrevBtn").addEventListener("click", () => {
  const prev = getCalendarTeamsPrevMonth(calendarTeamsCurrentMonth);
  updateCalendarTeamsMonth(prev);
});

document.getElementById("calendarTeamsNextBtn").addEventListener("click", () => {
  const next = getCalendarTeamsNextMonth(calendarTeamsCurrentMonth);
  updateCalendarTeamsMonth(next);
});

// Initialisation
updateCalendarTeamsMonth(calendarTeamsCurrentMonth);
