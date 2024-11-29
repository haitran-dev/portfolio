module.exports = {
  apps: [
    {
      name: "portfolio-preview-beta",
      script: "npm",
      args: "run preview -- --host --port 8081",
      env: {
        NODE_ENV: "beta",
      },
    },
  ],
};
