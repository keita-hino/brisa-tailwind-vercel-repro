# example-app
Steps to reproduce the behavior:

1. Add the Vercel adapter (Reference: https://brisa.build/building-your-application/deploying/vercel)
2. Add Tailwind CSS (Reference: https://brisa.build/building-your-application/integrations/tailwind-css)
3. Deploy the application to Vercel.
4. A runtime error occurs.

see the following error

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'lightningcss' imported from /var/task/build/brisa.config.js
    at packageResolve (node:internal/modules/esm/resolve:858:9)
    at moduleResolve (node:internal/modules/esm/resolve:931:18)
    at moduleResolveWithNodePath (node:internal/modules/esm/resolve:1173:14)
    at defaultResolve (node:internal/modules/esm/resolve:1216:79)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:542:12)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:510:25)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:239:38)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:96:40)
    at link (node:internal/modules/esm/module_job:95:36) {
  code: 'ERR_MODULE_NOT_FOUND'
}
Node.js process exited with exit status: 1. The logs above can help with debugging the issue.
```

<img width="1726" alt="スクリーンショット 2024-11-19 11 56 31" src="https://github.com/user-attachments/assets/6de236c4-29a9-49d8-ab21-e7bd1be18a77">
