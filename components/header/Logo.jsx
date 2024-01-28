import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={54}
        height={54}
        priority
        alt="포트폴리오 로고"
      />
    </Link>
  );
};

export default Logo;
