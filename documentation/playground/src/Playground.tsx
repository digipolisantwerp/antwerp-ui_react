import AvatarExamples from './atoms/AvatarExamples';
import BadgeExamples from './atoms/BadgeExamples';
import ButtonExamples from './atoms/ButtonExamples';
import IconExamples from './base/IconExamples';
import SpinnerExamples from './atoms/SpinnerExamples';
import CheckboxExamples from './atoms/CheckboxExamples';

export function Playground() {
  return (
    <>
      <h1>Base</h1>
      <IconExamples />
      <h1>Atoms</h1>
      <AvatarExamples />
      <BadgeExamples />
      <CheckboxExamples />
      <ButtonExamples />
      <SpinnerExamples />
    </>
  );
}

export default Playground;
