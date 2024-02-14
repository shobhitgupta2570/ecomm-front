

export default function HowItWorks() {
  return (
    <div>
      <h1 className="text-2xl md:mt-[7px] font-bold">How It Works ?</h1>
      <hr className="bg-[red] w-[50px] h-1 mx-auto my-1"></hr>
      <div className="grid grid-cols-3  md:mx-[15%] gap-2 my-[30px] relative z-1">
        <img className="absolute z-2 w-[90px] ml-[100px] mt-[45px] lg:w-[220px] lg:ml-[250px]" src="images/Vector 1.png"/>
      <div className="bg-[white] shadow-lg">
            <div className=" px-[2%]">
                 <img src="images/icon (1).png" className="mx-auto py-[7%]"/>
                <p className="pd-[4%]">Signup</p>
                <p className="font-light">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                
                
            </div>
            
        </div>
        <img className="absolute z-2 w-[90px] ml-[250px] mt-[30px] lg:w-[220px] lg:ml-[580px]" src="images/Vector 2.png"/>
        <div className="bg-[white] shadow-lg">
            <div className=" px-[2%]">
                 <img src="images/icon.png" className="mx-auto py-[7%]"/>
                <p className="pd-[4%]">Choose Coupon</p>
                <p className="font-light">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                
                
            </div>
            
        </div>
        <div className="bg-[white] shadow-lg">
            <div className=" px-[2%]">
                 <img src="images/icon3.png" className="mx-auto py-[7%]"/>
                <p className="pd-[4%]">Grab Coupon</p>
                <p className="font-light">If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                
                
            </div>
            
        </div>

        

        </div>

        <div className="bg-pink-100 w-[70%] mx-auto my-[5%] grid grid-cols-1 md:grid-cols-2 ">
            <div className="grid grid-row-2">
            <div className="mt-[15%]">
            <h1 className="text-[red] text-3xl font-bold">Want to be a part of our team</h1>
            <p className="font-light">Be a part of best site of discount coupons</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
            <button className=" bg-[white] text-[black] rounded-[10px] md:w-[60%] md:h-[30%] md:ml-[40%] mx-[25%] flex items-center my-2">
                <div>
                <img src="images/image 64.png"/>
                </div>
                <div>
                <p className="font-light"> Download now</p>
                <h1>APP STORE</h1>
                </div>
            </button>
            <button className=" bg-[white] text-[black] rounded-[10px] md:w-[60%] md:h-[30%] md:ml-[10%] mx-[25%] flex items-center my-2 ">
                <div>
                <img src="images/image 66.png"/>
                </div>
                <div>
                <p className="font-light"> Download now</p>
                <h1>Play STORE</h1>
                </div>
            </button>
            </div>
            {/* <div className="p-[20px] grid grid-cols-1 md:grid-cols-2">
                <button className="bg-[white] flex items-center px-[10%] mt-[4%]">
                <div>
                <img src="images/image 64.png"/>
                </div>
                <div>
                <p className="font-light"> Download now</p>
                <h1>APP STORE</h1>
                </div>
            </button>
            <button className="bg-[white] flex items-center px-[10%] mt-[4%]">
                <div>
                <img src="images/image 66.png"/>
                </div>
                <div>
                <p className="font-light"> Download now</p>
                <h1>Play STORE</h1>
                </div>
            </button>
            </div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:mt-[20%] md:ml-[1%] ml-[20%] ">
                <img src="images/Phone.png"/>
                <img src="images/Phone (1).png"/>
            </div>
        </div>
    </div>
  )
}
