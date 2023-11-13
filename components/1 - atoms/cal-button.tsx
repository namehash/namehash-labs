export default function CalButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      data-cal-link="namehashlabs/namehashlabs"
      data-cal-config='{"layout":"month_view"}'
      {...props}
    >
      {children}
    </button>
  );
}
