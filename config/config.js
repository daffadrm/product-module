const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3002,
  db_name : "mpcomm",
  db_username : "postgres",
  db_password: "admin"
}

export default config
