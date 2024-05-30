import { FC, useEffect, useState } from 'react'
import { RListItem } from './RListItem';
import { DEFAULT_TAG } from 'src/constants';

interface ListProps {
  items: { id: string; name: string }[];
  onChange?: (name: string) => void;
}

export const RList: FC<ListProps> = (props) => {
  const { items, onChange } = props;
  const [activeId, setActiveId] = useState<string>(DEFAULT_TAG);

  useEffect(() => {
    onChange?.(activeId);
  }, [activeId]);

  return (
    <div className='flex flex-col'>
      {
        items.map(({ name, id }) => (
          <RListItem key={id} idItem={id} isActive={id === activeId} onItemClick={setActiveId}>{name}</RListItem>
        ))
      }
    </div>
  )
}
