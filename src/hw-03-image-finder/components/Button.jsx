export const LoadButton = ({LoadMoreFunc}) => {
    return (
    <button
        onClick={()=>LoadMoreFunc()}
    >
        Load more
    </button>
)}