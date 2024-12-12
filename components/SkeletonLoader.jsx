import { Skeleton } from "@/components/ui/skeleton"

export function PortfolioSkeleton() {
  return (
    <div className="flex min-h-half text-zinc-50 p-6">
      {/* Sidebar */}
      <div className="w-full space-y-4 mr-8">
        <Skeleton className="h-12 w-full bg-accent/20" />
        <Skeleton className="h-12 w-full bg-zinc-800" />
        <Skeleton className="h-12 w-full bg-zinc-800" />
        <Skeleton className="h-12 w-full bg-zinc-800" />
      </div>
    </div>
  )
}

