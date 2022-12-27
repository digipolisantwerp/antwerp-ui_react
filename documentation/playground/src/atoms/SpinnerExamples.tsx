import { Spinner } from '@acpaas-ui/react-components';

export function SpinnerExamples() {
  return (
    <>
      <h1>Spinners</h1>
      <Spinner showText />
      <Spinner label="Loading..." showText />
      <Spinner size="large" />
    </>
  );
}

export default SpinnerExamples;
