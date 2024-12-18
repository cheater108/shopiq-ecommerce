import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

function ProductCarousel({ images }) {
    return (
        <Carousel>
            <CarouselContent>
                {images.map((url, index) => (
                    <CarouselItem key={index}>
                        <img className="h-auto" src={url} alt="image" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default ProductCarousel;
