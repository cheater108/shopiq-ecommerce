"use client";

import { useRouter } from "next/navigation";

function ShowMore({ page }) {
    const router = useRouter();
    return (
        <button
            className="float-right mt-4 mb-4 hover:text-themePrimary"
            onClick={() =>
                router.replace(`/products?page=${page + 1}`, { scroll: false })
            }
        >
            Show more...
        </button>
    );
}

export default ShowMore;
