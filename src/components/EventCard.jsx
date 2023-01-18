import React from "react";
import { Link } from "react-router-dom";

const EventCard = () => {
  return (
    <div>
      <Link to={"/event_detail"}>
        {/* 배너 1 */}
        <div>
          <i>i 태그?</i>
          <h2>이벤트 제목</h2>
          <p>해시태그</p>
          <p>추가사항</p>
          <div>
            {/* 이미지 */}
            <img src="" alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
