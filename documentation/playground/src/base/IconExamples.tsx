import { Icon } from '@acpaas-ui/react-components';

export function IconExamples() {
  return (
    <>
      <h1>Icons</h1>
      <Icon name="alarm-bell" />
      <Icon name="alert-diamond" />
      <Icon name="mouse" descriptiveText="Click to connect your mouse" />
      <Icon thin name="mouse" descriptiveText="Click to connect your mouse" />
    </>
  );
}

export default IconExamples;
