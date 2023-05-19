import { uploadToCloudinary } from "@/lib/app/utils";
import React, { useEffect } from "react";

export default function index() {
  const [file, setFile] = React.useState(null);

  return (
    <div>
      <input
        multiple
        onChange={(e) => {
          setFile(e.target.files);
        }}
        type="file"
      />
      <button
        onClick={async () => {
          const urls = [];
          for (let i = 0; i < file.length; i++) {
            const res = await uploadToCloudinary(file[i]);
            urls.push(res);
          }
        }}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
