import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
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
      className={clsx(
        'sm:max-lg:absolute sm:max-lg:left-0 sm:max-lg:bg-white sm:max-lg:top-full sm:max-lg:w-full transition-all ease-in-out duration-300 overflow-hidden',
        {
          'sm:max-lg:max-h-[15vh] sm:max-lg:outline-1': isVisibleDropdown,
          'sm:max-lg:max-h-0 sm:max-lg:outline-0': !isVisibleDropdown,
        }
      )}
    >
      <div
        className={clsx('bg-gray transition-all ease-in-out duration-150', {
          'sm:max-lg:h-px': isVisibleDropdown,
          'sm:max-lg:h-0': !isVisibleDropdown,
        })}
      />
      <ul className='lg:-mx-7 lg:flex'>
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
