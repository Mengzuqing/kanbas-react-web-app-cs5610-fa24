import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

type AssignmentsControlButtonsProps = {
    addAssignment?: () => void;
};

export default function AssignmentsControlButtons({ addAssignment }: AssignmentsControlButtonsProps) {
    return (
        <div className="float-end">
            <BsPlus 
                className="fs-4" 
                onClick={() => addAssignment && addAssignment()} // 当addAssignment存在时触发
            />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
