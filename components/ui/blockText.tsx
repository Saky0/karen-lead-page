import { ReactNode } from "react";

interface BlockTextProps {
    children: ReactNode
}

export function BlockText ({ children }: BlockTextProps ) {
    return (
        <div className="text-center text-sm min-[420px]:text-base font-medium p-3 uppercase box-inner-shadow rounded-md bg-background block-text">
            {children}
        </div>
    );
}