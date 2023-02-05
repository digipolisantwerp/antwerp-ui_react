export interface ComponentGeneratorSchema {
  name: string;
  category: string;
}

export interface NormalizedSchema extends ComponentGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  blockName: string;
}
