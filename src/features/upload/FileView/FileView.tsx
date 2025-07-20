import { TrashIcon } from 'lucide-react';

import { formatFileSize } from '@/utils/file';

interface FileViewProps {
  file: File;
  onDelete?: (file: File) => void;
}

export default function FileView({ file, onDelete }: FileViewProps) {
  return (
    <div className="file-item p-3 border border-gray-200 dark:border-gray-700 rounded-lg mb-2 bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="file-name font-semibold text-primary-800 dark:text-gray-100 max-w-4/5 overflow-hidden text-ellipsis">
            {file.name}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
            <span>{formatFileSize(file.size)}</span>
            <span>{file.type}</span>
            <span>Modified: {new Date(file.lastModified).toLocaleDateString()}</span>
          </div>
        </div>
        {onDelete && (
          <div className="ml-4">
            <button
              className="text-red-400 hover:text-red-700 text-sm"
              onClick={() => onDelete && onDelete(file)}
            >
              <TrashIcon className="size-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
