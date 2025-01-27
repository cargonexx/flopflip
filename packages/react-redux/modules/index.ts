const version = '__@FLOPFLIP/VERSION_OF_RELEASE__';

export {
  createFlopFlipEnhancer,
  STATE_SLICE as FLOPFLIP_STATE_SLICE,
} from './store';
export {
  createFlopflipReducer,
  flopflipReducer,
  selectFlags as selectFeatureFlags,
  selectFlag as selectFeatureFlag,
  UPDATE_STATUS,
  UPDATE_FLAGS,
} from './ducks';
export {
  ToggleFeature,
  injectFeatureToggle,
  injectFeatureToggles,
  branchOnFeatureToggle,
  ConfigureFlopFlip,
  ReconfigureFlopFlip,
} from './components';
export { useAdapterReconfiguration } from './hooks';

export { version };
