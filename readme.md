# Github

This is a cloudflare worker that redirects the content of a github repo file you are reading to phind.com with a prompt (asking to explain the code)

### Why ??

#### Normal Situation
1. You are reading code from a repo
2. You dont understand what the code does
3. You copy the code and ask ChatGPT / Phind / LLM to explain it to you
4. The model explains it to you


#### With this worker

1. You are reading code from a repo
2. You dont understand what the code does
3. Instead of copying the code you click the urlbar and insert a domain between the github and the .com (Your own domain)
4. The worker takes over, grabs content from the raw file and redirects you to phind.com with a prompt (asking to explain the code)
5. The model explains it to you

## Deploying

1. install wrangler
2. clone repo
3. npm install
4. wrangler login
5. wrangler deploy
6. Now connect your domain to it so this actually makes sense to setup :)

Suggestions? PRs? Issues? Please do so!

