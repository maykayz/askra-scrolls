const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const fetchFiles = async () => {
  const response = await fetch(`${API_URL}/api/files`);
  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error(await response.text());
  return response.json();
};

const FileService = {
  getFiles: fetchFiles,
  uploadFile: uploadFile,
};

export default FileService;
