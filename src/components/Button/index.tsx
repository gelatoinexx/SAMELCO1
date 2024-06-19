type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  text: string;
  variant: ButtonVariant;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const { text, variant, icon, onClick, className } = props;
  const getButtonClasses = (): string => {
    switch (variant) {
      case "primary":
        return "bg-primary-500 hover:bg-accent-600 text-white";
      case "secondary":
        return "bg-white border-2 border-primary-500 text-primary-500 hover:bg-accent-500 hover:border-accent-500 hover:text-white";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`py-3 px-8 rounded-3xl text-lg md:mr-4 mb-4 flex justify-center ${getButtonClasses()} ${className}`}
    >
      <span>{text}</span>
      {icon && <div className="ml-5">{icon}</div>}
    </button>
  );
}
