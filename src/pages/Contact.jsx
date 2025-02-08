
function Contact() {
  return (
    <>
  <div className=" bg-black text-[20px] md:text-[25px] p-5 pt-0 md:pl-20 mt-0 pb-20 md:pb-32">
            <h2 className="text-4xl md:text-[75px] font-semibold text-gray-400 mb-20 text-center top-0">Contact Me</h2>
            <p className="text-gray-500 mb-1 text-[25px] md:text-[40px]">Feel free to reach out to me via email for inquiries or collaborations:</p>
            <p className="text-gray-500 mb-1 text-[25px] md:text-[40px]">Always open to work together</p>
            <p className="text-gray-500 mb-1 text-[25px] md:text-[40px]">contact me through my mail </p>
            <a href="mailto:mdsaadkhan0712@gmail.com" className="text-blue-500 hover:text-blue-700">@mdsaadkhan0712</a>
            <p className="text-gray-500 mt-4 text-[20px] md:text-[30px]">You can also connect with me on my social media platforms:</p>
            <div className="flex flex-col md:flex-row md:space-x-4 mt-2">
                <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" className="text-blue-600 hover:text-blue-800 flex items-center space-x-2">
                    <i className="fab fa-linkedin-in"></i> <span>LinkedIn</span>
                </a>
                <hr className="hidden md:block" />
                <a href="https://twitter.com/your-twitter" target="_blank" className="text-blue-400 hover:text-blue-600 flex items-center space-x-2">
                    <i className="fab fa-twitter"></i> <span>X</span>
                </a>
                <hr className="hidden md:block" />
                <a href="https://www.instagram.com/saadkhan.712/" target="_blank" className="text-pink-500 hover:text-pink-700 flex items-center space-x-2">
                    <i className="fab fa-instagram"></i> <span>Instagram</span>
                </a>
            </div>
        </div>
    </>
  )
}

export default Contact
