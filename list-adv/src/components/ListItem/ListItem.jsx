import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./ListItem.css";
import Item from "../Item/Item";
// import "../SideBar/SideBar.css";
import api from "../../api/items";

const ListItem = ({ vertical }) => {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await api.get("/items");

      setData(res.data);
      setList(res.data);
    };

    fetchApi();
  }, []);

  const handleFilter = (name) => {
    const result = data.filter((a) =>
      a.categoriesCollection.items.find((b) => b.displayName === name)
    );
    setList(result);
  };

  return vertical ? (
    <div className="wrapper-content">
      <div className="catalog">
        <div className="catalog__filter__widget">
          <div className="catalog__filter__widget__title">Filter Category</div>
          <div className="catalog__filter__widget__content">
            <div className="catalog__filter__widget__content__item">
              <h3 onClick={() => handleFilter("Tư vấn tâm lý")}>
                Tư vấn tâm lý
              </h3>
              <h3 onClick={() => handleFilter("Xem phong thủy")}>
                Xem phong thủy
              </h3>
              <h3 onClick={() => handleFilter("Tư vấn hôn nhân gia đình")}>
                Tư vấn hôn nhân gia đình
              </h3>
              <h3 onClick={() => handleFilter("Hon nhan va gia dinh")}>
                Hon nhan va gia dinh
              </h3>
              <h3 onClick={() => handleFilter("xem chỉ tay")}>xem chỉ tay</h3>
              <h3 onClick={() => handleFilter("Xem tướng học")}>
                Xem tướng học
              </h3>
              <h3 onClick={() => setList(data)}>Xóa bộ lọc</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="list-vertical">
        {list.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </div>
  ) : (
    <div className="wrapper-content">
      <div className="catalog">
        <div className="catalog__filter__widget">
          <div className="catalog__filter__widget__title">Filter Category</div>
          <div className="catalog__filter__widget__content">
            <div className="catalog__filter__widget__content__item">
              <h3
                onClick={() => {
                  handleFilter("Tư vấn tâm lý");
                }}
              >
                Tư vấn tâm lý
              </h3>
              <h3
                onClick={() => {
                  handleFilter("Xem phong thủy");
                }}
              >
                Xem phong thủy
              </h3>
              <h3 onClick={() => handleFilter("Tư vấn hôn nhân gia đình")}>
                Tư vấn hôn nhân gia đình
              </h3>
              <h3 onClick={() => handleFilter("Hon nhan va gia dinh")}>
                Hon nhan va gia dinh
              </h3>
              <h3 onClick={() => handleFilter("xem chỉ tay")}>xem chỉ tay</h3>
              <h3 onClick={() => handleFilter("Xem tướng học")}>
                Xem tướng học
              </h3>
              <h3 onClick={() => setList(data)}>Xóa bộ lọc</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-list">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          <div className="list">
            {list.map((item, i) => (
              <SwiperSlide key={i}>
                <Item item={item} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ListItem;
