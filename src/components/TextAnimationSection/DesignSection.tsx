interface ScrollsectionProps {
  visibleElements: number[];
  isMobile: boolean;
}

export default function DesignSection({ visibleElements }: ScrollsectionProps) {
  return (
    <>
      <div className="scroll-section">
        <h1
          className={`scroll-section-title ${visibleElements.includes(0) ? 'opacity-100' : 'opacity-0'}`}
        >
          Design
        </h1>
        <div className="scroll-section-description-container">
          <p
            className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
          >
            intentional interaction
          </p>
          <p
            className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
          >
            every element serves a purpose — no more, no less
          </p>
          <p
            className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
          >
            minimal yet meaningful
          </p>
        </div>
        <div className="scroll-dots">
          <div className="scroll-dot"></div>
          <div className="scroll-dot_other"></div>
          <div className="scroll-dot_other"></div>
        </div>
      </div>
    </>
  );
}
