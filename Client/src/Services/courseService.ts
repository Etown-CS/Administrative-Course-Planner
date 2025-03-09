import http from './httpService';
import { apiUrl } from '../config';
import { courses, courseDTO, courseFullDTO } from '../types/courseTypes';

const apiEndpoint = `${apiUrl}/courses`;

export default class CourseService {
  static https = http.create();

  static async getAll(): Promise<courses[]> {
    const response = await CourseService.https.get(apiEndpoint);
    return response.data;
  }

  static async create(createCourse: courseDTO) {
    const response = await CourseService.https.post(apiEndpoint, createCourse);
    return response.data;
  }

  static async getById(id: number): Promise<courseFullDTO> {
    const response = await CourseService.https.get(`${apiEndpoint}/${id}`);
    return response.data;
  }
}
