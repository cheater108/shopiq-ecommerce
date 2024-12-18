import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import HeroData from "../../data/HeroData";
import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <div className="w-[70%] md:w-11/12 m-auto">
            <Carousel className="w-full">
                <CarouselContent>
                    {HeroData.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[469px]">
                                <div className="md:w-[45%]">
                                    <h1
                                        className={`text-3xl md:text-5xl font-extrabold`}
                                    >
                                        {item.title}
                                    </h1>
                                    <p className="mt-4 mb-8">{item.para}</p>
                                    <Link
                                        className="bg-themePrimary inline-block text-white font-semibold p-2 px-4 rounded-sm"
                                        href="/products"
                                    >
                                        Browse now
                                    </Link>
                                </div>
                                <Image
                                    className="md:w-[40%] md:block"
                                    src={item.img}
                                    alt="hero"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default Hero;
