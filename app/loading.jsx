import { PortfolioSkeleton } from "@/components/SkeletonLoader";
const loading = () => {
  return (
    <div className="container mx-auto">
      <PortfolioSkeleton />
    </div>
  );
};

export default loading;
