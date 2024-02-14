
export default function Menu() {
  return (
    <div className="bg-[black] py-3 text-[white] gap-8px">
       
      <div className="grid grid-cols-5 md:px-[20%] gap-2 pr-2">
        <button className="text-[#ff0000] underline decoration-red-700 underline-offset-[14px]">Home</button>
        <button>Deals</button>
        <button>Coupon</button>
        <button>Stores</button>
        <button>Contact us</button>
      </div>
      
    </div>
  )
}
