import React from 'react'
import { Link } from 'react-router-dom'

const Recommends = () => {
  return (
    <div>
      <Link to={"/product_detail"}>
        {/* 제품 이미지 */}
        <div>
          <img src="" alt="" />
        </div>
        <div>
          {/* 제품 이름 */}
          <div>
            <strong>브랜드</strong>
            <span>제품 이름, 옵션</span>
          </div>
          {/* 제품 가격 */}
          <div>
            <span>판매가, 단위</span>
            <em>할인률, %</em>
            <span>
              <strong>가격</strong>
              단위
            </span>
          </div>
          {/* 제품 평점 */}
          <div>
            <span>
              <span>별점</span>
              <span>(리뷰 횟수)</span>
            </span>
          </div>
          {/* 사은품이 있다면 표시 */}
          <div>
            <span>사은품이 있다면</span>
          </div>
          {/* 좋아요 버튼 */}
          <button>좋아요</button>
        </div>
      </Link>
    </div>
  )
}

export default Recommends
