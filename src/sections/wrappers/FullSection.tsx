import type { TNJFullSectionProps } from '@/types/props';
import classnames from 'classnames';

const DEFAULT_CLASS_NAME = 'nj-full-section';

export default function NJFullSection(props: TNJFullSectionProps) {
  const { className, id, njBackground } = props;

  const classList = classnames(DEFAULT_CLASS_NAME, className);

  // Only set when given, so the CSS default (transparent) stays in charge otherwise
  const sectionStyle: Record<string, string> = njBackground ?
    { '--section-background-color': `var(--${njBackground})` } :
    {};

  return (
    <div id={id} className={classList} style={sectionStyle as React.CSSProperties}>
      {props.children}
    </div>
  );
}
