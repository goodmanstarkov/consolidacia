'use client'

import { Input, Tooltip, notification } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { PhoneInput, phoneMaskedApi } from 'shared/ui/phone-input'
import { EFormValues, TFormValues, validationSchemaFeedbackFormFields } from './data'

interface IFeedback {
  className?: string
}

export const Feedback = (props: IFeedback) => {
  const { className } = props
  const routerSearchParams = useSearchParams()
  const feedbackFormRef = useRef<HTMLDivElement>(null)
  const {
    control,
    handleSubmit: handleSubmitReactHookForm,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: joiResolver(validationSchemaFeedbackFormFields),
  })
  const [isSubmit, setSubmit] = useState(false)
  const [notificationApi, contextHolder] = notification.useNotification()
  const isScrollToFeedback = routerSearchParams.get('scrollTo') === 'feedback'

  const handleSubmit = async (data: TFormValues) => {
    const sendToMailData = {
      ...data,
      [EFormValues.phone]: phoneMaskedApi.resolve(data.phone),
    }
    const formData = new FormData()

    Object.keys(sendToMailData).forEach((fieldKey: keyof TFormValues) => {
      formData.append(fieldKey, sendToMailData[fieldKey])
    })

    const response = await fetch('feedbackSend.php', { method: 'POST', body: formData })

    if (response.ok) {
      setSubmit(true)
      notificationApi.success({
        message: 'Заявка отправлена',
        description: 'Мы обязательно с Вами свяжемся',
        placement: 'bottomRight',
      })
    }
  }

  useEffect(() => {
    if (isScrollToFeedback) {
      const headerHeight = document.querySelector('header').clientHeight

      window.scrollTo({ top: feedbackFormRef.current.offsetTop - headerHeight, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      {contextHolder}
      <div
        ref={feedbackFormRef}
        id='feedback'
        className={clsx('shadow-around-form-block rounded-2xl px-7 py-16', className)}
      >
        <h4 className='text-4xl font-bold text-black mb-9'>Обратная Связь</h4>
        <form onSubmit={handleSubmitReactHookForm(handleSubmit)}>
          <div className='flex mb-5 sm:max-lg:flex-col'>
            <Controller
              name={EFormValues.firstName}
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  status={errors.firstName && 'error'}
                  disabled={isSubmit}
                  type='text'
                  size='large'
                  className={clsx('focus:border-dodgerBlue sm:max-lg:mb-5', {
                    'hover:border-cobalt': !isSubmit,
                  })}
                  placeholder='Имя'
                  maxLength={35}
                  suffix={
                    !isSubmit && (
                      <Tooltip title={errors.firstName?.message || 'Введите Ваше имя'}>
                        <InfoCircleOutlined
                          className={clsx({
                            'text-red': !!errors.firstName?.message,
                            'text-dodgerBlue': !errors.firstName?.message,
                          })}
                        />
                      </Tooltip>
                    )
                  }
                />
              )}
            />
            <Controller
              name={EFormValues.phone}
              control={control}
              render={({ field }) => <PhoneInput {...field} disabled={isSubmit} error={errors.phone?.message} />}
            />
          </div>
          <Controller
            name={EFormValues.email}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                status={errors.email && 'error'}
                disabled={isSubmit}
                type='email'
                size='large'
                className={clsx('focus:border-dodgerBlue mb-5', {
                  'hover:border-cobalt': !isSubmit,
                })}
                placeholder='Email'
                maxLength={254}
                suffix={
                  !isSubmit && (
                    <Tooltip title={errors.email?.message || 'Введите Вашу почту'}>
                      <InfoCircleOutlined
                        className={clsx({
                          'text-red': !!errors.email?.message,
                          'text-dodgerBlue': !errors.email?.message,
                        })}
                      />
                    </Tooltip>
                  )
                }
              />
            )}
          />
          <Controller
            name={EFormValues.message}
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                status={errors.message && 'error'}
                disabled={isSubmit}
                size='large'
                className={clsx('focus:border-dodgerBlue mb-5', {
                  'hover:border-cobalt': !isSubmit,
                })}
                placeholder='Сообщение'
                autoSize={{ minRows: 5 }}
                maxLength={255}
              />
            )}
          />
          <button
            type='submit'
            disabled={isSubmit}
            className={clsx(
              'font-semibold text-base rounded-[50px] py-3 px-8 transition-all ease-in-out duration-300',
              {
                'text-silver': isSubmit,
                'bg-gray': isSubmit,
                'cursor-not-allowed': isSubmit,
                'text-white': !isSubmit,
                'bg-cobalt': !isSubmit,
                'hover:bg-dodgerBlue': !isSubmit,
              }
            )}
          >
            {isSubmit ? 'Отправлено' : 'Отправить'}
          </button>
        </form>
      </div>
    </>
  )
}
