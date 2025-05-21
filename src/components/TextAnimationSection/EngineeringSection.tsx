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
        <h1 className="scroll-section-title">Devolop</h1>
        <div className="scroll-section-description-container">
          <p
            className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
          >
            code that lasts, not just functions
          </p>
          <p
            className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
          >
            readable, reusable, reliable
          </p>
          <p
            className={`pt-[4px] scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
          >
            we build clean, scalable code for the long run
          </p>
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
