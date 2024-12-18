"use client";

import { useRouter } from "next/navigation";

function ProductCard({ title, desc, img_url, price, id }) {
    const router = useRouter();
    return (
        <div className="w-[calc(50%-12px)] md:w-[calc((100%-48px)/4)] border border-1 flex flex-col p-3 rounded-md shadow-sm">
            <img
                className="h-[100px] md:h-[200px] self-center"
                src={img_url}
                alt="product"
            />
            <h1
                className="font-semibold truncate hover:text-themePrimary cursor-pointer"
                title={title}
                onClick={() => router.push(`/products/${id}`)}
            >
                {title}
            </h1>
            <p className="text-xs text-gray-500 mt-2 truncate text-ellipsis mb-4">
                {desc}
            </p>
            <div className="flex items-center justify-between mt-auto">
                <p className="text-sm">${price}</p>
                <button
                    className="bg-themePrimary p-1 px-4 rounded-full text-white text-sm"
                    onClick={() => router.push(`/products/${id}`)}
                >
                    view
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
