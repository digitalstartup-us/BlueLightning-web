"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { ArrowRight, Phone, X, ChevronLeft, ChevronRight, Images } from "lucide-react";

/* ─── Types ──────────────────────────────────────────────── */
type Project = {
  id: number;
  title: string;
  location: string;
  category: string;
  desc: string;
  cover: string;
  photos: string[];
  material: string;
  cols: 1 | 2;
};

/* ─── Project data — each photo used ONCE across all projects ─── */
const BASE1  = "/images/01 - Custom Decks";
const BASE2  = "/images/02 - Patios & Hardscaping";
const BASE3  = "/images/03 - Pergolas & Structures";
const BASE4  = "/images/04 - Outdoor Kitchens";
const BASE5  = "/images/05 - Pool Decks Full Outdoor Living";
const BASE8  = "/images/08 - Stamped Concrete";

const projects: Project[] = [
  {
    id: 1,
    title: "Aerial Deck, Sunroom & Patio Estate",
    location: "Northern Virginia",
    category: "Custom Decks",
    desc: "Multi-level composite deck with sunroom extension and integrated lower patio — captured from a drone showing the full scope of the outdoor transformation.",
    cover: `${BASE1}/facebook_deck-real-project_03.jpg`,
    photos: [
      `${BASE1}/facebook_deck-real-project_03.jpg`,
      `${BASE1}/facebook_deck-real-project_01.jpg`,
      `${BASE1}/facebook_deck-real-project_02.jpg`,
    ],
    material: "Composite · Sunroom · Porcelain Patio",
    cols: 2,
  },
  {
    id: 2,
    title: "Covered Deck + Hot Tub + Glass Railing",
    location: "Northern Virginia",
    category: "Custom Decks",
    desc: "Covered deck structure with full glass panel railing system, integrated hot tub, and sunset views. Structural integration with existing roofline. Premium evening lighting.",
    cover: `${BASE3}/structure_covered-deck-hot-tub-glass-railing_01.jpg`,
    photos: [
      `${BASE3}/structure_covered-deck-hot-tub-glass-railing_01.jpg`,
      `${BASE3}/structure_covered-deck-glass-railing-hot-tub_01.jpg`,
      `${BASE3}/structure_covered-deck-hot-tub-sunset_01.jpg`,
      `${BASE3}/structure_covered-deck-stairs-grass-view_01.jpg`,
      `${BASE3}/structure_covered-deck-stairs-white-shades_01.jpg`,
      `${BASE3}/structure_covered-deck-ground-level-stairs_01.jpg`,
    ],
    material: "Composite · Glass Railing · Cedar",
    cols: 1,
  },
  {
    id: 3,
    title: "Covered Pool Room + Spa — Indoor Luxury",
    location: "Northern Virginia",
    category: "Full Outdoor",
    desc: "Fully enclosed covered pool room with indoor spa, double french doors, recessed lighting, and premium interior finish. One of our most ambitious structural builds.",
    cover: `${BASE3}/structure_covered-pool-room-spa-doors-open_01.jpg`,
    photos: [
      `${BASE3}/structure_covered-pool-room-spa-doors-open_01.jpg`,
      `${BASE3}/structure_covered-pool-room-spa-doors-open_02.jpg`,
      `${BASE3}/structure_covered-pool-room-spa-double-doors_03.jpg`,
      `${BASE3}/structure_covered-pool-room-spa-interior_01.jpg`,
      `${BASE3}/structure_covered-pool-room-spa-interior_02.jpg`,
      `${BASE3}/structure_covered-pool-room-spa-interior_03.jpg`,
      `${BASE3}/structure_covered-pool-room-spa-lounge_01.jpg`,
      `${BASE3}/structure_covered-pool-room-stairs_01.jpg`,
      `${BASE3}/structure_covered-pool-room-with-spa_02.jpg`,
    ],
    material: "Custom Structure · Interior Tile · French Doors",
    cols: 2,
  },
  {
    id: 4,
    title: "Luxury Pool Estate — Aerial Series",
    location: "Ashburn, VA",
    category: "Pool Decks",
    desc: "Complete pool surround, fire pit lounge, pavilion, and porcelain hardscape photographed from above at multiple times of day. Every detail engineered for Northern Virginia.",
    cover: `${BASE5}/pool-deck_aerial-pool-house-afternoon_01.jpg`,
    photos: [
      `${BASE5}/pool-deck_aerial-pool-house-afternoon_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-afternoon_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-afternoon_03.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-afternoon_04.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-afternoon_05.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-day_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-day_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-day_03.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-day_04.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-day_05.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-morning_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-grounds_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-wide_04.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-cabana_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-top-down_05.jpg`,
      `${BASE5}/pool-deck_aerial-pool-firepit-evening_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-firepit-evening_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-firepit-angle_03.jpg`,
      `${BASE5}/pool-deck_aerial-pool-house-firepit-grass_01.jpg`,
    ],
    material: "Porcelain · Composite · Natural Stone",
    cols: 2,
  },
  {
    id: 5,
    title: "Pool Estate — Night & Twilight Aerial",
    location: "Northern Virginia",
    category: "Pool Decks",
    desc: "Dramatic aerial photography capturing the same luxury pool estate at dusk, twilight, and full night. LED lighting, fire pit, and covered cabana illuminated.",
    cover: `${BASE5}/pool-deck_aerial-pool-night_01.jpg`,
    photos: [
      `${BASE5}/pool-deck_aerial-pool-night_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_03.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_04.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_05.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_06.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_07.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_08.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_09.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_10.jpg`,
      `${BASE5}/pool-deck_aerial-pool-night_11.jpg`,
      `${BASE5}/pool-deck_aerial-pool-dusk_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-dusk_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-dusk_03.jpg`,
      `${BASE5}/pool-deck_aerial-pool-twilight_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-twilight_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-twilight_03.jpg`,
      `${BASE5}/pool-deck_aerial-pool-lights_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-lights_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-structure_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-structure-wide_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-evening_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-evening_02.jpg`,
      `${BASE5}/pool-deck_aerial-pool-evening_03.jpg`,
      `${BASE5}/pool-deck_aerial-pool-evening_04.jpg`,
      `${BASE5}/pool-deck_aerial-pool-firepit-side_01.jpg`,
      `${BASE5}/pool-deck_aerial-pool-firepit-twilight_02.jpg`,
    ],
    material: "Porcelain · LED Systems · Fire Pit",
    cols: 2,
  },
  {
    id: 6,
    title: "Pool + Spa — Evening Porcelain Surround",
    location: "Northern Virginia",
    category: "Pool Decks",
    desc: "Real Blue Lightning project — porcelain pool deck with raised spa and integrated pergola structure in the background. Photographed at golden hour.",
    cover: `${BASE5}/facebook_pool-porcelain-spa-evening_01.jpg`,
    photos: [
      `${BASE5}/facebook_pool-porcelain-spa-evening_01.jpg`,
      `${BASE5}/facebook_pool-travertine-pool-house_01.jpg`,
    ],
    material: "Porcelain · Travertine · LED",
    cols: 1,
  },
  {
    id: 7,
    title: "Sunken Fire Pit Lounge + Pool",
    location: "Northern Virginia",
    category: "Pool Decks",
    desc: "Real project: sunken composite bench lounge with integrated fire table, full LED strip lighting, and luxury pool in the background — photographed at night.",
    cover: `${BASE5}/facebook_pool-sunken-firepit-led-night_01.jpg`,
    photos: [
      `${BASE5}/facebook_pool-sunken-firepit-led-night_01.jpg`,
    ],
    material: "Composite · LED Strip · Porcelain",
    cols: 1,
  },
  {
    id: 8,
    title: "Porcelain Pool — Blue Water Series",
    location: "Northern Virginia",
    category: "Pool Decks",
    desc: "Premium porcelain pool surrounds showcasing blue-finish pools, integrated spas, pergola covers, and clean geometric design across multiple Northern Virginia projects.",
    cover: `${BASE5}/pool-deck_porcelain-blue-pool-house_01.jpg`,
    photos: [
      `${BASE5}/pool-deck_porcelain-blue-pool-house_01.jpg`,
      `${BASE5}/pool-deck_porcelain-blue-pool-modern_01.jpg`,
      `${BASE5}/pool-deck_porcelain-blue-pool-pergola_01.jpg`,
      `${BASE5}/pool-deck_porcelain-blue-pool-twilight_01.jpg`,
      `${BASE5}/pool-deck_porcelain-blue-pool-white-house_01.jpg`,
      `${BASE5}/pool-deck_porcelain-blue-pool-white-house_02.jpg`,
      `${BASE5}/pool-deck_porcelain-white-steps-blue-pool_01.jpg`,
      `${BASE5}/pool-deck_porcelain-pool-spa-modern_02.jpg`,
      `${BASE5}/pool-deck_porcelain-pool-spa-wood-deck_01.jpg`,
      `${BASE5}/pool-deck_porcelain-deck-pool-spa_01.jpg`,
      `${BASE5}/pool-deck_white-house-pool-evening_01.jpg`,
      `${BASE5}/pool-deck_white-house-pool-spa_01.jpg`,
      `${BASE5}/pool-deck_white-house-twilight-lights_01.jpg`,
      `${BASE5}/pool-deck_porcelain-pergola-fire-table-pool_01.jpg`,
      `${BASE5}/pool-deck_porcelain-pergola-wood-blue-pool_01.jpg`,
      `${BASE5}/pool-deck_concrete-deck-railing-modern_01.jpg`,
      `${BASE5}/pool-deck_covered-pergola-interior_01.jpg`,
      `${BASE5}/pool-deck_composite-gray-grill-sunset_01.jpg`,
    ],
    material: "Porcelain · Travertine · Outdoor Tile",
    cols: 1,
  },
  {
    id: 9,
    title: "Pergola + Pool Deck — Premium Shade Systems",
    location: "Northern Virginia",
    category: "Pool Decks",
    desc: "Louvered and flat-roof pergola systems installed over pool decks — dark aluminum and black-finish frames over porcelain and travertine pool surrounds.",
    cover: `${BASE5}/pool-deck_pergola-black-louvered_01.jpg`,
    photos: [
      `${BASE5}/pool-deck_pergola-black-louvered_01.jpg`,
      `${BASE5}/pool-deck_pergola-black-pool-white-house_01.jpg`,
      `${BASE5}/pool-deck_porcelain-pergola-dark-aluminum_02.jpg`,
      `${BASE5}/pool-deck_porcelain-pergola-shade-black_01.jpg`,
      `${BASE5}/pool-deck_porcelain-pergola-shade-pool_01.jpg`,
      `${BASE5}/pool-deck_porcelain-pergola-white-shade-pool_01.jpg`,
      `${BASE5}/pool-deck_porcelain-pergola-white-shade_02.jpg`,
    ],
    material: "Aluminum Pergola · Porcelain · LED",
    cols: 1,
  },
  {
    id: 10,
    title: "Stamped Concrete — Compass Rose Estate",
    location: "Northern Virginia",
    category: "Stamped Concrete",
    desc: "Real Blue Lightning project: large-scale stamped concrete patio with custom compass rose medallion, stone seat wall with built-in fire pit, and full landscape lighting.",
    cover: `${BASE8}/facebook_stamped-compass-rose-night_01.jpg`,
    photos: [
      `${BASE8}/facebook_stamped-compass-rose-night_01.jpg`,
      `${BASE2}/patio_real-project-phone_04.jpg`,
      `${BASE2}/patio_real-project-phone_05.jpg`,
    ],
    material: "Stamped Concrete · Stone Wall · LED",
    cols: 2,
  },
  {
    id: 11,
    title: "Curved Stamped Concrete Under-Deck Patio",
    location: "Northern Virginia",
    category: "Stamped Concrete",
    desc: "Real Blue Lightning project: curved stamped concrete patio built under an elevated composite deck — organic curved shape with border detailing and pea gravel accent.",
    cover: `${BASE2}/patio_real-project-phone_06.jpg`,
    photos: [
      `${BASE2}/patio_real-project-phone_06.jpg`,
      `${BASE2}/patio_real-project-phone_07.jpg`,
    ],
    material: "Stamped Concrete · Curved Design",
    cols: 1,
  },
  {
    id: 12,
    title: "Porcelain Patio — Fire Table & Pergola System",
    location: "Northern Virginia",
    category: "Patios",
    desc: "Comprehensive porcelain patio system with built-in fire table, covered pergola, outdoor kitchen integration, and landscape-graded gravel border — a full outdoor living space.",
    cover: `${BASE2}/patio_porcelain-gray-fire-table-outdoor-kitchen_01.jpg`,
    photos: [
      `${BASE2}/patio_porcelain-gray-fire-table-outdoor-kitchen_01.jpg`,
      `${BASE2}/patio_porcelain-gray-fire-table-backyard-view_02.jpg`,
      `${BASE2}/patio_porcelain-gray-fire-table-evening_02.jpg`,
      `${BASE2}/patio_stone-hardscape-black-railing-gravel_01.jpg`,
      `${BASE2}/patio_porcelain-gray-covered-pergola_01.jpg`,
      `${BASE2}/patio_porcelain-gray-deck-transition_01.jpg`,
      `${BASE2}/patio_porcelain-gray-gravel-black-railing_01.jpg`,
      `${BASE2}/patio_porcelain-gray-home-exterior-gravel_01.jpg`,
    ],
    material: "Porcelain · Stone Hardscape · Fire Table",
    cols: 1,
  },
  {
    id: 13,
    title: "Real Project — Patio + Deck + Shade Sail",
    location: "Northern Virginia",
    category: "Patios",
    desc: "Real Blue Lightning client project featuring a clean paver patio, shade sail system, privacy screen, and seamless deck-to-patio transition. Photographed on completion day.",
    cover: `${BASE2}/patio_real-project-phone_02.jpg`,
    photos: [
      `${BASE2}/patio_real-project-phone_02.jpg`,
      `${BASE2}/patio_real-project-phone_01.jpg`,
      `${BASE2}/patio_real-project-phone_03.jpg`,
    ],
    material: "Paver Patio · Shade Sail · Privacy Screen",
    cols: 1,
  },
  {
    id: 14,
    title: "Louvered Pergola + Full Outdoor Kitchen & Patio",
    location: "Northern Virginia",
    category: "Full Outdoor",
    desc: "Premium real Blue Lightning project: dark aluminum louvered pergola over a full outdoor kitchen station on a large porcelain patio — built-in seating and fire table.",
    cover: `${BASE2}/facebook_pergola-kitchen-porcelain-luxury_01.jpg`,
    photos: [
      `${BASE2}/facebook_pergola-kitchen-porcelain-luxury_01.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-outdoor-kitchen_01.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-outdoor-kitchen_02.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-seating-outdoor-kitchen_01.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-stairs-outdoor-kitchen_01.jpg`,
    ],
    material: "Aluminum Louvered · Porcelain · Kitchen",
    cols: 2,
  },
  {
    id: 15,
    title: "Louvered Pergola — Fire Table & Evening Living",
    location: "Northern Virginia",
    category: "Pergolas",
    desc: "Dark gray aluminum louvered pergola with integrated fire table, built-in bench seating, and rope swing. Captured at golden hour and evening light.",
    cover: `${BASE3}/pergola_louvered-dark-gray-fire-table-sunset_01.jpg`,
    photos: [
      `${BASE3}/pergola_louvered-dark-gray-fire-table-sunset_01.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-fire-table-evening_02.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-fire-table_01.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-seating-fire-table_01.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-seating-fire-table_02.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-built-in-seating_01.jpg`,
      `${BASE3}/pergola_louvered-dark-gray-rope-swing_01.jpg`,
    ],
    material: "Aluminum Louvered · Built-In Seating",
    cols: 1,
  },
  {
    id: 16,
    title: "White Pergola Outdoor Bar & Kitchen",
    location: "Northern Virginia",
    category: "Outdoor Kitchens",
    desc: "Real Blue Lightning project: classic white pergola with string lights, L-shaped outdoor bar kitchen with stone cladding, paver patio, and rural estate backdrop.",
    cover: `${BASE4}/outdoor-kitchen_real-project-phone_01.jpg`,
    photos: [
      `${BASE4}/outdoor-kitchen_real-project-phone_01.jpg`,
      `${BASE4}/outdoor-kitchen_real-project-phone_02.jpg`,
    ],
    material: "White Pergola · Stone · Paver Patio",
    cols: 1,
  },
  {
    id: 17,
    title: "Premium Outdoor Kitchen — Marble & Stone",
    location: "Great Falls, VA",
    category: "Outdoor Kitchens",
    desc: "High-end outdoor kitchen installations: white cabinetry with marble island, stone-clad island with granite countertop, and dark covered kitchen with fireplace and pool room.",
    cover: `${BASE4}/outdoor-kitchen_white-cabinets-marble-island-grill_01.jpg`,
    photos: [
      `${BASE4}/outdoor-kitchen_white-cabinets-marble-island-grill_01.jpg`,
      `${BASE4}/outdoor-kitchen_white-cabinets-fireplace-interior_01.jpg`,
      `${BASE4}/facebook_outdoor-kitchen-stone-island-patio_01.jpg`,
      `${BASE4}/outdoor-kitchen_dark-gray-pergola-grill-firepit_01.jpg`,
      `${BASE4}/outdoor-kitchen_covered-pool-room-fireplace_01.jpg`,
    ],
    material: "Marble · Granite · Stainless Steel",
    cols: 2,
  },
  {
    id: 18,
    title: "Indoor Pool Room + Composite Deck + Kitchen",
    location: "Northern Virginia",
    category: "Full Outdoor",
    desc: "Extraordinary luxury build: fully enclosed indoor pool room with composite deck flooring, built-in kitchen, fireplace, and TV wall — an all-weather outdoor living wing.",
    cover: `${BASE1}/facebook_indoor-pool-room-deck-kitchen_01.jpg`,
    photos: [
      `${BASE1}/facebook_indoor-pool-room-deck-kitchen_01.jpg`,
    ],
    material: "Composite Deck · Custom Structure · Stone",
    cols: 2,
  },
  {
    id: 19,
    title: "Composite Deck Series — Black & Gray Railing",
    location: "Northern Virginia",
    category: "Custom Decks",
    desc: "A gallery of premium composite deck builds featuring black cable and metal railing systems, multi-level stair configurations, and clean architectural lines.",
    cover: `${BASE1}/deck_composite-gray-black-railing-wide-view_01.jpg`,
    photos: [
      `${BASE1}/deck_composite-gray-black-railing-wide-view_01.jpg`,
      `${BASE1}/deck_composite-gray-black-railing-perspective_02.jpg`,
      `${BASE1}/deck_composite-gray-black-railing-house-view_03.jpg`,
      `${BASE1}/deck_composite-gray-black-covered-structure_04.jpg`,
      `${BASE1}/deck_composite-brown-white-railing-view_01.jpg`,
      `${BASE1}/deck_composite-brown-white-railing-detail_02.jpg`,
      `${BASE1}/deck_cedar-composite-white-railing-stairs_01.jpg`,
    ],
    material: "Composite · Black Metal · Cable Railing",
    cols: 1,
  },
  {
    id: 20,
    title: "White & Black Deck Series — Multi-Level",
    location: "Northern Virginia",
    category: "Custom Decks",
    desc: "A collection of white PVC and composite deck builds with black railing systems — multi-level configurations, pergola integrations, and fireplace lounge areas.",
    cover: `${BASE1}/deck_white-black-railing-multi-level_01.jpg`,
    photos: [
      `${BASE1}/deck_white-black-railing-multi-level_01.jpg`,
      `${BASE1}/deck_white-black-railing-interior-view_01.jpg`,
      `${BASE1}/deck_white-porch-black-railing_01.jpg`,
      `${BASE1}/deck_white-vinyl-railing-stairs-cedar-treads_01.jpg`,
      `${BASE1}/deck_white-vinyl-railing-stairs-closeup_02.jpg`,
      `${BASE1}/deck_white-vinyl-railing-gate-detail_03.jpg`,
      `${BASE1}/deck_white-stairs-black-railing-wide_01.jpg`,
      `${BASE1}/deck_white-stairs-black-railing-perspective_02.jpg`,
      `${BASE1}/deck_white-stairs-black-railing-interior_03.jpg`,
      `${BASE1}/deck_white-pergola-fireplace-lounge_01.jpg`,
      `${BASE1}/deck_white-railing-fire-table-patio_01.jpg`,
      `${BASE1}/deck_white-railing-corner-detail_01.jpg`,
      `${BASE1}/deck_white-railing-corner-ornamental_02.jpg`,
      `${BASE1}/deck_white-railing-lighting-detail_01.jpg`,
      `${BASE1}/deck_white-railing-winter-view_01.jpg`,
      `${BASE1}/deck_taupe-porch-vertical-railing_01.jpg`,
      `${BASE1}/deck_taupe-pergola-black-railing_01.jpg`,
      `${BASE1}/deck_gray-pergola-white-railing-seating_01.jpg`,
      `${BASE1}/deck_pergola-white-aluminum-beams_01.jpg`,
      `${BASE1}/deck_black-white-railing-detail_01.jpg`,
      `${BASE1}/deck_black-white-railing-detail_02.jpg`,
      `${BASE1}/deck_black-white-railing-detail_03.jpg`,
      `${BASE1}/deck_black-white-railing-ornamental-finial_01.jpg`,
      `${BASE1}/deck_black-white-railing-ornamental-finial_02.jpg`,
    ],
    material: "PVC · Composite · Black Metal Railing",
    cols: 1,
  },
  {
    id: 21,
    title: "Multi-Level Deck + Screened Porch — Aerial",
    location: "Northern Virginia",
    category: "Custom Decks",
    desc: "Aerial drone shot of a composite deck with screened porch enclosure and large porcelain patio below — a complete backyard outdoor living system.",
    cover: `${BASE1}/facebook_deck-patio-screened-aerial_01.jpg`,
    photos: [
      `${BASE1}/facebook_deck-patio-screened-aerial_01.jpg`,
    ],
    material: "Composite · Screened Room · Porcelain",
    cols: 1,
  },
  {
    id: 22,
    title: "Covered Deck — Fireplace & Outdoor Kitchen",
    location: "Northern Virginia",
    category: "Custom Decks",
    desc: "Covered deck structure with fireplace integration and full outdoor kitchen station — the perfect all-season outdoor room for Northern Virginia homeowners.",
    cover: `${BASE3}/structure_covered-deck-fireplace-outdoor-kitchen_01.jpg`,
    photos: [
      `${BASE3}/structure_covered-deck-fireplace-outdoor-kitchen_01.jpg`,
      `${BASE3}/structure_covered-deck-twilight-fire-table_01.jpg`,
      `${BASE3}/structure_covered-pool-room-with-hot-tub_01.jpg`,
    ],
    material: "Composite · Fireplace · Outdoor Kitchen",
    cols: 1,
  },
];

const categories = ["All", "Custom Decks", "Pool Decks", "Patios", "Stamped Concrete", "Pergolas", "Full Outdoor", "Outdoor Kitchens"];

/* ─── Lightbox ──────────────────────────────────────────── */
function Lightbox({
  project,
  initialIndex,
  onClose,
}: {
  project: Project;
  initialIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(initialIndex);
  const total = project.photos.length;

  const prev = useCallback(() => setIdx((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIdx((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(24px)" }}
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 md:px-8 py-4 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#F5F0E8", fontWeight: 300, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {project.title}
          </div>
          <div className="flex items-center gap-3 mt-0.5">
            <span style={{ color: "#8A8A8A", fontSize: "11px" }}>{project.location}</span>
            <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "10px" }}>·</span>
            <span style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.08em" }}>{project.material}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-shrink-0 ml-4">
          <div className="flex items-center gap-2">
            <Images size={13} style={{ color: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontSize: "12px" }}>{idx + 1} / {total}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#F5F0E8" }}
          >
            <X size={16} />
          </motion.button>
        </div>
      </div>

      {/* Main image */}
      <div className="flex-1 relative flex items-center justify-center min-h-0" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={project.photos[idx]}
            alt={`${project.title} — Photo ${idx + 1}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="max-w-full max-h-full object-contain"
            style={{ padding: "12px 56px" }}
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.1, background: "rgba(201,168,76,0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(13,13,13,0.7)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, background: "rgba(201,168,76,0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200"
              style={{ background: "rgba(13,13,13,0.7)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {total > 1 && (
        <div
          className="flex-shrink-0 px-4 py-3 overflow-x-auto flex gap-2 items-center"
          style={{ borderTop: "1px solid rgba(201,168,76,0.08)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {project.photos.map((photo, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIdx(i)}
              className="flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200"
              style={{
                width: "60px",
                height: "45px",
                border: i === idx ? "2px solid #C9A84C" : "2px solid rgba(255,255,255,0.1)",
                opacity: i === idx ? 1 : 0.5,
              }}
            >
              <img src={photo} alt="" className="w-full h-full object-cover" />
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Project card ───────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (photoIndex: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${project.cols === 2 ? "md:col-span-2" : ""}`}
      style={{ border: "1px solid rgba(201,168,76,0.08)" }}
      onClick={() => onOpen(0)}
    >
      {/* Main image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: project.cols === 2 ? "16/7" : "4/3" }}
      >
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(9,9,9,0.9) 0%, rgba(9,9,9,0.1) 55%)" }} />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(9,9,9,0.25)" }} />

        {/* Photo count badge */}
        {project.photos.length > 1 && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{ background: "rgba(13,13,13,0.75)", border: "1px solid rgba(201,168,76,0.25)", backdropFilter: "blur(8px)" }}>
            <Images size={11} style={{ color: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.08em" }}>{project.photos.length} photos</span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="text-xs px-3 py-1 rounded-full"
            style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.25)", color: "#C9A84C", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {project.category}
          </span>
        </div>

        {/* Hover overlay CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full"
            style={{ background: "rgba(201,168,76,0.9)", backdropFilter: "blur(8px)" }}>
            <Images size={14} style={{ color: "#0D0D0D" }} />
            <span style={{ color: "#0D0D0D", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em" }}>
              {project.photos.length > 1 ? `View ${project.photos.length} Photos` : "View Photo"}
            </span>
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className="p-5" style={{ background: "#111111" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#F5F0E8", fontWeight: 300, marginBottom: "4px" }}>{project.title}</div>
        <div style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>{project.location}</div>
        <p style={{ color: "#8A8A8A", fontSize: "12px", lineHeight: 1.65, fontWeight: 300 }}>{project.desc}</p>
        <div className="flex items-center justify-between mt-4">
          <span style={{ color: "#666", fontSize: "10px", letterSpacing: "0.05em" }}>{project.material}</span>
          <motion.div
            whileHover={{ x: 3 }}
            className="flex items-center gap-1"
            style={{ color: "#C9A84C", fontSize: "10px", letterSpacing: "0.1em" }}
          >
            <ChevronRight size={12} /> View
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<{ project: Project; photoIndex: number } | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  const openLightbox = (project: Project, photoIndex = 0) =>
    setLightbox({ project, photoIndex });

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0D0D0D 0%, #0A0A0A 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent)" }} />
          <div ref={headerRef} className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>850+ Projects Completed</span>
              </div>
              <h1 className="font-light leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 8vw, 9rem)", color: "#F5F0E8" }}>
                Our Work.
              </h1>
              <p className="max-w-2xl" style={{ color: "#8A8A8A", fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.8 }}>
                Real projects, real homes, real Northern Virginia. Every image is from an actual Blue Lightning Decks &amp; Patios installation.
                Click any project to see the full photo gallery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="sticky top-20 z-30 py-4" style={{ background: "rgba(13,13,13,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
              {categories.map((cat) => (
                <motion.button key={cat} whileTap={{ scale: 0.95 }} onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-200"
                  style={{ fontSize: "10px", letterSpacing: "0.15em", background: activeCategory === cat ? "#C9A84C" : "transparent", color: activeCategory === cat ? "#0D0D0D" : "#8A8A8A", border: `1px solid ${activeCategory === cat ? "#C9A84C" : "rgba(201,168,76,0.2)"}` }}>
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="relative py-16 md:py-20" style={{ background: "#0A0A0A" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} onOpen={(pi) => openLightbox(project, pi)} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-32">
                <p style={{ color: "#8A8A8A", fontSize: "1rem" }}>No projects in this category yet. Check back soon.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24" style={{ background: "#0D0D0D", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
          <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "#C9A84C", fontSize: "11px" }}>Start Your Project</span>
                <div className="h-px w-12" style={{ background: "#C9A84C" }} />
              </div>
              <h2 className="font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 5rem)", color: "#F5F0E8", lineHeight: 1.0 }}>
                Your project could be
                <br /><em style={{ color: "#C9A84C" }}>next in this gallery.</em>
              </h2>
              <p className="mb-10" style={{ color: "#8A8A8A", fontSize: "1rem", fontWeight: 300, lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
                Call today and see if your project qualifies for a complimentary 3D design rendering. Mauricio personally reviews every inquiry.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:+17034239965">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-8 py-4 rounded-xl cursor-pointer"
                    style={{ background: "#C9A84C", color: "#0D0D0D", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}>
                    <Phone size={15} strokeWidth={2.5} />
                    Call Now — (703) 423-9965
                  </motion.div>
                </a>
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.04 }}
                    className="btn-outline-gold px-8 py-4 rounded-xl cursor-pointer"
                    style={{ fontSize: "12px", letterSpacing: "0.12em" }}>
                    Free Consultation
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            project={lightbox.project}
            initialIndex={lightbox.photoIndex}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
