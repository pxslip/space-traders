/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * OpenAPI spec version: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Chart } from '../models/Chart.ts';
import { WaypointFaction } from '../models/WaypointFaction.ts';
import { WaypointOrbital } from '../models/WaypointOrbital.ts';
import { WaypointTrait } from '../models/WaypointTrait.ts';
import { WaypointType } from '../models/WaypointType.ts';
import { HttpFile } from '../http/http.ts';

/**
* A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
*/
export class ScannedWaypoint {
    'symbol': string;
    'type': WaypointType;
    'systemSymbol': string;
    'x': number;
    'y': number;
    'orbitals': Array<WaypointOrbital>;
    'faction'?: WaypointFaction;
    /**
    * The traits of the waypoint.
    */
    'traits': Array<WaypointTrait>;
    'chart'?: Chart;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "WaypointType",
            "format": ""
        },
        {
            "name": "systemSymbol",
            "baseName": "systemSymbol",
            "type": "string",
            "format": ""
        },
        {
            "name": "x",
            "baseName": "x",
            "type": "number",
            "format": ""
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number",
            "format": ""
        },
        {
            "name": "orbitals",
            "baseName": "orbitals",
            "type": "Array<WaypointOrbital>",
            "format": ""
        },
        {
            "name": "faction",
            "baseName": "faction",
            "type": "WaypointFaction",
            "format": ""
        },
        {
            "name": "traits",
            "baseName": "traits",
            "type": "Array<WaypointTrait>",
            "format": ""
        },
        {
            "name": "chart",
            "baseName": "chart",
            "type": "Chart",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScannedWaypoint.attributeTypeMap;
    }

    public constructor() {
    }
}



