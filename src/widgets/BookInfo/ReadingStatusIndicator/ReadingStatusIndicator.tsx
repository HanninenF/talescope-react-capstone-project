import "./ReadingStatusIndicator.scss";
type Props = {
  status: "reading" | "finished" | undefined;
  showLabel: boolean;
  variant: "default" | "small" | "compact";
};

export default function ReadingStatusIndicator({
  status,
  showLabel,
  variant,
}: Props) {
  if (!status) return null;

  return (
    <div
      className={`ReadingStatusIndicator ReadingStatusIndicator--${variant}`}
    >
      {status === "reading" && (
        <>
          <span className="reading-indicator">🟠</span>
          {showLabel && <p>Reading</p>}
        </>
      )}
      {status === "finished" && (
        <>
          <span className="finished-indicator">✅</span>
          {showLabel && <p>Finished</p>}
        </>
      )}
    </div>
  );
}
