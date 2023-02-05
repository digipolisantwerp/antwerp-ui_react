import { formatFiles, generateFiles, getWorkspaceLayout, names, offsetFromRoot, Tree } from '@nrwl/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema, NormalizedSchema } from './schema';

function normalizeOptions(tree: Tree, options: ComponentGeneratorSchema): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.category ? `${names(options.category)}` : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const category = parseCategory(options.category);
  const blockName = category.name;
  const projectRoot = `${getWorkspaceLayout(tree).libsDir}/antwerp-ui/react-components/src/lib/${category.folder}`;
  updateIndex(tree, category.folder, name);
  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    blockName
  };
}

function addFiles(tree: Tree, options: NormalizedSchema) {
  const templateOptions = {
    ...options,
    ...names(options.name),
    offsetFromRoot: offsetFromRoot(options.projectRoot),
    template: '',
    blockName: options.blockName
  };
  generateFiles(tree, path.join(__dirname, 'files'), options.projectRoot, templateOptions);
}

const FOLDER_CONFIG = {
  b: 'base',
  base: 'base',
  a: 'atoms',
  atom: 'atoms',
  m: 'molecules',
  molecule: 'molecules',
  o: 'organisms',
  organism: 'organisms'
};

function parseCategory(fromInput: string) {
  const folder = FOLDER_CONFIG[fromInput] || fromInput;
  const name = toCapitalCase(folder);
  return {
    folder: folder,
    name
  };
}

function toCapitalCase(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function updateIndex(tree: Tree, block: string, component: string) {
  const indexPath = `${getWorkspaceLayout(tree).libsDir}/antwerp-ui/react-components/src/index.ts`;
  const contents = tree.read(indexPath)?.toString();
  const newContents = contents + `export * from './lib/${block}/${component}'`;
  tree.write(indexPath, newContents);
}

export default async function (tree: Tree, options: ComponentGeneratorSchema) {
  const normalizedOptions = normalizeOptions(tree, options);
  addFiles(tree, normalizedOptions);
  await formatFiles(tree);
}
