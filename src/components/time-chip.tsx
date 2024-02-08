import { cn } from "@nextui-org/react";

const TimeChip = ({ time, className }: { time: string; className: string }) => {
    return (
        <span
            className={cn(
                "cursor-pointer duration-300 active:scale-95 text-xs border border-slate-300 rounded-full px-3 py-1.5 whitespace-nowrap",
                className
            )}
        >
            {time}
        </span>
    );
};

export default TimeChip;
