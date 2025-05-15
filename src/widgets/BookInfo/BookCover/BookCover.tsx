import { getImageUrl } from "../../../config/imageUrls";
import "./BookCover.scss";
type Props = {
  coverId?: number;
  title: string;
  classNameImg: string;
};

export default function BookCover({ coverId, title, classNameImg }: Props) {
  const url = getImageUrl(coverId, "L");

  return (
    <>
      <img
        className={classNameImg}
        loading="lazy"
        src={url}
        alt={`Cover for ${title}`}
      />
    </>
  );
}
