import { Label } from '@acpaas-ui/react-components';

export function LabelExamples() {
  return (
    <>
      <h1>Labels</h1>
      <Label>default</Label>
      <Label theme="primary">primary</Label>
      <Label theme="success">success</Label>
      <Label theme="warning">warning</Label>
      <Label theme="danger">danger</Label>
    </>
  );
}

export default LabelExamples;
