interface Props {
  title: string;
  content: string;
  style?:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "danger"
    | "warning"
    | "light"
    | "dark";
}

const Textseg = ({ style, title, content }: Props) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: style === "dark" ? "rgba(0, 0, 0, 0.8)" : undefined,
    borderRadius: "10px",
    maxWidth: "75vw",
    margin: "0 auto",
    overflow: "hidden",
    padding: "20px",
  };

  const contentStyle: React.CSSProperties = {
    color: style === "dark" ? "white" : undefined,
  };

  return (
    <div
      style={containerStyle}
      className={"text-bg-" + { style } + " p-3 text-container shadow-lg"}
    >
      <div style={contentStyle} className="text-content">
        <h1 className="text-center">{title}</h1>
        <p className="text-center">{content}</p>
      </div>
    </div>
  );
};

export default Textseg;
