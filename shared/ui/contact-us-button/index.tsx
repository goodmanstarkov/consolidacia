'use client'

import clsx from 'clsx'
import { useRouter } from 'next/navigation'

interface IContactUsButton {
  className?: string
}

export const ContactUsButton = (props: IContactUsButton) => {
  const { className } = props
  const router = useRouter()

  const goToAboutPage = () => {
    router.push('/about')
  }

  return (
    <button
      type='button'
      onClick={goToAboutPage}
      className={clsx(
        'bg-cobalt text-white hover:bg-dodgerBlue font-semibold text-base rounded-[50px] py-3 px-8 transition-all ease-in-out duration-300',
        className
      )}
    >
      Свяжитесь с нами
    </button>
  )
}
