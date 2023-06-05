import ExpandablePanel from "./ExpandablePanel";
import {GoTrashcan} from "react-icons/go";
import {useRemoveAlbumMutation} from "../store";
import Button from "./Button";

function AlbumsListItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation(album);

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }

    const header = <>
        <Button loading={results.isLoading} onClick={handleRemoveAlbum} className="mr-2">
            <GoTrashcan/>
        </Button>
        {album.title}
    </>;

    return (
        <ExpandablePanel key={album.id} header={header}>
            List of photos
        </ExpandablePanel>
    );
}

export default AlbumsListItem;