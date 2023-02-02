import { hasValidFormat, hasValidSize } from '../../../utils/file.utils';
import { Button } from '../../atoms/button';
import { Icon } from '../../base/icon';
import { UploadFileProps } from './Upload.types';

export function UploadFile({
  file,
  acceptedFormat,
  maxSize,
  onDelete,
  formatErrorLabel,
  deleteAriaLabel,
  sizeErrorLabel
}: UploadFileProps) {
  const isValidFormat = hasValidFormat(file, acceptedFormat);
  const isValidSize = hasValidSize(file, maxSize);
  return (
    <li key={file.name}>
      <Icon name={isValidFormat && isValidSize ? 'common-file-empty' : 'alert-triangle'} />
      <span className="m-upload__filename">{file.name}</span>
      {!isValidFormat && <span className="m-upload__error">{formatErrorLabel}</span>}
      {!isValidSize && <span className="m-upload__error">{sizeErrorLabel}</span>}
      {onDelete && (
        <div className="m-upload__delete">
          <Button
            ariaLabel={deleteAriaLabel}
            icon="remove"
            transparent
            theme="danger"
            size="small"
            onClick={() => onDelete(file)}
          />
        </div>
      )}
    </li>
  );
}

export default UploadFile;
