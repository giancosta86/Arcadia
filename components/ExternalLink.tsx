interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function ExternalLink(props: Props) {
  return (
    <a href={props.href} className={props.className} target="_blank">
      {props.children}
    </a>
  );
}
