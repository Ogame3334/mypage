import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import './Slider.css'

interface SliderProp {
  assets_path: string[];
}

export default function Slider(props: SliderProp) {
  const slideSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <div className="h-56 md:h-96">
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={slideSettings}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        speed={750}
        navigation
        pagination={{
          clickable: true
        }}
        style={{ width: '100%', height: '100%', backgroundColor: '#ccc' }}
      >
        {props.assets_path.map((elem: string, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-auto">
              {(elem.split('.').pop() == 'mp4')
                ?
                <video
                  src={elem}
                  controls={true}
                  width={'100%'}
                  height={'100%'}
                  style={{objectFit: 'contain'}}
                />
                :
                <Image
                  src={elem}
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              }
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
