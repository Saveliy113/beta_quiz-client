import {
  AlfaBranchGroups,
  AlfaBranchLessons,
  GroupData,
  Lesson,
  LessonData,
} from './types';

export const formatLessonsData = (
  lessonsResponse: AlfaBranchLessons[],
  groupsResponse: AlfaBranchGroups[]
): Lesson[] => {
  let groupsArr: GroupData[] = [];
  let lessonsArr: LessonData[] = [];

  groupsResponse.forEach((branch: AlfaBranchGroups) => {
    groupsArr = groupsArr.concat(branch.items);
  });

  lessonsResponse.forEach((branch: AlfaBranchLessons) => {
    lessonsArr = lessonsArr.concat(branch.items);
  });

  return lessonsArr.map((lesson: any, id: any) => ({
    id: id + 1,
    date: lesson.date,
    time: `${lesson.time_from} — ${lesson.time_to}`,
    group:
      groupsArr.find((group: any) => group.id === lesson.group_ids[0])?.name ||
      '—',
    lesson: lesson.subject_id,
  }));
};
