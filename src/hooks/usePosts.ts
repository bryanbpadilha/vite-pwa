import { useQuery } from "@tanstack/react-query";
import { Post } from "../lib/types";
import useApi from "./useApi";

const usePosts = (): undefined | Post[] => {
  const api = useApi();

  const query = useQuery(["todos"], async () => await api.get("posts"), {
    networkMode: "offlineFirst",
  });

  return query.data;
};

export default usePosts;
