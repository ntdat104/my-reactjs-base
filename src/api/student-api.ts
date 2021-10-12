import { ListParams, ListResponse, Student } from "interfaces";
import axiosClient from "./axios-client";

const URL = "/students";

export const studentApi = {
  getAll(params: ListParams): Promise<ListResponse<Student>> {
    return axiosClient.get(URL, { params });
  },

  getById(id: string): Promise<Student> {
    return axiosClient.get(`${URL}/${id}`);
  },

  create(data: Student): Promise<Student> {
    return axiosClient.post(URL, data);
  },

  update(data: Partial<Student>): Promise<Student> {
    return axiosClient.patch(`${URL}/${data.id}`, data);
  },

  remove(id: string): Promise<any> {
    return axiosClient.delete(`${URL}/${id}`);
  },
};
