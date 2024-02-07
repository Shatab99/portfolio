
import { Document, Page } from 'react-pdf';
import cvPDF from '../assets/Cv/resume.pdf'
import { useState } from 'react';


const SeeResume = () => {
    const [numPages, setNumPages]= useState()
    const [pageNumber, setPageNumber]= useState(1)

    const handleSuccess = ({numPages})=>{
        setNumPages(numPages)
    }

    return (
        <div>
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div>
                        <Document
                        file={cvPDF} 
                        onLoadSuccess={handleSuccess}
                        >
                            <Page pageNumber={pageNumber}/>
                        </Document>
                    </div>
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