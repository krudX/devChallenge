import Link from "next/link";

const ProductCard = ({id, name, image, price, rating, votes, popular, available}) => {

  return (
    <div className="product-card text-left">
        <Link href="#" >
            <div className="product-image relative">
                <img src={image} alt={name} className="product-image w-full h-auto rounded-xl" />
                {
                    popular ? 
                    <div className="label text-dark-gray font-bold text-price rounded-full py-1 px-3 bg-accent-yellow inline-block absolute top-3 left-3">Popular</div>
                        : null
                }
            </div>
            <div className="product-head flex items-center justify-between mt-4">
                <h3 className="product-title">{name}</h3>
                <p className="product-price py-1 px-2 bg-accent-mint text-price text-dark-gray font-bold rounded">{price}</p>
            </div>
            <div className="product-body flex items-center justify-between mt-2">
                {
                    rating ? 
                    <div className="product-rating flex items-center gap-1 font-bold text-label">
                        <img src="/Star_fill.svg" alt={rating} />
                        <p className="rating">{rating}</p>
                        <p className="votes text-light-gray ">({votes} votes)</p>
                    </div>
                        : <div className="product-rating flex items-center gap-1 font-bold text-label">
                            <img src="/star.svg" alt={rating} />
                            {/* <p className="rating">{rating}</p> */}
                            <p className="votes text-light-gray">(No ratings)</p>
                        </div>
                }
                {
                    available ? null
                        : <div className="availability text-accent-orange">Sold Out</div>
                }
            </div>
        </Link>
    </div>
  )
}

export default ProductCard