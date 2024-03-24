import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center" >
      {/* Left Side */}
      <div className="text-3xl w-1/2 px-10 mb-20">
        <Image src={"/pictures/facebook.svg"} alt="Facebook Logo" height={100} width={300} />
        <p className="ml-8 -mt-3">Facebook helps you connect and share with the people in your life.</p>
      </div>

      {/* Right Side */}
      <div className="bg-white flex flex-col rounded-xl p-5 w-1/3 shadow-md">
        <input className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline outline-blue-600 shadow-md" type="text" placeholder="Email address or phone number" />
        <input className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline outline-blue-600 shadow-md" type="password" placeholder="Password" />
        <button className="bg-blue-600 py-2 my-2 font-bold text-white rounded-md hover:bg-blue-700">Log in</button>
        <p className="text-blue-600 cursor-pointer text-sm hover:underline my-2 text-center">Forgotten password?</p>
        <span className="my-2">
          <hr />
        </span>
        <button className="bg-green-500 py-2 my-2 font-bold text-white rounded-md hover:bg-green-600 w-fit px-2 m-auto">Create new account</button>
      </div>
    </div>
  )
}