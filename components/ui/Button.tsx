import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#C9A227] text-black hover:bg-[#d8b54a]"
      : "border border-white text-white hover:bg-white hover:text-black";

  const className = `
    ${styles}
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-8
    py-4
    font-semibold
    transition-all
    duration-300
    transform
    hover:scale-105
    active:scale-95
  `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}