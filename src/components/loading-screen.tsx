import React from "react";
import { LoaderCircle } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-full">
        <LoaderCircle size={48} className="animate-spin text-slate-700" />
      </div>
    </div>
  );
};

export default LoadingScreen;
