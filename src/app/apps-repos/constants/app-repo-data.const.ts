export enum ModuleState {
  stable = 'Stable',
  inProgress = 'In Progress',
  tbd = 'TBD'
}

interface ProjectModule {
  name: string;
  version: string;
  state: ModuleState;
  release?: string;
}

export interface AppRepoConfig {
  name: string;
  repoName: string;
  links: {
    repo: string;
    stableChannel: string;
    inProgressChannel: string;
  };
  status: Array<ProjectModule>;
}

export const AngularConfig: AppRepoConfig = {
  name: 'Angular',
  repoName: 'my-budget-angular',
  links: {
    repo: 'https://github.com/NicolasOmar/my-budget-angular',
    stableChannel: 'https://mybudget-angular.herokuapp.com/',
    inProgressChannel: 'https://mybudget-angular-dev.herokuapp.com/'
  },
  status: [
    {
      name: 'Users',
      version: '0.1.0',
      state: ModuleState.inProgress
    },
    {
      name: 'Movements',
      version: '0.2.0',
      state: ModuleState.tbd
    },
    {
      name: 'Saving accounts',
      version: '0.3.0',
      state: ModuleState.tbd
    },
    {
      name: 'Debt accounts',
      version: '0.4.0',
      state: ModuleState.tbd
    },
    {
      name: 'Earning accounts',
      version: '0.5.0',
      state: ModuleState.tbd
    },
    {
      name: 'Foreign currency accounts',
      version: '0.6.0',
      state: ModuleState.tbd
    },
    {
      name: 'Capital',
      version: '0.7.0',
      state: ModuleState.tbd
    },
    {
      name: 'Net Worth',
      version: '0.8.0',
      state: ModuleState.tbd
    },
    {
      name: 'Monthly closing',
      version: '0.9.0',
      state: ModuleState.tbd
    },
    {
      name: 'Monthly graphics',
      version: '1.0.0',
      state: ModuleState.tbd
    }
  ]
};

export const ReactConfig: AppRepoConfig = {
  name: 'React',
  repoName: 'my-budget-react',
  links: {
    repo: 'https://github.com/NicolasOmar/my-budget-react',
    stableChannel: 'https://mybudget-react.herokuapp.com/',
    inProgressChannel: 'https://mybudget-react-dev.herokuapp.com/'
  },
  status: [
    {
      name: 'Users',
      version: '0.1.0',
      state: ModuleState.inProgress
    },
    {
      name: 'Movements',
      version: '0.2.0',
      state: ModuleState.tbd
    },
    {
      name: 'Saving accounts',
      version: '0.3.0',
      state: ModuleState.tbd
    },
    {
      name: 'Debt accounts',
      version: '0.4.0',
      state: ModuleState.tbd
    },
    {
      name: 'Earning accounts',
      version: '0.5.0',
      state: ModuleState.tbd
    },
    {
      name: 'Foreign currency accounts',
      version: '0.6.0',
      state: ModuleState.tbd
    },
    {
      name: 'Capital',
      version: '0.7.0',
      state: ModuleState.tbd
    },
    {
      name: 'Net Worth',
      version: '0.8.0',
      state: ModuleState.tbd
    },
    {
      name: 'Monthly closing',
      version: '0.9.0',
      state: ModuleState.tbd
    },
    {
      name: 'Monthly graphics',
      version: '1.0.0',
      state: ModuleState.tbd
    }
  ]
};

export const NodeConfig: AppRepoConfig = {
  name: 'Node',
  repoName: 'my-budget-api',
  links: {
    repo: 'https://github.com/NicolasOmar/my-budget-api',
    stableChannel: 'https://mybudget-api.herokuapp.com/',
    inProgressChannel: 'https://mybudget-api-dev.herokuapp.com/'
  },
  status: [
    {
      name: 'Users',
      version: '0.1.0',
      state: ModuleState.inProgress
    },
    {
      name: 'Movements',
      version: '0.2.0',
      state: ModuleState.tbd
    },
    {
      name: 'Saving accounts',
      version: '0.3.0',
      state: ModuleState.tbd
    },
    {
      name: 'Debt accounts',
      version: '0.4.0',
      state: ModuleState.tbd
    },
    {
      name: 'Earning accounts',
      version: '0.5.0',
      state: ModuleState.tbd
    },
    {
      name: 'Foreign currency accounts',
      version: '0.6.0',
      state: ModuleState.tbd
    },
    {
      name: 'Capital',
      version: '0.7.0',
      state: ModuleState.tbd
    },
    {
      name: 'Net Worth',
      version: '0.8.0',
      state: ModuleState.tbd
    },
    {
      name: 'Monthly closing',
      version: '0.9.0',
      state: ModuleState.tbd
    },
    {
      name: 'Monthly graphics',
      version: '1.0.0',
      state: ModuleState.tbd
    }
  ]
};
