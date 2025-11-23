import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from '../../api/axios';
import ProductDetailSection from '../productDetailSection/ProductDetailSection';

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(`products/${id}/`) // Example: /api/products/1/
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  if (!product)
    return (
      <div className="text-center py-20 text-lg text-[rgba(229,229,229,0.6)]">
        Loading product...
      </div>
    );

  return <ProductDetailSection product={product} />;
};

export default ProductDetailPage;
