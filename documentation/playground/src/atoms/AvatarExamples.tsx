import { Avatar } from '@acpaas-ui/react-components';

export function AvatarExamples() {
  return (
    <div className="u-margin-bottom">
      <h2>Avatars</h2>
      <Avatar image="https://placedog.net/100/100?r" size="large" ariaLabel="Override aria-label" />
      <Avatar rounded image="https://placedog.net/100/100?r" size="small" />
      <Avatar rounded letter="NT" />
      <Avatar letter="EDITOR" />
      <Avatar icon="accounting-bill" />
      <Avatar />
    </div>
  );
}

export default AvatarExamples;
