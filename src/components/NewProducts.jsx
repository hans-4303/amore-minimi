import React from 'react'
import { Link } from 'react-router-dom'

const NewProducts = () => {
  return (
    <div>
      <Link to={"/product_detail"}>
        <div>
          {/* 제품 이미지 */}
          <img src="" alt="" />
        </div>
        {/* 작은 카드 */}
        <div>
          <div>
            {/* 제품 이미지 작게 */}
            <img src="" alt="" />
          </div>
          <div>
            <div>
              {/* 제품 제목 */}
              <strong>브랜드</strong>
              <span>제품 이름, 단위</span>
            </div>
            <div>
              {/* 제품 가격 */}
              <em>할인률, %</em>
              <span>
                <strong>할인가격</strong>
                단위
              </span>
              <span>원가, 단위</span>
            </div>
          </div>
        </div>
      </Link>
      <div>
        <strong>강조 포인트</strong>
        <p>부가 설명</p>
      </div>
    </div>
  )
}

export default NewProducts
