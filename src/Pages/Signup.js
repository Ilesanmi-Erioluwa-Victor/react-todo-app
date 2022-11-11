import React, { useReducer, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Editable,
  EditablePreview,
  EditableTextarea,
  Divider,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/AuthReducer/action";

import {
  checkCharacter,
  checkEmail,
  checkMobile,
  checkPassword,
  checkSignupForm,
  setToast,
} from "../utils/Authenticate";


const initialState = {
  name : "",
  password : ""
}
export const Signup = () => {
  return <div>Signup</div>;
};
