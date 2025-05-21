interface ScrollsectionProps {
  visibleElements: number[];
  isMobile: boolean;
}

export default function DesignSection({ visibleElements }: ScrollsectionProps) {
  return (
    <>
      <div className="scroll-section">
        <h1 className="scroll-section-title">Design</h1>
        <div className="scroll-section-description-container">
          <p className="scroll-section-description">intentional interaction</p>
          <p className="scroll-section-description-other">
            every element serves a purpose — no more, no less
          </p>
          <p className="scroll-section-description">minimal yet meaningful</p>
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
