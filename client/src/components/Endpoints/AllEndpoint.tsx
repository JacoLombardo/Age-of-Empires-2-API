
type Props = {
    category: string,
    categories: string,
}

export default function AllEndpoint({ category, categories }: Props) {
    return (
        <>
            <h2 className="endpointH">/api/all</h2>
            <p>The "/all" endpoint allows you to fetch the complete list of {categories}.</p>
            <code>age-of-empires-2-api.vercel.app/api/{categories}/all</code>

        </>
    )
}