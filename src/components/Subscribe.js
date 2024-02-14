

export default function Subscribe() {
  return (
    <div className="bg-[grey]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[60%] mx-auto py-[40px]">
        <div className="bg-[white]">
            <img src="images/form-img.png"/>
        </div>
        <div className="bg-[white] " >
            <h1 className="text-3xl font-bold  py-[20px] md:pt-[15%] md:pr-[45%] ">Subscribe to our 
            Newsletter!</h1>
            <p className="md:pt-[7%] md:pr-[40%] font-thin">Be the first to get exclusive offers ands the latest news</p>
            <input type="text" className="w-[80%]  md:mr-[40%] border border-gray-400" placeholder="Enter your email address"/>
            <button className="bg-[red] text-[white] rounded-[5px] my-[10px] p-[5px] md:p-[2%] md:m-[2px] md:mr-[80%] md:w-[25%]">Subscribe</button>
        </div>
      </div>
    </div>
  )
}
