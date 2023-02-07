
export default function Buildings() {
    return (
        <>
            <h1>Buildings</h1>
            <hr />
            <h3>Properties</h3>
            <p>(Arrays may contain only one element)</p>
            <p>Building objects can have the following properties:</p>
            <li><p className="property">id:</p> the general id of the building <p className="property">(String)</p>;</li>
            <li><p className="property">number_id:</p> the numeric id of the building <p className="property">(Number)</p>;</li>
            <li><p className="property">name:</p> the name of the building <p className="property">(String)</p>;</li>
            <li><p className="property">expansion:</p> the expansion in which the building was first introduced <p className="property">(String)</p>;</li>
            <li><p className="property">description:</p> the description of the building <p className="property">(String)</p>;</li>
            <li><p className="property">type:</p> the type of the technology <p className="property">(String)</p>;</li>
            <li><p className="property">age:</p> the age in which the building becomes available <p className="property">(String)</p>;</li>
            <li><p className="property">use:</p> the array of uses <p className="property">(Array of Strings)</p>;</li>
            <li><p className="property">cost:</p> the cost of the building <p className="property">(Object)</p>;</li>
            <li><p className="property">build_time:</p> the build time <p className="property">(Number)</p>;</li>
            <li><p className="property">hit_points:</p> the hit points <p className="property">(Number)</p>;</li>
            <li><p className="property">pierce_attack:</p> the pierce attack <p className="property">(Number)</p>;</li>
            <li><p className="property">attack_bonus:</p> the array of the attack bonus <p className="property">(Array of Strings)</p>;</li>
            <li><p className="property">rate_of_fire:</p> the rate of fire <p className="property">(Number)</p>;</li>
            <li><p className="property">range:</p> the range <p className="property">(Number)</p>;</li>
            <li><p className="property">accuracy:</p> the accuracy <p className="property">(String)</p>;</li>
            <li><p className="property">projectile_speed:</p> the projectile speed <p className="property">(Number)</p>;</li>
            <li><p className="property">melee_armor:</p> the melee armor <p className="property">(Number)</p>;</li>
            <li><p className="property">pierce_armor:</p> the pierce armor <p className="property">(Number)</p>;</li>
            <li><p className="property">line_of_sight:</p> the line of sight <p className="property">(Number)</p>;</li>
            <li><p className="property">special_ability:</p> the array of special abilities of the building <p className="property">(Array of Strings)</p>;</li>
            <li><p className="property">image:</p> the image of the building <p className="property">(String)</p>.</li>
            <hr />
            <h3>Endpoints</h3>
        </>
    )
}