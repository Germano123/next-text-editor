import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

interface IProps {
    icon: string;
    alt: string;
    width: number,
    height: number,
    className?: string;
}

const Icon = ({
    icon,
    alt = icon,
    width,
    height,
    className = ''
  }: IProps) => {
    return (
      <div className={ clsx({ className }) }>
        <Image src={ icon }  alt={ alt } width={ width } height={ height } />
      </div>
    );
  };
  
  export default Icon;
  