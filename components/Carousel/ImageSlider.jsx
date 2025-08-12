import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const ImageSlider = ({ images }) => {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {images.map((item) => (
                    <CarouselItem key={item.id}>
                        <div className="p-1">
                            <Image
                                src={item.image}
                                alt="Slide image"
                                height={400}
                                width={300}
                                className="w-full"
                                quality={100}
                                unoptimized
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ImageSlider
