require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host:
    process.env.NODE_ENV === 'production'
      ? process.env.DB_PROD_HOST
      : process.env.DB_HOST,
  username:
    process.env.NODE_ENV === 'production'
      ? process.env.DB_PROD_USER
      : process.env.DB_USER,
  password:
    process.env.NODE_ENV === 'production'
      ? process.env.DB_PROD_PASS
      : process.env.DB_PASS,
  database:
    process.env.NODE_ENV === 'production'
      ? process.env.DB_PROD_NAME
      : process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    rejectUnauthorized: false,
  },
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production',
  },
};
