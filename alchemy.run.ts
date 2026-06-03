import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";
import * as Cloudflare from "alchemy/Cloudflare";

export const Website = Cloudflare.Vite("mmlngl-site", {
	name: "mmlngl-site",
	compatibility: { flags: ["nodejs_compat"] },
});

export type WebsiteEnv = Cloudflare.InferEnv<typeof Website>;

export default Alchemy.Stack(
	"mmlngl",
	{
		providers: Cloudflare.providers(),
		state: Cloudflare.state(),
	},
	Effect.gen(function* () {
		const website = yield* Website;
		return {
			websiteUrl: website.url.as<string>(),
		};
	}),
);
