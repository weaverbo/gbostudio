import StyledLink from "next/link";

export default function Header() {
  return (
    <div className="container flex justify-between items-center text-main px-[140px] pt-[23px]">
      <StyledLink href={"/"} className=" text-lg font-bold">GBO STUDIO</StyledLink>
      <div className="text-md font-regular">
      <StyledLink href={"/"}>PORTFOLIO</StyledLink>
      <StyledLink href={"/"} className="ml-[24px]">CONTACT</StyledLink>
      </div>
    </div>
  );
}