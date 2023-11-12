import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

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
