import { BlockText } from "@/components/ui/blockText";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex justify-between p-3 w-full gray-section">
        <div className="container flex items-stretch">
          <div className="flex-1 p-3 flex items-stretch">
            <Image className="w-full object-cover" src={'/images/mock-livros-e-tablet-new.png'} width={400} height={400} quality={100} alt="E-book Mockup"/>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-5 p-3 text-white">
            <h2 className="font-medium text-2xl">Preencha seus dados para receber o E-Book gratuito:</h2>
            <form className="flex flex-col space-y-7">
              <div className="flex flex-col">
                <Label className="text-lg" htmlFor="name">Nome:</Label>
                <Input required className="box-inner-shadow text-black h-12 text-base" id="name" name="name" placeholder="Digite seu nome"/>
              </div>
              <div className="flex flex-col mb-5">
                <Label className="text-lg" htmlFor="email">Email:</Label>
                <Input 
                  type="email" 
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                  required 
                  className="box-inner-shadow text-black h-12 text-base" id="email" name="email" placeholder="email@dominio.com"/>
              </div>
              <button className="btn font-extrabold rounded-md uppercase tracking-wider" type="submit">Receber E-book</button>
            </form>
          </div>
        </div>
      </section>
      <section className="flex justify-between p-3 w-full">
        <div className="container flex flex-col space-y-6 items-stretch text-lg">
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
      <section className="flex justify-between p-3 w-full gray-section">
        <div className="container flex items-stretch">
          <div className="flex-1 p-3 flex items-stretch">
            <Image className="w-full object-cover" src={'/images/mock-celulares-new.png'} width={400} height={400} quality={100} alt="E-book Mockup"/>
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-5 p-3 text-white">
            <h2 className="font-medium text-2xl uppercase text-center">Acesse o conteúdo e saiba mais sobre:</h2>
            <BlockText>Compreender a libido feminina</BlockText>
            <BlockText>Identificar as causas da queda na libido</BlockText>
            <BlockText>Adotar atitudes para melhorar a libido</BlockText>
            <BlockText>Comunicação e intimidade</BlockText>
            <BlockText>Reconhecer quando procurar ajuda</BlockText>
          </div>
        </div>
      </section>
      <section className="flex justify-between p-3 w-full">
        <div className="container flex items-stretch space-x-12">
          <div className="flex flex-1 adaptative hero-img items-stretch">
            <Image className="w-full h-auto object-cover rounded-md" src={'/images/karen-new.png'} layout="fill" quality={100} alt="E-book Mockup"/>
          </div>
          <div className="flex flex-1 adaptative flex-col space-y-8 items-stretch text-lg">
            <div className="text-left">
              <strong className="font-extrabold">Dra Karen Samilla<br/>CRM 90874</strong>
            </div>
            <div className="text-left">
              A Dra. Karen Samilla é médica especialista no tratamento do climatério, menopausa, emagrecimento e longevidade, dedicada a transformar a vida das mulheres com sua expertise médica e acolhimento genuíno.              
            </div>
            <div className="text-left">
              Acredita que o climatério e a menopausa são o inicio dos melhores anos de vida, promovendo uma visão positiva dessa fase.
            </div>
            <div className="text-left">
              Ativa nas redes sociais, Dra. Karen Samilla compartilha informações valiosas e inspira suas seguidoras a adotarem um estilo de vida saudável e equilibrado, ajudando-as a florescerem e redescobrirem sua vitalidade e libido, mesmo durante as transformações hormonais.
            </div>    
            <div className="text-left">
              Siga-a no Instagram para mais dicas e informações sobre saúde feminina, climatério e menopausa.
            </div>              
            <a href="" className="btn block font-extrabold rounded-md uppercase tracking-wider">Marque sua Consulta</a>
          </div>
        </div>
      </section>
    </main>
  );
}
