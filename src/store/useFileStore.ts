import { create } from 'zustand';

type FileInfo = {
  id: string;
  filename: string;
  size: number;
  upload_time: string;
};

type FileStore = {
  files: FileInfo[];
  setFiles: (files: FileInfo[]) => void;
};

const useFileStore = create<FileStore>((set) => ({
  files: [],
  setFiles: (files) => set({ files: files })
}));

export { useFileStore };
