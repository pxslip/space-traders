import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AcceptContract200Response } from '../models/AcceptContract200Response.ts';
import { AcceptContract200ResponseData } from '../models/AcceptContract200ResponseData.ts';
import { Agent } from '../models/Agent.ts';
import { Chart } from '../models/Chart.ts';
import { ConnectedSystem } from '../models/ConnectedSystem.ts';
import { Contract } from '../models/Contract.ts';
import { ContractDeliverGood } from '../models/ContractDeliverGood.ts';
import { ContractPayment } from '../models/ContractPayment.ts';
import { ContractTerms } from '../models/ContractTerms.ts';
import { Cooldown } from '../models/Cooldown.ts';
import { CreateChart201Response } from '../models/CreateChart201Response.ts';
import { CreateChart201ResponseData } from '../models/CreateChart201ResponseData.ts';
import { CreateShipShipScan201Response } from '../models/CreateShipShipScan201Response.ts';
import { CreateShipShipScan201ResponseData } from '../models/CreateShipShipScan201ResponseData.ts';
import { CreateShipSystemScan201Response } from '../models/CreateShipSystemScan201Response.ts';
import { CreateShipSystemScan201ResponseData } from '../models/CreateShipSystemScan201ResponseData.ts';
import { CreateShipWaypointScan201Response } from '../models/CreateShipWaypointScan201Response.ts';
import { CreateShipWaypointScan201ResponseData } from '../models/CreateShipWaypointScan201ResponseData.ts';
import { CreateSurvey201Response } from '../models/CreateSurvey201Response.ts';
import { CreateSurvey201ResponseData } from '../models/CreateSurvey201ResponseData.ts';
import { DeliverContract200Response } from '../models/DeliverContract200Response.ts';
import { DeliverContract200ResponseData } from '../models/DeliverContract200ResponseData.ts';
import { DeliverContractRequest } from '../models/DeliverContractRequest.ts';
import { DockShip200Response } from '../models/DockShip200Response.ts';
import { ExtractResources201Response } from '../models/ExtractResources201Response.ts';
import { ExtractResources201ResponseData } from '../models/ExtractResources201ResponseData.ts';
import { ExtractResourcesRequest } from '../models/ExtractResourcesRequest.ts';
import { Extraction } from '../models/Extraction.ts';
import { ExtractionYield } from '../models/ExtractionYield.ts';
import { Faction } from '../models/Faction.ts';
import { FactionTrait } from '../models/FactionTrait.ts';
import { FulfillContract200Response } from '../models/FulfillContract200Response.ts';
import { GetContract200Response } from '../models/GetContract200Response.ts';
import { GetContracts200Response } from '../models/GetContracts200Response.ts';
import { GetFaction200Response } from '../models/GetFaction200Response.ts';
import { GetFactions200Response } from '../models/GetFactions200Response.ts';
import { GetJumpGate200Response } from '../models/GetJumpGate200Response.ts';
import { GetMarket200Response } from '../models/GetMarket200Response.ts';
import { GetMyAgent200Response } from '../models/GetMyAgent200Response.ts';
import { GetMyShip200Response } from '../models/GetMyShip200Response.ts';
import { GetMyShipCargo200Response } from '../models/GetMyShipCargo200Response.ts';
import { GetMyShips200Response } from '../models/GetMyShips200Response.ts';
import { GetShipCooldown200Response } from '../models/GetShipCooldown200Response.ts';
import { GetShipNav200Response } from '../models/GetShipNav200Response.ts';
import { GetShipyard200Response } from '../models/GetShipyard200Response.ts';
import { GetSystem200Response } from '../models/GetSystem200Response.ts';
import { GetSystemWaypoints200Response } from '../models/GetSystemWaypoints200Response.ts';
import { GetSystems200Response } from '../models/GetSystems200Response.ts';
import { GetWaypoint200Response } from '../models/GetWaypoint200Response.ts';
import { Jettison200Response } from '../models/Jettison200Response.ts';
import { Jettison200ResponseData } from '../models/Jettison200ResponseData.ts';
import { JettisonRequest } from '../models/JettisonRequest.ts';
import { JumpGate } from '../models/JumpGate.ts';
import { JumpShip200Response } from '../models/JumpShip200Response.ts';
import { JumpShip200ResponseData } from '../models/JumpShip200ResponseData.ts';
import { JumpShipRequest } from '../models/JumpShipRequest.ts';
import { Market } from '../models/Market.ts';
import { MarketTradeGood } from '../models/MarketTradeGood.ts';
import { MarketTransaction } from '../models/MarketTransaction.ts';
import { Meta } from '../models/Meta.ts';
import { NavigateShip200Response } from '../models/NavigateShip200Response.ts';
import { NavigateShip200ResponseData } from '../models/NavigateShip200ResponseData.ts';
import { NavigateShipRequest } from '../models/NavigateShipRequest.ts';
import { OrbitShip200Response } from '../models/OrbitShip200Response.ts';
import { OrbitShip200ResponseData } from '../models/OrbitShip200ResponseData.ts';
import { PatchShipNavRequest } from '../models/PatchShipNavRequest.ts';
import { PurchaseCargo201Response } from '../models/PurchaseCargo201Response.ts';
import { PurchaseCargoRequest } from '../models/PurchaseCargoRequest.ts';
import { PurchaseShip201Response } from '../models/PurchaseShip201Response.ts';
import { PurchaseShip201ResponseData } from '../models/PurchaseShip201ResponseData.ts';
import { PurchaseShipRequest } from '../models/PurchaseShipRequest.ts';
import { RefuelShip200Response } from '../models/RefuelShip200Response.ts';
import { RefuelShip200ResponseData } from '../models/RefuelShip200ResponseData.ts';
import { Register201Response } from '../models/Register201Response.ts';
import { Register201ResponseData } from '../models/Register201ResponseData.ts';
import { RegisterRequest } from '../models/RegisterRequest.ts';
import { ScannedShip } from '../models/ScannedShip.ts';
import { ScannedShipEngine } from '../models/ScannedShipEngine.ts';
import { ScannedShipFrame } from '../models/ScannedShipFrame.ts';
import { ScannedShipMountsInner } from '../models/ScannedShipMountsInner.ts';
import { ScannedShipReactor } from '../models/ScannedShipReactor.ts';
import { ScannedSystem } from '../models/ScannedSystem.ts';
import { ScannedWaypoint } from '../models/ScannedWaypoint.ts';
import { SellCargo201Response } from '../models/SellCargo201Response.ts';
import { SellCargo201ResponseData } from '../models/SellCargo201ResponseData.ts';
import { SellCargoRequest } from '../models/SellCargoRequest.ts';
import { Ship } from '../models/Ship.ts';
import { ShipCargo } from '../models/ShipCargo.ts';
import { ShipCargoItem } from '../models/ShipCargoItem.ts';
import { ShipCrew } from '../models/ShipCrew.ts';
import { ShipEngine } from '../models/ShipEngine.ts';
import { ShipFrame } from '../models/ShipFrame.ts';
import { ShipFuel } from '../models/ShipFuel.ts';
import { ShipFuelConsumed } from '../models/ShipFuelConsumed.ts';
import { ShipModule } from '../models/ShipModule.ts';
import { ShipMount } from '../models/ShipMount.ts';
import { ShipNav } from '../models/ShipNav.ts';
import { ShipNavFlightMode } from '../models/ShipNavFlightMode.ts';
import { ShipNavRoute } from '../models/ShipNavRoute.ts';
import { ShipNavRouteWaypoint } from '../models/ShipNavRouteWaypoint.ts';
import { ShipNavStatus } from '../models/ShipNavStatus.ts';
import { ShipReactor } from '../models/ShipReactor.ts';
import { ShipRefine200Response } from '../models/ShipRefine200Response.ts';
import { ShipRefine200ResponseData } from '../models/ShipRefine200ResponseData.ts';
import { ShipRefine200ResponseDataProducedInner } from '../models/ShipRefine200ResponseDataProducedInner.ts';
import { ShipRefineRequest } from '../models/ShipRefineRequest.ts';
import { ShipRegistration } from '../models/ShipRegistration.ts';
import { ShipRequirements } from '../models/ShipRequirements.ts';
import { ShipRole } from '../models/ShipRole.ts';
import { ShipType } from '../models/ShipType.ts';
import { Shipyard } from '../models/Shipyard.ts';
import { ShipyardShip } from '../models/ShipyardShip.ts';
import { ShipyardShipTypesInner } from '../models/ShipyardShipTypesInner.ts';
import { ShipyardTransaction } from '../models/ShipyardTransaction.ts';
import { Survey } from '../models/Survey.ts';
import { SurveyDeposit } from '../models/SurveyDeposit.ts';
import { System } from '../models/System.ts';
import { SystemFaction } from '../models/SystemFaction.ts';
import { SystemType } from '../models/SystemType.ts';
import { SystemWaypoint } from '../models/SystemWaypoint.ts';
import { TradeGood } from '../models/TradeGood.ts';
import { TradeSymbol } from '../models/TradeSymbol.ts';
import { TransferCargo200Response } from '../models/TransferCargo200Response.ts';
import { TransferCargoRequest } from '../models/TransferCargoRequest.ts';
import { Waypoint } from '../models/Waypoint.ts';
import { WaypointFaction } from '../models/WaypointFaction.ts';
import { WaypointOrbital } from '../models/WaypointOrbital.ts';
import { WaypointTrait } from '../models/WaypointTrait.ts';
import { WaypointType } from '../models/WaypointType.ts';
import { ObservableAgentsApi } from './ObservableAPI.ts';

import { AgentsApiRequestFactory, AgentsApiResponseProcessor} from "../apis/AgentsApi.ts";
export class PromiseAgentsApi {
    private api: ObservableAgentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentsApiRequestFactory,
        responseProcessor?: AgentsApiResponseProcessor
    ) {
        this.api = new ObservableAgentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch your agent's details.
     * My Agent Details
     */
    public getMyAgent(_options?: Configuration): Promise<GetMyAgent200Response> {
        const result = this.api.getMyAgent(_options);
        return result.toPromise();
    }


}



import { ObservableContractsApi } from './ObservableAPI.ts';

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi.ts";
export class PromiseContractsApi {
    private api: ObservableContractsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Accept a contract.
     * Accept Contract
     * @param contractId 
     */
    public acceptContract(contractId: string, _options?: Configuration): Promise<AcceptContract200Response> {
        const result = this.api.acceptContract(contractId, _options);
        return result.toPromise();
    }

    /**
     * Deliver cargo on a given contract.
     * Deliver Contract
     * @param contractId The ID of the contract
     * @param deliverContractRequest 
     */
    public deliverContract(contractId: string, deliverContractRequest?: DeliverContractRequest, _options?: Configuration): Promise<DeliverContract200Response> {
        const result = this.api.deliverContract(contractId, deliverContractRequest, _options);
        return result.toPromise();
    }

    /**
     * Fulfill a contract
     * Fulfill Contract
     * @param contractId The ID of the contract
     */
    public fulfillContract(contractId: string, _options?: Configuration): Promise<FulfillContract200Response> {
        const result = this.api.fulfillContract(contractId, _options);
        return result.toPromise();
    }

    /**
     * Get the details of a contract by ID.
     * Get Contract
     * @param contractId The contract ID
     */
    public getContract(contractId: string, _options?: Configuration): Promise<GetContract200Response> {
        const result = this.api.getContract(contractId, _options);
        return result.toPromise();
    }

    /**
     * List all of your contracts.
     * List Contracts
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getContracts(page?: number, limit?: number, _options?: Configuration): Promise<GetContracts200Response> {
        const result = this.api.getContracts(page, limit, _options);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI.ts';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi.ts";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new agent and ties it to a temporary Account.  The agent symbol is a 3-14 character string that will represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.  A new agent will be granted an authorization token, a contract with their starting faction, a command ship with a jump drive, and one hundred thousand credits.  > #### Keep your token safe and secure > > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.  You can accept your contract using the `/my/contracts/{contractId}/accept` endpoint. You will want to navigate your command ship to a nearby asteroid field and execute the `/my/ships/{shipSymbol}/extract` endpoint to mine various types of ores and minerals.  Return to the contract destination and execute the `/my/ships/{shipSymbol}/deliver` endpoint to deposit goods into the contract.  When your contract is fulfilled, you can call `/my/contracts/{contractId}/fulfill` to retrieve payment.
     * Register New Agent
     * @param registerRequest 
     */
    public register(registerRequest?: RegisterRequest, _options?: Configuration): Promise<Register201Response> {
        const result = this.api.register(registerRequest, _options);
        return result.toPromise();
    }


}



import { ObservableFactionsApi } from './ObservableAPI.ts';

import { FactionsApiRequestFactory, FactionsApiResponseProcessor} from "../apis/FactionsApi.ts";
export class PromiseFactionsApi {
    private api: ObservableFactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FactionsApiRequestFactory,
        responseProcessor?: FactionsApiResponseProcessor
    ) {
        this.api = new ObservableFactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * View the details of a faction.
     * Get Faction
     * @param factionSymbol The faction symbol
     */
    public getFaction(factionSymbol: string, _options?: Configuration): Promise<GetFaction200Response> {
        const result = this.api.getFaction(factionSymbol, _options);
        return result.toPromise();
    }

    /**
     * List all discovered factions in the game.
     * List Factions
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getFactions(page?: number, limit?: number, _options?: Configuration): Promise<GetFactions200Response> {
        const result = this.api.getFactions(page, limit, _options);
        return result.toPromise();
    }


}



import { ObservableFleetApi } from './ObservableAPI.ts';

import { FleetApiRequestFactory, FleetApiResponseProcessor} from "../apis/FleetApi.ts";
export class PromiseFleetApi {
    private api: ObservableFleetApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FleetApiRequestFactory,
        responseProcessor?: FleetApiResponseProcessor
    ) {
        this.api = new ObservableFleetApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Command a ship to chart the current waypoint.  Waypoints in the universe are uncharted by default. These locations will not show up in the API until they have been charted by a ship.  Charting a location will record your agent as the one who created the chart.
     * Create Chart
     * @param shipSymbol The symbol of the ship
     */
    public createChart(shipSymbol: string, _options?: Configuration): Promise<CreateChart201Response> {
        const result = this.api.createChart(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Activate your ship's sensor arrays to scan for ship information.
     * Scan Ships
     * @param shipSymbol 
     */
    public createShipShipScan(shipSymbol: string, _options?: Configuration): Promise<CreateShipShipScan201Response> {
        const result = this.api.createShipShipScan(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Activate your ship's sensor arrays to scan for system information.
     * Scan Systems
     * @param shipSymbol 
     */
    public createShipSystemScan(shipSymbol: string, _options?: Configuration): Promise<CreateShipSystemScan201Response> {
        const result = this.api.createShipSystemScan(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Activate your ship's sensor arrays to scan for waypoint information.
     * Scan Waypoints
     * @param shipSymbol 
     */
    public createShipWaypointScan(shipSymbol: string, _options?: Configuration): Promise<CreateShipWaypointScan201Response> {
        const result = this.api.createShipWaypointScan(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * If you want to target specific yields for an extraction, you can survey a waypoint, such as an asteroid field, and send the survey in the body of the extract request. Each survey may have multiple deposits, and if a symbol shows up more than once, that indicates a higher chance of extracting that resource.  Your ship will enter a cooldown between consecutive survey requests. Surveys will eventually expire after a period of time. Multiple ships can use the same survey for extraction.
     * Create Survey
     * @param shipSymbol The symbol of the ship
     */
    public createSurvey(shipSymbol: string, _options?: Configuration): Promise<CreateSurvey201Response> {
        const result = this.api.createSurvey(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Attempt to dock your ship at it's current location. Docking will only succeed if the waypoint is a dockable location, and your ship is capable of docking at the time of the request.  The endpoint is idempotent - successive calls will succeed even if the ship is already docked.
     * Dock Ship
     * @param shipSymbol The symbol of the ship
     */
    public dockShip(shipSymbol: string, _options?: Configuration): Promise<DockShip200Response> {
        const result = this.api.dockShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Extract resources from the waypoint into your ship. Send an optional survey as the payload to target specific yields.
     * Extract Resources
     * @param shipSymbol The ship symbol
     * @param extractResourcesRequest 
     */
    public extractResources(shipSymbol: string, extractResourcesRequest?: ExtractResourcesRequest, _options?: Configuration): Promise<ExtractResources201Response> {
        const result = this.api.extractResources(shipSymbol, extractResourcesRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of your ship.
     * Get Ship
     * @param shipSymbol 
     */
    public getMyShip(shipSymbol: string, _options?: Configuration): Promise<GetMyShip200Response> {
        const result = this.api.getMyShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the cargo of your ship.
     * Get Ship Cargo
     * @param shipSymbol The symbol of the ship
     */
    public getMyShipCargo(shipSymbol: string, _options?: Configuration): Promise<GetMyShipCargo200Response> {
        const result = this.api.getMyShipCargo(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve all of your ships.
     * List Ships
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getMyShips(page?: number, limit?: number, _options?: Configuration): Promise<GetMyShips200Response> {
        const result = this.api.getMyShips(page, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the details of your ship's reactor cooldown. Some actions such as activating your jump drive, scanning, or extracting resources taxes your reactor and results in a cooldown.  Your ship cannot perform additional actions until your cooldown has expired. The duration of your cooldown is relative to the power consumption of the related modules or mounts for the action taken.  Response returns a 204 status code (no-content) when the ship has no cooldown.
     * Get Ship Cooldown
     * @param shipSymbol 
     */
    public getShipCooldown(shipSymbol: string, _options?: Configuration): Promise<void | GetShipCooldown200Response> {
        const result = this.api.getShipCooldown(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the current nav status of a ship.
     * Get Ship Nav
     * @param shipSymbol The ship symbol
     */
    public getShipNav(shipSymbol: string, _options?: Configuration): Promise<GetShipNav200Response> {
        const result = this.api.getShipNav(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Jettison cargo from your ship's cargo hold.
     * Jettison Cargo
     * @param shipSymbol 
     * @param jettisonRequest 
     */
    public jettison(shipSymbol: string, jettisonRequest?: JettisonRequest, _options?: Configuration): Promise<Jettison200Response> {
        const result = this.api.jettison(shipSymbol, jettisonRequest, _options);
        return result.toPromise();
    }

    /**
     * Jump your ship instantly to a target system. Unlike other forms of navigation, jumping requires a unit of antimatter.
     * Jump Ship
     * @param shipSymbol 
     * @param jumpShipRequest 
     */
    public jumpShip(shipSymbol: string, jumpShipRequest?: JumpShipRequest, _options?: Configuration): Promise<JumpShip200Response> {
        const result = this.api.jumpShip(shipSymbol, jumpShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Navigate to a target destination. The destination must be located within the same system as the ship. Navigating will consume the necessary fuel and supplies from the ship's manifest, and will pay out crew wages from the agent's account.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.  To travel between systems, see the ship's warp or jump actions.
     * Navigate Ship
     * @param shipSymbol The ship symbol
     * @param navigateShipRequest 
     */
    public navigateShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Promise<NavigateShip200Response> {
        const result = this.api.navigateShip(shipSymbol, navigateShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Attempt to move your ship into orbit at it's current location. The request will only succeed if your ship is capable of moving into orbit at the time of the request.  The endpoint is idempotent - successive calls will succeed even if the ship is already in orbit.
     * Orbit Ship
     * @param shipSymbol The symbol of the ship
     */
    public orbitShip(shipSymbol: string, _options?: Configuration): Promise<OrbitShip200Response> {
        const result = this.api.orbitShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Update the nav data of a ship, such as the flight mode.
     * Patch Ship Nav
     * @param shipSymbol The ship symbol
     * @param patchShipNavRequest 
     */
    public patchShipNav(shipSymbol: string, patchShipNavRequest?: PatchShipNavRequest, _options?: Configuration): Promise<GetShipNav200Response> {
        const result = this.api.patchShipNav(shipSymbol, patchShipNavRequest, _options);
        return result.toPromise();
    }

    /**
     * Purchase cargo.
     * Purchase Cargo
     * @param shipSymbol 
     * @param purchaseCargoRequest 
     */
    public purchaseCargo(shipSymbol: string, purchaseCargoRequest?: PurchaseCargoRequest, _options?: Configuration): Promise<PurchaseCargo201Response> {
        const result = this.api.purchaseCargo(shipSymbol, purchaseCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Purchase a ship
     * Purchase Ship
     * @param purchaseShipRequest 
     */
    public purchaseShip(purchaseShipRequest?: PurchaseShipRequest, _options?: Configuration): Promise<PurchaseShip201Response> {
        const result = this.api.purchaseShip(purchaseShipRequest, _options);
        return result.toPromise();
    }

    /**
     * Refuel your ship from the local market.
     * Refuel Ship
     * @param shipSymbol 
     */
    public refuelShip(shipSymbol: string, _options?: Configuration): Promise<RefuelShip200Response> {
        const result = this.api.refuelShip(shipSymbol, _options);
        return result.toPromise();
    }

    /**
     * Sell cargo.
     * Sell Cargo
     * @param shipSymbol 
     * @param sellCargoRequest 
     */
    public sellCargo(shipSymbol: string, sellCargoRequest?: SellCargoRequest, _options?: Configuration): Promise<SellCargo201Response> {
        const result = this.api.sellCargo(shipSymbol, sellCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Attempt to refine the raw materials on your ship. The request will only succeed if your ship is capable of refining at the time of the request.
     * Ship Refine
     * @param shipSymbol The symbol of the ship
     * @param shipRefineRequest 
     */
    public shipRefine(shipSymbol: string, shipRefineRequest?: ShipRefineRequest, _options?: Configuration): Promise<ShipRefine200Response> {
        const result = this.api.shipRefine(shipSymbol, shipRefineRequest, _options);
        return result.toPromise();
    }

    /**
     * Transfer cargo between ships.
     * Transfer Cargo
     * @param shipSymbol 
     * @param transferCargoRequest 
     */
    public transferCargo(shipSymbol: string, transferCargoRequest?: TransferCargoRequest, _options?: Configuration): Promise<TransferCargo200Response> {
        const result = this.api.transferCargo(shipSymbol, transferCargoRequest, _options);
        return result.toPromise();
    }

    /**
     * Warp your ship to a target destination in another system. Warping will consume the necessary fuel and supplies from the ship's manifest, and will pay out crew wages from the agent's account.  The returned response will detail the route information including the expected time of arrival. Most ship actions are unavailable until the ship has arrived at it's destination.
     * Warp Ship
     * @param shipSymbol 
     * @param navigateShipRequest 
     */
    public warpShip(shipSymbol: string, navigateShipRequest?: NavigateShipRequest, _options?: Configuration): Promise<NavigateShip200Response> {
        const result = this.api.warpShip(shipSymbol, navigateShipRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSystemsApi } from './ObservableAPI.ts';

import { SystemsApiRequestFactory, SystemsApiResponseProcessor} from "../apis/SystemsApi.ts";
export class PromiseSystemsApi {
    private api: ObservableSystemsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SystemsApiRequestFactory,
        responseProcessor?: SystemsApiResponseProcessor
    ) {
        this.api = new ObservableSystemsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get jump gate details for a waypoint.
     * Get Jump Gate
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getJumpGate(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetJumpGate200Response> {
        const result = this.api.getJumpGate(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Retrieve imports, exports and exchange data from a marketplace. Imports can be sold, exports can be purchased, and exchange goods can be purchased or sold. Send a ship to the waypoint to access trade good prices and recent transactions.
     * Get Market
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getMarket(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetMarket200Response> {
        const result = this.api.getMarket(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the shipyard for a waypoint. Send a ship to the waypoint to access ships that are currently available for purchase and recent transactions.
     * Get Shipyard
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getShipyard(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetShipyard200Response> {
        const result = this.api.getShipyard(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }

    /**
     * Get the details of a system.
     * Get System
     * @param systemSymbol The system symbol
     */
    public getSystem(systemSymbol: string, _options?: Configuration): Promise<GetSystem200Response> {
        const result = this.api.getSystem(systemSymbol, _options);
        return result.toPromise();
    }

    /**
     * Fetch all of the waypoints for a given system. System must be charted or a ship must be present to return waypoint details.
     * List Waypoints
     * @param systemSymbol The system symbol
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getSystemWaypoints(systemSymbol: string, page?: number, limit?: number, _options?: Configuration): Promise<GetSystemWaypoints200Response> {
        const result = this.api.getSystemWaypoints(systemSymbol, page, limit, _options);
        return result.toPromise();
    }

    /**
     * Return a list of all systems.
     * List Systems
     * @param page What entry offset to request
     * @param limit How many entries to return per page
     */
    public getSystems(page?: number, limit?: number, _options?: Configuration): Promise<GetSystems200Response> {
        const result = this.api.getSystems(page, limit, _options);
        return result.toPromise();
    }

    /**
     * View the details of a waypoint.
     * Get Waypoint
     * @param systemSymbol The system symbol
     * @param waypointSymbol The waypoint symbol
     */
    public getWaypoint(systemSymbol: string, waypointSymbol: string, _options?: Configuration): Promise<GetWaypoint200Response> {
        const result = this.api.getWaypoint(systemSymbol, waypointSymbol, _options);
        return result.toPromise();
    }


}



