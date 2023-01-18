import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <section>
        <span>공지사항</span>
        <div>
          <div>slick here</div>
        </div>
        <Link to='/notice'>공지 바로 가기</Link>
      </section>
      <section>
        <ul>
          <li>로그인</li>
          <li>고객센터</li>
          <li>임직원서비스</li>
        </ul>
        <div>
          <p>첫번째 단락</p>
          <p>두번째 단락</p>
        </div>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <div>
          <div>카피라이트</div>
          <div>카피라이트</div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
