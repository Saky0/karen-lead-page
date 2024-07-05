import Form from "@/components/Form";
import ResponsiveImage from "@/components/ResponsiveImage";
import { BlockText } from "@/components/ui/blockText";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section className="flex justify-between w-full gray-section">
        <div className="container flex flex-col md:flex-row space-y-5 md:space-y-0 items-stretch">
          <div className="flex-1 p-3 flex items-stretch">
            <Image className="mock w-full object-cover" src={'/images/Mock-E-Book.png'} width={400} height={400} quality={100} alt="E-book Mockup"/>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-5 p-3 text-white">
            <h2 className="font-medium text-2xl min-[420px]:text-3xl min-[1024px]:text-4xl">Preencha seus dados para receber o e-book gratuito:</h2>
            <Form/>
          </div>
        </div>
      </section>
      <section className="flex justify-between w-full">
        <div className="container flex flex-col space-y-6 min-[420px]:space-y-8 items-stretch text-xl min-[1024px]:text-2xl">
          <div className="flex-1 text-center">
            A motivação para escrever este e-book sobre a <strong className="font-extrabold">libido da mulher no climatério e menopausa</strong> nasceu da observação cotidiana em minhas consultas.
          </div>
          <div className="flex-1 text-center">
            Percebi que, embora essas questões sejam comuns, muitas vezes são <strong className="font-extrabold">envoltas em silêncio</strong>, deixando as mulheres se sentindo <strong className="font-extrabold">isoladas em sua experiência</strong>.
          </div>
          <div className="flex-1 text-center">
            Mais do que um manual, <strong className="font-extrabold">LIBIDO SEM PAUSA</strong> é um convite para uma jornada de <strong className="font-extrabold">autoconhecimento, aceitação e amor-próprio</strong>. Através deste e-book, você terá as ferramentas necessaŕias para transformar essa fase da vida em um perído de florescimento, autoestima, segurança e bem-estar.
          </div>
        </div>
      </section>
      <section className="flex justify-between w-full gray-section">
        <div className="container flex flex-col md:flex-row items-stretch">
          <div className="flex-1 p-3 flex items-stretch">
            <Image className="mock w-full object-cover" src={'/images/Mock-Celulares.png'} width={400} height={400} quality={100} alt="E-book Mockup"/>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-5 p-3 text-white z-10">
            <h2 className="font-medium text-lg min-[420px]:text-2xl uppercase text-center">Acesse o conteúdo e saiba mais sobre:</h2>
            <BlockText>Compreender a libido feminina</BlockText>
            <BlockText>Identificar as causas da queda na libido</BlockText>
            <BlockText>Adotar atitudes para melhorar a libido</BlockText>
            <BlockText>Comunicação e intimidade</BlockText>
            <BlockText>Reconhecer quando procurar ajuda</BlockText>
          </div>
        </div>
      </section>
      <section className="flex justify-between w-full">
        <div className="container flex flex-col md:flex-row items-stretch space-y-3 md:space-y-0 md:space-x-12">
          <div className="flex p-3 md:p-0 flex-1 hero-img items-stretch">
            {/* <Image className="w-full h-auto object-cover rounded-md" src={'/images/karen-new.png'} layout="fill" quality={100} alt="E-book Mockup"/> */}
            <ResponsiveImage 
              src={'/images/karen-new.png'}
              className="w-full h-auto object-cover rounded-md"
              alt="E-book Mockup" /> 
          </div>
          <div className="flex flex-1 flex-col space-y-6 min-[420px]:space-y-8 items-stretch text-xl min-[1024px]:text-2xl p-3 md:p-0">
            <div className="text-left">
              <strong className="font-extrabold">Dra Karen Samilla<br/>CRM 90874</strong>
            </div>
            <div className="text-left">
              A Dra. Karen Samilla é médica e dedica seu trabalho ao tratamento do <strong className="font-extrabold">climatério, menopausa, emagrecimento e longevidade</strong>, transformando a vida das mulheres com sua <strong className="font-extrabold">expertise médica e acolhimento genuíno</strong>.              
            </div>
            <div className="text-left">
              Acredita que o climatério e a menopausa são o <strong className="font-extrabold">início dos melhores anos de vida</strong>, promovendo uma <strong className="font-extrabold">visão positiva dessa fase</strong>.
            </div>
            <div className="text-left">
              Ativa nas redes sociais, Dra. Karen Samilla compartilha <strong className="font-extrabold">informações valiosas</strong> e inspira suas seguidoras a adotarem um <strong className="font-extrabold">estilo de vida saudável e equilibrado</strong>, ajudando-as a <strong className="font-extrabold">florescerem e redescobrirem sua vitalidade e libido</strong>, mesmo durante as transformações hormonais.
            </div>    
            <div className="text-left">
              Siga-a no Instagram para mais <strong className="font-extrabold">dicas e informações sobre saúde feminina, climatério e menopausa</strong>.
            </div>            
            <Link href="https://wa.me/message/TW5WBQLLH3JVO1" className="btn px-5 min-[420px]:px-8 py-4 text-base min-[420px]:text-lg block font-extrabold rounded-md uppercase tracking-wider">Marque sua Consulta</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
