import AvatarExamples from './atoms/AvatarExamples';
import BadgeExamples from './atoms/BadgeExamples';
import ButtonExamples from './atoms/ButtonExamples';
import IconExamples from './base/IconExamples';
import SpinnerExamples from './atoms/SpinnerExamples';
import CheckboxExamples from './atoms/CheckboxExamples';
import RadioExamples from './atoms/RadioExamples';
import TextFieldExamples from './atoms/TextFieldExamples';

export function Playground() {
  return (
    <>
      <IconExamples />
      <AvatarExamples />
      <BadgeExamples />
      <ButtonExamples />
      <CheckboxExamples />
      <RadioExamples />
      <SpinnerExamples />
      <TextFieldExamples />
    </>
  );
}

export default Playground;
