import classNames from 'classnames';
import { FC } from 'react'
import { RCard } from 'src/shared/ui/RCard';
import { ICourse } from 'src/types/api';

interface CourseListProps {
  items: ICourse[];
  className?: string;
}

export const CourseList: FC<CourseListProps> = (props) => {
  const { items, className = '' } = props;

  return (
    <div className={classNames('grid grid-cols-3 gap-4 grow auto-rows-max', className)}>
      {
        items.map((course) => (
          <RCard key={course.id} imgSrc={course.image} imgStyle={{ backgroundColor: course.bgColor }}>
            {course.name}
          </RCard>
        ))
      }
    </div>
  )
}
