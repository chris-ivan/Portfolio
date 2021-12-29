import "./Heading.scss";

export const H2 = ({ children }) => {
  return (
    <h2 className="H2">
      <span className="blue-span">
        <span className="code-heading">{children}</span>
      </span>
    </h2>
  );
};
