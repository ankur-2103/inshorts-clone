import axiosInstance from "./axiosInstance";

export const fetchPosts = async () => {
  const response = await axiosInstance.get("/v2/top-headlines", {params:{category: 'sports'}});
  return response.data;
};
