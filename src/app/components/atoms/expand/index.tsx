import clsx from 'clsx';
import React from 'react';
import Container from '../container';

interface IProps {
  children: React.ReactNode;
  center?: boolean;
}

const Expand = ({
  children,
  center,
}: IProps) => {
  const styles = {
    width: "100%",
    height: "100%",
    backgroundColor: "00ff00"
  }

  return (
    <div className={ `flex ${ clsx({ center })}` } style={ styles } >
      { children }
    </div>
  );
};
  
export default Expand;
