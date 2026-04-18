const items = [
  // ── Packaging ──
  { id: 1,  title: "Herbal N – Diab Choornam Box",        category: "packaging",    file: "Package_Box_Herbal N_Diab Choornam.jpg" },
  { id: 2,  title: "Herbal N – Hair Oil Box",             category: "packaging",    file: "Package_Box_Herbal N_Hair Oil.jpg" },
  { id: 3,  title: "Herbal N – Ortho Pain Relief Box",    category: "packaging",    file: "Package_Box_Herbal N_Ortho Pain Relief.jpg" },
  { id: 4,  title: "Coco Elixir Stand-up Pouch",          category: "packaging",    file: "Package_Coco Elixir_Stand-up-pouch.jpg" },
  { id: 5,  title: "Coffee Package",                      category: "packaging",    file: "Package_Coffee Package Mockup 1.jpg" },
  { id: 6,  title: "Coffee Package",                      category: "packaging",    file: "Package_Coffee Package Mockup 2.jpg" },
  { id: 7,  title: "Coffee Package",                      category: "packaging",    file: "Package_Coffee Package Mockup 3.jpg" },
  { id: 8,  title: "Coffee Package",                      category: "packaging",    file: "Package_Coffee Package Mockup 4.jpg" },
  { id: 9,  title: "Coffee Package",                      category: "packaging",    file: "Package_Coffee Package Mockup 5.jpg" },
  { id: 10, title: "Coffee Package",                      category: "packaging",    file: "Package_Coffee Package Mockup 6.jpg" },
  { id: 11, title: "KITBOX DVD Case",                     category: "packaging",    file: "Package_KITBOX DVD_Case_Mockup.jpg" },
  { id: 12, title: "Pandigai Snacks Package",             category: "packaging",    file: "Package_Pandigai_Common Package for Multiple Products_Snacks.jpg" },
  { id: 13, title: "Ponma Idiyappam Package",             category: "packaging",    file: "Package_Ponma Idiyappam Package 2.jpg" },
  { id: 14, title: "Ponma Puttu Podi Package",            category: "packaging",    file: "Package_Ponma Puttu Podi Package.jpg" },
  { id: 15, title: "Prisby Idiyappam Package",            category: "packaging",    file: "Package_Prisby Idiyappam Package.jpg" },
  { id: 16, title: "Sweet Box",                           category: "packaging",    file: "Package_Sweet Box Mockup.jpg" },
  { id: 17, title: "Teakpro Key Holder",                  category: "packaging",    file: "Package_Teakpro Key Holder 2.jpg" },
  { id: 18, title: "Teakpro Bucket Box",                  category: "packaging",    file: "Package_Teakpro Pucket Box Packge.jpg" },
  { id: 19, title: "Teakpro Building Blocks",             category: "packaging",    file: "Package_Teakpro_Building Blocks.jpg" },
  { id: 20, title: "X-Fire Box",                          category: "packaging",    file: "Package_X-Fire Box-Mockup.jpg" },
  { id: 21, title: "Aureole Coconut Oil Bottle",          category: "packaging",    file: "Bottle Lable_Aureole Coconut Oil_Bottle_Mockup 1.jpg" },
  { id: 22, title: "Aureole Coconut Oil Bottle",          category: "packaging",    file: "Bottle Lable_Aureole Coconut Oil_Bottle_Mockup 2.jpg" },
  { id: 23, title: "Aureole Groundnut Oil Bottle",        category: "packaging",    file: "Bottle Lable_Aureole Groundnut Oil_Bottle_Mockup 1.jpg" },
  { id: 24, title: "CK Biriyani Bucket",                  category: "packaging",    file: "Bucket_CK Biriyani.jpg" },
  { id: 25, title: "Mubarak Biriyani Bucket",             category: "packaging",    file: "Bucket_OI_Mubarak Biriyani_Bucket.jpg" },
  { id: 26, title: "Priyam Burfi Package",                category: "packaging",    file: "Priyam package_Burfi package.jpg" },
  { id: 27, title: "Priyam Idli Milagai Podi",            category: "packaging",    file: "Priyam package_Idli Milagai Podi.jpg" },
  { id: 28, title: "Priyam Snacks Package",               category: "packaging",    file: "Priyam package_Snacks package.jpg" },
  { id: 29, title: "Priyam Tea Package",                  category: "packaging",    file: "Priyam package_Tea package.jpg" },
  { id: 30, title: "Giraj Paper Bag",                     category: "packaging",    file: "Bag_OI_Giraj_Paper_Bag_Mockup_3.jpg" },
  { id: 31, title: "Rollin Paper Bag",                    category: "packaging",    file: "Bag_OI_Rollin_Paper_Bag_Mockup_4.jpg" },

  // ── Branding ──
  { id: 32, title: "MM Foam Arch Mockup",                 category: "branding",     file: "Arch Mockup_MM Foam.jpg" },
  { id: 33, title: "KVR Brochure – Landscape",            category: "branding",     file: "Brochure 1a_KVR_Landscape.jpg" },
  { id: 34, title: "KVR Brochure – Landscape",            category: "branding",     file: "Brochure 1b_KVR_Landscape.jpg" },
  { id: 35, title: "KVR Brochure – Landscape",            category: "branding",     file: "Brochure 1c_KVR_Landscape.jpg" },
  { id: 36, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 3a_KVR_Portrait.jpg" },
  { id: 37, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 3b_KVR_Portrait.jpg" },
  { id: 38, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 3c_KVR_Portrait.jpg" },
  { id: 39, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 4a_KVR_Portrait.jpg" },
  { id: 40, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 4b_KVR_Portrait.jpg" },
  { id: 41, title: "KVR Brochure – Landscape",            category: "branding",     file: "Brochure 5a_KVR_Landscape.jpg" },
  { id: 42, title: "KVR Brochure – Landscape",            category: "branding",     file: "Brochure 5b_KVR_Landscape.jpg" },
  { id: 43, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 6a_KVR_Portrait.jpg" },
  { id: 44, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 6b_KVR_Portrait.jpg" },
  { id: 45, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 7a_KVR_Portrait.jpg" },
  { id: 46, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 7b_KVR_Portrait.jpg" },
  { id: 47, title: "KVR Brochure – Landscape",            category: "branding",     file: "Brochure 8a_KVR_Landscape.jpg" },
  { id: 48, title: "KVR Brochure – Landscape",            category: "branding",     file: "Brochure 8b_KVR_Landscape.jpg" },
  { id: 49, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 9a_KVR_Portrait.jpg" },
  { id: 50, title: "KVR Brochure – Portrait",             category: "branding",     file: "Brochure 9b_KVR_Portrait.jpg" },
  { id: 51, title: "Aqua Orange Brochure",                category: "branding",     file: "Brochure_Aqua Ornage A4 Mockup.jpg" },
  { id: 52, title: "IIM Brochure",                        category: "branding",     file: "Brochure_IIM_A4_Floating_Brochure_Mockup_7.jpg" },
  { id: 53, title: "IIM Brochure",                        category: "branding",     file: "Brochure_IIM_A4_Floating_Brochure_Mockup_8.jpg" },
  { id: 54, title: "IIM Brochure",                        category: "branding",     file: "Brochure_IIM_A4_Floating_Brochure_Mockup_9.jpg" },
  { id: 55, title: "Jayavel Brochure – Portrait",         category: "branding",     file: "Brochure_Jayavel_Brochure 2a_Portrait.jpg" },
  { id: 56, title: "Jayavel Brochure – Portrait",         category: "branding",     file: "Brochure_Jayavel_Brochure 2b_Portrait.jpg" },
  { id: 57, title: "S&D Connexions Brochure",             category: "branding",     file: "Brochure_Mockup_S&D Connexions 1.jpg" },
  { id: 58, title: "S&D Connexions Brochure",             category: "branding",     file: "Brochure_Mockup_S&D Connexions 2.jpg" },
  { id: 59, title: "S&D Connexions Brochure",             category: "branding",     file: "Brochure_Mockup_S&D Connexions 3.jpg" },
  { id: 60, title: "NITTSU Logistics Brochure",           category: "branding",     file: "Brochure_OI_NITTSU Logistic_Mockup_Horizontal.jpg" },
  { id: 61, title: "Sunshine Book Cover",                 category: "branding",     file: "Book Cover double_Mockup_Sunshine.jpg" },
  { id: 62, title: "Sunshine Book – Inner Pages",         category: "branding",     file: "Book_Mockup_Sunshine inner pages open.jpg" },
  { id: 63, title: "Icons of Tamilnadu Book",             category: "branding",     file: "Book_OI Icons of Tamilnadu Book top.jpg" },
  { id: 64, title: "Icons of Tamilnadu Book",             category: "branding",     file: "Book_TOI Icons of Tamilnadu Book 2.jpg" },

  // ── Banners ──
  { id: 65, title: "ABC Clinic Billboard",                category: "banners",      file: "Billboard Mockup with Large Size_ABC Clinic.jpg" },
  { id: 66, title: "Chennai Amirtha Billboard",           category: "banners",      file: "Billboard Subway_Chennai Amirtha_Mockup.jpg" },
  { id: 67, title: "Copper Kitchen Citylight",            category: "banners",      file: "Billboard_Isolated_Citylight_Poster_Mockup_Coppper Kitchen.jpg" },
  { id: 68, title: "KVR Fence Billboard",                 category: "banners",      file: "Billboard_KVR_Fence_Mockup_1.jpg" },
  { id: 69, title: "KVR Fence Billboard",                 category: "banners",      file: "Billboard_KVR_Fence_Mockup_3.jpg" },
  { id: 70, title: "KVR Billboard",                      category: "banners",      file: "Billboard_KVR_Mockup_4.jpg" },
  { id: 71, title: "KVR Subway Poster",                   category: "banners",      file: "Billboard_KVR_subway_poster_near_escalator.jpg" },
  { id: 72, title: "ABC Clinic Billboard",                category: "banners",      file: "Billboard_Mockup_ABC Clinic.jpg" },
  { id: 73, title: "Jayavel Billboard",                   category: "banners",      file: "Billboard_Mockup_Jayavel.jpg" },
  { id: 74, title: "Taj President Billboard",             category: "banners",      file: "Billboard_Taj President_mockup.jpg" },
  { id: 75, title: "The Creams Pasta Bus Stop",           category: "banners",      file: "Billboard_The Creams_Pasta_Bus_Stop_Citilight_Mockup.jpg" },
  { id: 76, title: "Copper Kitchen Stairwell Billboard",  category: "banners",      file: "Billboard-Mockup-at-Concrete-Stairwell_Copper Kitchen.jpg" },
  { id: 77, title: "Apex Roll-up Standee",                category: "banners",      file: "Standee_Apex_Mockup_Rollup_side_120x200.jpg" },
  { id: 78, title: "IBIS Roll-up Standee",                category: "banners",      file: "Standee_IBIS_150x200_Roll-up_Mockup_1.jpg" },
  { id: 79, title: "Fotoclickers X-Stand Banner",         category: "banners",      file: "Standee_OI_Fotoclickers_X-Stand_Banner_Mockup_1.jpg" },
  { id: 80, title: "Edwin Rajkumar Poster",               category: "banners",      file: "Edwin Rajkumar_Black & White_Poster_Mockup.jpg" },
  { id: 81, title: "Edwin Rajkumar Subway Poster",        category: "banners",      file: "Edwin Rajkumar_Black & White_Subway_Poster_Near_Escalator.jpg" },
  { id: 82, title: "The Creams Pasta Citylight",          category: "banners",      file: "Poster_The Creams_Pasta_Citylight_Poster_Mockup.jpg" },
  { id: 83, title: "Vijaya Ganapathy Stores Poster",      category: "banners",      file: "Poster_Vijaya Ganapathy Stores.jpg" },

  // ── Social Media / Print ──
  { id: 84, title: "Daily Fresh Flyer",                   category: "social-media", file: "Flyer Mockup Design_Daily Fresh.jpg" },
  { id: 85, title: "Aqua Orange Flyer",                   category: "social-media", file: "Flyer_Aqua Orange.jpg" },
  { id: 86, title: "Confluence Flyer",                    category: "social-media", file: "Flyer_Confluence Mockup.jpg" },
  { id: 87, title: "Copper Kitchen Flyer",                category: "social-media", file: "Flyer_Mockup_Copper Kitchen 2a.jpg" },
  { id: 88, title: "Copper Kitchen Flyer",                category: "social-media", file: "Flyer_Mockup_Copper Kitchen 2b.jpg" },
  { id: 89, title: "Easy Truck Leaflet",                  category: "social-media", file: "Leaflet_Easy Truck_Leaflet_3x99x210_Mockup.jpg" },
  { id: 90, title: "TVS Credit Newsletter",               category: "social-media", file: "Newsletter_TVS Credit-A4-A5-Flyer-Mockup.jpg" },
  { id: 91, title: "Chennais Amirta Newspaper Ad",        category: "social-media", file: "Newspaper Advertisement Mockup_Chennais Amirta.jpg" },
  { id: 92, title: "My Property Boutique – Teaser",       category: "social-media", file: "Newspaper Mockup_Teaser 1a_My Property Botique.jpg" },
  { id: 93, title: "My Property Boutique – Teaser",       category: "social-media", file: "Newspaper Mockup_Teaser 1b_My Property Botique 3.jpg" },
  { id: 94, title: "My Property Boutique – Revealer",     category: "social-media", file: "Newspaper Mockup_Teaser 1b_My Property Botique_Revealer.jpg" },
  { id: 95, title: "Velammal Newspaper Ad",               category: "social-media", file: "Newspaper Mockup_Velammal.jpg" },
  { id: 96, title: "Copper Kitchen Menu",                 category: "social-media", file: "Menu 1a_Mockup_CK.jpg" },
  { id: 97, title: "Copper Kitchen Menu – Inner Pages",   category: "social-media", file: "Menu 1b_Mockup_CK inner pages.jpg" },
  { id: 98, title: "Copper Kitchen Menu – Inner Pages",   category: "social-media", file: "Menu 1c_Mockup_CK inner pages 2.jpg" },
  { id: 99, title: "Copper Kitchen Table Tent",           category: "social-media", file: "Table_Tent_Mockup_ck 1.jpg" },
  { id: 100,title: "Copper Kitchen Table Tent",           category: "social-media", file: "Table_Tent_Mockup_ck 2.jpg" },
];

const IMAGE_BASE = "public/images/";
const THUMB_BASE = "public/thumbnails/";
const CATEGORY_LABELS = {
  all: "All",
  packaging: "Packaging",
  branding: "Branding",
  "social-media": "Social Media",
  banners: "Banners",
};

// ── Shuffle on load ──
for (let i = items.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [items[i], items[j]] = [items[j], items[i]];
}

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
render();
