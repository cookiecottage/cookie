type CookieProps = {
  className?: string;
};

/** Simple decorative iced sugar-cookie illustration used throughout the site. */
export default function CookieIllustration({ className }: CookieProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Decorated sugar cookie"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="92" fill="#d9a066" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="#b47c3f" strokeWidth="4" />
      <circle cx="100" cy="100" r="70" fill="#fffdf8" />
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="#c06b4a"
        strokeWidth="5"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      {/* little piped flower */}
      <g fill="#c06b4a">
        <circle cx="100" cy="82" r="9" />
        <circle cx="84" cy="94" r="9" />
        <circle cx="90" cy="112" r="9" />
        <circle cx="110" cy="112" r="9" />
        <circle cx="116" cy="94" r="9" />
      </g>
      <circle cx="100" cy="99" r="7" fill="#8a9a7b" />
      {/* sprinkle dots */}
      <circle cx="70" cy="70" r="3" fill="#8a9a7b" />
      <circle cx="130" cy="72" r="3" fill="#c06b4a" />
      <circle cx="132" cy="128" r="3" fill="#8a9a7b" />
      <circle cx="68" cy="128" r="3" fill="#c06b4a" />
    </svg>
  );
}
