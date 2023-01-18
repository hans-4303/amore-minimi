import React from 'react'
import { Link } from 'react-router-dom'

const Brands = () => {
  return (
    <div>
      {/* 각 브랜드 페이지 연결 */}
      <Link>
        {/* 로고 */}
        <i>
          <img src="" alt="" />
        </i>
        <div>
          <strong>브랜드 이름</strong>
          <span>각 브랜드 별 첨언</span>
        </div>
      </Link>
      {/* 이벤트로 연결 */}
      <Link>
        {/* 제품 이미지 */}
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <strong>이벤트 이름</strong>
          <span>이벤트 설명</span>
        </div>
      </Link>
    </div>
  )
}

export default Brands
