import { Icon } from '@acpaas-ui/react-components';

export function IconExamples() {
  return (
    <>
      <h2>Icons</h2>
      <Icon name="alarm-bell" />
      <Icon name="alert-diamond" />
      <Icon name="mouse" screenReaderText="Click to connect your mouse" />
      <Icon thin name="mouse" screenReaderText="Click to connect your mouse" />
    </>
  );
}

export default IconExamples;
