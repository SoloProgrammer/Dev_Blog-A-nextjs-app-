import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import Commonbtn from "../Commonbtn/Commonbtn";

const AuthLinks = ({ status }) => {
  return (
    <>
      {status === "notauthenticated" ? (
        <>
          <Link href="/login">
            <Commonbtn text={"Login"} />
          </Link>
        </>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <Commonbtn text={"Logout"} />
        </>
      )}
    </>
  );
};

export default AuthLinks;
