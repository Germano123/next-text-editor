import React from 'react';
import clsx from 'clsx';

interface IProps {
  width?: string,
  height?: string,
  center?: boolean,
  backColor?: string,
  className?: string;
  children: React.ReactNode;
}

const Column = ({
  width,
  height,
  center,
  backColor,
  className = '',
  children,
}: IProps) => {
  const styles = {
    width,
    height,
    backgroundColor: `#${backColor}`,
  }

  return (
    <div className={ `flex ${ className } ${ clsx({ center }) }` } style={ styles } >
      { children }
    </div>
  );
};
  
export default Column;
