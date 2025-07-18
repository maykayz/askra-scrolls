import FileService from "@/services/FileService";
import { useEffect, useState } from "react";

export interface File {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}

export function useFiles() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
	async function fetchFiles() {
	  try {
		setLoading(true);
		const response = await FileService.getFiles();
		setFiles(response.data);
	  } catch (err) {
		setError("Failed to load files");
	  } finally {
		setLoading(false);
	  }
	}

	fetchFiles();
  }, []);

  return { files, loading, error };
}

// export function useUploadFile() {
//   const [uploading, setUploading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const uploadFile = async (file: File) => {
// 	try {
// 	  setUploading(true);
// 	  await FileService.uploadFile(file);
// 	} catch (err) {
// 	  setError("Failed to upload file");
// 	} finally {
// 	  setUploading(false);
// 	}
//   };

//   return { uploadFile, uploading, error };
// }