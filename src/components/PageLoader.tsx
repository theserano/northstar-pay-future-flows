import { Loader2 } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary-dark" />
        <p className="text-gray-600 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
