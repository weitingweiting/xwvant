
export type ModuleType = 'xw' | '';

export type LessModuleProps = {
  lessModule: ModuleType;
};

export const lessModuleProps = {
  lessModule:{
    type: String,
    default: '',
  }
};
