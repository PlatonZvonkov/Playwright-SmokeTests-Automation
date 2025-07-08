import liveConfig from 'appsettings.live.json';

// Infer the type from one of the config files
export type ConfigType = typeof liveConfig;