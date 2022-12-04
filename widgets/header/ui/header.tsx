'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Container } from 'shared/ui/container'
import { BiMenu } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import { FiMail } from 'react-icons/fi'
import { BsTelephone } from 'react-icons/bs'
import { Logo } from 'shared/ui/logo'
import { ContactUsButton } from 'shared/ui/contact-us-button'
import { HeaderNav } from './headerNavItems'

export const Header = () => {
  const [isTransformHeaderStyle, setTransformHeaderStyle] = useState(false)
  const [isVisibleDropdown, setVisibleDropdown] = useState(false)
  const topHeaderRef = useRef<HTMLDivElement>(null)

  const transformHeaderStyleAfterScroll = () => {
    const topHeaderHeight = topHeaderRef.current.clientHeight

    if (document.documentElement.scrollTop >= topHeaderHeight) {
      setTransformHeaderStyle(true)
    } else {
      setTransformHeaderStyle(false)
    }
  }

  const handleToggleVisibledDropdown = () => {
    setVisibleDropdown(!isVisibleDropdown)
  }

  const handleScroll = useCallback(() => {
    requestAnimationFrame(transformHeaderStyleAfterScroll)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <div ref={topHeaderRef} className='h-12 bg-cobalt'>
        <Container className='flex justify-between items-center'>
          <Link
            href='mailto:help@consolidacia.ru'
            className='flex items-center text-white hover:opacity-70 active:opacity-70'
          >
            <FiMail size={20} />
            <span className='ml-3 sm:max-md:text-sm text-md'>help@consolidacia.ru</span>
          </Link>
          <Link href='tel:+79773786273' className='flex items-center text-white hover:opacity-70 active:opacity-70'>
            <BsTelephone size={18} />
            <span className='ml-3 sm:max-md:text-sm text-md'>+7 499 964 56 83</span>
          </Link>
        </Container>
      </div>
      <div
        className={clsx('h-20', {
          hidden: !isTransformHeaderStyle,
        })}
      />
      <header
        className={clsx('bg-white z-10 w-full h-20 transition-all ease-in-out duration-150', {
          'shadow-sm-bottom': isTransformHeaderStyle,
          fixed: isTransformHeaderStyle,
        })}
      >
        <div className='relative h-full'>
          <Container>
            <div className='flex justify-between items-center h-full'>
              <Link href='/' className='justify-self-center'>
                <Logo className='text-secondary' />
              </Link>
              <HeaderNav isVisibleDropdown={isVisibleDropdown} setVisibleDropdown={setVisibleDropdown} />
              <button
                type='button'
                className='lg:hidden bg-cobalt p-1.5 rounded-[3px]'
                onClick={handleToggleVisibledDropdown}
              >
                {isVisibleDropdown ? (
                  <IoClose className='text-white' size={23} />
                ) : (
                  <BiMenu className='text-white' size={23} />
                )}
              </button>
              <ContactUsButton className='sm:max-lg:hidden' />
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}
