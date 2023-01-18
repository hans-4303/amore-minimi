import React from "react";
import { Link } from "react-router-dom";

const EventIcon = () => {
  return (
    <div>
      <Link to={"/event_detail"}>
        <div>
          {/* 이미지 */}
          <img src="" alt="" />
        </div>
        <span>이벤트 제목</span>
      </Link>
    </div>
  );
};

export default EventIcon;
