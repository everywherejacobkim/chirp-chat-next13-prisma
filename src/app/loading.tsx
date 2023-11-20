"use client";
import { FallingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center mt-20">
      <FallingLines
        color="#C4E64D"
        width="100"
        visible={true}
      />
    </div>
  );
}
