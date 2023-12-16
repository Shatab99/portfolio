

const PrgressBar = () => {
    return (
        <div className="max-w-4xl p-12 mx-auto shadow-2xl mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="flex flex-col-reverse gap-4 items-center justify-between w-full">
                <h1 className="text-xl font-bold ">HTML</h1>
                <div className="radial-progress text-orange-600" style={{ "--value": "60", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">Basic</div>
            </div>
            <div className="flex flex-col-reverse gap-4 items-center justify-between w-full">
                <h1 className="text-xl font-bold ">Tailwind CSS</h1>
                <div className="radial-progress text-orange-600" style={{ "--value": "80", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">Comfortable</div>
            </div>
            <div className="flex flex-col-reverse gap-4 items-center justify-between w-full">
                <h1 className="text-xl font-bold ">Javasript</h1>
                <div className="radial-progress text-orange-600" style={{ "--value": "40", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">Familiar</div>
            </div>
            <div className="flex flex-col-reverse gap-4 items-center justify-between w-full">
                <h1 className="text-xl font-bold ">React</h1>
                <div className="radial-progress text-orange-600" style={{ "--value": "80", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">Comfortable</div>
            </div>
            <div className="flex flex-col-reverse gap-4 items-center justify-between w-full">
                <h1 className="text-xl font-bold ">Express</h1>
                <div className="radial-progress text-orange-600" style={{ "--value": "60", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">Basic</div>
            </div>
            <div className="flex flex-col-reverse gap-4 items-center justify-between w-full">
                <h1 className="text-xl font-bold ">MongoDB</h1>
                <div className="radial-progress text-orange-600" style={{ "--value": "55", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">Basic</div>
            </div>
        </div>
    );
};

export default PrgressBar;