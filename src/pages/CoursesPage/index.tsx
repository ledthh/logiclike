import axios from 'axios';
import { FC, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { DEFAULT_TAG } from 'src/constants';
import { ICourse } from 'src/types/api';
import { CourseList } from 'src/widgets/CourseList/CourseList';
import { FilterPanel } from 'src/widgets/FilterPanel/FilterPanel';

// NOTE: axios можно вынести в конфиг, тип для тэга в папку types
// Также шрифт добавить в кастомку

const CoursesPage: FC = () => {
  const [currentTag, setCurrentTag] = useState<string>(DEFAULT_TAG);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [filterItems, setFilterItems] = useState<ICourse[]>([]);

  const tags = useMemo<{ id: string, name: string }[]>(() => {
    const result = new Set<string>();

    for (const course of courses) {
      course.tags.forEach((tagName) => {
        result.add(tagName)
      });
    }

    return [{ id: '', name: 'Все темы' }, ...[...result].map((tagName) => ({ id: tagName, name: tagName }))];
  }, [courses]);

  const fetchCourses = async () => {
    try {
      const { data } = await axios.get<ICourse[]>('https://logiclike.com/docs/courses.json');
      setCourses(data);
    } catch (e) {
      setCourses([]);
      console.error(e);
    }
  };

  useLayoutEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (courses.length === 0) {
      setFilterItems([]);
      return;
    }

    const result: ICourse[] = currentTag === DEFAULT_TAG
      ? courses
      : courses.filter((course) => course.tags.includes(currentTag));

    setFilterItems(result);
  }, [courses, currentTag]);

  return (
    <div className='flex gap-6 p-6'>
      <FilterPanel className='flex-none self-start' items={tags} onNameChange={setCurrentTag} />
      <CourseList items={filterItems} />
    </div>
  )
}

export default CoursesPage;