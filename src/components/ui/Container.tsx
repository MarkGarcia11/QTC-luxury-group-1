import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow" | "full";
};

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  const sizes = {
    default: "max-w-[1440px] px-6 md:px-12 lg:px-20",
    wide: "max-w-[1680px] px-6 md:px-12 lg:px-16",
    narrow: "max-w-[1100px] px-6 md:px-12 lg:px-20",
    full: "px-6 md:px-12 lg:px-16",
  };

  return (
    <div className={cn("mx-auto w-full", sizes[size], className)}>
      {children}
    </div>
  );
}
