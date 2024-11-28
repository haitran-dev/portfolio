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
  ],
};
