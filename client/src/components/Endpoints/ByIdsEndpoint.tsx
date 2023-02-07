
type Props = {
    category: string,
    categories: string,
}

export default function ByIdsEndpoint({ category, categories }: Props) {

    let example1: string = "";
    let example2: string = "";

    if (category === "civilization") {
        example1 = "aztecs";
        example2 = "mongols";
    } if (category === "unit") {
        example1 = "archer"
        example2 = "onager";
    } if (category === "technology") {
        example1 = "counterweights"
        example2 = "town_watch";
    } else if (category === "building") {
        example1 = "dock"
        example2 = "farm";
    };

    return (
        <>
            <h2 className="endpointH">/api/byids</h2>
            <p>The "/byids" endpoint allows you to fetch multiple {categories} by ID.</p>
            <code>age-of-empires-2-api.vercel.app/api/{categories}/byids</code>
            <p>You will be able to select which IDs with the query param "id" like follow:</p>
            <code>age-of-empires-2-api.vercel.app/api/{categories}/byids?id={example1}&id={example2}</code>
        </>
    )
}