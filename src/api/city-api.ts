import { City, ListResponse } from "interfaces";
import axiosClient from "./axios-client";

const URL = "/cities";

export const cityApi = {
  getAll(): Promise<ListResponse<City>> {
    return axiosClient.get(URL, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};
