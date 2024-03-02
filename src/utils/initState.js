import { typesName } from "./constants";

// State given in assignment
// Changed types as constant to be used across rather than hard coding to avoid spell checks
export const Files = {
    type: typesName.folder,
    name: "parent",
    data: [
        {
            type: typesName.folder,
            name: "root",
            data: [
                {
                    type: typesName.folder,
                    name: "src",
                    data: [
                        {
                            type: typesName.file,
                            meta: typesName.js,
                            name: "index.js",
                        },
                    ],
                },
                {
                    type: typesName.folder,
                    name: "public",
                    data: [
                        {
                            type: typesName.file,

                            meta: typesName.ts,
                            name: "index.ts",
                        },
                    ],
                },
                {
                    type: typesName.file,
                    meta: "html",
                    name: "index.html",
                },
                {
                    type: typesName.folder,
                    name: "data",
                    data: [
                        {
                            type: typesName.folder,
                            name: "images",
                            data: [
                                {
                                    type: typesName.file,
                                    meta: typesName.img,
                                    name: "image.png",
                                },
                                {
                                    type: typesName.file,
                                    meta: typesName.img,
                                    name: "image2.webp",
                                },
                            ],
                        },
                        {
                            type: typesName.file,
                            meta: typesName.svg,
                            name: "logo.svg",
                        },
                    ],
                },
            ],
        },
    ],
};
