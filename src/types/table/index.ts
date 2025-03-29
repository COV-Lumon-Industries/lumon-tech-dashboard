export type TableFacetProps = {
    key: string;
    label: string;
    options: TableFacetOptions[];
  };

  
export type ItemProps = {
    label: string;
    value: string;
  };
  
  export interface TableFacetOptions extends ItemProps {
    icon?: React.ComponentType<{ className?: string }>;
  }
  