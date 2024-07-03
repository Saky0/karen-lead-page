import Image from "next/image";
import { ReactNode } from "react";

const Header: React.FC = () => {
    return (
        <header className="flex justify-center items-cente p-3 h-36">
            <div className="container flex justify-center items-center">
                <Image src={'/images/logo-image.png'} width={309} height={65} quality={100} alt="LIBIDO SEM PAUSA"/>
            </div>
        </header>
    );
}

export default Header;