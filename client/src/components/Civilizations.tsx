import AllEndpoint from "./Endpoints/AllEndpoint";

export default function Civilizations() {
    return (
        <>
            <h1>Civilizations</h1>
            <hr />
            <h3>Properties</h3>
            <p>(Arrays may contain only one element)</p>
            <p>Civilization objects can have the following properties:</p>
            <li><p className="property">id:</p> the general id of the civilization <p className="property">(String)</p>;</li>
            <li><p className="property">number_id:</p> the numeric id of the civilization <p className="property">(Number)</p>;</li>
            <li><p className="property">name:</p> the name of the civilization <p className="property">(String)</p>;</li>
            <li><p className="property">expansion:</p> the expansion in which the civilization was first introduced <p className="property">(String)</p>;</li>
            <li><p className="property">army_type:</p> the type of army <p className="property">(String)</p>;</li>
            <li><p className="property">unique_unit:</p> the array of unique units <p className="property">(Array of Objects)</p>;</li>
            <li><p className="property">unique_tech:</p> the array of unique technologies <p className="property">(Array of Objects)</p>;</li>
            <li><p className="property">unique_building:</p> the array of unique buildings <p className="property">(Array of Objects)</p>;</li>
            <li><p className="property">team_bonus:</p> the array of team bonus <p className="property">(Array of Strings)</p>;</li>
            <li><p className="property">civilization_bonus:</p> the array of civilization bonus <p className="property">(Array of Strings)</p>;</li>
            <li><p className="property">banner:</p> the link to the banner icon <p className="property">(String)</p>.</li>
            <hr />
            <h3>Endpoints</h3>
            <AllEndpoint category={"civilizations"} />
        </>
    )
}