
type Props = {
    category: string,
    categories: string,
}

export default function ByIdEndpoint({ category, categories }: Props) {

    let example: string = "";
    if (category === "civilization") {
        example = "aztecs";
    } if (category === "unit") {
        example = "archer"
    } if (category === "technology") {
        example = "counterweights"
    } else if (category === "building") {
        example = "dock"
    };

    return (
        <>
            <h2 className="endpointH">/api/byid</h2>
            <p>The "/byid" endpoint allows you to fetch a specific {category} by ID.</p>
            <code>age-of-empires-2-api.vercel.app/api/{categories}/byid</code>
            <p>You will be able to select which ID with the query param "id" like follow:</p>
            <code>age-of-empires-2-api.vercel.app/api/{categories}/byid?id={example}</code>
        </>
    )
}