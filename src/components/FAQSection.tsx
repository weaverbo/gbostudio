import Image from 'next/image';
import { useState } from 'react';

import close_pc from '../../public/img/closed_pc.png';
import open from '../../public/img/open.png';
import '../styles/faqsection.css';

export default function FAQSection() {
  const [activeIndex, setIActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setIActiveIndex(activeIndex === index ? null : index);
  };

  const question = [
    {
      title: '웹사이트 제작 시 가장 중요하게 생각하는 요소는 무엇인가요?',
      answer:
        '저희는 미니멀한 디자인 안에서 여백의 활용과 세심한 디테일을 통해 심플하면서도 완성도 높은 결과물을 추구합니다. 여기에 텍스트 인터랙션을 더해, 사용자가 콘텐츠에 더욱 몰입할 수 있도록 설계합니다.',
    },
    {
      title: '상단에 소개된 이외에 어떤 기술 스택을 사용하나요?',
      answer:
        '저희는 React.js, Next.js, Typescript 기반으로 동적이고 안정적인 웹사이트를 제작합니다. Redux, Recoil, Context API 등 다양한 상태 관리 도구를 활용해 유연한 구조를 구현합니다. Firebase, Supabase, Prisma 등으로 백엔드와 데이터베이스 기능도 폭넓게 지원합니다.',
    },
    {
      title: '의뢰인은 무엇을 준비해야 할까요?',
      answer:
        '디자인 서비스 이용 시, 2개 정도 참고 사이트 링크와 추가로 구현하고 싶은 요구사항이 있으시면 잘 정리하신 후 담당자에게 알려주시면 됩니다. 퍼블리싱, 개발 서비스까지 포함하시는 경우 기능 관련해서 명확하게 정리된 자료를 준비해 주시면 됩니다.',
    },
    {
      title: '제작 완료 후 무료 수정은 몇 회까지 가능한가요?',
      answer:
        '제작 완료 후 수정은 총 2회까지 무료로 제공합니다. 이 수정 횟수 안에서는 추가 비용이 발생하지 않습니다. 단, 수정 범위가 커지거나 새로운 기능을 추가하는 경우, 별도 협의가 필요합니다.',
    },
    {
      title: '주로 어떤 분야 홈페이지를 전문적으로 제작하나요?',
      answer:
        '저희는 개인과 소규모 기업을 위한 홈페이지 제작을 주로 진행합니다. 이외에도 다양한 분야의 웹사이트를 제작하며, 특히 소개 페이지, 갤러리, 문의 페이지 등 기본적인 웹사이트 구성부터, 동적 기능이 필요한 쇼핑몰, 포토폴리오 사이트까지 다양하게 작업 가능합니다.',
    },
  ];

  return (
    <>
      <div className="mb-[280px]">
        <h1 className="faq-section-title">FAQ</h1>
        <div className="mt-[72px]">
          {question.map((q, index) => (
            <div key={index} className="faq-section-wrapper">
              <div
                className="faq-question-container"
                onClick={() => toggle(index)}
              >
                <h2 className="faq-question">{q.title}</h2>
                <button className="cursor-none pointer-events-auto toggle-icon ">
                  <Image
                    className="pointer-events-none"
                    src={activeIndex === index ? open : close_pc}
                    alt="closed_pc"
                  />
                </button>
              </div>
              <div
                className={`
            transition-all duration-300 ease-in-out ${
              activeIndex === index
                ? 'opacity-100 faq-answer-container'
                : 'opacity-0 max-h-0'
            }
            `}
              >
                <p className="faq-answer">{q.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
