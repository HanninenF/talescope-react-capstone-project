import { AuthorDetails } from "../../types/authorresponsetype";
import AuthorCard from "../AuthorCard/AuthorCard";

type Props = {
  authorDetails: AuthorDetails;
  onClose: () => void;
};
export default function AuthorModal({ authorDetails, onClose }: Props) {
  return (
    <div className="authorModalOverlay" onClick={onClose}>
      <div className="authorModal" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>
          ✖
        </button>
        <AuthorCard authorDetails={authorDetails} />
      </div>
    </div>
  );
}
