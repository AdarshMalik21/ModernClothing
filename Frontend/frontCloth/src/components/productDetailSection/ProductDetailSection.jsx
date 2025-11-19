import React, { useState } from "react";

const ProductDetailSection = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT — Product Image */}
        <div className="relative bg-[rgba(255,255,255,0.02)] rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] backdrop-blur-md p-4">
          <img
            src={product?.image || "/placeholder.png"}
            alt={product?.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT — Product Details */}
        <div className="flex flex-col">
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-heading mb-3 text-text">
            {product?.title || "Custom Tailored Outfit"}
          </h1>

          {/* Price */}
          <p className="text-xl text-accent font-semibold mb-6">
            ₹{product?.price || "5999"}
          </p>

          {/* Description */}
          <p className="text-[rgba(229,229,229,0.85)] leading-relaxed mb-8">
            {product?.description ||
              "A luxury, tailor-crafted outfit made with premium fabrics, custom fit options, and refined detailing. Designed for comfort, durability, and timeless elegance."}
          </p>

          {/* Size Selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 text-[rgba(229,229,229,0.9)]">
              Select Size
            </h3>

            <div className="flex gap-3 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all
                    ${
                      selectedSize === size
                        ? "bg-accent text-bg border-accent"
                        : "border-[rgba(255,255,255,0.1)] text-text hover:border-accent"
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-3 text-[rgba(229,229,229,0.9)]">
              Quantity
            </h3>

            <div className="flex items-center gap-4">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]"
              >
                -
              </button>

              <span className="text-lg font-semibold w-6 text-center">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)]"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="w-full py-3 rounded-xl bg-accent text-bg font-semibold">
              Add to Cart
            </button>

            <button className="w-full py-3 rounded-xl border border-accent text-accent font-semibold hover:bg-accent hover:text-bg transition-all">
              Buy Now
            </button>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">

            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <h4 className="text-sm font-semibold mb-2">Fabric & Material</h4>
              <p className="text-[rgba(229,229,229,0.7)] text-sm">
                Premium breathable fabric, fine stitching, eco-friendly dyes.
              </p>
            </div>

            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <h4 className="text-sm font-semibold mb-2">Delivery & Fitting</h4>
              <p className="text-[rgba(229,229,229,0.7)] text-sm">
                Standard delivery: 5–7 days • Free alterations available.
              </p>
            </div>

            <div className="bg-[rgba(255,255,255,0.03)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
              <h4 className="text-sm font-semibold mb-2">Customization</h4>
              <p className="text-[rgba(229,229,229,0.7)] text-sm">
                Want something unique? Modify colors, fit, embroidery and more.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
