import React, { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

export default function PostPublicationSettings() {
  const [sendContent, setSendContent] = useState(true)
  const [receiveContent, setReceiveContent] = useState(false)
  const [postLimit, setPostLimit] = useState(250)

  return (
    <div className="w-full max-w-[375px] mx-auto p-4 font-sans">
      <h2 className="text-2xl font-bold mb-6">Posts Publications</h2>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-base">
            Allow to send content from this group to others
          </span>
          <Switch
            checked={sendContent}
            onCheckedChange={setSendContent}
            className="bg-[#FFE9C9]"
          />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-base">
            Allow to receive content from other groups
          </span>
          <Switch
            checked={receiveContent}
            onCheckedChange={setReceiveContent}
            className="bg-[#FFE9C9]"
          />
        </div>
      </div>

      <div className="bg-white border border-[#FFE9C9] rounded-md p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-base font-medium text-[#1E1E1E]">
            Post Quantity Limiter
          </span>
          <span className="text-sm text-[#1E1E1E]">
            {postLimit}
          </span>
        </div>
        <Slider
          min={5}
          max={500}
          step={1}
          value={[postLimit]}
          onValueChange={(value) => setPostLimit(value[0])}
          className="w-full"
        />
        <p className="text-sm text-[#757575] mt-2">
          Set the amount of posts sent by Cookiebot daily to your group
        </p>
      </div>

      <Button
        variant="outline"
        className="w-full bg-[#FFE9C9] text-[#3A2601] rounded-full"
      >
        Reset Current Settings to Default
      </Button>
    </div>
  )
}