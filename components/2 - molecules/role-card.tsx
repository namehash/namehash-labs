import { MapPinIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { RoleCardProps } from "../3 - organisms/careers-page";

export const RoleCard = ({
  icon: Icon,
  title,
  details,
  additionalStyle,
}: RoleCardProps) => {
  return (
    <a
      className={`w-full cursor-pointer border border-gray-200 rounded-xl p-5 flex flex-col gap-5 items-start hover:bg-gray-50 transition-colors duration-300 ${additionalStyle}`}
    >
      <div className="border border-gray-200 p-[14px] rounded-full flex">
        {<Icon className="h-6 w-6 text-gray-400" />}
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl leading-8 font-semibold">{title}</h4>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <UserGroupIcon className="h-6 w-6 text-gray-400" />
            <p className="text-lg leading-7 font-normal text-gray-500">
              {details[0]}
            </p>
          </div>
          <div className="flex gap-3">
            <MapPinIcon className="h-6 w-6 text-gray-400" />
            <p className="text-lg leading-7 font-normal text-gray-500">
              {details[1]}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
