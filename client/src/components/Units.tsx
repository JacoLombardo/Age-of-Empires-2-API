
export default function Units() {
    return (
        <>
            <h1>Units</h1>
            <hr />
            <h3>Properties</h3>
            <p>(Arrays may contain only one element)</p>
            <p>Unit objects can have the following properties:</p>
            <li><p className="property">id:</p> the general id of the unit <p className="property">(String)</p>;</li>
            <li><p className="property">number_id:</p> the numeric id of the unit <p className="property">(Number)</p>;</li>
            <li><p className="property">name:</p> the name of the unit <p className="property">(String)</p>;</li>
            <li><p className="property">expansion:</p> the expansion in which the unit was first introduced <p className="property">(String)</p>;</li>
            <li><p className="property">description:</p> the description of the unit <p className="property">(String)</p>;</li>
            <li><p className="property">type:</p> the unit type <p className="property">(String)</p>;</li>
            <li><p className="property">age:</p> the age in which the unit becomes available <p className="property">(String)</p>;</li>
            <li><p className="property">trained_at:</p> the array of buildings in which the unit is available to train <p className="property">(Array of Objects)</p>;</li>
            <li><p className="property">cost:</p> the cost of the unit <p className="property">(Object)</p>;</li>
            <li><p className="property">training_time:</p> the training time <p className="property">(Number)</p>;</li>
            <li><p className="property">hit_points:</p> the hit points <p className="property">(Number)</p>;</li>
            <li><p className="property">melee_attack:</p> the melee attack <p className="property">(Number)</p>;</li>
            <li><p className="property">pierce_attack:</p> the pierce attack <p className="property">(Number)</p>;</li>
            <li><p className="property">attack_bonus:</p> the array of the attack bonus <p className="property">(Array of Strings)</p>;</li>
            <li><p className="property">rate_of_fire:</p> the rate of fire <p className="property">(Number)</p>;</li>
            <li><p className="property">frame_delay:</p> the frame delay <p className="property">(Number)</p>;</li>
            <li><p className="property">attack_delay:</p> the attack delay <p className="property">(Number)</p>;</li>
            <li><p className="property">range:</p> the range <p className="property">(Number)</p>;</li>
            <li><p className="property">accuracy:</p> the accuracy <p className="property">(String)</p>;</li>
            <li><p className="property">projectile_speed:</p> the projectile speed <p className="property">(Number)</p>;</li>
            <li><p className="property">melee_armor:</p> the melee armor <p className="property">(Number)</p>;</li>
            <li><p className="property">pierce_armor:</p> the pierce armor <p className="property">(Number)</p>;</li>
            <li><p className="property">armor_class:</p> the armor class <p className="property">(String)</p>;</li>
            <li><p className="property">garrison:</p> the number of other units that can be garrisoned inside the selected unit <p className="property">(Number)</p>;</li>
            <li><p className="property">movement_rate:</p> the unit speed <p className="property">(Number)</p>;</li>
            <li><p className="property">line_of_sight:</p> the line of sight <p className="property">(Number)</p>;</li>
            <li><p className="property">ability:</p> the array of the abilities of the unit <p className="property">(Array of Strings)</p>;</li>
            <li><p className="property">image:</p> the image of the unit <p className="property">(String)</p>.</li>
            <hr />
            <h3>Endpoints</h3>
        </>
    )
}