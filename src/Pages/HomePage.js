import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TaskCard from "../Components/TaskCard";
import { getTasks } from "../Redux/AppReducer/action";

export const HomePage = () => {
const tasks = useSelector( (store) =>store.AppReducer.tasks);
const [searchParams] = useSearchParams();
const dispatch = useDispatch();

const filterByParamsTags = (task) => {
  //to filter out the tags that we have based on the params
  const tagsInTheParams = searchParams.getAll("tags");
  if (tagsInTheParams.includes("All") || tagsInTheParams.length === 0) {
    return task;
  }

  const data = task.tags.filter( (tag) => {
    if (tagsInTheParams.includes(tag)) {
      return true;
    }
    return false;
  })
  if(data.length) {
    return task
  }
}
  return <div>HomePage</div>;
};
