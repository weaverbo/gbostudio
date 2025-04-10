import StyledLink from 'next/link';

export default function Header() {
  return (
    <div className="container flex justify-between items-center text-main pt-[23px]">
      <StyledLink href={'/'} className="text-2xl font-bold">
        GBO STUDIO
      </StyledLink>
      <div className="text-xl font-">
        <StyledLink href={'/portpolio'}>PORTFOLIO</StyledLink>
        <StyledLink href={'/'} className="ml-[24px]">
          CONTACT
        </StyledLink>
      </div>
    </div>
  );
}
