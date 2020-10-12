interface Link {
  label: string;
  icon?: string;
  path: Array<string>;
}

type Section = Link;

export interface Menu extends Link {
  sections?: Array<Section>;
}
