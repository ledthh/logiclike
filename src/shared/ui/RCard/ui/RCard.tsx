import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  imgSrc?: string;
  imgStyle?: CSSProperties;
}

export const RCard: FC<CardProps> = (props) => {
  const { children, imgSrc, imgStyle, ...otherProps } = props;

  return (
    <div className='rounded-[18px] shadow-xl text-sm' {...otherProps}>
      <div className='rounded-t-[18px] h-[162px] flex justify-center items-center' style={imgStyle}>
        <img className='size-[144px]' src={imgSrc} />
      </div>
      <div className='pt-3 px-[18px] pb-[18px] font-extrabold text-lg leading-[18px]'>{children}</div>
    </div>
  )
}
