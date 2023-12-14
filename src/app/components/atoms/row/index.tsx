import React from 'react';
import clsx from 'clsx';

interface IProps {
  center?: boolean,
  backColor?: string,
  children: React.ReactNode;
}

const Row = ({
  center = false,
  backColor,
  children,
}: IProps) => {
  const styles = {
    display: "flex",
    backgroundColor: `#${backColor}`,
  }

  return (
    <div className={ clsx({ center }) } style={ styles } >
      { children }
    </div>
  );
};
  
export default Row;
