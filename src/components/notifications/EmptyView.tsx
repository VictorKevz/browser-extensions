import { EmptyViewProps } from "../../types/notifications";
import emptyImg from "/assets/images/empty.svg";
const EmptyView = ({ data }: EmptyViewProps) => {
  const isEmpty = data.length === 0;
  if (!isEmpty) return null;
  return (
    <div className="w-full flex flex-col items-center text-center justify-center min-h-[30rem] mt-5">
      <h3 className="text-lg sm:text-3xl font-bold text-[var(--neutral-900)]">
        No Extensions Available Here!
      </h3>
      <img src={emptyImg} alt="" className="max-w-[15rem] w-full h-auto" />
      <p className="text-sm text-[var(--neutral-600)] sm:text-base mt-4">
        Switch to other tabs to find your available extensions!
      </p>
    </div>
  );
};

export default EmptyView;
