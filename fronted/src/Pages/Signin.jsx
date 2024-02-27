import Inputbox from "../components/Inputbox"
import { Button } from "../components/Button"
function Signin() {
  return (
    <div className="bg-slate-300 flex justify-center h-screen ">
        <div className="flex flex-col justify-center pb-3">
<div className="bg-white text-center rounded-lg w-80 p-2 h-max px-4">
<h1 className="text-4xl font-bold   pb-2">Sign In</h1>
<h3 className=" text-slate-500 text-md pt-1 px-4 pb-4">Enter your credentials to access your account </h3>


<Inputbox placeholder="sangeeta@gmail.com" label={"Email"} />
        <Inputbox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
</div>
        </div>
    </div>
  )
}

export default Signin