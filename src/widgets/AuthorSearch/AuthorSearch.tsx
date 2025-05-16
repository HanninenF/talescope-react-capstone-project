import { useContext, useState } from "react";
import AuthorSearchBar from "../../components/AuthorSearchBar/AuthorSearchBar";
import AuthorCard from "../AuthorCard/AuthorCard";
import AuthorModal from "../AuthorModal/AuthorModal";
import { fetchAuthorDetails } from "../../hooks/fetchAuthorDetails";
import { searchAuthorByName } from "../../services/searchAuthorByName";
import { AuthorDetails } from "../../types/authorresponsetype";
import "./AuthorSearch.scss";
import { LoadingContext } from "../../contexts/LoadingContext";
import Loader from "../../components/Loader/Loader";

export default function AuthorSearch() {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [authorDetails, setAuthorDetails] = useState<AuthorDetails | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadingContext = useContext(LoadingContext);
  const setLoading = loadingContext?.setLoading || (() => {});
  const isAuthorLoading = loadingContext?.loading.authors || false;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, authors: true }));

    try {
      const match = await searchAuthorByName(selectedAuthor);
      if (!match) {
        alert("No author found!");
        return;
      }

      const authorKey = match.key?.replace("/authors/", "");
      const details = await fetchAuthorDetails(authorKey);

      if (details) {
        const enrichedDetails: AuthorDetails = {
          ...details,
          work_count: match.work_count || 0, // Sätt fallback om work_count inte finns
          top_work: match.top_work || "No top work available", // Sätt fallback om top_work inte finns
        };
        if (details) {
          console.log("enrichedDetails", enrichedDetails);
          setAuthorDetails(enrichedDetails);
          setIsModalOpen(true);
        }
      }
    } catch (error) {
      console.error("Author search failed", error);
    } finally {
      setLoading((prev) => ({ ...prev, authors: false }));
    }
  };

  return (
    <div className="authorContainer">
      <AuthorSearchBar
        onSubmit={handleSubmit}
        selectedAuthor={selectedAuthor}
        setSelectedAuthor={setSelectedAuthor}
      />
      {isAuthorLoading && <Loader />}
      {authorDetails && isModalOpen && (
        <AuthorModal
          authorDetails={authorDetails}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
