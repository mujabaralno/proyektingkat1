import React from 'react'
import { Button } from '../ui/button'
import { ArrowBigLeftDashIcon } from 'lucide-react'
import { Textarea } from '../ui/textarea'

const FormTextarea = () => {
  return (
    <div className="w-full border-2 p-12 rounded-3xl shadow-lg shadow-black/10">
      <form className="flex justify-center items-center gap-5">
        <Textarea  className="textarea" placeholder='Write something'/>
        <Button className="buttonPrimary py-7" size="lg">
          <ArrowBigLeftDashIcon />
        </Button>
      </form>
    </div>
  )
}

export default FormTextarea
