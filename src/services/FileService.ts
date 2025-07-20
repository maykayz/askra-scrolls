import { API_URL } from '@/constants/api';

export const fetchFiles = async () => {
  const response = await fetch(`${API_URL}/api/files`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const uploadFiles = async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  const response = await fetch(`${API_URL}/api/upload`, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

const FileService = {
  getFiles: fetchFiles,
  uploadFiles: uploadFiles
};

export default FileService;
