
type Props = {
    category: string,
}

export default function AllEndpoint({ category }: Props) {
    return (
        <>
            <h3>"/all" endpoint</h3>
            <p>The "/all" endpoint allows you to fetch the complete list of {category}.</p>
            <code>age-of-empires-2-api.vercel.app/api/{category}/all</code>

        </>
    )
}