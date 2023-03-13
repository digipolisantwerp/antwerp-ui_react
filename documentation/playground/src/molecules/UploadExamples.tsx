import { Upload } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function UploadExamples() {
  const [files, setFiles] = useState([] as File[]);
  const handleFilesChange = (files: File[]) => {
    setFiles(files);
  };

  return (
    <div className="u-margin-bottom">
      <h2>Upload</h2>
      <div className="row">
        <div className="col-xs-6">
          <Upload
            id="aui-upload-example-1"
            maxSize={1}
            files={files}
            acceptedFormat="image/*"
            onChange={handleFilesChange}
            onDelete={handleFilesChange}
            sizeErrorLabel="WRONG SIZE"
            formatErrorLabel="WRONG FORMAT"
          />
        </div>
        <div className="col-xs-6">
          <Upload
            id="aui-upload-example-2"
            disabled
            files={[]}
            label={
              <p>
                Deze label kan <b>overgeschreven</b> worden
              </p>
            }
            maxSizeLabel="Dit is het maximum:"
          />
        </div>
      </div>
    </div>
  );
}

export default UploadExamples;
