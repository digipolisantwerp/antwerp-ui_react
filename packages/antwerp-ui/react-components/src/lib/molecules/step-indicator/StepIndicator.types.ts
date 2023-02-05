import { Link } from '../../../constants/application.types';

export interface StepIndicatorProps {
  steps?: Step[];
  onStepClick?: (stepId: string, stepIndex: number) => void;
  screenReaderStepLabel?: string;
  screenReaderCompleteLabel?: string;
  qa?: string;
}

export type Step = {
  id: string;
  label?: string;
  complete?: boolean;
  active?: boolean;
  link?: Omit<Link, 'label'>;
};
