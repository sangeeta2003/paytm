import { BrowserRouter,Route,Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import SignUp from "./Pages/SignUp"
import Signin from "./Pages/Signin"
import SendMoney from "./Pages/SendMoney"




function App() {
  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path="signup" element={<SignUp/>}/>
  <Route path="signin" element={<Signin/>}/>
  <Route path="dashboard" element={<Dashboard/>}/>
  <Route path="sendmoney" element={<SendMoney/>}/>
  

</Routes>



    </BrowserRouter>
    </>
  )
}

export default App