import React from 'react'
import TypeRecommends from '../TypeRecommends'

const TypeRecommendSection = () => {
  return (
    <section>
      <div>
        <h3>타입 별 제품 추천</h3>
        <div>
          <button>체질1</button>
          <button>체질2</button>
          <span>이 고민이라면</span>
        </div>
      </div>
      <TypeRecommends></TypeRecommends>
      <TypeRecommends></TypeRecommends>
    </section>
  )
}

export default TypeRecommendSection