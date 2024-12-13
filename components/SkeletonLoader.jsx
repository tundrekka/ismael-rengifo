import { Skeleton } from "@/components/ui/skeleton";

export function PortfolioSkeleton() {
  return (
    <div className="min-h-half flex p-6 text-zinc-50">
      {/* Sidebar */}
      <div className="mr-8 w-full space-y-4">
        <Skeleton className="h-12 w-full bg-accent/20" />
        <Skeleton className="h-12 w-full bg-zinc-800" />
        <Skeleton className="h-12 w-full bg-zinc-800" />
        <Skeleton className="h-12 w-full bg-zinc-800" />
      </div>
    </div>
  );
}
