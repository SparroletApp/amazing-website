"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./product-view.css"
import { Product } from "../products/product-list";

function ProductView() {
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const savedProduct = sessionStorage.getItem("selected_product");

        if (savedProduct) {
            try {
                setProduct(JSON.parse(savedProduct) as Product);
            } catch {
                sessionStorage.removeItem("selected_product");
                router.replace("/products");
            }
        } else {
            router.replace("/products");
        }
    }, [router]);

    if (!product) {
        return (
            <section className="product-view-loading">
                <div className="product-view-loader"></div>
                <p>Loading product details...</p>
            </section>
        );
    }

    return (
        <section className="product-view">
            <div className="container">
                <div className="product-view-breadcrumb">
                    <button
                        type="button"
                        onClick={() => router.push("/")}
                    >
                        Home
                    </button>

                    <i className="bi bi-chevron-right"></i>

                    <button
                        type="button"
                        onClick={() => router.push("/products")}
                    >
                        Products
                    </button>

                    <i className="bi bi-chevron-right"></i>

                    <span>{product.title}</span>
                </div>

                <button
                    type="button"
                    className="product-view-back"
                    onClick={() => router.push("/products")}
                >
                    <i className="bi bi-arrow-left"></i>
                    Back to Products
                </button>

                <div className="product-view-layout">
                    <div className="product-view-image-panel">
                        <span className="product-view-image-label">
                            <i className="bi bi-patch-check-fill"></i>
                            PRODUCT OVERVIEW
                        </span>

                        <div className="product-view-image">
                            <img
                                src={product.image}
                                alt={product.title}
                            />
                        </div>

                        <div className="product-view-image-footer">
                            <i className="bi bi-shield-check"></i>
                            <span>
                                Quality-focused medical glove manufacturing
                            </span>
                        </div>
                    </div>

                    <div className="product-view-information">
                        <span className="product-view-eyebrow">
                            MEDICAL GLOVE COLLECTION
                        </span>

                        <h1>{product.title}</h1>

                        <p className="product-view-description">
                            {product.description}
                        </p>

                        <div className="product-view-highlights">
                            <div className="product-view-highlight">
                                <i className="bi bi-layers"></i>
                                <div>
                                    <span>Available Variants</span>
                                    <strong>
                                        {product.variants.length}
                                    </strong>
                                </div>
                            </div>

                            <div className="product-view-highlight">
                                <i className="bi bi-box-seam"></i>
                                <div>
                                    <span>Package Options</span>
                                    <strong>
                                        {product.packageOptions.length}
                                    </strong>
                                </div>
                            </div>
                        </div>

                        <div className="product-view-divider"></div>

                        <h2>Product Specifications</h2>

                        <div className="product-view-table-wrapper">
                            <table className="product-view-table">
                                <thead>
                                    <tr>
                                        <th>Material</th>
                                        <th>Type</th>
                                        <th>Available Sizes</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {product.variants.map(
                                        (variant, index) => (
                                            <tr key={`${variant.material}-${variant.type}-${index}`}>
                                                <td>
                                                    {variant.material}
                                                </td>
                                                <td>
                                                    <span className="product-view-type">
                                                        {variant.type}
                                                    </span>
                                                </td>
                                                <td>{variant.sizes}</td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>

                        <div className="product-view-packaging">
                            <h2>
                                <i className="bi bi-box-seam"></i>
                                Packaging Options
                            </h2>

                            <div className="product-view-package-list">
                                {product.packageOptions.map(
                                    (option, index) => (
                                        <div
                                            className="product-view-package"
                                            key={index}
                                        >
                                            <i className="bi bi-check-circle-fill"></i>
                                            <span>{option}</span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="product-view-actions">
                            <button
                                type="button"
                                className="product-view-contact-button"
                                onClick={() => router.push("/contact")}
                            >
                                Request Product Details
                                <i className="bi bi-arrow-right"></i>
                            </button>

                            <button
                                type="button"
                                className="product-view-secondary-button"
                                onClick={() => router.push("/products")}
                            >
                                Explore More Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductView;