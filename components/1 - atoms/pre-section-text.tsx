interface PreSectionTextProps {
  children?: React.ReactNode;
  className?: string;
}

export const PreSectionText = ({
  className,
  children,
  ...props
}: PreSectionTextProps) => {
  return (
    <p
      className={`text-xs font-medium leading-4 uppercase tracking-tight text-gray-500 text-center ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};
