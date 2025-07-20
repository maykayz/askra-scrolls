import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Button } from '@/components/ui/button';
import UploadIcon from '@/components/UploadIcon';
import FileView from '@/features/upload/FileView';
import { useUploadFiles } from '@/hooks/useFiles';
import { useUploadModal } from '@/hooks/useUploadModal';

export function FileUpload() {
  const [files, setFiles] = useState<File[]>([]);
  const { uploadFiles } = useUploadFiles();
  const { setShowModal } = useUploadModal();

  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: true,
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }
  });

  const onDelete = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleUploadFiles = async () => {
    const result = await uploadFiles(files);

    if (result) {
      setShowModal(false);
    }
  };

  return (
    <div className="p-4 dark:bg-slate-900 dark:text-white bg-white text-black rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Upload File</h2>
      <div className="border-dashed border-2 border-primary-200 rounded-lg p-6 flex flex-col items-center justify-center bg-primary-100">
        <div
          {...getRootProps()}
          className="cursor-pointer w-full h-full flex items-center justify-center"
        >
          <input {...getInputProps()} />
        </div>

        <UploadIcon
          fill={'currentColor'}
          stroke={'currentColor'}
          strokeWidth="0.1"
          className="mt-8 text-primary-500"
        />
        {isDragActive ? (
          <p className="text-center text-primary-400">Drop the file here...</p>
        ) : (
          <p className="text-center text-slate-700 text-md">
            Drag & drop files or{' '}
            <Button
              className="mt-4 ml-0 pl-0 text-md underline text-primary-700 cursor-pointer"
              variant="link"
              onClick={open}
            >
              Browse
            </Button>
          </p>
        )}

        <p className="text-center text-sm text-gray-400 mt-2 mb-6">Supported formats: PDF only</p>
      </div>

      {files.length > 0 && (
        <div>
          <div className="mt-4 border border-slate-200 rounded-lg p-4">
            <h3 className="text-md font-semibold mb-2">Uploaded Files: {files.length} files</h3>
            <div className="">
              {files.map((file, index) => (
                <FileView file={file} key={index} onDelete={() => onDelete(index)} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Button
        variant="secondary"
        className="mt-4 w-full bg-black text-white hover:bg-gray-800 rounded-4xl"
        onClick={handleUploadFiles}
      >
        Upload Files
      </Button>
    </div>
  );
}

export default FileUpload;
