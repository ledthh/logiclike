import classNames from 'classnames';
import { FC } from 'react';
import { RList } from 'src/shared/ui/RList';

interface FilterPanelProps {
  className?: string;
  items: { id: string; name: string }[];
  onNameChange?: (name: string) => void;
}

export const FilterPanel: FC<FilterPanelProps> = (props) => {
  const { items, className = '', onNameChange } = props;

  return (
    <div className={classNames('border border-bcolor p-3 rounded-[18px] w-[264px]', className)}>
      <RList items={items} onListItemChange={onNameChange!} />
    </div>
  )
}
