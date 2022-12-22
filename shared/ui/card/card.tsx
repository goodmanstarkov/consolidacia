import clsx from 'clsx'
import { IconType } from 'react-icons'

export interface ICard {
  Icon: IconType
  title: string
  description: string
  className?: string
}

export const Card = (props: ICard) => {
  const { Icon, title, description, className } = props

  return (
    <div className={clsx('shadow-card rounded-xl py-8 px-5 text-center', className)}>
      <div className='bg-cobalt rounded-full inline-block p-5'>
        <Icon className='text-white' size={55} />
      </div>
      <h4 className='mt-5 block font-semibold lg:text-2xl sm:max-lg:text-xl'>{title}</h4>
      <p className='mt-4 text-base font-medium text-mineShaft'>{description}</p>
    </div>
  )
}
