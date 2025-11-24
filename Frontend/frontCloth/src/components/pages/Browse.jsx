import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { Link } from "react-router-dom";
import Reel from "../reelSection/Reel";
import About from "../footer/Footer"

const Browse = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Fetch products
  useEffect(() => {
    axiosInstance
      .get("products/")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  // Fetch categories separately
  useEffect(() => {
    axiosInstance
      .get("products/categories/") // ONLY works if you add Category API
      .then((res) => setCategories(res.data))
      .catch(() => {});
  }, []);

  // Filter + Sort logic (runs on frontend)
  const filteredProducts = products
    .filter((p) => {
      if (selectedCategory === "all") return true;
      return p.category?.slug === selectedCategory;
    })
    .sort((a, b) => {
      if (sortBy === "low-high") return a.price - b.price;
      if (sortBy === "high-low") return b.price - a.price;
      return new Date(b.created_at) - new Date(a.created_at); // newest
    });

  return (
    <>
    <div className="px-6 py-12">
      
      {/* --------------------- Page Title --------------------- */}
      <h1 className="text-4xl font-heading mb-8">Browse Products</h1>

      {/* --------------------- Categories Section --------------------- */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl border ${
              selectedCategory === "all"
                ? "border-accent text-accent"
                : "border-[rgba(255,255,255,0.1)]"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-xl border ${
                selectedCategory === cat.slug
                  ? "border-accent text-accent"
                  : "border-[rgba(255,255,255,0.1)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* --------------------- Filters Section --------------------- */}
      <div className="flex gap-6 items-center mb-10">
        {/* Sort Filter */}
        <div>
          <label className="text-sm opacity-80">Sort by</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="ml-2 px-4 py-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg"
          >
            <option value="newest">Newest</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* --------------------- Product Grid --------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
        {filteredProducts.map((product) => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id}
            className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-4 hover:border-accent transition-all"
          >
            <img
              src={product.images[0]?.image}
              alt={product.title}
              className="w-full h-80 object-cover rounded-xl"
            />

            <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
            <p className="text-accent text-xl font-bold mt-1">₹{product.price}</p>
          </Link>
        ))}
      </div>

      {/* --------------------- Reels Preview Section --------------------- */}
      {/* --------------------- Category Reels Section --------------------- */}
        {selectedCategory !== "all" && (
          <div className="mt-20">
            <h2 className="text-2xl mb-4 font-heading">Trending Reels</h2>
            <Reel mode="category" categorySlug={selectedCategory} />
          </div>
        )}


    </div>
    <About />
    </>
  );
};

export default Browse;
