import { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const OneTwoLayout = ({ left, right }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:p-1 lg:p-5 ">
      {left}
      {right}
    </div>
  );
};

export default OneTwoLayout;
