import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    return (
        <div className=" bottom-4 right-5 fixed">
           <button onClick={()=>{
            scroll({
                top : 0 ,
                behavior: 'smooth'
            })
           }} className="flex items-center gap-1 transition-all duration-700 hover:gap-4 text-orange-600 hover:bg-orange-600 hover:border-orange-600 btn btn-sm btn-outline"><FaArrowUp /> <span className="">Back to top</span></button> 
        </div>
    );
};

export default BackToTop;