"use client"

import Image from "next/image"
import logoStocks from "@/assets/logo.png"
import { useState } from "react"

export default function Home() {

  const [email, setEmail] = useState<string>("")

  const isEmail = email.includes(".com") && email.includes("@") && email.length > 6

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-sm px-4 lg:px-8 flex flex-col items-center gap-y-8">
        <Image src={logoStocks} alt="Logo do Stocks" width={128} height={128} />
        <h1 className="text-3xl text-white font-bold text-center">
          Solicitar exclusão de conta
        </h1>

        <input value={email} onChange={((e) => setEmail(e.target.value))} type="email" placeholder="Email vínculado à conta Stocks" className="bg-[#252525] h-[50px] px-4 placeholder:text-gray-500 focus:outline-none w-full rounded-md focus:border-[#FFD84E]" />

        <button disabled={!isEmail} className="bg-[#FFD84E] disabled:bg-[#D8B53A] mt-12 w-full hover:bg-opacity-80 transition duration-300 text-[#181818] rounded-md h-[50px] font-semibold">
          <a  href={`mailto:contato.stocksir.app?subject=Ola, gostaria de solicitar a exclusão da conta Stocks para o seguinte endereço e-mail: ${email}`}>
            Solicitar Exclusão
          </a>
        </button>
      </div>
    </div>
  )
}