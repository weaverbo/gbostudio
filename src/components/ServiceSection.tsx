import { useAnimateOnInView } from '@/hook/useAnimateOnInView';

import HighlightText from '../components/ui/HighlightText';
import { LineAnimation } from './ui/LineAnimation';

export default function ServiceSection() {
  const { ref, animationKey } = useAnimateOnInView();

  return (
    <>
      <div ref={ref} className="relative">
        <h1 className="text-3xl">SERVICES</h1>
        <LineAnimation animationKey={animationKey} />
        <div className="service-container">
          <div className="overflow-x-scroll scrollbar-hide w-screen ml-[40px]">
            <ul className="service-card-container">
              <li className="service-card">
                <p className="service-card-title">
                  <HighlightText>맞춤형 웹사이트 디자인 제작</HighlightText>
                </p>
                <div className="service-card-description">
                  <HighlightText>
                    <span>기획, 디자인, 개발까지</span>
                    <span className="service-card-paragraph">
                      전문가들과 함께 만들어가는
                    </span>
                    <p>올인원 웹사이트 제작 서비스</p>
                  </HighlightText>
                </div>
              </li>
              <li className="service-card">
                <p className="service-card-title">
                  <HighlightText>인터랙티브 웹디자인</HighlightText>
                </p>
                <div className="service-card-description">
                  <HighlightText>
                    <span>UX 설계로 사용성 향상과</span>
                    <span className="service-card-paragraph">
                      다양한 인터랙티브 요소로
                    </span>
                    <p>직관적이고 최적화된 UI 구현</p>
                  </HighlightText>
                </div>
              </li>
              <li className="service-card">
                <p className="service-card-title">
                  <HighlightText>풀스택 개발</HighlightText>
                </p>
                <div className="service-card-description">
                  <HighlightText>
                    <span>유연한 구조로 손쉽게 관리,</span>
                    <span className="service-card-paragraph">
                      기능 추가와 확장이 자유로운
                    </span>
                    <p>웹사이트 구축 서비스</p>
                  </HighlightText>
                </div>
              </li>
              <li className="service-card">
                <p className="service-card-title">
                  <HighlightText>SEO 최적화</HighlightText>
                </p>
                <div className="service-card-description">
                  <HighlightText>
                    <span>검색 엔진에 더 잘 노출되고</span>
                    <span className="service-card-paragraph">
                      성과를 극대화할 수 있는
                    </span>
                    <p>효율적인 웹사이트 제작</p>
                  </HighlightText>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
