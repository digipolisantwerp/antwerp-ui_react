import AvatarExamples from './atoms/AvatarExamples';
import BadgeExamples from './atoms/BadgeExamples';
import ButtonExamples from './atoms/ButtonExamples';
import IconExamples from './base/IconExamples';
import SpinnerExamples from './atoms/SpinnerExamples';
import CheckboxExamples from './atoms/CheckboxExamples';
import RadioExamples from './atoms/RadioExamples';
import TextFieldExamples from './atoms/TextFieldExamples';
import TextAreaExamples from './atoms/TextAreaExamples';
import ToggleExamples from './atoms/ToggleExamples';

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
      <TextAreaExamples />
      <TextFieldExamples />
      <ToggleExamples />
    </>
  );
}

export default Playground;
