'use client'

/* eslint-disable react/display-name */
import { InfoCircleOutlined } from '@ant-design/icons'
import { Input, Tooltip } from 'antd'
import clsx from 'clsx'
import React, { forwardRef, useState } from 'react'
import { RefCallBack, ControllerRenderProps } from 'react-hook-form'
import IMask from 'imask'

interface IPhoneInput extends ControllerRenderProps {
  disabled?: boolean
  error?: string
}

export const phoneMaskedApi = IMask.createMask({
  mask: '+7 (000) 000-00-00',
})

export const PhoneInput = forwardRef((props: IPhoneInput, ref: RefCallBack) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneMasked = phoneMaskedApi.resolve(e.target.value)

    setValue(phoneMasked)
    props.onChange({
      ...e,
      target: {
        ...e.target,
        value: phoneMaskedApi.unmaskedValue,
      },
    })
  }

  return (
    <Input
      {...props}
      value={value}
      type='tel'
      size='large'
      className={clsx('focus:border-dodgerBlue lg:ml-5', {
        'hover:border-cobalt': !props.disabled,
      })}
      disabled={props.disabled}
      status={props.error && 'error'}
      placeholder='Телефон'
      ref={ref}
      suffix={
        !props.disabled && (
          <Tooltip title={props.error || 'Введите Ваш мобильный номер телефона'}>
            <InfoCircleOutlined
              className={clsx({
                'text-red': !!props.error,
                'text-dodgerBlue': !props.error,
              })}
            />
          </Tooltip>
        )
      }
      onChange={handleChange}
    />
  )
})
