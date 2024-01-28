import Image from "next/image";

const MyImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="증명사진" />
    </div>
  );
};

export default MyImg;
