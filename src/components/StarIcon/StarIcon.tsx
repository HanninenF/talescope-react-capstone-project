import "./StarIcon.scss";
type StarIconProps = {
  size?: number;
};

export default function StarIcon({ size }: StarIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="250 -580 500 460"
      width={size}
      height={size}
      fill="currentColor"
      className="star-icon"
      aria-hidden="true"
    >
      <path
        d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Z"
        transform="translate(20, 120)"
      />
    </svg>
  );
}
