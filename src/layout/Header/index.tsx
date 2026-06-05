import logo from '../../assets/images/header/01_LOGO.png'
const Header = () => {
  return (
    <div className="bg-primary h-[45px] w-screen flex items-center"> 
      <img src={logo} alt="logo" className='h-6 ml-1.5' />
    </div>
  )
}

export default Header