import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react'

interface ListItemProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  idItem: string;
  isActive?: boolean | undefined;
  onItemClick?: (id: string) => void;
}

export const RListItem: FC<ListItemProps> = (props) => {
  const { children, idItem, isActive, onItemClick, ...otherProps } = props;

  return (
    <button
      className={classNames(
        'rounded-xl text-left font-extrabold text-lg leading-[18px] p-3',
        { 'item--active': isActive })
      }
      onClick={() => onItemClick?.(idItem)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
