// src/Components/Products/ProductShowCase.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaPhone, FaSearch, FaTimes } from "react-icons/fa";
import { products as allProducts } from "../../data/products";

const PHONE_NUMBER = "0596922053"; // update if necessary

const categories = ["All", "Farm", "Manufactured"];

const ProductCard = ({ p, onView }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.28 }}
    className="bg-white rounded-lg shadow-sm overflow-hidden"
  >
    <img
      src={p.imageUrl || "/images/products/placeholder.jpg"}
      alt={p.name}
      loading="lazy"
      className="w-full h-44 object-cover"
    />
    <div className="p-4">
      <h4 className="font-semibold text-lg">{p.name}</h4>
      <p className="text-sm text-gray-600 mt-1">{p.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm text-gray-700 font-medium">{p.price}</div>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_NUMBER}`}
            onClick={(e) => {
              // desktop fallback handled globally - allow default on mobile
            }}
            className="inline-flex items-center bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700"
            aria-label={`Call to order ${p.name}`}
          >
            <FaPhone className="mr-2" /> Order
          </a>
          <button
            onClick={() => onView(p)}
            className="text-sm text-green-600 underline"
            aria-label={`View ${p.name}`}
          >
            View
          </button>
        </div>
      </div>
    </div>
  </motion.article>
);

export default function ProductShowCase() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  // desktop copy-to-clipboard behavior for call CTAs
  const handleCallClick = (ev) => {
    const isMobile = typeof navigator !== "undefined" && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      ev.preventDefault();
      navigator.clipboard
        .writeText(PHONE_NUMBER)
        .then(() => toast.success(`Phone number copied: ${PHONE_NUMBER}`))
        .catch(() => {
          toast(`Phone number: ${PHONE_NUMBER}`);
        });
    }
  };

  const filtered = useMemo(() => {
    let list = allProducts;
    if (active !== "All") list = list.filter((x) => x.category === active);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter((x) => `${x.name} ${x.description}`.toLowerCase().includes(q));
    }
    return list;
  }, [active, query]);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    active === c ? "bg-green-600 text-white" : "bg-white border border-gray-200 text-gray-700"
                  }`}
                  aria-pressed={active === c}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 w-full md:w-1/3">
              <div className="relative w-full">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200"
                  aria-label="Search products"
                />
                <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              <div>
                <button
                  onClick={() => {
                    setQuery("");
                    setActive("All");
                  }}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-md"
                  aria-label="Reset filters"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id}>
                <ProductCard
                  p={p}
                  onView={(item) => {
                    setSelected(item);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center text-gray-600 py-10">No products match your search.</div>
          )}

          {/* Modal */}
          {selected && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)} />
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.18 }}
                className="bg-white rounded-lg overflow-hidden max-w-2xl w-full z-10"
              >
                <div className="p-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold">{selected.name}</h3>
                  <button onClick={() => setSelected(null)} aria-label="Close" className="p-2 text-gray-600 hover:text-gray-900">
                    <FaTimes />
                  </button>
                </div>

                <img src={selected.imageUrl || "/images/products/placeholder.jpg"} alt={selected.name} className="w-full h-64 object-cover" loading="lazy" />

                <div className="p-4">
                  <p className="text-gray-700">{selected.description}</p>
                  <p className="mt-3 text-sm text-gray-600">{selected.price}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      onClick={handleCallClick}
                      className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-md"
                      aria-label={`Call to order ${selected.name}`}
                    >
                      <FaPhone className="mr-2" /> Call to Order
                    </a>

                    <button onClick={() => { navigator.clipboard && navigator.clipboard.writeText(selected.name); toast.success("Product name copied"); }} className="px-3 py-2 border rounded-md">
                      Copy Name
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
