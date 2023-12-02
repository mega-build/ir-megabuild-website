
require('dotenv').config();

const USER = process.env.SERVER_USER;
const PASSWORD = process.env.SERVER_PASSWORD;
const HOST = process.env.SERVER_HOST;
const REMOTE_ROOT = process.env.SERVER_REMOTE_ROOT;

const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: USER,
    // Password optional, prompted if none given
    password: PASSWORD,
    host: HOST,
    port: 22,
    localRoot: __dirname + "/",
    remoteRoot: REMOTE_ROOT,
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*.html","favicon.ico", "assets/**"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: [
        "node_modules/**",
        "node_modules/**/.*",
        ".git/**",
        '.env',
        '.gitignore'
    ],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    // use sftp or ftp
    sftp: true,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));
