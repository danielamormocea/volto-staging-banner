import { StagingBanner } from './StagingBanner';

const applyConfig = (config) => {
  const widgets = config.widgets;
  widgets = {
    ...widgets,
    id: {
      ...widgets.id,
      stagingBanner: StagingBanner
    }
  }
  return config;
};

export default applyConfig;
