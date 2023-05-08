import { Blocks } from "react-loader-spinner";

export default function BlockLoader() {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center">
      <Blocks
        visible={true}
        height="80"
        width="80"
        aria-label="blocks-loading"
      />
    </div>
  );
}
