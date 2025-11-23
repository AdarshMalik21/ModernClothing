import React, { useState, useEffect } from "react";

const ProductDetailSection = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);

  // 🔥 NEW — Active Main Image State
  const [activeImage, setActiveImage] = useState(
    product.images?.[0]?.image || "/placeholder.png"
  );

  // If product changes (page loads new product), update active image
  useEffect(() => {
    if (product?.images?.length > 0) {
      setActiveImage(product.images[0].image);
    }
  }, [product]);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT — Product Images */}
        <div className="space-y-4">
          
          {/* ⭐ MAIN IMAGE (Now Clickable Controlled) */}
          <div className="bg-[rgba(255,255,255,0.02)] rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] backdrop-blur-md p-4">
            <img
              src={activeImage}
              alt={product.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* ⭐ THUMBNAIL IMAGES */}
          <div className="flex gap-3">
            {product.images?.map((imgObj, index) => (
              <img
                key={index}
                src={imgObj.image}
                onClick={() => setActiveImage(imgObj.image)} // 🔥 CLICK TO CHANGE MAIN IMAGE
                className={`w-24 h-24 object-cover rounded-xl cursor-pointer border ${
                  activeImage === imgObj.image
                    ? "border-accent"
                    : "border-[rgba(255,255,255,0.1)] hover:border-accent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — Product Details */}
        <div className="flex flex-col">

          {/* Product Title */}
          <h1 className="text-3xl md:text-4xl font-heading mb-3 text-text">
            {product.title}
          </h1>

          {/* Price */}
          <p className="text-xl text-accent font-semibold mb-6">
            ₹{product.price}
          </p>

          {/* Description */}
          <p className="text-[rgba(229,229,229,0.85)] leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3 opacity-90">
              Select Size
            </h3>

            <div className="flex gap-3 flex-wrap">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                    selectedSize === size
                      ? "bg-accent text-bg border-accent"
                      : "border-[rgba(255,255,255,0.1)] hover:border-accent"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-3 opacity-90">
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="w-full py-3 rounded-xl bg-accent text-bg font-semibold">
              Add to Cart
            </button>

            <button className="w-full py-3 rounded-xl border border-accent text-accent font-semibold hover:bg-accent hover:text-bg transition-all">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
