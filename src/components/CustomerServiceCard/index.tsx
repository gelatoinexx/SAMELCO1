type CustomerServiceCardProps = {
  title: string;
  icon: React.ReactNode;
  bgColor?: string;
  onClick?: () => void;
};

export default function CustomerServiceCard(props: CustomerServiceCardProps) {
  const { title, icon, bgColor, onClick } = props;
  const backgroundColorClass = bgColor ? `bg-${bgColor}-500` : "bg-accent-500";

  return (
    <div
      className={`${backgroundColorClass} md:p-8 p-5 flex flex-col items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      <div className="p-2">{icon}</div>

      <h3 className="text-center text-lg md:text-xl font-bold mb-4 text-white p-3">
        {title}
      </h3>
    </div>
  );
}