import Items from "./features/items/Items";
import Cart from "./features/cart/Cart";
import { ReactNode, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-rose-50">
      <div className="font-rht grid md:grid-cols-12 min-h-screen px-4 sm:px-6 md:px-10 pb-10 max-w-[1440px] mx-auto gap-4 xl:gap-16">
        {children}
      </div>
    </div>
  );
};

const Header = ({ children }: { children: ReactNode }) => {
  return <div className="h-20  px-4 sm:px-6 md:px-10 shadow-sm z-10 bg-white w-full left-0 fixed top-0 flex items-center justify-between">
    {children}
  </div>
}
function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart)

  const cartItemsCount = cartItems.reduce((acc, cartItem) => {
    acc += cartItem.quantity
    return acc
  }, 0)

  return (
    <Layout>
      <div className=" md:col-span-12">
        <Header>
          <h1 className="font-bold text-xl">Deserts</h1>
          <div onClick={() => setCartOpen(true)} className="relative hover:cursor-pointer">
            {
              cartItemsCount !== 0
                ? <span className="absolute bg-green text-white flex items-center justify-center text-sm font-1 rounded-full h-4 w-4">{cartItemsCount}</span>
                : null
            }
            <IoCartOutline fontSize="34px" className="text-rose-800" />
          </div>
        </Header>
        <div className="grid mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 xl:gap-6 min-h-[400px]">
          <Items />
        </div>
      </div>
      <div className={`fixed h-[100%] z-20 top-0 transition-all bg-white w-[40%] shadow-sm p-4 ${cartOpen ? "right-[0]" : "-right-[40%]"}`}>
        <Cart setCartOpen={setCartOpen} />
      </div>
    </Layout>
  );
}

export default App;
