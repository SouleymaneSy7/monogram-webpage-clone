type IconsProps = {
  iconSrc: string | undefined;
  alt: string;
};

const Icons = ({ iconSrc, alt }: IconsProps) => {
  return <img src={iconSrc} alt={`${alt} Icon`} />;
};

export default Icons;
