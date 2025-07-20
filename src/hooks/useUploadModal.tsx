import { create } from 'zustand';
import FileUploadModal from '@/features/upload/FileUploadModal';

type FileUploadModalStore = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

const useFileUploadModalStore = create<FileUploadModalStore>(set => ({
  isModalOpen: false,
  setIsModalOpen: isOpen => set({ isModalOpen: isOpen })
}));

export function useUploadModal() {
  const { isModalOpen, setIsModalOpen } = useFileUploadModalStore();

  const UploadModal = () => (
    <FileUploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  );

  return {
    UploadModal,
    setShowModal: setIsModalOpen,
    isModalOpen
  };
}
