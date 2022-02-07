import simpleGit, {SimpleGit} from 'simple-git'

async function run(): Promise<void> {
    const git: SimpleGit = simpleGit()
    git.init()
}
  
run()