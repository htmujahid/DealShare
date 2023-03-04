function BillSummaryCard({ product }) {
  return (
    <div className="flex gap-x-3">
      <div>
        <div className="w-[100px] max-h-[67px] bg-gray-100 rounded-xl mb-4">
          <img
            src={product?.media.mediaURL[0]}
            className="w-full"
            alt={product?.name}
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="font-bold">{product?.name}</p>
        <div className="text-sm text-gray-500 grid grid-cols-2 gap-1">
          <p className="w-20">Type</p>
          <p className="w-20">{product?.category}</p>
          <p className="w-20">Quantity</p>
          <p className="w-20">{product?.quantity ?? 1}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex-1">
          <h4 className="text-2xl text-primary-dark font-bold">
            {product?.price} USD
          </h4>
          <p className="text-xs text-gray-500 line-through">
            {parseFloat(product?.price) + 50} USD
          </p>
        </div>
      </div>
    </div>
  );
}

export default BillSummaryCard;
