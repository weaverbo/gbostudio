interface ScrollsectionProps {
  visibleElements: number[];
  isMobile: boolean;
}

export default function DesignSection({
  visibleElements,
  isMobile,
}: ScrollsectionProps) {
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
            Interactive Design
          </p>
          <p
            className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
          >
            Engineering for connection
          </p>
          {isMobile ? (
            <p
              className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
            >
              Designing the overall user experience
            </p>
          ) : (
            <p
              className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
            >
              Designing the overall user experience behavior with a product or
              service
            </p>
          )}
          {isMobile && (
            <p
              className={`pt-[4px] scroll-section-description ${visibleElements.includes(4) ? 'opacity-100' : 'opacity-0'}`}
            >
              behavior with a product or service
            </p>
          )}
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
