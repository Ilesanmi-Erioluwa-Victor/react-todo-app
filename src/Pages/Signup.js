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
  password : "",
  email : "",
  username : "",
  mobile : "",
  description : ""
};

const reducer = (state, action)=>{
    switch(action.type) {
      case "name" :
        return {...state, name : action.payload}

        case "password" :
          return {...state, password : action.payload}

          case "email" : 
          return {...state, email : action.payload}

          case "username" :
            return {...state, username : action.payload}

            case "mobile" :
              return {...state, mobile : action.payload}

              case "description" :
                return {...state, description : action.payload}

                default : {
                  return state;
                }
    }
}


export const Signup = () => {
   const [state, setState] = useReducer(reducer, initialState);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const toast = useToast();

   const loading = useSelector((store) => store.AuthReducer.isLoading);
   const [eye, setEye] = useState(false);
   const handleEye = () => {
     setEye((prev) => !prev);
   };

  return <div>Signup</div>;
};
