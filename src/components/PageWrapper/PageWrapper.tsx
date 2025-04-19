import "./PageWrapper.scss";
type Props = {
  children: React.ReactNode;
};

export default function PageWrapper({ children }: Props) {
  return <section className="pageWrapper">{children}</section>;
}
