import { SearchOutlined,HomeOutlined,ShoppingCartOutlined ,DiffOutlined ,LoginOutlined, UsergroupAddOutlined,RiseOutlined} from '@ant-design/icons';
import { Badge, Input } from 'antd';
export const Header = () => {
  return (
<div className="border-b mb-6 ">

  <header className="py-4 px-6 flex justify-between items-center gap-10">
    <div className="logo">
      <a href="/">
        <h2 className="text-2xl font-bold md:text-4xl" >LOGO</h2>
      </a>
    </div>
    <div className="header-seaech flex-1 flex justify-center"  ><Input size="large" 
    placeholder="Ara..." 
    prefix={<SearchOutlined /> } className='rounded-full max-w-[800px]'/></div>
    <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent
     bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1" >
     <a href={"/"} className="menu-link flex flex-col transition-all hover:text-blue-500">
      <HomeOutlined  className=' md:text-2xl text-xl '/>
      <span className='md:text-xs text-[10px]'>Ana Sayfa</span>
      </a>
     <Badge count={5} offset={[0,6]} className="md:flex hidden" >
     <a href={"/"} className="menu-link flex flex-col transition-all hover:text-blue-500 ">
      <ShoppingCartOutlined  className=' md:text-2xl text-xl '/>
      <span className='md:text-xs text-[10px]'>Sepet</span>
      </a>
     </Badge >
      <a href={"/"} className="menu-link flex flex-col  transition-all hover:text-blue-500">
      <DiffOutlined   className=' md:text-2xl text-xl '/>
      <span className='md:text-xs text-[10px]'>Faturalar</span>
      </a>
      <a href={"/"} className="menu-link flex flex-col transition-all hover:text-blue-500">
  <RiseOutlined  className='md:text-2xl text-xl' />
  <span className='md:text-xs text-[10px]'>İstatistikler</span>
</a>

      <a href={"/"} className="menu-link flex flex-col transition-all hover:text-blue-500">
      <UsergroupAddOutlined   className=' md:text-2xl text-xl '/>
      <span className='md:text-xs text-[10px]'>Müşteriler</span>
      </a>
      <a href={"/"} className="menu-link flex flex-col transition-all hover:text-blue-500">
      <LoginOutlined   className=' md:text-2xl text-xl '/>
      <span className='md:text-xs text-[10px]'>Çıkış</span>
      </a>
      </div>
  </header>
</div>

  )
}
