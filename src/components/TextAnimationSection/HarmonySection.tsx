interface ScrollsectionProps {
  visibleElements: number[];
  isMobile: boolean;
}

export default function HarmonySection({
  visibleElements,
  isMobile,
}: ScrollsectionProps) {
  return (
    <>
      <div className="scroll-section">
        <h1 className="scroll-section-title">Harmony</h1>
        <div className="scroll-section-description-container">
          <p
            className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
          >
            Design & Developement in Harmony
          </p>
          <p
            className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
          >
            Beyond trends, creating impactful and unique
          </p>
          {isMobile ? (
            <p
              className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
            >
              Building solutions through continuous user interaction
            </p>
          ) : (
            <p
              className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
            >
              Building solutions through continuous user interaction solutions
            </p>
          )}
          {isMobile && (
            <p
              className={`pt-[4px] scroll-section-description ${visibleElements.includes(4) ? 'opacity-100' : 'opacity-0'}`}
            >
              solutions
            </p>
          )}
        </div>
        <div className="scroll-dots">
          <div className="scroll-dot_other"></div>
          <div className="scroll-dot_other"></div>
          <div className="scroll-dot"></div>
        </div>
      </div>
    </>
  );
}
