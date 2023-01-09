import { Spinner } from '@acpaas-ui/react-components';

export function SpinnerExamples() {
  return (
    <>
      <h2>Spinners</h2>
      <Spinner showText />
      <Spinner label="Loading..." showText />
      <Spinner size="large" />
    </>
  );
}

export default SpinnerExamples;
