import fetchProductById from "@/app/apis/fetchProductById";
import ProductCarousel from "@/app/components/ProductCarousel";
import ReviewCard from "@/app/components/ReviewCard";
import { redirect } from "next/navigation";

async function page({ params }) {
    const { productId } = await params;
    if (!Number.isInteger(Number(productId))) {
        redirect("/products");
    }
    if (Number(productId) > 194) {
        redirect("/products");
    }
    const data = await fetchProductById(productId);
    return (
        <div className="w-11/12 m-auto flex flex-col md:flex-row mt-4 gap-12 items-center">
            <div className="w-[75%] md:w-2/5">
                <ProductCarousel images={data.images} />
            </div>
            <div className="w-full md:h-[70vh] p-2">
                <p className="font-extrabold md:text-4xl border-b mb-4">
                    {data.title}
                </p>
                <p>
                    <span className="font-medium">Description:</span>{" "}
                    {data.description}
                </p>
                <p className="mt-4">
                    <span className="font-medium">Avg rating:</span> &#10024;
                    {data.rating}
                </p>
                <p className="mt-4">
                    <span className="font-medium">Price:</span> ${data.price}
                </p>

                <p className="italic text-gray-500 mt-4 border-b">Reviews</p>
                <div className="flex gap-4 overflow-auto mt-4">
                    {data.reviews.map((review, ind) => (
                        <ReviewCard key={ind} review={review} />
                    ))}
                </div>
                <div className="mt-4 flex flex-row-reverse gap-6">
                    <button className="bg-themePrimary text-white rounded-sm px-4 py-2">
                        Buy now
                    </button>
                    <button className="bg-themePrimary text-white rounded-sm px-4 py-2">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default page;
