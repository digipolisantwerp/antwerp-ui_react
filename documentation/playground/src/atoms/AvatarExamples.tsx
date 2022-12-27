import { Avatar } from '@acpaas-ui/react-components';

export function AvatarExamples() {
  // TODO-NT ICON AVATAR
  return (
    <>
      <h1>Avatars</h1>
      <Avatar image="https://placedog.net/100/100?r" size="large" ariaLabel="Override aria-label" />
      <Avatar rounded image="https://placedog.net/100/100?r" size="small" />
      <Avatar rounded letter="AC" />
      <Avatar letter="ED" />
    </>
  );
}

export default AvatarExamples;
