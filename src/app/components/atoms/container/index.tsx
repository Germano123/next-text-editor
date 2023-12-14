import React from 'react';
import clsx from 'clsx';

interface IProps {
  padding?: string,
  margin?: string,
  width?: string,
  height?: string,
  center?: boolean,
  backColor?: string,
  borderRadius?: string,
  children?: React.ReactNode;
}

const Container = ({
  padding,
  margin,
  width,
  height,
  center = false,
  backColor,
  borderRadius,
  children,
}: IProps) => {
  const styles = {
    padding,
    margin,
    width,
    height,
    borderRadius,
    backgroundColor: `#ff00ff`,
  }
  console.log(`flex ${ clsx({ center })}`)

  return (
    <div className={ `flex ${ clsx({ center })}` } style={ styles } >
      { children }
    </div>
  );
};
  
export default Container;
