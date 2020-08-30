const util = require('util');
const exec = util.promisify(require('child_process').exec);
const spawn = require('child_process').spawnSync;
const prompts = require('prompts');

const runCommit = async () => {
  try {
    const { value } = await prompts({
      type: 'select',
      name: 'value',
      message: 'What kinf of commit are you doing?',
      choices: [
        { title: '1. Patch: Minimun changes', value: 'patch' },
        { title: '2. Minor: Feature finished', value: 'minor' },
        { title: '3. Major: Release finished', value: 'major' }
      ],
      initial: 0
    })

    const { stdout } = await exec('git log -1 --pretty=%B')
    await exec('git reset --soft HEAD~1')
    await exec(`npm version ${value} --no-git-tag-version`);
    await spawn('git', ['add', 'package.json'], { stdio: 'inherit' });
    await spawn('git', ['commit', '-m', stdout.trim()], { stdio: 'inherit' });
  } catch (err) {
    console.log(`Something went wrong:\n${err}`);
  }
};

runCommit();