import { TextField } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function TextFieldExamples() {
  const [firstTextField, setFirstTextField] = useState('');
  return (
    <div className="u-margin-bottom" style={{ width: '420px' }}>
      <h2>Text Fields</h2>
      <TextField
        label="Controlled - onChange"
        id="textfield-2"
        onChange={(e) => setFirstTextField(e.target.value)}
        value={firstTextField}
        charCounter
        maxLength={100}
      />
      <TextField label="Uncontrolled" required id="textfield-1" description="Help text" charCounter maxLength={200} />
      <TextField label="Controlled - no onChange" id="textfield-3" value="hello" charCounter maxLength={100} />
      <TextField label="Error" id="textfield-4" description="There is an error" state="error" type="password" />
      <TextField label="Small success" id="textfield-5" description="Ok!" state="success" size="small" />
    </div>
  );
}

export default TextFieldExamples;
