import Items from './features/items/Items'
import Cart from './features/cart/Cart'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='font-rht bg-rose-50 grid md:grid-cols-12 min-h-screen p-10 gap-4 xl:gap-16' >
    {children}
  </div>
}
function App() {
  return (
    <Layout>
      <div className=" md:col-span-8">
        <h1 className='font-bold text-xl mb-4'>Deserts</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-6 min-h-[400px]'>
          <Items />
        </div>
      </div>
      <div className='md:col-span-4' >
        <Cart />
      </div>
    </Layout>
  )
}

export default App
