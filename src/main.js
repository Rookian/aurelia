import {ConventionalViewStrategy} from 'aurelia-framework';

/*ConventionalViewStrategy.convertModuleIdToViewUrl = function(moduleId){
  // is already the default convention
  console.log(`moduleId: ${moduleId}`)
  var id = (moduleId.endsWith('.js') || moduleId.endsWith('.ts')) ? moduleId.substring(0, moduleId.length - 3) : moduleId;
  console.log(`ModuleId: ${id}`);
  return id + '.html';
}
*/


export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css');

  aurelia.start().then(a => a.setRoot());
}