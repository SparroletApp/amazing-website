"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import "./products.css";
import { productList } from "./product-list";

function Products() {
    const router = useRouter();

    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All Products");

    const categories = [
        "All Products",
        "Surgical Gloves",
        "Gynaecological Gloves",
        "Orthopaedic Gloves",
        "Examination Gloves",
    ];

    const filteredProducts = useMemo(() => {
        return productList.filter((product) => {
            const matchesCategory =
                activeCategory === "All Products" ||
                product.title === activeCategory;

            const searchText = search.toLowerCase();

            const matchesSearch =
                product.title.toLowerCase().includes(searchText) ||
                product.description.toLowerCase().includes(searchText) ||
                product.variants.some(
                    (variant) =>
                        variant.material.toLowerCase().includes(searchText) ||
                        variant.type.toLowerCase().includes(searchText) ||
                        variant.sizes.toLowerCase().includes(searchText)
                );

            return matchesCategory && matchesSearch;
        });
    }, [search, activeCategory]);

    const getProductStyle = (id: number) => {
        const styles: Record<
            number,
            { label: string; icon: string; color: string }
        > = {
            1: {
                label: "STERILE GRADE",
                icon: "bi-scissors",
                color: "surgical",
            },
            2: {
                label: "400MM EXTRA LENGTH",
                icon: "bi-shield-fill",
                color: "gynaecological",
            },
            3: {
                label: "ANTI-GLOVE BROWN",
                icon: "bi-shield-check",
                color: "orthopaedic",
            },
            4: {
                label: "CLINICAL GRADE",
                icon: "bi-plus-circle",
                color: "examination",
            },
        };

        return styles[id] || styles[1];
    };

    const handleViewProduct = (product: (typeof productList)[number]) => {
        sessionStorage.setItem(
            "selected_product",
            JSON.stringify(product)
        );

        router.push("/product-view");
    };

    return (
        <section className="products">
            <div className="products-hero">
                <div className="container">
                    <div className="products-container">
                        <div className="products-breadcrumb">
                            <span>Home</span>
                            <i className="bi bi-chevron-right"></i>
                            <span>Products</span>
                        </div>

                        <span className="products-eyebrow">
                            OFFICIAL PRODUCT CATALOGUE
                        </span>

                        <h1>Explore Our Glove Collection</h1>

                        <p className="products-hero-description">
                            Surgical / Gynaecological / Orthopaedic / Examination
                            — Manufactured with uncompromising barrier integrity,
                            strict factory AQL, ISO 6.5 quality control, and CE /
                            ISO certifications.
                        </p>

                        <div className="products-hero-bottom">
                            <div className="products-brands">
                                <span className="products-brands-label">
                                    <i className="bi bi-patch-check"></i>
                                    PRODUCT BRANDS:
                                </span>
                                <span>AMAZING</span>
                                <span>AMCARE</span>
                                <span>AMGRACE</span>
                                <span>SAFE N CARE</span>
                            </div>

                           
                        </div>
                    </div>
                </div>

                <div className="products-hero-image">
                    <img src="/product-gloves.jpg" alt="Medical surgical gloves" />
                </div>
            </div>

            <div className="products-container">
                <div className="container">
                    <div className="products-filter-panel">
                        <div className="products-search">
                            <i className="bi bi-search"></i>

                            <input
                                type="text"
                                placeholder="Search gloves by category, material (latex, nitrile), or powder type..."
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                aria-label="Search products"
                            />

                            {search && (
                                <button
                                    type="button"
                                    className="products-clear-search"
                                    onClick={() => setSearch("")}
                                    aria-label="Clear search"
                                >
                                    <i className="bi bi-x-circle"></i>
                                </button>
                            )}
                        </div>

                        <div className="products-category-list">
                            {categories.map((category) => (
                                <button
                                    type="button"
                                    key={category}
                                    className={`products-category-button ${activeCategory === category
                                            ? "active"
                                            : ""
                                        }`}
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                >
                                    {category}

                                    {category === "All Products" && (
                                        <span>{productList.length}</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="products-catalogue">
                    <div className="container">
                        <div className="products-section-heading">
                            <div>
                                <span className="products-section-label">
                                    OFFICIAL RANGE
                                </span>

                                <h2>Core Product Line</h2>

                                <p>
                                    Explore each category to see available
                                    materials, variations, sizes, and packaging
                                    details.
                                </p>
                            </div>

                            <span className="products-total-badge">
                                <i className="bi bi-grid"></i>
                                4 Primary Medical Categories
                            </span>
                        </div>

                        <div className="products-grid">
                            {filteredProducts.map((product) => {
                                const style = getProductStyle(product.id);

                                const materials = [
                                    ...new Set(
                                        product.variants.map(
                                            (variant) => variant.material
                                        )
                                    ),
                                ];

                                const types = [
                                    ...new Set(
                                        product.variants.map(
                                            (variant) => variant.type
                                        )
                                    ),
                                ];

                                const sizes = [
                                    ...new Set(
                                        product.variants.flatMap((variant) =>
                                            variant.sizes.split(" / ")
                                        )
                                    ),
                                ];

                                return (
                                    <article
                                        className={`products-card ${style.color}`}
                                        key={product.id}
                                    >
                                    
                                        
                                            <span className="products-card-label">
                                                {style.label}
                                            </span>

                                            <span className="products-card-number">
                                                Cat. 0{product.id}
                                            </span>
                                              

                                        <div className="products-card-visual">
                                        
<img src={product.image}></img>

                                        </div>

                                        <div className="products-card-content">
                                            <h3>{product.title}</h3>

                                            <p className="products-card-description">
                                                {product.description}
                                            </p>

                                            <div className="products-card-specifications">
                                                <div>
                                                    <span>Variants</span>
                                                    <strong>
                                                        {materials.length}{" "}
                                                        {materials.length === 1
                                                            ? "Material"
                                                            : "Materials"}
                                                    </strong>
                                                </div>

                                                <div>
                                                    <span>
                                                        {product.id === 2
                                                            ? "Specs / Length"
                                                            : "Formulation"}
                                                    </span>

                                                    <strong>
                                                        {types.join(" & ")}
                                                    </strong>
                                                </div>

                                                <div>
                                                    <span>Sizes Available</span>
                                                    <strong>
                                                        {sizes.join(" / ")}
                                                    </strong>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                className="products-card-button"
                                                onClick={() =>
                                                    handleViewProduct(product)
                                                }
                                            >
                                                View Variations & Details
                                                <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="products-empty">
                                <i className="bi bi-search"></i>
                                <h3>No products found</h3>

                                <p>
                                    Try a different search term or choose
                                    another category.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearch("");
                                        setActiveCategory("All Products");
                                    }}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="container">
                        <div className="products-packaging">
                            <div className="products-packaging-content">
                                <span className="products-packaging-label">
                                    <i className="bi bi-patch-check-fill"></i>
                                    ISO 13485 & CE Certified Quality Assurance
                                </span>

                                <h2>
                                    Standard Packaging & AQL Specifications
                                </h2>

                                <p>
                                    All medical surgical gloves are manufactured
                                    with curated fingers to reduce fatigue.
                                    Available in Paper Peel Open and Paper Tear
                                    Open sterile pouches. Inspection adheres to
                                    strict factory AQL 0.65 for surgical wearables
                                    and clinical panels.
                                </p>

                                <div className="products-packaging-features">
                                    <span>
                                        <i className="bi bi-check-circle-fill"></i>
                                        100% Sterile Inspection
                                    </span>

                                    <span>
                                        <i className="bi bi-check-circle-fill"></i>
                                        Anatomical Hand Mold
                                    </span>

                                    <span>
                                        <i className="bi bi-check-circle-fill"></i>
                                        Clinical Export Standards
                                    </span>
                                </div>
                            </div>

                            <div className="products-packaging-actions">
                                <a
                                    href="/Amazing_Brochure_1.pdf"
                                    className="products-download-button"
                                    download
                                >
                                    <i className="bi bi-download"></i>
                                    Download Brochure PDF
                                </a>

                                <a
                                    href="/contact"
                                    className="products-request-button"
                                >
                                    <i className="bi bi-file-earmark-text"></i>
                                    Request Spec Sheet
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;