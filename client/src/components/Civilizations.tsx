import AllEndpoint from "./Endpoints/AllEndpoint";
import ByIdEndpoint from "./Endpoints/ByIdEndpoint";
import ByIdsEndpoint from "./Endpoints/ByIdsEndpoint";

export default function Civilizations() {
    return (
        <>
            <h1>Civilizations</h1>
            <hr />
            <h3>Properties</h3>
            <p>Civilization objects can have the following properties:</p>
            <p className="notes">(Arrays may contain only one element)</p>
            <li><p>id:</p> the general id of the civilization <p>(String)</p>;</li>
            <li><p>number_id:</p> the numeric id of the civilization <p>(Number)</p>;</li>
            <li><p>name:</p> the name of the civilization <p>(String)</p>;</li>
            <li><p>expansion:</p> the expansion in which the civilization was first introduced <p>(String)</p>;</li>
            <li><p>army_type:</p> the type of army <p>(String)</p>;</li>
            <li><p>unique_unit:</p> the array of unique units <p>(Array of Objects)</p>;</li>
            <li><p>unique_tech:</p> the array of unique technologies <p>(Array of Objects)</p>;</li>
            <li><p>unique_building:</p> the array of unique buildings <p>(Array of Objects)</p>;</li>
            <li><p>team_bonus:</p> the array of team bonus <p>(Array of Strings)</p>;</li>
            <li><p>civilization_bonus:</p> the array of civilization bonus <p>(Array of Strings)</p>;</li>
            <li><p>banner:</p> the link to the banner icon <p>(String)</p>.</li>
            <hr />
            <h3>Endpoints</h3>
            <AllEndpoint category={"civilization"} categories={"civilizations"} />
            <br /><br />
            <ByIdEndpoint category={"civilization"} categories={"civilizations"} />
            <br /><br />
            <ByIdsEndpoint category={"civilization"} categories={"civilizations"} />
        </>
    )
}