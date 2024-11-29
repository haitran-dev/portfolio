module.exports = {
  apps: [
    {
      name: "portfolio-preview",
      script: "npm",
      args: "run preview",
      interpreter: "none",
      env_beta: {
        NODE_ENV: "beta",
        HOST: "0.0.0.0",
        PORT: "8081",
      },
      env_production: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: "8080",
      },
    },
  ],
};
