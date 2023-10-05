import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/outline'

const images = [
  'event1.jpg',
  'event2.jpg',
  'event4.jpg',
  'event5.jpg',
  'event6.jpg',
  'event7.jpg',
  'event8.jpg',
  'event9.jpg',
  'event10.jpg',
  'event11.jpg',
]

export default function Carousel() {
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-8 sm:py-8 ">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={160} isIntrinsicHeight={true} totalSlides={images.length} visibleSlides={3} step={1} infinite={true} naturalSlideHeight={120}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 bg-orange-400 opacity-80 hover:opacity-100 p-1 rounded-full cursor-pointer" id="prev">
                            <ChevronLeftIcon width={24} className="text-white"/>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {images.map((image, index) => {
                                      return (
                                        <Slide index={index}>
                                          <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={image} alt="black chair and white table" className="object-cover object-center w-full rounded-lg" />
                                          </div>
                                        </Slide>
                                      )
                                    }) }
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 bg-orange-400 opacity-80 hover:opacity-100 p-1 rounded-full cursor-pointer " id="next">
                          <ChevronRightIcon width={24} className="text-white"/>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={160} isIntrinsicHeight={true} totalSlides={images.length} visibleSlides={2} step={1} infinite={true} naturalSlideHeight={120}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 bg-orange-400 opacity-80 hover:opacity-100 p-1 rounded-full cursor-pointer" id="prev">
                            <ChevronLeftIcon width={24} className="text-white"/>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                {images.map((image, index) => {
                                  return (
                                    <Slide index={index}>
                                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={image} alt="black chair and white table" className="object-cover object-center w-full rounded-lg" />
                                      </div>
                                    </Slide>
                                  )
                                })}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 bg-orange-400 opacity-80 hover:opacity-100 p-1 rounded-full cursor-pointer " id="next">
                          <ChevronRightIcon width={24} className="text-white"/>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={160} isIntrinsicHeight={true} totalSlides={images.length} visibleSlides={1} step={1} infinite={true} naturalSlideHeight={120}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-4 bg-orange-400 opacity-80 hover:opacity-100 p-1 rounded-full cursor-pointer" id="prev">
                            <ChevronLeftIcon width={16} className="text-white"/>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                {images.map((image, index) => {
                                  return (
                                    <Slide index={index}>
                                      <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={image} alt="black chair and white table" className="object-cover object-center w-full rounded-lg" />
                                      </div>
                                    </Slide>
                                  )
                                })}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-4 bg-orange-400 opacity-80 hover:opacity-100 p-1 rounded-full cursor-pointer " id="next">
                          <ChevronRightIcon width={16} className="text-white"/>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
