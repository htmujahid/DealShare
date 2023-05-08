import { ThreeDots } from "react-loader-spinner";

export default function BlockLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ThreeDots
        height="20"
        width="20"
        radius="15"
        color="#000000"
        aria-label="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
