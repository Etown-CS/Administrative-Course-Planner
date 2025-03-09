import http from './httpService';
import { apiUrl } from '../config';
import { profDTO, professor, profFullDTO } from '@/types/professorTypes';
const apiEndpoint = `${apiUrl}/professors`;

export default class ProfService {
  static https = http.create();

  static async getAll(): Promise<professor[]> {
    const response = await ProfService.https.get(apiEndpoint);
    return response.data;
  }

  static async create(createProf: profDTO) {
    const response = await ProfService.https.post(apiEndpoint, createProf);
    return response.data;
  }

  static async getById(id: number): Promise<profFullDTO> {
    const response = await ProfService.https.get(`${apiEndpoint}/${id}`);
    return response.data;
  }
}
