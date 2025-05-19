"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl p-5 text-center">
        Transforme suas <span className="text-blue-700">ideias em realidade:</span> crie Aplicativos.
      </h1>
      <h2 className="text-2xl p-8 md:-5 text-center">
        IA inovadores <span className="text-blue-700">sem escrever uma única linha</span> de código!
      </h2>

      <video width="80%" height="340" controls preload="none" className="mb-5 block">
         <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="pt-BR"
        label="Brasil"
      />
        <source src="/video/apresentacao-restaurante.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button className="bg-blue-700 p-3 w-80 mx-auto rounded-lg mb-5 md:hover:w-[40%] md:hover:p-5 duration-300 animate-pulse">Quero conhecer</button>

      <h2 className="text-3xl p-5 text-center">
        Nosso projetos <span className="text-blue-700">Gravados:</span>
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
            src="/barber-home.jpg"
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
