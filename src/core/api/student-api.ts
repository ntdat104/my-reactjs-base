import { ListParams, ListResponse, Student } from "../models";
import { axiosClient } from "../services";

export const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    const url = "/students";
    return axiosClient.get(url, { params });
  },

  getById(id: string): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },

  create(data: Student): Promise<Student> {
    const url = "/students";
    return axiosClient.post(url, data);
  },

  update(data: Partial<Student>): Promise<Student> {
    const url = `/students/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};