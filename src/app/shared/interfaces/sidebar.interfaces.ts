interface Link {
  label: string;
  description?: string;
  icon?: string;
  path: Array<string>;
  classes?: string;
}

type Section = Link;

export interface Menu extends Link {
  sections?: Array<Section>;
}
