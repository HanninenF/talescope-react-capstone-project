import "./ResultsWrapper.scss";

type Props = {
  children: React.ReactNode;
};

export default function ResultsWrapper({ children }: Props) {
  return <section className="resultsWrapper">{children}</section>;
}
