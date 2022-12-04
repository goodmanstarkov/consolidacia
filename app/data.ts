import { ICard } from 'shared/ui/cards'
import { MdSupportAgent } from 'react-icons/md'
import { GiReceiveMoney, GiNetworkBars } from 'react-icons/gi'

export const benefitsData: ICard[] = [
  {
    Icon: MdSupportAgent,
    title: 'Оперативная Поддержка',
    description:
      'Вы можете обращаться по любым вопросам в рабочее время на нашу почту или по телефону, наши бухгалтеры своевременно ответят на все ваши вопросы',
  },
  {
    Icon: GiNetworkBars,
    title: 'Качественная Работа',
    description: 'Благодаря многолетнему опыту наших бухгалтеров, вы можете быть уверены в отличном результате',
  },
  {
    Icon: GiReceiveMoney,
    title: 'Доступные Цены',
    description: 'Мы предлагаем свои услуги по приемлемому ценнику, который не ударит по бюджету компании',
  },
]

export const additionalBenefitsData: string[] = [
  'Высокие стандарты качества',
  'Оперативная бухгалтерская поддержка',
  'Широкий спектр услуг',
  'Работа исключительно в соответствии с законодательством РФ',
  'Доступные цены',
]
