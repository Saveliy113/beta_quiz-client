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

  console.log('Lessons Response: ', lessonsResponse);
  console.log('Groups Response: ', groupsResponse);

  // groupsResponse.forEach((branch: AlfaBranchGroups) => {
  //   groupsArr = groupsArr.concat(branch.items);
  // });

  // lessonsResponse.forEach((branch: AlfaBranchLessons) => {
  //   totalRows += branch.total;
  //   if (branch.total / branch.count > totalPages) {
  //     totalPages = Math.ceil(branch.total / branch.count);
  //   }
  //   lessonsArr = lessonsArr.concat(branch.items);
  // });

  //NEED TO FIX TYPES
  // return {
  //   lessons: lessonsArr.map((lesson: any, id: number) => ({
  //     id: id + 1,
  //     date: lesson.date,
  //     time: `${lesson.time_from.slice(11, 19)} — ${lesson.time_to.slice(
  //       11,
  //       19
  //     )}`,
  //     group:
  //       groupsArr.find((group: any) => group.id === lesson.group_ids[0])
  //         ?.name || ' ',
  //     lesson: lesson.subject_id,
  //   })),
  //   totalRows,
  //   totalPages,
  // };
};
