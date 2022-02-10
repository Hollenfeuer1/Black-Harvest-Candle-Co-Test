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
      <a className="group shadow-lg rounded-md">
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
        <h3 className="text-2xl text-center font-bold">{title}</h3>
        <p className="mt-1 text-lg text-white text-center mb-2">{formatter.format(price)}</p>
      </a>
    </Link>
  )
}

export default ProductCard