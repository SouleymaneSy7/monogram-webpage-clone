type IconsProps = {
  iconSrc: string;
  alt: string;
};

const Icons = ({ iconSrc, alt }: IconsProps) => {
  return <img src={iconSrc} alt={`${alt} Icon`} />;
};

export default Icons;
