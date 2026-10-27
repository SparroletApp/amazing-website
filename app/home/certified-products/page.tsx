"use client";

import { useRouter } from "next/navigation";
import "./certififed-products.css";
import { productList } from "@/app/products/product-list";

function CertifiedProducts() {
    const router = useRouter();

    const getProductStyle = (id: number) => {
        const styles: Record<
            number,
            { label: string; color: string }
        > = {
            1: {
                label: "STERILE GRADE",
                color: "surgical",
            },
            2: {
                label: "480MM EXTRA LENGTH",
                color: "gynaecological",
            },
            3: {
                label: "ANTI-GLARE BROWN",
                color: "orthopaedic",
            },
            4: {
                label: "CLINICAL GRADE",
                color: "examination",
            },
        };

        return styles[id] || styles[1];
    };

    const handleViewProduct = (
        product: (typeof productList)[number]
    ) => {
        sessionStorage.setItem(
            "selected_product",
            JSON.stringify(product)
        );

        router.push("/product-view");
    };

    return (
        <section className="certified-products">
            <div className="container certified-products-container">

                <div className="certified-products-heading">

                    <h2>Our Certified Products</h2>

                    <p>
                        From examination gloves to surgical ones, every product in our portfolio is clean,<br/> FDA, and US-ISO certified, fully complying with international safety standards to ensure <br/>safety for healthcare workers, medical staff, and patients during medical tests.
                    </p>
                </div>

                <div className="row certified-products-grid">
                    {productList.map((product) => {
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
                            <div
                                className="col-lg-3 col-md-6 col-12 certified-products-column"
                                key={product.id}
                            >
                                <article
                                    className={`certified-products-card ${style.color}`}
                                    onClick={() =>
                                        handleViewProduct(product)
                                    }
                                >
                                    <div className="certified-products-image">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                        />

                                        <span className="certified-products-badge">
                                            {style.label}
                                        </span>

                                        <span className="certified-products-category">
                                            Cat. {String(product.id).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <div className="certified-products-content">
                                        <h3>{product.title}</h3>

                                        <p className="certified-products-description">
                                            {product.description}
                                        </p>

                                        <div className="certified-products-details">
                                            <div className="certified-products-detail">
                                                <span>Materials:</span>
                                                <strong>
                                                    {materials.join(" & ")}
                                                </strong>
                                            </div>

                                            <div className="certified-products-detail">
                                                <span>Formulation:</span>
                                                <strong>
                                                    {types.join(" & ")}
                                                </strong>
                                            </div>

                                            <div className="certified-products-detail">
                                                <span>Sizes Available:</span>
                                                <strong>
                                                    {sizes.join(" / ")}
                                                </strong>
                                            </div>
                                        </div>


                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>



            </div>
        </section>
    );
}

export default CertifiedProducts;