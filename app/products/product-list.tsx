
export interface Product {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    variants: {
        material: string;
        type: string;
        sizes: string;
    }[];
    packageOptions: string[];
}

export const productList: Product[] = [
    {
        id: 1,
        title: "Surgical Gloves",
        description: "Sterile, single-use models in latex and nitrile.",
        icon: "bi bi-pen",
        image: "/surgical.jpg",
        variants: [
            {
                material: "Natural Rubber Latex",
                type: "Pre-Powdered",
                sizes: "6-8.5",
            },
            {
                material: "Natural Rubber Latex",
                type: "Powder Free",
                sizes: "6-8.5",
            },
            {
                material: "Nitrile",
                type: "Powder Free",
                sizes: "6-8.5",
            },
        ],
        packageOptions: ["Paper-Peel Open", "Paper-Tear Open"],
    },
    {
        id: 2,
        title: "Gynaecological Gloves",
        description: "Extra-length latex options for obstetrics and gynaecology.",
        icon: "bi bi-gender-female",
        image: "/Gynecological-gloves.jpg",
        variants: [
            {
                material: "Natural Rubber Latex",
                type: "Pre-Powdered",
                sizes: "7 / 7.5 / 8 / S / M / L / XL",
            },
            {
                material: "Natural Rubber Latex",
                type: "Powder Free",
                sizes: "7 / 7.5 / 8 / S / M / L / XL",
            },
            {
                material: "Nitrile",
                type: "Powder Free",
                sizes: "7 / 7.5 / 8 / S / M / L / XL",
            },
        ],
        packageOptions: ["Paper-Peel Open", "Paper-Tear Open"],
    },
    {
        id: 3,
        title: "Orthopaedic Gloves",
        description: "Brown latex gloves for specialised surgical applications.",
        icon: "bi bi-universal-access",
        image: "/brown.png",
        variants: [
            {
                material: "Natural Rubber Latex",
                type: "Powder Free",
                sizes: "6-8.5",
            },
        ],
        packageOptions: ["Paper-Peel Open"],
    },
    {
        id: 4,
        title: "Examination Gloves",
        description: "Latex and nitrile options for clinical examinations.",
        icon: "bi bi-plus-square",
        image: "/examination.jpg",
        variants: [
            {
                material: "Natural Rubber Latex",
                type: "Pre-Powdered",
                sizes: "S / M / L",
            },
            {
                material: "Natural Rubber Latex",
                type: "Powder Free",
                sizes: "S / M / L",
            },
            {
                material: "Nitrile",
                type: "Powder Free",
                sizes: "S / M / L",
            },
        ],
        packageOptions: ["Box of 100 pcs"],
    },
];
