import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'

interface IContactUsButton {
  className?: string
}

export const ContactUsButton = (props: IContactUsButton) => {
  const { className } = props
  const router = useRouter()
  const pathName = usePathname()

  const handleGoToAboutPage = () => {
    if (!pathName.includes('about')) {
      router.push('/about?scrollTo=feedback')
    } else {
      const headerHeight = document.querySelector('header')?.clientHeight
      const feedbackOffsetTop = document.querySelector('#feedback')?.getBoundingClientRect().top
      const windowPageYOffset = window.pageYOffset

      if (feedbackOffsetTop && headerHeight) {
        window.scrollTo({ top: feedbackOffsetTop + windowPageYOffset - headerHeight, behavior: 'smooth' })
      }
    }
  }

  return (
    <button
      type='button'
      onClick={handleGoToAboutPage}
      className={clsx(
        'bg-cobalt text-white hover:bg-dodgerBlue font-semibold text-base rounded-[50px] py-3 px-8 transition-all ease-in-out duration-150',
        className
      )}
    >
      Свяжитесь с нами
    </button>
  )
}
