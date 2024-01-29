export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		// add more if I missed some...
		const code_extension = [
			'.js',
			'.ts',
			'.py',
			'.java',
			'.c',
			'.cpp',
			'.php',
			'.go',
			'.rb',
			'.sh',
			'.pl',
			'.cs',
			'.swift',
			'.kt',
			'.scala',
			'.rs',
			'.vb',
			'.r',
			'.d',
			'.dart',
			'.groovy',
			'.lua',
			'.pascal',
			'.haskell',
			'.erlang',
			'.perl',
			'.elixir',
			'.clojure',
			'.rust',
			'.julia',
			'.lisp',
			'.fortran',
			'.prolog',
			'.ada',
			'.scheme',
			'.awk',
			'.tcl',
			'.verilog',
			'.vhdl',
			'.ocaml',
			'.f#',
			'.abap',
			'.bash',
			'.cobol',
		]

		if (!code_extension.some((ext) => url.pathname.endsWith(ext))) {
			const default_redirect = 'github.com/fauzaanu/github'
			return Response.redirect(`https://${default_redirect}`);
		}

		let githubUrl = url.toString().replace('.fauzaanu', '');
		githubUrl = githubUrl.replace('github.com', 'raw.githubusercontent.com');

		// github includes a /blob/ in the url while browsing code - but raw site does not
		if (githubUrl.includes('/blob/')) {
			githubUrl = githubUrl.replace('/blob/', '/');
		}

		const response = await fetch(githubUrl);
		const code = await response.text();

		const query = encodeURIComponent(`Please provide a comprehensive and enhanced explanation of the code. Include details about the purpose, functionality, and any specific techniques or concepts utilized in the code.: \n\n\`\`\`${code}\`\`\``);
		const redirectUrl = `https://www.phind.com/search?q=${query}`;

		return Response.redirect(redirectUrl);
	},
};
