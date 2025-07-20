import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import FileUpload from '@/features/upload/FileUpload';

interface FileUploadModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function FileUploadModal({
  isOpen = false,
  onClose = () => {}
}: FileUploadModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="rounded-lg p-0 m-0" showCloseButton={false}>
        <FileUpload />
      </DialogContent>
    </Dialog>
  );
}
