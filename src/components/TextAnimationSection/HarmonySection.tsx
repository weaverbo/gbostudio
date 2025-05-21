interface ScrollsectionProps {
  visibleElements: number[];
  isMobile: boolean;
}

export default function HarmonySection({
  visibleElements,
}: ScrollsectionProps) {
  return (
    <>
      <div className="scroll-section">
        <h1 className="scroll-section-title">Dovetail</h1>
        <div className="scroll-section-description-container">
          <p
            className={`scroll-section-description ${visibleElements.includes(1) ? 'opacity-100' : 'opacity-0'}`}
          >
            planning, design, and development in perfect synergy
          </p>
          <p
            className={`scroll-section-description-other ${visibleElements.includes(2) ? 'opacity-100' : 'opacity-0'}`}
          >
            bridging creativity and technology
          </p>
          <p
            className={`scroll-section-description ${visibleElements.includes(3) ? 'opacity-100' : 'opacity-0'}`}
          >
            design and development, flowing as one
          </p>
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
