import React from 'react'
import { Link } from 'react-router-dom'
import Brands from '../Brands'

const BrandsSection = () => {
  return (
    <section>
      <div>
        <h3>
          <Link>브랜드 섹션</Link>
        </h3>
        <div>
          <span>브랜드 섹션 설명</span>
        </div>
      </div>
      <Brands></Brands>
      <Brands></Brands>
      <Brands></Brands>
    </section>
  )
}

export default BrandsSection
