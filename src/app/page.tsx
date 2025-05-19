"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-10 ">
      <h1 className="text-3xl px-5 pt-3 text-center">
        Transforme suas <span className="text-blue-700">ideias em realidade:</span> crie Aplicativos.
      </h1>
      <h2 className="text-2xl px-5 pt-2 pb-2 text-center">
        IA inovadores <span className="text-blue-700">sem escrever uma única linha</span> de código!
      </h2>
           <Link
            href="https://api.whatsapp.com/send?phone=5562998579084&text=Quero%20fazer%20um%20agendamento%20hoje!"
            className="btn-whatsapp"
            target="_blank"
      >
            <Image src="/whats.webp" alt="Botão Whatsapp" width={30} height={50} className="animate-pulse fixed top-12 right-10 md:right-52"  />
      </Link>

      <video controls preload="none" className="mb-5 block w-[100%] md:w-[70%]">
         <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="pt-BR"
        label="Brasil"
      />
        <source src="/video/apresentacao-restaurante.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Link href="https://pay.kiwify.com.br/2PnZbSq">
        <button className="bg-blue-700 p-3 w-80 mx-auto rounded-lg mb-5 duration-300 animate-pulse">Quero conhecer</button>
      </Link>

      <h2 className="text-3xl p-5 text-center">
        Nossos projetos <span className="text-blue-700">Gravados:</span>
      </h2>

      <h2 className="text-3xl p-5 text-center">
        <span className="text-blue-700 font-semibold">PicBank App:</span>
      </h2>

      <div className="flex flex-col md:flex-row">

         <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-[100%] h-[600]
          flex items-center justify-center
          "
        >
          <Image
            src="/bank-login.jpg"
            alt="Vercel Logo"
            width={300}
            height={300}
            className="flex-1"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-[100%] h-[600]
          flex items-center justify-center
          "
        >
          <Image
            src="/cadastro.png"
            alt="Vercel Logo"
            width={300}
            height={300}
            className="flex-1"
          />
        </motion.div>
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-[100%] h-[600]
          flex items-center justify-center
          "
        >
          <Image
            src="/bank-home.jpg"
            alt="Vercel Logo"
            width={300}
            height={300}
            className="flex-1"
          />
        </motion.div>

       
      </div>


      
      <h2 className="text-3xl p-5 text-center">
        <span className="text-blue-700 font-semibold">Barber App:</span>
      </h2>

      <div className="flex flex-col md:flex-row">

         <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-[100%] h-[600]
          flex items-center justify-center
          "
        >
          <Image
            src="/barber-login.jpg"
            alt="Vercel Logo"
            width={300}
            height={300}
            className="flex-1"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-[100%] h-[600]
          flex items-center justify-center
          "
        >
          <Image
            src="/barber-cadastro.png"
            alt="Vercel Logo"
            width={300}
            height={300}
            className="flex-1"
          />
        </motion.div>
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="w-[100%] h-[600]
          flex items-center justify-center
          "
        >
          <Image
            src="/barber-home.png"
            alt="Vercel Logo"
            width={300}
            height={300}
            className="flex-1"
          />
        </motion.div>

       
      </div>


    </div>
  );
}
