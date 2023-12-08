interface SectionTitleProps {
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({
  className,
  children,
  ...props
}: SectionTitleProps) => {
  return (
    <p
      className={`lg:text-4xl text-3xl lg:leading-10 leading-9 font-bold text-center ${className} hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] shadow-black transition-all duration-200`}
      {...props}
    >
      {children}
    </p>
  );
};
