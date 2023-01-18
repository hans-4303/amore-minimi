import React from 'react'
import { Link } from 'react-router-dom'

const Benefits = () => {
  return (
    <div>
      <div>
        <Link to={"/product_detail"}>
          <div>
            {/* 제품 사진 */}
            <img src="" alt="" />
          </div>
          <div>
            {/* 제품 브랜드, 이름 */}
            <strong>브랜드</strong>
            <span>제품 이름, 숫자, 단위</span>
          </div>
          <div>
            {/* 할인율, 제품 가격 */}
            <em>할인율</em>
            <span>
              <strong>가격</strong>
              단위
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Benefits
