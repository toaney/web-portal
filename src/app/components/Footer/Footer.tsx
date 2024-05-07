const Footer = () => {
  return (
    <footer className="h-11 bg-[#CCCCCC] px-14 flex justify-between items-center">
      <div>
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
      <div className="flex justify-between items-center">
        <div>
          CONTACT
        </div>
        <div className="pl-8">
          HELP
        </div>
      </div>
    </footer>
  )
}

export default Footer;
