import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ModerationBannedLogProps {
  backgroundImage?: string;
}

export default function ModerationBannedLog({ backgroundImage = '/bg1.jpg' }: ModerationBannedLogProps) {
  return (
    <div 
      className="relative w-[375px] h-[812px]" 
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute w-[353px] h-[509px] left-[11px] top-[141px] bg-white border border-[#FFE9C9] rounded-[5px]">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex flex-row items-start px-4 py-[11px] absolute w-[334px] h-[44px] left-[30px]" style={{top: `${146 + (index - 1) * 52}px`}}>
            <div className="w-[100px] h-[22px] font-['Futura'] font-light text-[17px] leading-[22px] flex items-center tracking-[-0.43px] text-black">
              USERNAME
            </div>
            <Input 
              className="w-[218px] h-[22px] font-['Futura'] font-light text-[17px] leading-[22px] flex items-center tracking-[-0.43px] text-[rgba(60,60,67,0.3)] border-b border-[rgba(84,84,86,0.34)]"
              placeholder="Type Here The Reason for Ban"
            />
          </div>
        ))}
      </div>
      <Button 
        className="absolute w-[289px] h-[31px] left-[42px] top-[714px] bg-[#FFE9C9] rounded-[100px] flex flex-col justify-center items-center"
      >
        <span className="font-['Roboto'] font-medium text-[14px] leading-[20px] flex items-center text-center tracking-[0.1px] text-[#3A2601]">
          Clear Ban List
        </span>
      </Button>
    </div>
  )
}