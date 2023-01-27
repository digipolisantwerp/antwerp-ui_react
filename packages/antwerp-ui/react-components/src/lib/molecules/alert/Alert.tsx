import { AlertProps } from './Alert.types';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import { THEME_ICON_MAP } from '../../../constants/layout.settings';
import { Button } from '../../atoms/button';

const renderModalAlert = (className: string, props: AlertProps) => {
  const {
    ariaLabelClose,
    cancelLabel,
    children,
    confirmLabel,
    onCancel,
    onClose,
    onConfirm,
    qa,
    theme,
    title,
    titleId
  } = props;
  const textClass = classNames({
    'u-margin-bottom': !!(onConfirm || onCancel)
  });
  return (
    <div role="alertdialog" className={className} aria-labelledby={titleId} aria-modal="true" data-qa={qa}>
      <Button
        icon="remove"
        transparent
        className="m-alert__close"
        theme={theme}
        ariaLabel={ariaLabelClose}
        onClick={onClose}
      />
      {!!theme && (
        <span className="m-alert__icon">
          <Icon name={THEME_ICON_MAP[theme]} />
        </span>
      )}
      <h4 id={titleId} className="h5 u-margin-bottom-xs">
        {title}
      </h4>
      <p className={textClass}>{children}</p>
      <div className="m-alert__actions">
        {onConfirm ? (
          <Button id="aui-alert-confirm" size="small" theme={theme} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        ) : null}
        {onCancel ? (
          <Button id="aui-alert-cancel" size="small" theme={theme} outline onClick={onCancel}>
            {cancelLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
};

const renderInlineAlert = (className: string, props: AlertProps) => {
  return (
    <div role="alert" className={className} aria-labelledby={props.titleId} data-qa={props.qa}>
      {!!props.theme && (
        <span className="m-alert__icon">
          <Icon name={THEME_ICON_MAP[props.theme]} />
        </span>
      )}
      {!!props.title && (
        <h5 id={props.titleId} className="paragraph has-base-font">
          {props.title}
        </h5>
      )}
      <p>{props.children}</p>
    </div>
  );
};

export function Alert(props: AlertProps) {
  const alertClasses = classNames({
    'm-alert': true,
    [`m-alert--${props.theme}`]: !!props.theme,
    'm-alert--inline': !props.modal
  });
  return props.modal ? renderModalAlert(alertClasses, props) : renderInlineAlert(alertClasses, props);
}

Alert.defaultProps = {
  title: '',
  titleId: 'aui-alert-title',
  ariaLabelClose: 'Close',
  confirmLabel: 'Confirm',
  cancelLabel: 'Cancel'
};

export default Alert;
