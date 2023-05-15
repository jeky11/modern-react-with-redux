import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p> Here is and important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi faucibus venenatis enim, non luctus neque
                ullamcorper quis. Suspendisse vitae mollis felis. Praesent quis risus eu justo fringilla suscipit. Proin
                sit amet est iaculis, commodo nisl eu, feugiat magna. Nullam maximus urna sed efficitur condimentum.
                Vestibulum sit amet feugiat diam, ac dignissim dui. Pellentesque placerat auctor nulla, sed vulputate
                metus elementum et. Proin posuere, sapien vel venenatis consequat, tellus nisl vulputate metus, ac
                vehicula neque tortor eu libero.</p>
        </div>
    );
}

export default ModalPage;