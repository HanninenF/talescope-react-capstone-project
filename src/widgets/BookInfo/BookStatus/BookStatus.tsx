import "./BookStatus.scss";
type Props = {
  bookKey: string;
  status: "reading" | "finished" | undefined;
  updateStatus: (key: string, status: "reading" | "finished" | null) => void;
};

export default function BookStatus({ bookKey, status, updateStatus }: Props) {
  return (
    <>
      <div className="detailedBookCard__readingStatus">
        <button
          onClick={() =>
            updateStatus(bookKey, status === "reading" ? null : "reading")
          }
        >
          {status === "reading" ? "⛔ Stop reading" : "▶️ Start reading"}
        </button>
        <button
          onClick={() =>
            updateStatus(bookKey, status === "finished" ? null : "finished")
          }
        >
          {status === "finished" ? "🗑️ Remove mark as read" : "📘 Mark as read"}
        </button>
      </div>
    </>
  );
}
