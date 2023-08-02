import { useMutation } from '@tanstack/react-query';
import { GetGroupsDto, GetLessonsDto } from '../model/types';
import LessonsService from './lessons.service';

export const useGetLessonsData = () => {
  const {
    isLoading: lessonsIsLoading,
    isSuccess: lessonsIsSuccess,
    data: lessonsResponse,
    mutate: getLessons,
  } = useMutation(['getLessons'], (body: GetLessonsDto) =>
    LessonsService.getLessons(body)
  );

  const {
    isLoading: groupsIsLoading,
    isSuccess: groupsIsSuccess,
    data: groupsResponse,
    mutate: getGroups,
  } = useMutation(['getGroups'], (body: GetGroupsDto) =>
    LessonsService.getGroups(body)
  );

  return {
    lessonsIsLoading,
    lessonsIsSuccess,
    lessonsResponse,
    getLessons,
    groupsIsLoading,
    groupsIsSuccess,
    groupsResponse,
    getGroups,
  };
};
