import { ArrowLeft, ArrowRight, Sparkle } from "lucide-react";

export default function SectionTitle({ title, subTitle }: { title?: string; subTitle?: string }) {
  return (
    <div className="flex items-center gap-4 mb-6  ">
      <ArrowRight size={24} className="bg-background" />
      <h4 className="">{title}</h4>
      <span className="h-px flex-1 bg-border rounded"></span>
      {subTitle && <p className="text-muted-foreground">{subTitle}</p>}
    </div>
  );
}