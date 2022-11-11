import React, { useEffect } from "react";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { profile } from "../Redux/AuthReducer/action";
import { getLocalData } from "../utils/localStorage";

export const Profile = () => {
    const dispatch = useDispatch();

    const profileData = useSelector((state) => state.AuthReducer?.profileData);
    console.log(profileData);

      useEffect(() => {
        if (profileData?.length === 0) {
          const token = getLocalData("token");
          const username = getLocalData("userCredentials");
          const payload = {
            username: username,
            token,
          };
          dispatch(profile(payload));
        }
      }, [dispatch, profileData?.length]);
      
  return <div>Profile</div>;
};
