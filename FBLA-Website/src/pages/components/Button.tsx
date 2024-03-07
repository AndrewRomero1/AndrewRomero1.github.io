interface Props {
  children: string;
  onClick: () => void;
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
const Button = ({ children, onClick, style = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
