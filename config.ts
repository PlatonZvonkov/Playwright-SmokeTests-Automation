import  liveConfig  from 'appsettings.live.json';
import  showConfig  from 'appsettings.show.json';
import  devConfig  from 'appsettings.development.json';
import dotenv from "dotenv";
import { ConfigType } from 'interfaces/ConfigType';

dotenv.config();  // Load environment variables from .env file 
const environment = process.env.APP_ENV || 'dev';

let config: ConfigType;

if(environment === 'live'){
    config = liveConfig;
}else if(environment === 'show'){
    config = showConfig;
}else{
    config = devConfig;
}

export default config;
