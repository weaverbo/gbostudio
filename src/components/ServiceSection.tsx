import { useAnimateOnInView } from '@/hook/useAnimateOnInView';
import { useMediaQuery } from 'react-responsive';

import HighlightText from '../components/ui/HighlightText';
import '../styles/servicesection.css';
import { LineAnimation } from './ui/LineAnimation';

const variant = {
  xl: { width: '105%' },
  '10xl': { width: '106%' },
  '11xl': { width: '108%' },
  '12xl': { width: '109%' },
  '13xl': { width: '110%' },
  '14xl': { width: '111%' },
  '15xl': { width: '112%' },
  '16xl': { width: '113%' },
  '17xl': { width: '135%' },
  '18xl': { width: '137%' },
  '19xl': { width: '138%' },
  '20xl': { width: '139%' },
  '21xl': { width: '141%' },
  '22xl': { width: '142%' },
  '23xl': { width: '143%' },
  '24xl': { width: '144%' },
  '25xl': { width: '147%' },
  '26xl': { width: '149%' },
  '27xl': { width: '151%' },
  '28xl': { width: '154%' },
  '29xl': { width: '156%' },
};

export default function ServiceSection() {
  const { onInviewRef, animationKey } = useAnimateOnInView();
  const is10xl = useMediaQuery({ maxWidth: 1280 });
  const is11xl = useMediaQuery({ maxWidth: 1000 });
  const is12xl = useMediaQuery({ maxWidth: 680 });
  const is13xl = useMediaQuery({ maxWidth: 620 });
  const is14xl = useMediaQuery({ maxWidth: 580 });
  const is15xl = useMediaQuery({ maxWidth: 520 });
  const is16xl = useMediaQuery({ maxWidth: 480 });
  const is17xl = useMediaQuery({ maxWidth: 470 });
  const is18xl = useMediaQuery({ maxWidth: 460 });
  const is19xl = useMediaQuery({ maxWidth: 450 });
  const is20xl = useMediaQuery({ maxWidth: 430 });
  const is21xl = useMediaQuery({ maxWidth: 415 });
  const is22xl = useMediaQuery({ maxWidth: 405 });
  const is23xl = useMediaQuery({ maxWidth: 390 });
  const is24xl = useMediaQuery({ maxWidth: 380 });
  const is25xl = useMediaQuery({ maxWidth: 370 });
  const is26xl = useMediaQuery({ maxWidth: 340 });
  const is27xl = useMediaQuery({ maxWidth: 330 });
  const is28xl = useMediaQuery({ maxWidth: 320 });
  const is29xl = useMediaQuery({ maxWidth: 310 });

  const getResponsiveWidth = () => {
    if (is29xl) return variant['29xl'].width;
    if (is28xl) return variant['28xl'].width;
    if (is27xl) return variant['27xl'].width;
    if (is26xl) return variant['26xl'].width;
    if (is25xl) return variant['25xl'].width;
    if (is24xl) return variant['24xl'].width;
    if (is23xl) return variant['23xl'].width;
    if (is22xl) return variant['22xl'].width;
    if (is21xl) return variant['21xl'].width;
    if (is20xl) return variant['20xl'].width;
    if (is19xl) return variant['19xl'].width;
    if (is18xl) return variant['18xl'].width;
    if (is17xl) return variant['17xl'].width;
    if (is16xl) return variant['16xl'].width;
    if (is15xl) return variant['15xl'].width;
    if (is14xl) return variant['14xl'].width;
    if (is13xl) return variant['13xl'].width;
    if (is12xl) return variant['12xl'].width;
    if (is11xl) return variant['11xl'].width;
    if (is10xl) return variant['10xl'].width;
    return variant['xl'].width;
  };

  return (
    <>
      <div
        ref={onInviewRef}
        className="relative mt-[119px]"
        id="service-section"
      >
        <h1 className="service-section-title">SERVICES</h1>
        <LineAnimation
          animationKey={animationKey}
          width={getResponsiveWidth()}
          top={is17xl ? 'top-4' : 'top-5'}
        />
        <div className="service-container">
          <div className="overflow-x-scroll scrollbar-hide w-screen">
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
