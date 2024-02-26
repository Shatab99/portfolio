import fixedBg from '../assets/images/fixed-bg.png'


const FixedBg = () => {
    return (
        <div className='absolute z-[-999] '>
            <img src={fixedBg} alt=""  className='min-h-screen w-full fixed'/>
        </div>
    );
};

export default FixedBg;