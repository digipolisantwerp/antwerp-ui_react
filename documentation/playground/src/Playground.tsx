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
import LabelExamples from './atoms/LabelExamples';
import ImageExamples from './molecules/ImageExamples';
import BreadcrumbExamples from './atoms/BreadcrumExamples';
import TooltipExamples from './atoms/TooltipExamples';
import SwitchExamples from './atoms/SwitchExamples';
import TagExamples from './molecules/TagExamples';
import TableExamples from './atoms/TableExamples';

export function Playground() {
  return (
    <>
      <h1>Atoms</h1>
      <IconExamples />
      <AvatarExamples />
      <BadgeExamples />
      <ButtonExamples />
      <BreadcrumbExamples />
      <CheckboxExamples />
      <LabelExamples />
      <RadioExamples />
      <SpinnerExamples />
      <SwitchExamples />
      <TableExamples />
      <TextAreaExamples />
      <TextFieldExamples />
      <ToggleExamples />
      <TooltipExamples />
      <h1>Molecules</h1>
      <ImageExamples />
      <TagExamples />
    </>
  );
}

export default Playground;
