
export default function Technologies() {
    return (
        <>
            <h1>Technologies</h1>
            <hr />
            <h3>Properties</h3>
            <p>(Arrays may contain only one element)</p>
            <p>Technology objects can have the following properties:</p>
            <li><p className="property">id:</p> the general id of the technology <p className="property">(String)</p>;</li>
            <li><p className="property">number_id:</p> the numeric id of the technology <p className="property">(Number)</p>;</li>
            <li><p className="property">name:</p> the name of the technology <p className="property">(String)</p>;</li>
            <li><p className="property">expansion:</p> the expansion in which the technology was first introduced <p className="property">(String)</p>;</li>
            <li><p className="property">civilizatioN:</p> the civilization to which the technology is only available <p className="property">(String)</p>;</li>
            <li><p className="property">type:</p> the technology type <p className="property">(String)</p>;</li>
            <li><p className="property">age:</p> the age in which the technology becomes available <p className="property">(String)</p>;</li>
            <li><p className="property">researched_at:</p> the array of the building where the technology is available to research <p className="property">(Array of Objects)</p>;</li>
            <li><p className="property">cost:</p> the cost of the technology <p className="property">(Object)</p>;</li>
            <li><p className="property">research_time:</p> the research time <p className="property">(Number)</p>;</li>
            <li><p className="property">effect:</p> the array of the effects of the technology <p className="property">(Array of Strings)</p>;</li>
            <li><p className="property">image:</p> the image of the technology <p className="property">(String)</p>.</li>
            <hr />
            <h3>Endpoints</h3>
        </>
    )
}