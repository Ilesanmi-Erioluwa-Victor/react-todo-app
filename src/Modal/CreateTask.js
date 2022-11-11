import { useReducer } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Editable,
  EditablePreview,
  EditableTextarea,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { createTask, getTask } from "../Redux/AppReducer/action";

const initialState = {
  title: "",
  description: "Default Description",
  task_status: "todo",
  tags: ["Others"],
  subTasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "title":
      return {
        ...state,
        title: action.payload,
      };

    case "description":
      return {
        ...state,
        description: action.payload,
      };
    case "task_status":
      return {
        ...state,
        task_status: action.payload,
      };
    case "tags":
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
};

const CreateTask = ({ isOpen, onClose }) => {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
};
