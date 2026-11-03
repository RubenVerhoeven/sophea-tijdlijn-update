const MAANDEN = ["jun", "jul", "aug", "sep", "okt", "nov"];

const MOMENTEN = [
  {
    kort: "Het idee",
    maand: 0,
    datum: "Juni 2026",
    titel: "Eén handchain aan de eettafel",
    tekst: "Sophia maakte een handchain voor zichzelf: een dun kettinkje van pols naar vinger, met een extra ketting over de hand. Het vak had ze geleerd bij een sieradenmaker, waar ze met tangetjes oogjes leerde draaien en schakels leerde sluiten. Haar vriendinnen zagen de handchain en vroegen meteen: \"Kun je die ook voor mij maken?\"",
    layout: "foto",
    beelden: ["img/werkplek/eettafel.jpg", "img/werkplek/eettafel-2.jpg"],
    seizoen: 0
  },
  {
    kort: "Een naam",
    maand: 1,
    datum: "Juli 2026",
    titel: "SOPHÉA, naar Sophia zelf",
    tekst: "Het merk kreeg haar eigen naam, met een accent op de É dat er een Franse klank aan geeft. Daarbij kwamen een hoofdlogo en een sublogo.",
    les: "Een naam met een eigen verhaal blijft beter hangen. Door Sophia's eigen naam te gebruiken, voelt het merk meteen persoonlijk.",
    layout: "logo",
    beelden: [
      { src: "img/sophea-logo.png", tekst: "Het hoofdlogo" },
      { src: "img/sophea-sublogo.png", tekst: "Het sublogo" }
    ],
    seizoen: 0.1
  },
  {
    kort: "Het tagje",
    maand: 1,
    datum: "Juli 2026",
    titel: "Van uitgetypt naar gegraveerd",
    tekst: "Het eerste tagje was langwerpig, met SOPHÉA er gewoon in uitgetypt. Het nieuwe tagje is rond, met het sublogo erin gegraveerd. Zo draagt elk sieraad het merk.",
    les: "Aan zo'n klein detail zie je of een sieraad goedkoop of luxe is. Een mooi tagje maakt het hele sieraad meer waard.",
    layout: "vergelijk",
    beelden: [{ oud: "img/tagje/tagje-oud.jpg", nieuw: "img/tagje/tagje-nieuw.jpg" }],
    seizoen: 0.15
  },
  {
    kort: "De webshop",
    maand: 2,
    datum: "20 augustus 2026",
    titel: "Een eigen webshop",
    tekst: "SOPHÉA kreeg een eigen website, in zomerse kleuren die passen bij de eerste collectie. Geen standaard thema, maar helemaal op maat, zodat de foto's van de sieraden de ruimte krijgen.",
    les: "Een eigen website kost meer tijd dan een standaard winkel, maar het merk ziet er precies uit zoals je wilt.",
    layout: "browser",
    beelden: [
      { src: "img/website/website-zomer.jpg", tekst: "De homepage" },
      { src: "img/website/website-zomer-2.jpg", tekst: "De eerste versie van sophea.nl" },
      { src: "img/website/website-zomer3.jpg", tekst: "De eerste versie van sophea.nl" },
      { src: "img/website/website-zomer-4.jpg", tekst: "De eerste versie van sophea.nl" }
    ],
    seizoen: 0.2
  },
  {
    kort: "Zomerdrop",
    maand: 3,
    datum: "1 september 2026",
    titel: "Côte, Capri, Azur, Soleil",
    tekst: "De eerste collectie, genoemd naar de Franse kust. Fijne handchains en kettingen in goud, met kraaltjes in helder, blauw en donkerblauw.",
    les: "Een collectie met een thema werkt. Door elk sieraad een naam te geven die bij de zomer past, vertel je een verhaal in plaats van alleen producten te verkopen.",
    layout: "collage",
    beelden: [
      {
        collage: [
          { src: "img/zomer/cotexcapriset-gedragen.jpg", tekst: "Côte x Capri set, gedragen" },
          { src: "img/zomer/capri-gedragen.jpg", tekst: "Capri, gedragen" },
          { src: "img/zomer/cote-gedragen.jpg", tekst: "Côte, gedragen" },
          { src: "img/zomer/cote-blauw-gedragen.jpg", tekst: "Côte, blauw" },
          { src: "img/zomer/cotexcapri-donkerblauw-gedragen.jpg", tekst: "Côte x Capri, donkerblauw" },
          { src: "img/zomer/cotexcapri-helder-gedragen.jpeg", tekst: "Côte x Capri, helder", positie: "center 75%" },
          { src: "img/zomer/cotexcapri-gedragen.jpg", tekst: "Côte x Capri, gedragen" },
          { src: "img/zomer/azur-soleil-gedragen.jpg", tekst: "Azur en Soleil, gedragen" }
        ]
      }
    ],
    deco: "zomer",
    seizoen: 0.3
  },
  {
    kort: "Live",
    maand: 3,
    datum: "1 september 2026",
    titel: "De eerste dag: meteen bestellingen",
    tekst: "Op 1 september gaat sophea.nl live. Betalen gaat via Shopify, verzenden als brievenbuspakje met PostNL. Op de eerste dag komen er meteen al bestellingen binnen.",
    layout: "split",
    beelden: ["img/live.jpeg"],
    seizoen: 0.4
  },
  {
    kort: "Handwerk",
    maand: 3,
    datum: "1 september 2026",
    titel: "Elk sieraad met de hand",
    tekst: "Na de eerste bestellingen zit Sophia met haar tangetjes aan tafel. Oogjes draaien, schakels sluiten, kraaltjes rijgen: elk sieraad wordt met de hand in elkaar gezet.",
    les: "Handgemaakt betekent dat elke bestelling tijd kost. Bij veel bestellingen tegelijk moet je goed plannen.",
    layout: "video",
    beelden: ["video/alles-handmaken-om-op-te-sturen.mov"],
    seizoen: 0.45
  },
  {
    kort: "Op de post",
    maand: 3,
    datum: "3 september 2026",
    titel: "Inpakken en versturen",
    tekst: "Elk sieraad gaat op een kaartje met het logo, in een brievenbuspakje. Voor de verzendlabels moest Sophia eerst langs bij haar vader, die wel een labelprinter had. Daarna kwam er een eigen labelprinter.",
    les: "Een labelprinter scheelt veel tijd: geen adressen meer met de hand schrijven, en elk pakketje ziet er netjes en hetzelfde uit.",
    layout: "split-omgekeerd",
    beelden: [
      { src: "img/inpakken/eerste-ingepakte-bestellingen.jpeg", tekst: "De eerste ingepakte bestellingen" },
      { src: "img/inpakken/nog-meer-bestellingen.jpg", tekst: "En nog meer bestellingen" },
      { src: "img/inpakken/labelprinter.jpg", tekst: "De eigen labelprinter" }
    ],
    seizoen: 0.52
  },
  {
    kort: "Monaco",
    maand: 3,
    datum: "28 september 2026",
    titel: "Tussen de jachten in Monaco",
    tekst: "Een fotoshoot in de haven van Monaco, tussen de jachten. Precies de sfeer van een collectie die naar de Franse kust is genoemd. In de video zitten al sieraden uit de herfstcollectie: een voorproefje.",
    les: "Nieuwe sieraden al laten zien voordat ze te koop zijn, maakt mensen nieuwsgierig naar de volgende drop.",
    layout: "film",
    beelden: ["video/monaco.mp4"],
    deco: "zomer",
    seizoen: 0.6
  },
  {
    kort: "Advertenties",
    maand: 4,
    datum: "Oktober 2026",
    titel: "In je Instagram-stories",
    tekst: "Om meer mensen te bereiken, verschijnt SOPHÉA in advertenties in Instagram-stories. Gedragen foto's in zonnig licht, met steeds één sieraad in beeld.",
    les: "Advertenties met gedragen foto's werken beter dan losse productfoto's. Mensen willen zien hoe een sieraad staat als je het draagt.",
    layout: "telefoons",
    beelden: [
      {
        collage: [
          { src: "img/advertenties/advertentie-1.jpg", tekst: "Advertentie" },
          { src: "img/advertenties/advertentie-2.jpg", tekst: "Advertentie" },
          { src: "img/advertenties/advertentie-3.jpg", tekst: "Advertentie" },
          { src: "img/advertenties/advertentie-4.jpg", tekst: "Advertentie" },
          { src: "img/advertenties/advertentie-5.jpg", tekst: "Advertentie" }
        ]
      }
    ],
    seizoen: 0.68
  },
  {
    kort: "Mini-atelier",
    maand: 4,
    datum: "10 oktober 2026",
    titel: "Een eigen werkplekje",
    tekst: "Van de eettafel naar een eigen werkplekje in huis: een mini-atelier met een lamp, alle kraaltjes, kettingen en tangetjes binnen handbereik.",
    les: "Een vaste plek maakt het werk sneller en rustiger.",
    layout: "vergelijk",
    beelden: [{ oud: "img/werkplek/eettafel.jpg", nieuw: "img/werkplek/eigen-atelier.jpg" }],
    seizoen: 0.78
  },
  {
    kort: "Samenwerking",
    maand: 4,
    datum: "19 oktober 2026",
    titel: "SOPHÉA x Scentique Amsterdam",
    tekst: "Een samenwerking met Scentique Amsterdam, een parfummerk uit Amsterdam. Samen deden ze een fotoshoot met de parfum en de sieraden in één beeld.",
    les: "Door samen te werken met een ander merk bereik je een nieuwe doelgroep: de klanten van Scentique leren SOPHÉA kennen. En je krijgt er mooie content voor terug.",
    layout: "collage-rechts",
    beelden: [
      {
        collage: [
          { src: "img/samenwerking/scentique-1.jpg", tekst: "SOPHÉA x Scentique Amsterdam" },
          { src: "img/samenwerking/scentique-2.jpg", tekst: "SOPHÉA x Scentique Amsterdam" },
          { src: "img/samenwerking/scentique-3.jpg", tekst: "SOPHÉA x Scentique Amsterdam" },
          { src: "img/samenwerking/scentique-4.jpg", tekst: "SOPHÉA x Scentique Amsterdam" },
          { src: "img/samenwerking/scentique-5.jpg", tekst: "SOPHÉA x Scentique Amsterdam" }
        ]
      }
    ],
    seizoen: 0.86
  },
  {
    kort: "Herfstdrop",
    maand: 5,
    datum: "1 november 2026",
    titel: "De herfstcollectie",
    tekst: "Op 1 november verschijnt de herfstcollectie, en de webshop verandert mee. Diepere kleuren als aubergine, bordeaux en olijfgroen, en nieuwe modellen zoals de Lumi handchain en de Elara oorbellen. Op de site staan nu cadeautips voor de feestdagen en echte reviews via Trustpilot.",
    link: { href: "https://sophea.nl", tekst: "Bekijk de nieuwe website op sophea.nl" },
    les: "Een merk groeit mee met de seizoenen. De website sloeg goed aan, dus die is niet helemaal veranderd: alleen de sfeer, en wat er nog miste, zoals reviews.",
    layout: "collage",
    beelden: [
      {
        collage: [
          { src: "img/herfst/lumi-handchain-bruin-gedragen.jpg", tekst: "Lumi handchain, bruin" },
          { src: "img/herfst/capri-aubergine-gedragen.jpg", tekst: "Capri, aubergine" },
          { src: "img/herfst/cotexcapri-bordeaux-gedragen.jpg", tekst: "Côte x Capri, bordeaux" },
          { src: "img/herfst/elara-oorbellen-gedragen.jpg", tekst: "Elara oorbellen, aubergine" },
          { src: "img/herfst/cotexcapri-olijfrgoen.jpg", tekst: "Côte x Capri, olijfgroen" },
          { src: "img/herfst/lumi-handchain-bordeaux-gerdagen.jpg", tekst: "Lumi handchain, bordeaux" },
          { src: "img/herfst/stras-armband&handchain-gedragen.jpg", tekst: "Stras armband en handchain" }
        ]
      },
      { oud: "img/website/website-zomer.jpg", nieuw: "img/website/website-herfst-1.png", tekst: "De homepage: zomer en herfst", breed: true },
      { oud: "img/website/website-zomer-2.jpg", nieuw: "img/website/website-herfst-2.png", tekst: "De website: zomer en herfst", breed: true },
      { oud: "img/website/website-zomer3.jpg", nieuw: "img/website/website-herfst-3.png", tekst: "De website: zomer en herfst", breed: true },
      { src: "img/website/website-herfst-4.png", tekst: "Nieuw: cadeautips voor de feestdagen", breed: true },
      { src: "img/website/website-herfst-5.png", tekst: "Nieuw: echte reviews via Trustpilot", breed: true }
    ],
    deco: "herfst",
    seizoen: 1
  },
  {
    kort: "Kerst",
    maand: 5,
    datum: "Nu: november 2026",
    titel: "Op weg naar de feestdagen",
    tekst: "De volgende stap is al begonnen. Sophia werkt aan een kerstverpakking, zodat een sieraad meteen als cadeau onder de boom kan. En er ligt al een eerste idee voor een nieuw sieraad. Wordt vervolgd.",
    les: "Een sieraad is vaak een cadeau. Met een mooie verpakking voelt het al bijzonder voordat het open is.",
    layout: "collage-rechts",
    beelden: [
      {
        collage: [
          { src: "img/kerst/kerstverpakking.jpg", tekst: "De kerstverpakking" },
          { src: "img/kerst/idee-kerst.jpg", tekst: "Een nieuw idee voor de feestdagen" }
        ]
      }
    ],
    deco: "kerst",
    seizoen: 1
  }
];

const ZOMER = { bg: [251, 246, 236], kaart: [255, 253, 248], accent: [201, 169, 110], les: [243, 230, 208] };
const HERFST = { bg: [236, 224, 208], kaart: [246, 238, 228], accent: [160, 98, 56], les: [230, 210, 188] };

function meng(a, b, t) {
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(",")})`;
}

function zetSeizoen(t) {
  const root = document.documentElement.style;
  root.setProperty("--bg", meng(ZOMER.bg, HERFST.bg, t));
  root.setProperty("--kaart", meng(ZOMER.kaart, HERFST.kaart, t));
  root.setProperty("--accent", meng(ZOMER.accent, HERFST.accent, t));
  root.setProperty("--les", meng(ZOMER.les, HERFST.les, t));
}

function maakMedia(pad, alt, metKnoppen = false) {
  if (/\.(mp4|mov|webm)$/i.test(pad)) {
    const video = document.createElement("video");
    video.src = pad;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.controls = metKnoppen;
    video.setAttribute("aria-label", alt);
    video.addEventListener("error", () => video.replaceWith(leegVlak(pad)));
    return video;
  }
  const img = document.createElement("img");
  img.src = pad;
  img.alt = alt;
  img.addEventListener("error", () => img.replaceWith(leegVlak(pad)));
  return img;
}

function leegVlak(pad) {
  const div = document.createElement("div");
  div.className = "leeg";
  div.textContent = `Foto komt hier: ${pad}`;
  return div;
}

function maakVergelijker(v, titel) {
  const box = document.createElement("div");
  box.className = "vergelijk-beeld";
  box.innerHTML = `
    <div class="nieuw"></div>
    <div class="oud"></div>
    <span class="streep"></span>
    <span class="label links">Toen</span>
    <span class="label rechts">Nu</span>
    <input type="range" min="0" max="100" value="50" aria-label="${titel}: sleep om toen en nu te vergelijken">`;
  box.querySelector(".oud").appendChild(maakMedia(v.oud, `${titel}, toen`));
  box.querySelector(".nieuw").appendChild(maakMedia(v.nieuw, `${titel}, nu`));
  const range = box.querySelector("input");
  range.addEventListener("input", () => {
    const pos = Number(range.value);
    box.style.setProperty("--pos", `${pos}%`);
    box.classList.toggle("alleen-nu", pos === 0);
    box.classList.toggle("alleen-toen", pos === 100);
  });
  range.addEventListener("keydown", (e) => e.stopPropagation());
  return box;
}

function maakCollage(fotos, titel) {
  const grid = document.createElement("div");
  grid.className = "collage";
  grid.dataset.aantal = Math.min(fotos.length, 9);
  fotos.slice(0, 9).forEach((f, k) => {
    const knop = document.createElement("button");
    knop.type = "button";
    knop.className = "collage-tegel";
    knop.setAttribute("aria-label", `${f.tekst || titel}, bekijk groot`);
    const beeld = maakMedia(f.src, f.tekst || titel);
    if (f.positie) beeld.style.objectPosition = f.positie;
    knop.appendChild(beeld);
    knop.addEventListener("click", () => openGroot(fotos, k, titel));
    grid.appendChild(knop);
  });
  return grid;
}

function maakTelefoons(fotos, titel) {
  const rij = document.createElement("div");
  rij.className = "telefoons";
  fotos.forEach((f, k) => {
    const knop = document.createElement("button");
    knop.type = "button";
    knop.className = "telefoon";
    knop.style.setProperty("--k", k);
    knop.setAttribute("aria-label", `${f.tekst || titel} ${k + 1}, bekijk groot`);
    knop.appendChild(maakMedia(f.src, f.tekst || titel));
    knop.addEventListener("click", () => openGroot(fotos, k, titel));
    rij.appendChild(knop);
  });
  return rij;
}

function maakLosBeeld(b, titel) {
  if (typeof b === "string") return maakMedia(b, titel, true);
  if (b.oud) return maakVergelijker(b, b.tekst || titel);
  return maakMedia(b.src, b.tekst || titel, true);
}

function maakCarrousel(beelden, titel, maker = maakLosBeeld) {
  const box = document.createElement("div");
  box.className = "carrousel";
  box.innerHTML = `<div class="beeld-plek"></div><p class="bijschrift" hidden></p>`;
  const plek = box.querySelector(".beeld-plek");
  const bijschrift = box.querySelector(".bijschrift");
  let huidig = 0;

  function toon(j) {
    huidig = (j + beelden.length) % beelden.length;
    const b = beelden[huidig];
    plek.innerHTML = "";
    plek.appendChild(maker(b, titel));
    const tekst = typeof b === "object" && b.tekst && !b.oud ? b.tekst : "";
    bijschrift.textContent = tekst;
    bijschrift.hidden = !tekst;
    box.classList.toggle("toont-vergelijk", typeof b === "object" && !!b.oud);
    box.classList.toggle("toont-breed", typeof b === "object" && !!b.breed);
    box.querySelectorAll(".stippen button").forEach((s, k) => s.setAttribute("aria-current", k === huidig ? "true" : "false"));
  }

  if (beelden.length > 1) {
    const vorige = document.createElement("button");
    vorige.type = "button";
    vorige.className = "pijl vorige";
    vorige.setAttribute("aria-label", "Vorige foto");
    vorige.textContent = "‹";
    vorige.addEventListener("click", () => toon(huidig - 1));

    const volgende = document.createElement("button");
    volgende.type = "button";
    volgende.className = "pijl volgende";
    volgende.setAttribute("aria-label", "Volgende foto");
    volgende.textContent = "›";
    volgende.addEventListener("click", () => toon(huidig + 1));

    const stippen = document.createElement("div");
    stippen.className = "stippen";
    beelden.forEach((_, k) => {
      const s = document.createElement("button");
      s.type = "button";
      s.setAttribute("aria-label", `Foto ${k + 1}`);
      s.addEventListener("click", () => toon(k));
      stippen.appendChild(s);
    });
    box.append(vorige, volgende, stippen);
  }
  toon(0);
  return box;
}

const groot = document.createElement("dialog");
groot.className = "groot";
groot.innerHTML = `
  <div class="groot-beeld"></div>
  <p class="groot-tekst"></p>
  <button type="button" class="pijl vorige" aria-label="Vorige foto">‹</button>
  <button type="button" class="pijl volgende" aria-label="Volgende foto">›</button>
  <button type="button" class="groot-sluit" aria-label="Sluiten">×</button>`;
document.body.appendChild(groot);

let grootFotos = [];
let grootIndex = 0;
let grootTitel = "";

function toonGroot(k) {
  grootIndex = (k + grootFotos.length) % grootFotos.length;
  const f = grootFotos[grootIndex];
  const plek = groot.querySelector(".groot-beeld");
  plek.innerHTML = "";
  plek.appendChild(maakMedia(f.src, f.tekst || grootTitel, true));
  groot.querySelector(".groot-tekst").textContent = `${f.tekst || ""}  ·  ${grootIndex + 1} / ${grootFotos.length}`;
}

function openGroot(fotos, k, titel) {
  grootFotos = fotos;
  grootTitel = titel;
  toonGroot(k);
  groot.showModal();
}

groot.querySelector(".vorige").addEventListener("click", () => toonGroot(grootIndex - 1));
groot.querySelector(".volgende").addEventListener("click", () => toonGroot(grootIndex + 1));
groot.querySelector(".groot-sluit").addEventListener("click", () => groot.close());
groot.addEventListener("click", (e) => { if (e.target === groot) groot.close(); });
groot.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") toonGroot(grootIndex + 1);
  if (e.key === "ArrowLeft") toonGroot(grootIndex - 1);
});

const ICOONTJES = {
  zomer: [
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M2 10c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1M2 16c2.5-3 5-3 7.5 0s5 3 7.5 0 3.5-2 5-1"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6.5"/><path d="M12 5.5v13M5.5 12h13M7.4 7.4l9.2 9.2M16.6 7.4l-9.2 9.2"/></svg>'
  ],
  herfst: [
    '<svg viewBox="0 0 24 24"><path d="M12 3C6 7 5 13 12 21c7-8 6-14 0-18z"/><path d="M12 21V8M12 12l-3-2.5M12 15l3-2.5M12 18l-2.5-2"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M5.5 10c0-3 3-5 6.5-5s6.5 2 6.5 5z"/><path d="M7 10c0 5 2 9 5 10.5 3-1.5 5-5.5 5-10.5"/><path d="M12 5V2.5"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 20C4 11 9 5 20 4c-1 11-7 16-16 16z"/><path d="M4 20 15 9M9 15H6.5M12 12V9.5"/></svg>'
  ],
  kerst: [
    '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 8.8l6-.7z"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="3.5" y="9" width="17" height="11.5" rx="1"/><path d="M2.5 9h19V6h-19zM12 6v14.5M12 6c-1.5-3-5-3.5-5-1.2C7 6 9.5 6 12 6zm0 0c1.5-3 5-3.5 5-1.2C17 6 14.5 6 12 6z"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/></svg>'
  ]
};

function hintVoor(m) {
  const b = m.beelden;
  if (m.layout === "telefoons") return "Klik op een advertentie om hem groot te zien.";
  if (b.some((x) => typeof x === "object" && x.collage)) {
    return b.length > 1 ? "Klik op een foto om hem groot te zien. Met de pijlen zie je ook de vernieuwde website." : "Klik op een foto om hem groot te zien.";
  }
  if (b.some((x) => typeof x === "object" && x.oud)) return "Sleep over de foto: links toen, rechts nu.";
  if (b.length > 1 && m.layout !== "logo") return "Klik met de pijlen door de foto's.";
  return "";
}

function maakStapMedia(m) {
  const b = m.beelden;
  if (m.layout === "logo") {
    const rij = document.createElement("div");
    rij.className = "logos";
    b.forEach((x) => {
      const fig = document.createElement("figure");
      fig.appendChild(maakMedia(x.src, x.tekst));
      const cap = document.createElement("figcaption");
      cap.textContent = x.tekst;
      fig.appendChild(cap);
      rij.appendChild(fig);
    });
    return rij;
  }
  if (m.layout === "telefoons") return maakTelefoons(b[0].collage, m.titel);
  if (m.layout === "browser") {
    const venster = document.createElement("div");
    venster.className = "browser";
    venster.innerHTML = `<div class="browser-balk"><span></span><span></span><span></span><p>sophea.nl</p></div>`;
    venster.appendChild(maakCarrousel(b, m.titel));
    return venster;
  }
  const maker = (x, titel) => (typeof x === "object" && x.collage ? maakCollage(x.collage, titel) : maakLosBeeld(x, titel));
  if (b.length > 1) return maakCarrousel(b, m.titel, maker);
  return maker(b[0], m.titel);
}

function maakStap(m) {
  const stap = document.createElement("article");
  stap.className = `stap layout-${m.layout}`;
  stap.setAttribute("aria-live", "polite");

  const media = document.createElement("div");
  media.className = "stap-media";
  media.appendChild(maakStapMedia(m));

  const tekst = document.createElement("div");
  tekst.className = "stap-tekst";
  const deco = m.deco ? `<div class="deco" aria-hidden="true">${ICOONTJES[m.deco].join("")}</div>` : "";
  const hint = hintVoor(m);
  tekst.innerHTML = `
    ${deco}
    <p class="stap-datum">${m.datum}</p>
    <h2 class="stap-titel">${m.titel}</h2>
    <p class="stap-tekst-p">${m.tekst}</p>
    ${hint ? `<p class="stap-hint">${hint}</p>` : ""}
    ${m.link ? `<a class="stap-link" href="${m.link.href}" target="_blank" rel="noopener">${m.link.tekst} <span aria-hidden="true">↗</span><span class="sr-only"> (opent in een nieuw tabblad)</span></a>` : ""}`;

  stap.append(media, tekst);

  if (m.les) {
    const les = document.createElement("aside");
    les.className = "les";
    les.innerHTML = `<p class="les-kop">Wat we leerden</p><p>${m.les}</p>`;
    stap.append(les);
  }
  return stap;
}

const podium = document.getElementById("podium");
const slider = document.getElementById("tijdSlider");
const baan = document.getElementById("baan");
const punten = document.getElementById("punten");
const maanden = document.getElementById("maanden");
const actiefLabel = document.getElementById("actiefLabel");
let huidig = -1;

function plek(i) {
  const f = MOMENTEN.length > 1 ? i / (MOMENTEN.length - 1) : 0;
  return `calc(var(--bol) / 2 + (100% - var(--bol)) * ${f})`;
}

function toonMoment(i) {
  if (i === huidig || i < 0 || i >= MOMENTEN.length) return;
  const richting = i > huidig ? 1 : -1;
  huidig = i;
  const m = MOMENTEN[i];

  const oud = podium.querySelector(".stap:not(.weg)");
  if (oud) {
    oud.classList.add("weg");
    oud.style.setProperty("--richting", -richting);
    setTimeout(() => oud.remove(), 500);
  }

  const nieuw = maakStap(m);
  nieuw.style.setProperty("--richting", richting);
  nieuw.classList.add("binnen");
  podium.appendChild(nieuw);
  requestAnimationFrame(() => requestAnimationFrame(() => nieuw.classList.remove("binnen")));
  setTimeout(() => nieuw.classList.add("les-in"), 650);

  slider.value = i;
  slider.setAttribute("aria-valuetext", `${m.kort}, ${m.datum}`);
  baan.style.setProperty("--vol", plek(i));
  actiefLabel.textContent = m.kort;
  actiefLabel.style.left = plek(i);
  actiefLabel.style.transform = `translateX(${-(i / (MOMENTEN.length - 1)) * 100}%)`;
  punten.querySelectorAll("span").forEach((p, k) => p.classList.toggle("geweest", k <= i));
  document.getElementById("vorigeStap").disabled = i === 0;
  document.getElementById("volgendeStap").disabled = i === MOMENTEN.length - 1;
  zetSeizoen(m.seizoen);
}

function maakTijdlijn() {
  slider.max = MOMENTEN.length - 1;

  MOMENTEN.forEach((m, i) => {
    const p = document.createElement("span");
    p.style.left = plek(i);
    punten.appendChild(p);
  });

  MAANDEN.forEach((naam, mi) => {
    const idx = MOMENTEN.map((m, i) => (m.maand === mi ? i : -1)).filter((i) => i >= 0);
    if (!idx.length) return;
    const a = idx[0];
    const b = idx[idx.length - 1];
    const maand = document.createElement("span");
    maand.className = "maand";
    if (mi === 0) maand.classList.add("eerste");
    if (mi === MAANDEN.length - 1) maand.classList.add("laatste");
    maand.style.left = plek(a);
    maand.style.width = `calc((100% - var(--bol)) * ${(b - a) / (MOMENTEN.length - 1)})`;
    const tekst = document.createElement("b");
    tekst.textContent = mi === 0 || mi === MAANDEN.length - 1 ? `${naam} 2026` : naam;
    maand.appendChild(tekst);
    maanden.appendChild(maand);
  });

  slider.addEventListener("input", () => toonMoment(Number(slider.value)));
  document.getElementById("vorigeStap").addEventListener("click", () => toonMoment(huidig - 1));
  document.getElementById("volgendeStap").addEventListener("click", () => toonMoment(huidig + 1));

  document.addEventListener("keydown", (e) => {
    if (groot.open || e.target === slider) return;
    if (e.key === "ArrowRight") toonMoment(huidig + 1);
    if (e.key === "ArrowLeft") toonMoment(huidig - 1);
  });

  toonMoment(0);
}

maakTijdlijn();