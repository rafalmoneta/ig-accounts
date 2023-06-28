import { cn } from "@/lib/utils";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export const Section = ({ className, children }: SectionProps) => {
  return (
    <div className={cn(className, "w-full max-w-[1400px] mx-auto")}>
      {children}
    </div>
  );
};
