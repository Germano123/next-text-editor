import React from 'react';
import clsx from 'clsx';

interface IProps {
  width: string,
  height: string,
  center?: boolean,
  backColor?: string,
  className?: string;
  children: React.ReactNode;
}

const Row = ({
  width,
  height,
  center = false,
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
    <div className={ clsx({ className, center }) } style={ styles } >
      { children }
    </div>
  );
};
  
export default Row;
