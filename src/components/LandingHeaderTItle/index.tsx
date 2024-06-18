type HeaderTitleProps = {
    title: string;
    subtitle: string;
    
};

export default function LandingHeaderTitle(props: HeaderTitleProps) {
    const { title, subtitle } = props;
    return (
        <div className="space-y-1 md:space-y-4">
            <h2 className="text-xl lg:text-2xl text-primary-500 font-bold">{title}</h2>
            <h1 className="text-2xl lg:text-4xl	font-bold">{subtitle}</h1>
        </div>
    );
}