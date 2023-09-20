"use client";
import { FallingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center mt-20">
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
}
