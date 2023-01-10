import { Spinner } from '@acpaas-ui/react-components';

export function SpinnerExamples() {
  return (
    <div className="u-margin-bottom">
      <h2>Spinners</h2>
      <Spinner showText />
      <Spinner label="Loading..." showText />
      <Spinner size="large" />
    </div>
  );
}

export default SpinnerExamples;
