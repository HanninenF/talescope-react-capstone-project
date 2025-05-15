import { AuthorDetails } from "../../types/authorresponsetype";
import "./AuthorCard.scss";
type Props = {
  authorDetails: AuthorDetails;
};

export default function AuthorCard({ authorDetails }: Props) {
  return (
    <>
      <div className="authorCard">
        <h1>{authorDetails.name}</h1>
      </div>
    </>
  );
}
