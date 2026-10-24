const FormLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex w-full justify-center items-center min-h-[calc(100dvh-60px)] p-4">
      {children}
    </div>
  );
};

export default FormLayout;
