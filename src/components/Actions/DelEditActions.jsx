import React from "react";
import styles from "./delEditActions.module.css";
import Loader from "../Loader/Loader";
import { DeleteIcon, EditSquareIcon } from "@/GoogleIcons/Icons";

const DelEditActions = ({ loading, handleDelete, handleEdit }) => {
  return (
    <div className={styles.actions}>
      {loading ? (
        <Loader size="mini" />
      ) : (
        <DeleteIcon handleFunc={handleDelete} />
      )}
      <EditSquareIcon handleFunc={handleEdit} />
    </div>
  );
};

export default DelEditActions;
