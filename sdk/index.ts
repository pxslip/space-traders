import { Configuration, createConfiguration } from './configuration.ts';
import {
	PromiseAgentsApi,
	PromiseContractsApi,
	PromiseDefaultApi,
	PromiseFactionsApi,
	PromiseFleetApi,
	PromiseSystemsApi,
} from './types/PromiseAPI.ts';

export * from './http/http.ts';
export * from './auth/auth.ts';
export * from './models/all.ts';
export { createConfiguration } from './configuration.ts';
export type { Configuration } from './configuration.ts';
export * from './apis/exception.ts';
export * from './servers.ts';
export { RequiredError } from './apis/baseapi.ts';

export type { PromiseMiddleware as Middleware } from './middleware.ts';
export {
	PromiseAgentsApi as AgentsApi,
	PromiseContractsApi as ContractsApi,
	PromiseDefaultApi as DefaultApi,
	PromiseFactionsApi as FactionsApi,
	PromiseFleetApi as FleetApi,
	PromiseSystemsApi as SystemsApi,
} from './types/PromiseAPI.ts';

export class APIWrapper {
	#configuration: Configuration;
	#agents?: PromiseAgentsApi;
	#contracts?: PromiseContractsApi;
	#root?: PromiseDefaultApi;
	#factions?: PromiseFactionsApi;
	#fleet?: PromiseFleetApi;
	#systems?: PromiseSystemsApi;

	constructor() {
		this.#configuration = createConfiguration();
	}

	get agents() {
		if (!this.#agents) {
			this.#agents = new PromiseAgentsApi(this.#configuration);
		}
		return this.#agents;
	}

	get contracts() {
		if (!this.#contracts) {
			this.#contracts = new PromiseContractsApi(this.#configuration);
		}
		return this.#contracts;
	}

	get root() {
		if (!this.#root) {
			this.#root = new PromiseDefaultApi(this.#configuration);
		}
		return this.#root;
	}

	get factions() {
		if (!this.#factions) {
			this.#factions = new PromiseFactionsApi(this.#configuration);
		}
		return this.#factions;
	}

	get fleet() {
		if (!this.#fleet) {
			this.#fleet = new PromiseFleetApi(this.#configuration);
		}
		return this.#fleet;
	}

	get systems() {
		if (!this.#systems) {
			this.#systems = new PromiseSystemsApi(this.#configuration);
		}
		return this.#systems;
	}
}
