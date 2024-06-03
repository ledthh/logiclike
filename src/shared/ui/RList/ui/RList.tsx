import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { RListItem } from './RListItem';
import { DEFAULT_TAG } from 'src/constants';
import classNames from 'classnames';

interface ListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  items: { id: string; name: string }[];
  onListItemChange: (name: string) => void;
}

export const RList: FC<ListProps> = (props) => {
  const { className, items, onListItemChange } = props;
  const [activeId, setActiveId] = useState<string>(DEFAULT_TAG);

  useEffect(() => {
    onListItemChange(activeId);
  }, [activeId]);

  return (
    <div className={classNames('flex flex-col', className)}>
      {
        items.map(({ name, id }) => (
          <RListItem key={id} idItem={id} isActive={id === activeId} onItemClick={setActiveId}>{name}</RListItem>
        ))
      }
    </div>
  )
}
