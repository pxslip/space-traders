import { Command } from 'https://deno.land/x/cliffy@v0.25.7/command/mod.ts';
import { colors } from 'https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts';
import 'https://deno.land/std@0.186.0/dotenv/load.ts';
import { ActionHandler } from 'https://deno.land/x/cliffy@v0.25.7/command/types.ts';

interface HttpClientOptions {
	baseUrl?: string;
	headers?: Record<string, string>;
}

interface HttpClientFetchOptions extends RequestInit {
	baseUrl?: string;
	body?: BodyInit;
}

class HttpClient {
	#baseUrl: string;
	#headers: Headers;
	constructor(options: HttpClientOptions) {
		this.#baseUrl = options.baseUrl ?? '';
		this.#headers = new Headers(options.headers ?? {});
	}

	fetch(path: string, options: HttpClientFetchOptions) {
		let headers;
		if (options.headers) {
			if (!(options.headers instanceof Headers)) {
				headers = new Headers(options.headers);
			} else {
				headers = options.headers;
			}
			for (const header in headers) {
				if (!headers.has(header) && this.#headers.has(header)) {
					headers.set(header, this.#headers.get(header)!); // use the isdefined since we know that theb header exists given the above condition
				}
			}
		} else {
			headers = this.#headers;
		}
		options.headers = headers;
		let baseUrl = this.#baseUrl;
		if (options.baseUrl) {
			baseUrl = options.baseUrl;
			delete options.baseUrl;
		}

		options.method ??= 'GET';
		return fetch(`${baseUrl}${path}`, options);
	}
}

const client = new HttpClient({ baseUrl: 'https://api.spacetraders.io/v2/' });
const encoder = new TextEncoder();

const root = new Command()
	.name('space_traders')
	.version('0.1.0')
	.description('CLI for the Space Traders (spacetraders.io) API based game')
	.globalEnv('STIO_TOKEN=<token:string>', 'The api token to use when making requests', { prefix: 'STIO' })
	.globalOption('-t, --token [token: string]', 'The api token to use when making requests');

const register = new Command()
	.arguments('<callsign>')
	.description('Register a new agent on the API')
	.option(
		'-f, --faction <faction:string>',
		'Indicate which faction you would like to register with',
		{ default: 'COSMIC' },
	)
	.action(async ({ faction }, callsign) => {
		const body = new URLSearchParams({
			symbol: callsign,
			faction: faction,
		});
		const response = await client.fetch('register', { body, method: 'POST' });
		const { data: { token, agent: { symbol, accountId } } } = await response.json();
		console.log(
			`Agent Data:\n
      token: ${colors.bold.underline.brightYellow(token)}\n
      symbol: ${colors.bold.underline.brightGreen(symbol)}\n
      account id: ${colors.bold.underline.brightBlue(accountId)}\n
      ${colors.bold.underline.brightRed('RECORD YOUR TOKEN')}`,
		);
		Deno.writeFile(
			`${callsign}-account.json`,
			encoder.encode(JSON.stringify({
				token: token,
				symbol: symbol,
				accountId: accountId,
			})),
		);
	});

const me = new Command<
	void,
	void,
	void,
	[],
	void,
	{
		number: number;
		integer: number;
		string: string;
		boolean: boolean;
		file: string;
	},
	void,
	undefined
>().action(({ token }) => {
	client.fetch('my/agent', { headers: { Authorization: `Bearer ${token}` } });
});

await root
	.command('register', register)
	.command('me', me)
	.parse(Deno.args);
