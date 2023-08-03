import {
  AlfaBranchGroups,
  AlfaBranchLessons,
  FormatLessonsResult,
  GroupData,
  LessonData,
} from './types';

export const formatLessonsData = (
  lessonsResponse: AlfaBranchLessons[],
  groupsResponse: AlfaBranchGroups[]
): FormatLessonsResult => {
  let groupsArr: GroupData[] = [];
  let lessonsArr: LessonData[] = [];
  let totalRows: number = 0;
  let totalPages: number = 0;

  groupsResponse.forEach((branch: AlfaBranchGroups) => {
    groupsArr = groupsArr.concat(branch.items);
  });

  lessonsResponse.forEach((branch: AlfaBranchLessons) => {
    totalRows += branch.total;
    if (branch.total / branch.count > totalPages) {
      totalPages = Math.ceil(branch.total / branch.count);
    }
    lessonsArr = lessonsArr.concat(branch.items);
  });

  return {
    lessons: lessonsArr.map((lesson: any, id: any) => ({
      id: id + 1,
      date: lesson.date,
      time: `${lesson.time_from} — ${lesson.time_to}`,
      group:
        groupsArr.find((group: any) => group.id === lesson.group_ids[0])
          ?.name || ' ',
      lesson: lesson.subject_id,
    })),
    totalRows,
    totalPages,
  };
};
