module.exports = {
  apps: [
    {
      name: "portfolio-preview",
      script: "npm",
      args: "run preview",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
