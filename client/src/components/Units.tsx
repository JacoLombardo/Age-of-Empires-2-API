import AllEndpoint from "./Endpoints/AllEndpoint";
import ByIdEndpoint from "./Endpoints/ByIdEndpoint";
import ByIdsEndpoint from "./Endpoints/ByIdsEndpoint";

export default function Units() {
    return (
        <>
            <h1>Units</h1>
            <hr />
            <h3>Properties</h3>
            <p>Unit objects can have the following properties:</p>
            <p className="notes">(Arrays may contain only one element)</p>
            <li><p>id:</p> the general id of the unit <p>(String)</p>;</li>
            <li><p>number_id:</p> the numeric id of the unit <p>(Number)</p>;</li>
            <li><p>name:</p> the name of the unit <p>(String)</p>;</li>
            <li><p>expansion:</p> the expansion in which the unit was first introduced <p>(String)</p>;</li>
            <li><p>description:</p> the description of the unit <p>(String)</p>;</li>
            <li><p>type:</p> the unit type <p>(String)</p>;</li>
            <li><p>age:</p> the age in which the unit becomes available <p>(String)</p>;</li>
            <li><p>trained_at:</p> the array of buildings in which the unit is available to train <p>(Array of Objects)</p>;</li>
            <li><p>cost:</p> the cost of the unit <p>(Object)</p>;</li>
            <li><p>training_time:</p> the training time <p>(Number)</p>;</li>
            <li><p>hit_points:</p> the hit points <p>(Number)</p>;</li>
            <li><p>melee_attack:</p> the melee attack <p>(Number)</p>;</li>
            <li><p>pierce_attack:</p> the pierce attack <p>(Number)</p>;</li>
            <li><p>attack_bonus:</p> the array of the attack bonus <p>(Array of Strings)</p>;</li>
            <li><p>rate_of_fire:</p> the rate of fire <p>(Number)</p>;</li>
            <li><p>frame_delay:</p> the frame delay <p>(Number)</p>;</li>
            <li><p>attack_delay:</p> the attack delay <p>(Number)</p>;</li>
            <li><p>range:</p> the range <p>(Number)</p>;</li>
            <li><p>accuracy:</p> the accuracy <p>(String)</p>;</li>
            <li><p>projectile_speed:</p> the projectile speed <p>(Number)</p>;</li>
            <li><p>melee_armor:</p> the melee armor <p>(Number)</p>;</li>
            <li><p>pierce_armor:</p> the pierce armor <p>(Number)</p>;</li>
            <li><p>armor_class:</p> the armor class <p>(String)</p>;</li>
            <li><p>garrison:</p> the number of other units that can be garrisoned inside the selected unit <p>(Number)</p>;</li>
            <li><p>movement_rate:</p> the unit speed <p>(Number)</p>;</li>
            <li><p>line_of_sight:</p> the line of sight <p>(Number)</p>;</li>
            <li><p>ability:</p> the array of the abilities of the unit <p>(Array of Strings)</p>;</li>
            <li><p>image:</p> the image of the unit <p>(String)</p>.</li>
            <hr />
            <h3>Endpoints</h3>
            <AllEndpoint category={"unit"} categories={"units"} />
            <br /><br />
            <ByIdEndpoint category={"unit"} categories={"units"} />
            <br /><br />
            <ByIdsEndpoint category={"unit"} categories={"units"} />
        </>
    )
}