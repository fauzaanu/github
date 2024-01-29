# github code explainer

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fauzaanu/github)


This is a cloudflare worker that redirects the content of a github repo file you are reading to phind.com with a prompt (asking to explain the code)


https://github.com/fauzaanu/github/assets/86226565/37f74aca-e95f-4935-a078-9ca86d03d252



#### Normal Situation
1. You are reading code from a repo
2. You dont understand what the code does
3. You copy the code and ask a `LLM` to explain it to you
4. The model explains it to you


#### With this worker

1. You are reading code from a repo
2. You dont understand what the code does
3. Instead of copying the code you edit the url and insert a domain between the github and the .com (Your own domain)
4. The worker takes over, grabs content from the raw file and redirects you to phind.com with a prompt (asking to explain the code)
5. The model explains it to you

> [!TIP]
> If the domain is on cloudflare no DNS setup would be needed (adding directly from the worker works)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fauzaanu/github)

Suggestions? PRs? Issues? Please do so!

