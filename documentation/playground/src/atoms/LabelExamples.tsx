import { Label } from '@acpaas-ui/react-components';

export function LabelExamples() {
  return (
    <>
      <h1>Labels</h1>
      <Label>default</Label>
      <Label type="primary">primary</Label>
      <Label type="success">success</Label>
      <Label type="warning">warning</Label>
      <Label type="danger">danger</Label>
    </>
  );
}

export default LabelExamples;
