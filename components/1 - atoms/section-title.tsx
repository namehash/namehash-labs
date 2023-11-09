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
      className={`text-4xl leading-10 font-bold text-center mt-3 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
