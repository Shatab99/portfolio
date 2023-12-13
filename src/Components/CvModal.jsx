

const CvModal = () => {

    // // Function to check if the modal has been shown
    // function hasModalBeenShown() {
    //     return localStorage.getItem('modalShown') === 'true';
    // }

    // // Function to set that the modal has been shown
    // function setModalAsShown() {
    //     localStorage.setItem('modalShown', 'true');
    // }

    // // Get the modal element
    // var modal = document.getElementById('myModal');

    // // Check if the modal has been shown before
    // if (!hasModalBeenShown()) {
    //     // When the user scrolls down 500px from the top of the document, show the modal
    //     window.onscroll = function () {
    //         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    //             modal.style.display = 'block';
    //             // Set that the modal has been shown
    //             setModalAsShown();
    //         }
    //     };

    //     // Close the modal when the close button is clicked
    //     var closeBtn = document.getElementsByClassName('close')[0];
    //     closeBtn.onclick = function () {
    //         modal.style.display = 'none';
    //     };
    // }

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </div>
    );
};

export default CvModal;