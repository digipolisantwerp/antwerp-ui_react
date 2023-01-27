import { Link } from '../../../constants/application.types';
import { ImageProps } from '../image';

export interface CardProps {
  titleId?: string;
  image?: ImageProps;
  title?: string;
  subTitle?: string;
  content?: string;
  link?: Link;
  qa?: string;
}
