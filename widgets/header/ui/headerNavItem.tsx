import clsx from 'clsx'
import Link from 'next/link'

export interface IHeaderNavItem {
  title: string
  path: string
  isActive?: boolean
  className?: string
}

export const HeaderNavItem = (props: IHeaderNavItem) => {
  const { title, path, isActive, className } = props

  return (
    <Link
      href={path}
      className={clsx(
        'font-semibold lg:hover:text-cobalt transition-all ease-in-out duration-300',
        { 'lg:text-cobalt sm:max-lg:text-white': isActive, 'lg:text-black': !isActive },
        className
      )}
    >
      {title}
    </Link>
  )
}
