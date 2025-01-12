export const ExternalLink = ({ href, children }) => (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
  
// Uso:
  //   <ExternalLink href="https://nextjs.org">
  //   <Image
  //     aria-hidden
  //     src="/globe.svg"
  //     alt="Globe icon"
  //     width={16}
  //     height={16}
  //   />
  //   Go to nextjs.org →
  // </ExternalLink>