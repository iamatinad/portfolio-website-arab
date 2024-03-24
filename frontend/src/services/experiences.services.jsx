import { apiClient } from "./config";

export const apiGetAllExperiences = async () => {
  return apiClient.get("/experiences");
};

export const apiGetExperience = async (id) => {
  return apiClient.get(`/experiences/${id}`);
};

export const apiAddExperience = async (newExperience) => {
  return apiClient.post("/experiences", newExperience);
};

export const apiUpdateExperience = async (id, updates) => {
  return apiClient.patch(`/experiences/${id}`, updates);
};

export const apiDeleteExperience = async (id) => {
  return apiClient.delete(`/experiences/${id}`);
};
