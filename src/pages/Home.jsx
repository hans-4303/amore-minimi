import React from "react";
import EventCard from "../components/EventCard";
import EventIcon from "../components/EventIcon";
import BenefitSection from "../components/sections/BenefitSection";
import NewProductSection from "../components/sections/NewProductSection";
import RecommendsSection from "../components/sections/RecommendsSection";
import TypeRecommendSection from "../components/sections/TypeRecommendSection";

const Home = () => {
  return (
    <div>
      {/* 이벤트 카드 컴포넌트 반복 */}
      <div>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>
      <div>
        {/* 이벤트 아이콘 컴포넌트 반복 */}
        <EventIcon></EventIcon>
        <EventIcon></EventIcon>
      </div>
      {/* 체질 제품 추천 옵션 */}
      <TypeRecommendSection></TypeRecommendSection>
      {/* 신상품 컴포넌트 반복 */}
      <NewProductSection></NewProductSection>
      {/* 추천 제품 컴포넌트 */}
      <RecommendsSection></RecommendsSection>
      {/* 혜택 컴포넌트 */}
      <BenefitSection></BenefitSection>
      {/* 브랜드 별 이벤트 컴포넌트 */}
      <div>
        <p>소제목 단락 5</p>
        <div>
          <a href="">
            링크
            <p>제품 컴포넌트 1 - 텍스트 1</p>
            <p>제품 컴포넌트 1 - 텍스트 2</p>
          </a>
          <a href="">
            링크
            <div>제품 이미지 자리 1</div>
            <div>제품 텍스트 자리 1</div>
          </a>
        </div>
        <div>
          <a href="">
            링크
            <p>제품 컴포넌트 2 - 텍스트 1</p>
            <p>제품 컴포넌트 2 - 텍스트 2</p>
          </a>
          <a href="">
            링크
            <div>제품 이미지 자리 2</div>
            <div>제품 텍스트 자리 2</div>
          </a>
        </div>
        {/* 기간 별 매출 컴포넌트 */}
        <div>
          <select name="" id="">
            <option>옵션 1</option>
            <option>옵션 2</option>
            <option>옵션 3</option>
          </select>
          <p>소제목 단락 7</p>
          <div>제품 컴포넌트 1</div>
          <div>제품 컴포넌트 2</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
