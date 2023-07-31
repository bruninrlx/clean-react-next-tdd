import { cartData } from '@/contexts/cart'
import formatReal from '@/utils/formatCurrency'
import Image from 'next/image'
import React from 'react'

export default function CartTable() {
  return (
    <table className="table-auto w-full mx-auto bg-white font-sans text-sm max-w-screen-md">
      <thead>
        <tr>
          <th className="px-4 py-2 text-center text-gray-600 border-t border-b">Produto</th>
          <th className="px-4 py-2 text-center text-gray-600 border-t border-b">Preço</th>
          <th className="px-4 py-2 text-center text-gray-600 border-t border-b">Quantidade</th>
          <th className="px-4 py-2 text-center text-gray-600 border-t border-b">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((item, index) => (
          <tr key={index} className={'bg-white'}>
            <td className="flex items-center px-4 py-2 text-center text-gray-600 border-t border-b">
              <div
                style={{
                  width: '130px',
                  height: '80px',
                  position: 'relative',
                  marginRight: '15px',
                }}
              >
                <Image src={item.image} alt="" layout="fill" />
              </div>

              {item.product}
            </td>
            <td className="px-4 py-2 text-center text-gray-600 border-t border-b">{formatReal(item.price)}</td>
            <td className="px-4 py-2 text-center border-t border-b">
              <div className="inline-block px-5 py-1 border border-gray-200 bg-white text-gray-600 rounded">
                {item.quantity}
              </div>
            </td>
            <td className="px-4 py-2 text-center text-gray-600 border-t border-b">
              {formatReal(item.price * item.quantity)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
