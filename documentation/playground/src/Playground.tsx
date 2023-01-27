import AvatarExamples from './atoms/AvatarExamples';
import BadgeExamples from './atoms/BadgeExamples';
import BreadcrumbExamples from './atoms/BreadcrumExamples';
import ButtonExamples from './atoms/ButtonExamples';
import ButtonGroupExamples from './molecules/ButtonGroupExamples';
import CheckboxExamples from './atoms/CheckboxExamples';
import IconExamples from './base/IconExamples';
import ImageExamples from './molecules/ImageExamples';
import LabelExamples from './atoms/LabelExamples';
import PageIndicatorExamples from './molecules/PageIndicatorExamples';
import ProgressBarExamples from './atoms/ProgressBarExamples';
import RadioExamples from './atoms/RadioExamples';
import SpinnerExamples from './atoms/SpinnerExamples';
import SwitchExamples from './atoms/SwitchExamples';
import TableExamples from './atoms/TableExamples';
import TagExamples from './molecules/TagExamples';
import TextAreaExamples from './atoms/TextAreaExamples';
import TextFieldExamples from './atoms/TextFieldExamples';
import ToggleExamples from './atoms/ToggleExamples';
import TooltipExamples from './atoms/TooltipExamples';
import AccordionExamples from './molecules/AccordionExamples';
import CardExamples from './molecules/CardExamples';
import AlertExamples from './molecules/AlertExamples';

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
      <ProgressBarExamples />
      <RadioExamples />
      <SpinnerExamples />
      <SwitchExamples />
      <TableExamples />
      <TextAreaExamples />
      <TextFieldExamples />
      <ToggleExamples />
      <TooltipExamples />
      <h1>Molecules</h1>
      <AccordionExamples />
      <AlertExamples />
      <ButtonGroupExamples />
      <CardExamples />
      <ImageExamples />
      <PageIndicatorExamples />
      <TagExamples />
    </>
  );
}

export default Playground;
