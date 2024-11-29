module.exports = {
  apps: [
    {
      name: "portfolio-preview",
      script: "npm",
      args: "run preview -- --host",
      env: {
        NODE_ENV: "production",
      },
    },
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
