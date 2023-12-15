
import cvPic from '../assets/Cv/cv-pic.jpg'


const SeeResume = () => {

    return (
        <div>
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <img src={cvPic} alt="" />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn btn-outline">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SeeResume;