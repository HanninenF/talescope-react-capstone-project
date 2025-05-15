import { useState } from "react";
import AuthorSearchBar from "../../components/AuthorSearchBar/AuthorSearchBar";
import AuthorCard from "../AuthorCard/AuthorCard";
import AuthorModal from "../AuthorModal/AuthorModal";
import { fetchAuthorDetails } from "../../hooks/fetchAuthorDetails";
import { searchAuthorByName } from "../../services/searchAuthorByName";
import { AuthorDetails } from "../../types/authorresponsetype";

export default function AuthorSearch() {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [authorDetails, setAuthorDetails] = useState<AuthorDetails | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const authorKey = await searchAuthorByName(selectedAuthor);
    if (!authorKey) {
      alert("No author found!");
      return;
    }

    const details = await fetchAuthorDetails(authorKey);

    if (details) {
      setAuthorDetails(details);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <AuthorSearchBar
        onSubmit={handleSubmit}
        selectedAuthor={selectedAuthor}
        setSelectedAuthor={setSelectedAuthor}
      />

      {authorDetails && isModalOpen && (
        <AuthorModal
          authorDetails={authorDetails}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
