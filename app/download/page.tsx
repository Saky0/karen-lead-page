import { DownloadButton } from "@/components/DownloadButton"


export default function DownloadPage() {

    return (
        <main className="flex flex-col items-center justify-between">
        <section className="flex justify-between w-full">
            <div className="container flex flex-col space-y-6 min-[420px]:space-y-6 items-stretch text-lg min-[420px]:text-xl min-[1024px]:text-2xl">
                <div className="flex-1 text-center text-2xl min-[420px]:text-3xl min-[1024px]:text-4xl">
                    <strong className="font-extrabold">Obrigada!</strong>
                </div>
                <div className="flex-1 text-center">
                    Clique no botão abaixo para baixar o seu e-book:
                </div>
                <div className="flex-1 text-center">
                    <DownloadButton/>
                </div>
            </div>
        </section>
        </main>
    );
}