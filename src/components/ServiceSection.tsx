export default function ServiceSection() {
  return (
    <>
      <div>
        <div className="marker-container">
          <h1 className="section-title">SERVICES</h1>
          <div className="marker"></div>
        </div>
        <div className="service-container">
          <div className="overflow-x-scroll scrollbar-hide w-screen">
            <ul className="service-card-container">
              <li className="service-card">
                <div className="service-card-number">1</div>
                <div>
                  <p className="service-card-title">
                    맞춤형 웹사이트 디자인 제작
                  </p>
                  <div className="service-card-description">
                    <p>제공하는 콘텐츠에 맞게</p>
                    <p className="leading-[28px]">
                      사용자를 고려한 직관적이고 깔끔한
                    </p>
                    <p>메인, 서브, 상세, 랜딩 페이지 제작 가능</p>
                  </div>
                </div>
              </li>
              <li className="service-card">
                <div className="service-card-number">2</div>
                <div>
                  <p className="service-card-title">
                    콘텐츠 디자인 작업물 제작
                  </p>
                  <div className="service-card-description">
                    <p>브랜드 아이덴티티 반영 로고와 파비콘,</p>
                    <p className="leading-[28px]">
                      와이어프레임, 배너, 카드뉴스 등 콘텐츠
                    </p>
                    <p>디자인 작업물 제작 가능</p>
                  </div>
                </div>
              </li>
              <li className="service-card">
                <div className="service-card-number">3</div>
                <div>
                  <p className="service-card-title">반응형 웹페이지</p>
                  <div className="service-card-description">
                    <p>PC, MOBILE 어디서든 유연하게</p>
                    <p className="leading-[28px]">
                      대응이 가능한 반응형 UI로 제작하여
                    </p>
                    <p>사용자 경험과 만족도 향상</p>
                  </div>
                </div>
              </li>
              <li className="service-card">
                <div className="service-card-number">4</div>
                <div>
                  <p className="service-card-title">인터랙티브한 웹디자인</p>
                  <div className="service-card-description">
                    <p>다양한 애니메이션 효과를 활용하여</p>
                    <p className="leading-[28px]">
                      직관적인 사용자 인터페이스를 구성하고,
                    </p>
                    <p>사용자 참여도를 극대화함</p>
                  </div>
                </div>
              </li>
              <li className="service-card">
                <div className="service-card-number">5</div>
                <div>
                  <p className="service-card-title">
                    React.js 기반 UI 기능 개발
                  </p>
                  <div className="service-card-description">
                    <p>재사용 가능한 컴포넌트 기반 설계로</p>
                    <p className="leading-[28px]">
                      쉽고 간편한 유지보수 가능하며,
                    </p>
                    <p>유연한 구조로 기능 추가와 확장 용이</p>
                  </div>
                </div>
              </li>
              <li className="service-card">
                <div className="service-card-number">6</div>
                <div>
                  <p className="service-card-title">
                    Next.js 기반 풀스택 개발 가능
                  </p>
                  <div className="service-card-description">
                    <p>미리 구현된 웹페이지 제공 기술로</p>
                    <p className="leading-[28px]">
                      빠른 로딩 속도와 SEO 최적화 구현,
                    </p>
                    <p>프론트엔드와 백엔드 통합 풀스택 개밡</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
