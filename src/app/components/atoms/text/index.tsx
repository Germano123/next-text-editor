import React from 'react';
import clsx from 'clsx';

interface IProps {
  text: string;
  center?: boolean;
  isExpired?: boolean;
  strong?: boolean;
  small?: boolean;
  color?: string;
  className?: string;
}

const Text = ({
  text,
  center = false,
  strong = false,
  small = false,
  color = '000',
  className = ''
}: IProps) => {

  const styles = {
    color: `#${color}`,
  }

  return (
    <div className={ `flex ${ className } ${clsx({ center, strong, small })}` } style={ styles }>
      { text }
    </div>
  );
};

export default Text;
