

export default function header() {
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-8px my-5">
      <img src="images/logo.png" className="pl-3 md:pl-8"/>
      <div className="relative h-[100%]">
        <img src="images/search.png" className="absolute z-[2] mx-auto py-5 pl-2 " ></img>
      <input className= "bg-[#E3E3E3] w-[100%] h-[100%] border[1px solid #E3E3E3] absolute left-0 z-[1]" type="text"  placeholder="       Search For brand, category, coupon"/>
      </div>
      <button className="text-white bg-[#F01C21] w-[60%] mx-auto rounded-[5px] md:pl-2 md:w-[30%]">Login/Sign Up</button>
    </div>
  )
}
