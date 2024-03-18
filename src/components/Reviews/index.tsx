import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper';
import { Swiper as SwiperType } from 'swiper';
import stars from '../../assets/images/reviews-stars.svg'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

import arrowLeft from '../../assets/images/arrowLeft.svg'
import arrowRight from '../../assets/images/arrowRight.svg'

import styles from './Reviews.module.scss'



interface Slide {
    name: string,
    avatarImage: string,
    reviewTime: string,
    reviewText: string
}

interface ReviewsProps {
    list: Slide[]
}

export const Reviews: React.FC<ReviewsProps> = ({ list }) => {
    const swiperRef = useRef<SwiperType>();

    const slideNext = () => {
        swiperRef.current?.slideNext()
    }

    const slidePrev = () => {
        swiperRef.current?.slidePrev()
    }

    return (
        <section className="reviews">
            <div className="container">
                <div className="reviews__content">
                    <p className="reviews__title title">Bewertungen</p>
                </div>
                <div className="reviews__slider-wrapper">
                    <Swiper
                        className={styles.reviews__slider}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation, Pagination]}
                        slidesPerView={3}
                        spaceBetween={0}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            850: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            1050: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {
                            list.map((slide) => (
                                <SwiperSlide key={slide.name} className={styles.reviews__slide}>
                                    <div className="reviews__card">
                                        <div className="reviews__top">
                                            <div className="reviews__person-info">
                                                <div className="reviews__avatar">
                                                    <img src={slide.avatarImage} alt="avatar" className="reviews__avatar-image" />
                                                </div>
                                                <div className="reviews__name-stars">
                                                    <p className="reviews__name">{slide.name}</p>
                                                    <img src={stars} alt="stars" className="reviews__stars" />
                                                </div>
                                            </div>
                                            <p className="reviews__time">{slide.reviewTime}</p>
                                        </div>
                                        <p className="reviews__text">{slide.reviewText}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className={styles.sliderNav}>
                        <img
                            className={styles.arrowLeft}
                            src={arrowLeft}
                            onClick={slidePrev}
                            alt='arrow'
                        />
                        <img
                            className={styles.arrowRight}
                            src={arrowRight}
                            onClick={slideNext}
                            alt='arrow'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

