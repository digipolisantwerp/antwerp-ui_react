export interface UploadProps {
  acceptedFormat?: string;
  deleteAriaLabel?: string;
  disabled?: boolean;
  files: File[];
  formatErrorLabel?: string;
  id?: string;
  label?: string;
  maxSize?: number;
  maxSizeLabel?: string;
  multiple?: boolean;
  onChange?: (files: File[], validations: { validSize: boolean; validFormat: boolean }[]) => void;
  onDelete?: (files: File[]) => void;
  qa?: string;
  sizeErrorLabel?: string;
}

export interface UploadFileProps {
  acceptedFormat?: string;
  deleteAriaLabel?: string;
  file: File;
  formatErrorLabel?: string;
  maxSize?: number;
  onDelete?: (file: File) => void;
  sizeErrorLabel?: string;
}
