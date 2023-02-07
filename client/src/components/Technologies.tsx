import AllEndpoint from "./Endpoints/AllEndpoint";
import ByIdEndpoint from "./Endpoints/ByIdEndpoint";
import ByIdsEndpoint from "./Endpoints/ByIdsEndpoint";

export default function Technologies() {
    return (
        <>
            <h1>Technologies</h1>
            <hr />
            <h3>Properties</h3>
            <p>Technology objects can have the following properties:</p>
            <p className="notes">(Arrays may contain only one element)</p>
            <li><p>id:</p> the general id of the technology <p>(String)</p>;</li>
            <li><p>number_id:</p> the numeric id of the technology <p>(Number)</p>;</li>
            <li><p>name:</p> the name of the technology <p>(String)</p>;</li>
            <li><p>expansion:</p> the expansion in which the technology was first introduced <p>(String)</p>;</li>
            <li><p>civilizatioN:</p> the civilization to which the technology is only available <p>(String)</p>;</li>
            <li><p>type:</p> the technology type <p>(String)</p>;</li>
            <li><p>age:</p> the age in which the technology becomes available <p>(String)</p>;</li>
            <li><p>researched_at:</p> the array of the building where the technology is available to research <p>(Array of Objects)</p>;</li>
            <li><p>cost:</p> the cost of the technology <p>(Object)</p>;</li>
            <li><p>research_time:</p> the research time <p>(Number)</p>;</li>
            <li><p>effect:</p> the array of the effects of the technology <p>(Array of Strings)</p>;</li>
            <li><p>image:</p> the image of the technology <p>(String)</p>.</li>
            <hr />
            <h3>Endpoints</h3>
            <AllEndpoint category={"technology"} categories={"technologies"} />
            <br /><br />
            <ByIdEndpoint category={"technology"} categories={"technologies"} />
            <br /><br />
            <ByIdsEndpoint category={"technology"} categories={"technologies"} />
        </>
    )
}