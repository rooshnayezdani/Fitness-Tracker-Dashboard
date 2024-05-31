import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeBanner2.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

export const HomeBanner2 = () => {
  const [workouts, setWorkouts] = React.useState<any[] | null>(null);

  const getWorkouts = async () => {
    let data: any = [
      {
        type: 'Chest',
        imageUrl: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        durationInMin: 30
      },
      {
        type: 'Abs',
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        durationInMin: 90
      },
      {
        type: 'Shoulder',
        imageUrl: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        durationInMin: 40
      },
      {
        type: 'Back',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664301437780-ee46787734d5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        durationInMin: 70
      },
      {
        type: 'Biceps',
        imageUrl: 'https://images.unsplash.com/photo-1646495003597-0234b81db84c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        durationInMin: 50
      },
      {
        type: 'Triceps',
        imageUrl: 'https://images.unsplash.com/photo-1575898311302-0d04de38c259?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        durationInMin: 60
      },
      {
        type: 'Cardio',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664301427534-28b6a53a9c4f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        durationInMin: 60
      }
    ]
    setWorkouts(data); // Set the fetched workouts data to state
  };

  React.useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div>
      <h1 className='mainhead1'>Workouts</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {workouts && workouts.map((item, index) => {
            return(
          <SwiperSlide key={index}>
            <div className="swiper-slide">
            <img src={item.imageUrl} alt={item.type} />
           <div className='swiper-slide-content'>
            <h2>{item.type}</h2>
            <p>{item.durationInMin} min</p>
           </div>
            </div>
          </SwiperSlide>
            )
        })
        }
      </Swiper>
    </div>
  );
};

export default HomeBanner2;
