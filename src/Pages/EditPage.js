import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Editable,
  EditablePreview,
  EditableTextarea,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CreateTask from "../Modal/CreateTask";

import {
  addSubTasks,
  addTag,
  deleteSubTask,
  getTagsList,
  getTasks,
  updateSubtasksList,
  updateTasks,
} from "../Redux/AppReducer/action";

import { UPDATE_TASK_SUCCESS } from "../Redux/AppReducer/actionTypes";

const date = new Date().toLocaleDateString();

export const EditPage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { id } = useParams();
    const tasks = useSelector((store) => store.AppReducer.tasks);
    const tagList = useSelector((store) => store.AppReducer.tags);
    const dispatch = useDispatch();

      const [taskTitle, setTaskTitle] = useState("");
      const [taskDescription, setTaskDescription] = useState("");
      const [taskStatus, setTaskStatus] = useState("");
      const [taskTags, setTaskTags] = useState([]);
      const [subTasks, setSubTasks] = useState([]);
      const [checkBox, setCheckBox] = useState([]);
      const [currentSubTask, setCurrentSubTask] = useState("");
      const [newTag, setNewTag] = useState("");
  return <div>EditPage</div>;
};
