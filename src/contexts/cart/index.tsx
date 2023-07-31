import { StaticImageData } from 'next/image'
import mariokart from '../../../public/images-test/mariokart.jpeg'
import zeldabreath from '../../../public/images-test/zeldabreath.jpeg'
import zeldatotk from '../../../public/images-test/zeldatotk.jpg'

export const cartData: CartData = [
  {
    product: 'Mario Kart 8 Deluxe',
    image: mariokart,
    price: 50,
    quantity: 2,
  },
  {
    product: 'The Legend Of Zelda Breath of the wild',
    image: zeldabreath,
    price: 100,
    quantity: 1,
  },
  {
    product: 'The Legend of Zelda Tears of the Kingdom',
    image: zeldatotk,
    price: 150,
    quantity: 1,
  },
]

type CartData = {
  product: string
  image: StaticImageData
  price: number
  quantity: number
}[]
