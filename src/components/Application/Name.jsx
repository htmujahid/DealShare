import React from "react";

function Name() {
    return <div>{process.env.NEXT_PUBLIC_APPLICATION_NAME}</div>;
}

export default Name;
