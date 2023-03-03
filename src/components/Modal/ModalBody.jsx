function ModalBody({ children, className }) {
  return (
    <div
      className={
        "max-h-[70vh] py-6 pl-6 pr-5 mr-1 overflow-y-auto " + className
      }
    >
      {children}
    </div>
  );
}

export default ModalBody;
