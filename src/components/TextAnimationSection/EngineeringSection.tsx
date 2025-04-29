interface ScrollsectionProps {
  visibleElements: number[];
  isMobile: boolean;
}

export default function Engineering({
  visibleElements,
  isMobile,
}: ScrollsectionProps) {
  return (
    <>
      <div className="scroll-section">
        <h1 className="scroll-section-title">Engineering</h1>
        <div className="scroll-section-description-container">
          <p
            className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
          >
            Challenges to Solutions
          </p>
          <p
            className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
          >
            Balancing User Needs & Business Goals
          </p>
          {isMobile ? (
            <p
              className={`pt-[4px] scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
            >
              Choosing the right tools and technologies for
            </p>
          ) : (
            <p
              className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
            >
              Choosing the right tools and technologies for every challenge
            </p>
          )}
          {isMobile && (
            <p
              className={`pt-[4px] scroll-section-description ${visibleElements.includes(4) ? 'opacity-100' : 'opacity-0'}`}
            >
              every challenge
            </p>
          )}
        </div>
        <div className="scroll-dots">
          <div className="scroll-dot_other"></div>
          <div className="scroll-dot"></div>
          <div className="scroll-dot_other"></div>
        </div>
      </div>
    </>
  );
}
