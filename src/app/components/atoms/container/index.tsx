import React from 'react';
import clsx from 'clsx';

interface IProps {
  padding?: string,
  margin?: string,
  width: string,
  height: string,
  center?: boolean,
  backColor?: string,
  className?: string;
  borderRadius?: string,
  children: React.ReactNode;
}

const Container = ({
  padding,
  margin,
  width,
  height,
  center = false,
  backColor,
  borderRadius,
  className = '',
  children,
}: IProps) => {
  const styles = {
    padding,
    margin,
    width,
    height,
    borderRadius,
    backgroundColor: `#${backColor}`,
  }

  return (
    <div className={ `flex ${ className } ${ clsx({ center })}` } style={ styles } >
      { children }
    </div>
  );
};
  
export default Container;
  