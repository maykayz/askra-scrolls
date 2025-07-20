import FileService from '@/services/FileService';
import { useFileStore } from '@/store/useFileStore';
import { useEffect, useState } from 'react';

export function useFiles() {
  const { files, setFiles } = useFileStore();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFiles() {
      try {
        setLoading(true);
        const response = await FileService.getFiles();
        setFiles(response.files);
      } catch (err) {
        console.error('Failed to load files', err);
        setError('Failed to load files');
      } finally {
        setLoading(false);
      }
    }
    fetchFiles();
  }, [setFiles, setLoading, setError]);

  return { files, loading, error };
}

export function useUploadFiles() {
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { files, setFiles } = useFileStore();

  const uploadFiles = async (newFiles: File[]) => {
    try {
      setUploading(true);
      const response = await FileService.uploadFiles(newFiles);
      setFiles([...files, ...response.files]);
      return response;
    } catch (err) {
      setError('Failed to upload files');
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return { uploadFiles, uploading, error };
}
