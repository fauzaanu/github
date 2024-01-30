# github code explainer

This is a cloudflare worker that redirects the content of a github repo file you are reading to phind.com with a
prompt (asking to explain the code)

Before deploying make sure to replace 'fauzaanu' with your own domain name in both the `src/index.js`
and `github-phind-bar/content.js` files

> [!TIP]
> Now Includes `github-phind-bar` chromium extension to automate url editing
>
> Simply load the folder of `github-phind-bar` directory on a chromium browser and a top banner will appear on github
> pages


https://github.com/fauzaanu/github/assets/86226565/a43cce48-c0e9-44a6-b6a6-18ad32178c29



> [!TIP]
> For quick URL editing: `CTRL` + `L`
>
>Use `CTRL` + `ARROW_R` / `ARRW_L` to move quickly between the sections of URL

#### Normal Situation

1. You are reading code from a repo
2. You dont understand what the code does
3. You copy the code and ask a `LLM` to explain it to you
4. The model explains it to you

#### With this worker

1. You are reading code from a repo
2. You dont understand what the code does
3. Instead of copying the code you edit the url and insert a domain between the github and the .com (Your own domain)
4. The worker takes over, grabs content from the raw file and redirects you to phind.com with a prompt (asking to
	 explain the code)
5. The model explains it to you

> [!TIP]
> If the domain is on cloudflare no DNS setup would be needed (adding directly from the worker works)

Suggestions? PRs? Issues? Please do so!

