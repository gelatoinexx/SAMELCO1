type FocusAreaCardProps = {
  title: string;
  description: string;
  icon: string;
  className?: string;
};

export default function FocusAreaCard({
  title,
  description,
  icon,
  className,
}: FocusAreaCardProps) {
  return (
    <div
      className={`bg-accent-200 shadow-md rounded-2xl  md:p-8 p-6 flex flex-col items-center justify-center ${className}`}
    >
      <div className="p-8">
        <img
          src={icon}
          alt={`${title} Icon`}
          className="md:w-20 md:h-20 w-16 h-16"
        />
      </div>

      <h3 className="text-center text-2xl md:text-4xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-grey-400 text-base text-justify mb-4 md:text-lg">
        {description}
      </p>
    </div>
  );
}
