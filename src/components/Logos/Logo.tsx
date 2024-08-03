import Image from "next/image";

interface LogoProps {
  size: 'large' | 'medium' | 'small' | 'nav';
}

const logoDimensions = {
  large: { width: 44, height: 30 },
  medium: { width: 44, height: 20 },
  small: { width: 10, height: 10 },
  nav: { width: 44, height: 54 }
};

export const Logo: React.FC<LogoProps> = ({ size }) => {
  const { width, height } = logoDimensions[size];

  return (
    <Image src="/logos/logo.svg" alt="Logo" width={width} height={height} />
  );
};