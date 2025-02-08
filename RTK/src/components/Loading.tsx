import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg flex items-center gap-2">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
