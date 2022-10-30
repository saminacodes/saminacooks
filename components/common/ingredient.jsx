import Image from "next/image";

export const CustomSections = (props) => {
  return (
    <div>
      {props.imageLink && (
        <Image
          src={props.imageLink}
          layout="responsive"
          width={240}
          height={240}
          objectFit="cover"
        ></Image>
      )}
      <h4>{props.ingredient}</h4>
    </div>
  );
};
