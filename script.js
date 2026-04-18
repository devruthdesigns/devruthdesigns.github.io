let items = [];

const IMAGE_BASE = "public/images/";
const THUMB_BASE = "public/thumbnails/";
const CATEGORY_LABELS = {
  all: "All",
  packaging: "Packaging",
  branding: "Branding",
  "social-media": "Social Media",
  banners: "Banners",
};


// ── Scroll reveal observer ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    const card = entry.target;
    const delay = (parseInt(card.dataset.col || 0) % 6) * 60;
    setTimeout(() => card.classList.add("visible"), delay);
    revealObserver.unobserve(card);
  });
}, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });

// ── State ──
let activeCategory = "all";
let searchQuery = "";
let visibleItems = [];
let lightboxIndex = 0;


// ── DOM refs ──
const grid        = document.getElementById("portfolioGrid");
const noResults   = document.getElementById("noResults");
const itemCount   = document.getElementById("itemCount");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const categoryBtn = document.getElementById("categoryBtn");
const categoryLabel = document.getElementById("categoryLabel");
const categoryDropdown = document.getElementById("categoryDropdown");
const categoryWrap = document.getElementById("categoryWrap");
const lightbox    = document.getElementById("lightbox");
const lbImg       = document.getElementById("lbImg");
const lbCaption   = document.getElementById("lbCaption");
const lbClose     = document.getElementById("lbClose");
const lbSpinner   = document.getElementById("lbSpinner");
const lbPrev      = document.getElementById("lbPrev");
const lbNext      = document.getElementById("lbNext");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose  = document.getElementById("modalClose");
const contactBtn  = document.getElementById("contactBtn");

// ── Filter ──
function getFiltered() {
  const q = searchQuery.toLowerCase().trim();
  return items.filter(item => {
    const catMatch = activeCategory === "all" || item.category === activeCategory;
    const searchMatch = !q || item.title.toLowerCase().includes(q) || item.category.includes(q);
    return catMatch && searchMatch;
  });
}

function render() {
  visibleItems = getFiltered();

  grid.innerHTML = "";
  noResults.style.display = visibleItems.length ? "none" : "flex";
  itemCount.textContent = `Showing ${visibleItems.length} item${visibleItems.length !== 1 ? "s" : ""}`;

  visibleItems.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.idx = idx;
    card.dataset.col = idx % 6;

    const img = document.createElement("img");
    img.src = THUMB_BASE + item.file;
    img.alt = item.title;
    img.loading = "lazy";

    const overlay = document.createElement("div");
    overlay.className = "card-overlay";

    const info = document.createElement("div");
    info.className = "card-info";

    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = item.title;

    const badge = document.createElement("div");
    badge.className = "card-cat-badge";
    badge.textContent = CATEGORY_LABELS[item.category] || item.category;

    info.appendChild(title);
    info.appendChild(badge);
    overlay.appendChild(info);
    card.appendChild(img);
    card.appendChild(overlay);

    card.addEventListener("click", () => openLightbox(idx));
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

// ── Category dropdown ──
categoryBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = categoryDropdown.classList.toggle("open");
  categoryBtn.classList.toggle("open", isOpen);
  categoryBtn.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (e) => {
  if (!categoryWrap.contains(e.target)) {
    categoryDropdown.classList.remove("open");
    categoryBtn.classList.remove("open");
    categoryBtn.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".cat-option").forEach(option => {
  option.addEventListener("click", () => {
    activeCategory = option.dataset.value;
    categoryLabel.textContent = option.textContent;
    document.querySelectorAll(".cat-option").forEach(o => o.classList.remove("active"));
    option.classList.add("active");
    categoryDropdown.classList.remove("open");
    categoryBtn.classList.remove("open");
    render();
  });
});

// ── Search ──
searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  searchClear.classList.toggle("visible", searchQuery.length > 0);
  render();
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  searchClear.classList.remove("visible");
  searchInput.focus();
  render();
});


// ── Lightbox ──
function openLightbox(idx) {
  lightboxIndex = idx;
  updateLightbox();
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

function updateLightbox() {
  const item = visibleItems[lightboxIndex];
  lbCaption.textContent = `${item.title}  ·  ${CATEGORY_LABELS[item.category]}`;
  lbPrev.style.display = lightboxIndex > 0 ? "flex" : "none";
  lbNext.style.display = lightboxIndex < visibleItems.length - 1 ? "flex" : "none";

  lbImg.classList.add("loading");
  lbSpinner.classList.add("active");
  lbImg.onload = lbImg.onerror = () => {
    lbSpinner.classList.remove("active");
    lbImg.classList.remove("loading");
    lbImg.onload = lbImg.onerror = null;
  };
  lbImg.src = IMAGE_BASE + item.file;
  lbImg.alt = item.title;
}

lbClose.addEventListener("click", closeLightbox);
lbPrev.addEventListener("click", () => { lightboxIndex--; updateLightbox(); });
lbNext.addEventListener("click", () => { lightboxIndex++; updateLightbox(); });

lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft" && lightboxIndex > 0) { lightboxIndex--; updateLightbox(); }
  if (e.key === "ArrowRight" && lightboxIndex < visibleItems.length - 1) { lightboxIndex++; updateLightbox(); }
});

// ── Contact Modal ──
contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
});

modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
});

// ── Init ──
document.getElementById("footerYear").textContent = new Date().getFullYear();

fetch("public/items.json")
  .then(r => r.json())
  .then(data => {
    items = data;
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    render();
  });
