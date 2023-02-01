import AllEndpoint from "./Endpoints/AllEndpoint";

export default function Civilizations() {
    return (
        <>
            <h1>Civilizations Endpoints</h1>
            <hr />
            <h3>Properties</h3>
            <p>(Arrays may contain only one element)</p>
            <p>Civilizations can contain the following properties:</p>
            <li><p className="property">id:</p> the general id of the civilization;</li>
            <li><p className="property">number_id:</p> the numeric id of the civilization;</li>
            <li><p className="property">name:</p> the name of the civilization;</li>
            <li><p className="property">expansion:</p> the expansion in which the civilization was first introduced;</li>
            <li><p className="property">army_type:</p> the type of army;</li>
            <li><p className="property">unique_unit:</p> the array of unique units;</li>
            <li><p className="property">unique_tech:</p> the array of unique technologies;</li>
            <li><p className="property">unique_building:</p> the array of unique buildings;</li>
            <li><p className="property">team_bonus:</p> the array of team bonus;</li>
            <li><p className="property">civilization_bonus:</p> the array of civilization bonus;</li>
            <li><p className="property">banner:</p> the link to the banner icon.</li>
            <hr />
            <AllEndpoint category={"civilizations"} />
        </>
    )
}