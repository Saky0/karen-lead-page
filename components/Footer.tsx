import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className='mt-16 flex justify-center items-center px-6 pt-6 h-max'>
            <div className="container flex flex-col justify-center items-center space-y-6">
                <div className='text-center space-y-2 text-xs min-[420px]:text-sm min-[1024px]:text-base'>
                    <div>
                        ® {new Date().getFullYear()} Copyright - Todos os direitos Reservados a Ghost Creative
                    </div>
                    <div>
                        Dra. Karen Samilla | CRM - 90874
                    </div>
                </div>
                <div className="made-by w-32 flex flex-col items-center h-max bg-white p-4 gap-3 text-black center">
                    <div className="made-by-text uppercase">Produzido por:</div>
                    <Image src="/images/logo-ghost.png" alt="Ghost Logo" width={200} height={112} />
                </div>
            </div>
        </footer>
    ); 
}
export default Footer;