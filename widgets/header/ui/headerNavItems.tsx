'use client'

import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { Container } from 'shared/ui/container'
import { headerNavItemsData } from '../data'
import { HeaderNavItem } from './headerNavItem'

interface IHeaderNav {
  isVisibleDropdown: boolean
  setVisibleDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderNav = (props: IHeaderNav) => {
  const { isVisibleDropdown, setVisibleDropdown } = props
  const pathname = usePathname()
  const router = useRouter()
  const ulNavRef = useRef<HTMLUListElement>(null)
  const navRef = useRef<HTMLElement>(null)

  const handleNavigate = (path: string) => () => {
    router.push(path)
  }

  const handleCloseMenu = useCallback(() => {
    if (isVisibleDropdown) {
      setVisibleDropdown(false)
    }
  }, [isVisibleDropdown])

  useEffect(() => {
    document.addEventListener('click', handleCloseMenu)
    return () => document.removeEventListener('click', handleCloseMenu)
  }, [handleCloseMenu])

  return (
    <nav
      ref={navRef}
      className={clsx(
        'sm:max-lg:absolute sm:max-lg:left-0 sm:max-lg:bg-white sm:max-lg:top-full sm:max-lg:w-full transition-all ease-in-out duration-300 overflow-hidden',
        {
          'sm:max-lg:opacity-100 sm:max-lg:shadow-sm-bottom': isVisibleDropdown,
          'sm:max-lg:opacity-0': !isVisibleDropdown,
        }
      )}
    >
      <ul ref={ulNavRef} className='lg:-mx-7 lg:flex'>
        {headerNavItemsData.map((item, idx) => (
          <li
            className={clsx(
              'lg:px-7 sm:max-lg:py-3 sm:max-lg:active:bg-cobalt sm:max-lg:hover:cursor-pointer sm:max-lg:child-link-active:text-white',
              {
                'sm:max-lg:bg-cobalt': pathname === item.path,
              }
            )}
            onClick={handleNavigate(item.path)}
            key={idx}
          >
            <Container>
              <HeaderNavItem isActive={pathname === item.path} {...item} />
            </Container>
          </li>
        ))}
      </ul>
    </nav>
  )
}
