import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Ban } from "lucide-react"

export default function ModerationTools() {
  const [captchaTime, setCaptchaTime] = useState([165])
  const [stickerLimit, setStickerLimit] = useState([252])
  const [imageTimeout, setImageTimeout] = useState([529])
  const [allowExternalMedia, setAllowExternalMedia] = useState(true)

  return (
    <div className="relative w-[375px] h-[812px] bg-gray-100 font-inter text-[#1E1E1E] p-4">
      <h2 className="text-2xl font-bold mb-6">Moderation Tools</h2>
      
      <div className="mb-6 bg-white border border-[#FFE9C9] rounded-[5px] p-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <span className="text-base">Captcha Resolution Time</span>
            <span className="text-sm">{captchaTime[0]}</span>
          </div>
          <Slider
            min={30}
            max={300}
            step={1}
            value={captchaTime}
            onValueChange={setCaptchaTime}
          />
          <p className="text-base text-[#757575]">Set the time in seconds for the Captcha to Join Group</p>
        </div>
      </div>

      <div className="mb-6 bg-white border border-[#FFE9C9] rounded-[5px] p-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <span className="text-base">Sticker Spam Limiter</span>
            <span className="text-sm">{stickerLimit[0]}</span>
          </div>
          <Slider
            min={5}
            max={500}
            step={1}
            value={stickerLimit}
            onValueChange={setStickerLimit}
          />
          <p className="text-base text-[#757575]">Set the amount of stickers sent to trigger warning for spam</p>
        </div>
      </div>
      
      <div className="mb-6 bg-white border border-[#FFE9C9] rounded-[5px] p-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <span className="text-base">Timeout on Images</span>
            <span className="text-sm">{imageTimeout[0]}</span>
          </div>
          <Slider
            min={60}
            max={999}
            step={1}
            value={imageTimeout}
            onValueChange={setImageTimeout}
          />
          <p className="text-base text-[#757575]">Set the time in minutes without sending any images when someone joins group</p>
        </div>
      </div>

      <div className="mb-6 bg-white rounded-[5px] flex items-center justify-between p-4">
        <span className="font-futura text-[17px]">Allow External Media (Videos or Documents)</span>
        <Switch
          checked={allowExternalMedia}
          onCheckedChange={setAllowExternalMedia}
        />
      </div>

      <Button 
        variant="default" 
        className="w-full mb-6 bg-[#5E410D] text-[#F5F5F5] rounded-[8px] flex items-center justify-center gap-2"
      >
        <Ban className="w-4 h-4" />
        Banned User's Log
      </Button>

      <Button 
        variant="outline" 
        className="w-full bg-[#FFE9C9] text-[#3A2601] rounded-[100px] text-sm font-medium"
      >
        Reset Current Settings to Default
      </Button>
    </div>
  )
}