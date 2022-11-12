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

        const deleteHandler = (title) => {
          let newSubTasks = subTasks.filter(
            (item) => item.subTaskTitle !== title
          );
          dispatch(deleteSubTask(id, { subTasks: newSubTasks })).then(() => {
            dispatch(getTasks());
          });
        };

         const addSubtask = (e) => {
           e.preventDefault();
           if (currentSubTask) {
             const newSubTasks = [
               ...subTasks,
               { subTaskTitle: currentSubTask, status: false },
             ];

             //api call to add subTasks
             dispatch(addSubTasks(id, { subTasks: newSubTasks }))
               .then(() => dispatch(getTasks()))
               .then(() => {
                 setCurrentSubTask("");
               });
           }
         };

          const createTagHandler = () => {
            if (newTag) {
              //api call to add this new tags
              dispatch(addTag(newTag)).then(() => dispatch(getTagsList()));
            }
          };

          const updateFunc = (identifier, value) => {
            if (identifier === "textAndDescription") {
              dispatch(
                updateTasks(id, {
                  title: taskTitle,
                  description: taskDescription,
                })
              ).then(() => dispatch(getTasks()));
            } else if (identifier === "taskStatus") {
              dispatch(
                updateTasks(id, {
                  task_status: value,
                })
              ).then((r) => {
                if (r === UPDATE_TASK_SUCCESS) {
                  dispatch(getTasks());
                }
              });
            } else if (identifier === "taskTags") {
              dispatch(
                updateTasks(id, {
                  tags: value,
                })
              ).then(() => dispatch(getTasks()));
            }
          };

          const updateSubTaskStatus = (value) => {
            let newSubTaskData = subTasks.map((item) => {
              if (value.includes(item.subTaskTitle)) {
                return {
                  ...item,
                  status: true,
                };
              }
              return { ...item, status: false };
            });

            dispatch(updateSubtasksList(id, { subTasks: newSubTaskData })).then(
              () => dispatch(getTasks())
            );
          };

          
  return <div>EditPage</div>;
};
