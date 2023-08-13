export interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const ExternalLink = ({
  href,
  className,
  children
}: ExternalLinkProps) => {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
