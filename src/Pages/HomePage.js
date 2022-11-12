import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import TaskCard from "../Components/TaskCard";
import { getTasks } from "../Redux/AppReducer/action";

export const HomePage = () => {
const tasks = useSelector( (store) =>store.AppReducer.tasks);
const searchParams = useSearchParams();

  return <div>HomePage</div>;
};
