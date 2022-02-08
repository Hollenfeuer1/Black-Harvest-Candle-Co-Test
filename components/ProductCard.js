import Link from 'next/link'
import Image from 'next/image'
import { formatter } from '../utils/helpers'

const ProductCard = ({ product }) => {
  const { handle, title } = product.node

  const { altText, originalSrc } = product.node.images.edges[0].node

  const price = product.node.priceRange.minVariantPrice.amount

  return (
    <Link
      href={`/products/${handle}`}
    >
      <a className="group">
      <img src='/p_border_top.png' className='mb-2'/>
        <div className="w-full bg-black rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image 
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <img src='/p_border_top.png' className='my-2'/>
        <h3 className="text-xl text-center font-bold">{title}</h3>
        <img src='/p_border_bottom.png' className='my-2'/>
        <p className="mt-1 text-lg">{formatter.format(price)}</p>
      </a>
    </Link>
  )
}

export default ProductCard