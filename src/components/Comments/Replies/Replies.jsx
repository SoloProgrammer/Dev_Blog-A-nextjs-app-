"use client";
import React from "react";

const Replies = ({ replies }) => {
  return (
    <div>
      {replies.map((reply) => {
        return <span key={reply.id}>{reply.desc}</span>;
      })}
    </div>
  );
};

export default Replies;
