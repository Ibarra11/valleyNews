import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React component
import "swiper/swiper-bundle.min.css"; // Import Swiper styles
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay, Pagination]);
function LatestArticle({ articles }) {
  return (
    <Swiper
      className="w-[60vw] unset-border-box  shadow-gray-700 shadow-md rounded-lg bg-black"
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={1000}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {articles.map((article) => (
        <SwiperSlide
          className="shadow-gray-700 shadow-md bg-brown-100 p-3 rounded-lg flex md:justify-between flex-col w-[50%]"
          key={article.id}
        >
          <img
            className="flex self-center w-[30vw] object-contain"
            src={article.image_url}
            alt={`Slide ${article.id}`}
          />
          <div className="flex flex-col px-[2em] justify-center">
            <div className="text-lg py-1.5 font-bold flex self-center ">
              {article.headline}
            </div>
            <div className="py-1.5 line-clamp-2">
              {article.paragraphs.join("\n")}
            </div>
            <div className="flex items-end justify-end">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://randomuser.me/api/portraits"
                alt="Author"
              />
              <div className="text-sm flex items-stretch flex-col">
                <p className="text-gray-900 leading-none">{article.author}</p>
                <p className="text-gray-600">{article.date_published}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LatestArticle;
