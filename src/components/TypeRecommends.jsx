import React from 'react'
import { Link } from 'react-router-dom'

const TypeRecommends = () => {
  return (
    <div>
      <Link to={'/product_detail'}>
        <div>
          {/* 이미지 */}
          <img src="" alt="" />
        </div>
        <div>
          {/* 타이틀 */}
          <div>
            <strong>브랜드 이름</strong>
            {/* 동적 데이터 */}
            <span>제품 이름, 용량</span>
          </div>

          {/* 가격 */}
          <div>
            {/* 동적 데이터 */}
            <span>판매가, 가격 단위</span>
            {/* 동적 데이터 */}
            <em>할인률, %</em>
            <span>
              <strong>할인가</strong>
              가격 단위
            </span>
          </div>

          {/* 해시태그 */}
          <div>
            <span>#, 해시태그 내용</span>
          </div>
          <button>좋아요</button>
        </div>
      </Link>
    </div>
  )
}

export default TypeRecommends
