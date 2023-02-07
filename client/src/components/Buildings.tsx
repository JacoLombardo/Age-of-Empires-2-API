import AllEndpoint from "./Endpoints/AllEndpoint";
import ByIdEndpoint from "./Endpoints/ByIdEndpoint";
import ByIdsEndpoint from "./Endpoints/ByIdsEndpoint";

export default function Buildings() {
    return (
        <>
            <h1>Buildings</h1>
            <hr />
            <h3>Properties</h3>
            <p>Building objects can have the following properties:</p>
            <p className="notes">(Arrays may contain only one element)</p>
            <li><p>id:</p> the general id of the building <p>(String)</p>;</li>
            <li><p>number_id:</p> the numeric id of the building <p>(Number)</p>;</li>
            <li><p>name:</p> the name of the building <p>(String)</p>;</li>
            <li><p>expansion:</p> the expansion in which the building was first introduced <p>(String)</p>;</li>
            <li><p>description:</p> the description of the building <p>(String)</p>;</li>
            <li><p>type:</p> the type of the technology <p>(String)</p>;</li>
            <li><p>age:</p> the age in which the building becomes available <p>(String)</p>;</li>
            <li><p>use:</p> the array of uses <p>(Array of Strings)</p>;</li>
            <li><p>cost:</p> the cost of the building <p>(Object)</p>;</li>
            <li><p>build_time:</p> the build time <p>(Number)</p>;</li>
            <li><p>hit_points:</p> the hit points <p>(Number)</p>;</li>
            <li><p>pierce_attack:</p> the pierce attack <p>(Number)</p>;</li>
            <li><p>attack_bonus:</p> the array of the attack bonus <p>(Array of Strings)</p>;</li>
            <li><p>rate_of_fire:</p> the rate of fire <p>(Number)</p>;</li>
            <li><p>range:</p> the range <p>(Number)</p>;</li>
            <li><p>accuracy:</p> the accuracy <p>(String)</p>;</li>
            <li><p>projectile_speed:</p> the projectile speed <p>(Number)</p>;</li>
            <li><p>melee_armor:</p> the melee armor <p>(Number)</p>;</li>
            <li><p>pierce_armor:</p> the pierce armor <p>(Number)</p>;</li>
            <li><p>line_of_sight:</p> the line of sight <p>(Number)</p>;</li>
            <li><p>special_ability:</p> the array of special abilities of the building <p>(Array of Strings)</p>;</li>
            <li><p>image:</p> the image of the building <p>(String)</p>.</li>
            <hr />
            <h3>Endpoints</h3>
            <AllEndpoint category={"building"} categories={"buildings"} />
            <br /><br />
            <ByIdEndpoint category={"building"} categories={"buildings"} />
            <br /><br />
            <ByIdsEndpoint category={"building"} categories={"buildings"} />
        </>
    )
}