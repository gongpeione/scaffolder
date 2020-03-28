import commander from 'commander';
import pkg from '../package.json';

class Scaffolder {
  async run(args: any) {
    commander.version(pkg.version, '-V, --version').usage('<command> [options]');

    program
    .command('start <food>')
    .option('-f, --fruit <name>', 'Fruit to be added')
    .description('Start cooking food')
    .action(function(food, option) {
      console.log(`run start command`);
      console.log(`argument: ${food}`);
      console.log(`option: fruit = ${option.fruit}`);
    });

    commander.parse(args);
  }
}

export default new Scaffolder;
