import ExpandablePanel from "./ExpandablePanel";
import {GoTrashcan} from "react-icons/go";

function AlbumsListItem({album}) {
    const header = (
        <div>
            <GoTrashcan/>
            {album.title}
        </div>
    );
    return (
        <ExpandablePanel key={album.id} header={header}>
            List of photos
        </ExpandablePanel>
    );
}

export default AlbumsListItem;