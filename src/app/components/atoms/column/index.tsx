import React from 'react';
import clsx from 'clsx';

interface IProps {
  center?: boolean,
  backColor?: string,
  children: React.ReactNode;
}

const Column = ({
  center,
  backColor,
  children,
}: IProps) => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: `#${backColor}`,
  }

  return (
    <div className={ `flex ${ clsx({ center }) }` } style={ styles } >
      { children }
    </div>
  );
};
  
export default Column;
