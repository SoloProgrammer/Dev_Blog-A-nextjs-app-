"use client";

import { api } from "@/utils/api";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "@/redux/slices/authSlice";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();
  if (!res.ok) {
    return new Error(data.error);
  }
  return data;
};

const AuthUser = () => {
  const dispatch = useDispatch();
  const { data } = useSWR(api.getUser(), fetcher);
  if (data) {
    dispatch(addUser(data.user));
  }
  return <></>;
};

export default AuthUser;
